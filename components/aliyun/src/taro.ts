/** @format */

import { merge, autobind } from '@MetaAdsManager/decorator';
import { guid } from '@MetaAdsManager/utils/src/guid';
import Taro from '@tarojs/taro';

@autobind
export default class AliYunTaro {
    private getOssToken: () => Promise<any>;

    constructor(config: { getOssToken: () => Promise<any> }) {
        this.getOssToken = config.getOssToken;
    }

    /**
     * 上传文件
     *
     * @param {string[]} fileList
     * @returns
     * @memberof AliYun
     */
    async upload(fileList: string[]) {
        if (fileList.length === 0) {
            return [];
        }

        const {
            data: { accessid, signature, policy, dir, host, cdnDomain }
        } = await this.getOssTokenMerge();

        return Promise.all(
            fileList.map(
                (file) =>
                    new Promise((resolve) => {
                        if (new RegExp('^' + host).test(file)) {
                            resolve(file);
                            return;
                        }

                        let formKey = '';
                        if (process.env.TARO_ENV === 'h5') {
                            formKey = `${dir}${guid()}`;
                        } else if (process.env.TARO_ENV === 'weapp') {
                            formKey = `${dir}${guid()}.${file.substr(file.lastIndexOf('.') + 1)}`;
                        }

                        const formData = {
                            // key: "${filename}",
                            signature,
                            OSSAccessKeyId: accessid,
                            policy,
                            key: formKey,
                            success_action_status: 200
                        };
                        Taro.uploadFile({
                            url: host,
                            filePath: file,
                            name: 'file',
                            formData,
                            success() {
                                resolve(`${cdnDomain}/${formData.key}`);
                            }
                        });
                    })
            )
        ) as Promise<string[]>;
    }

    @merge()
    private getOssTokenMerge() {
        return this.getOssToken();
    }
}
