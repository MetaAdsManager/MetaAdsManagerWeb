/** @format */

import ProTable from '@ant-design/pro-table';
import { BasicModuleProductGood } from '@MetaAdsManager-modules/decoration-data';
import { api } from '@MetaAdsManager/backend-api';
import { InformationResponseDTO } from '@MetaAdsManager/backend-api/src/request/data-contracts';
import useProTableRequest from '@MetaAdsManager/backend-pro/src/hooks/useProTableRequest';
import { MMProColumns } from 'MMProType';
import dayjs from 'dayjs';
import { FC, memo, useEffect, useMemo, useState } from 'react';
import useLatest from '../../newsSelectModal/useLatest';

export interface IProps {
    value?: BasicModuleProductGood[];
    onChange?(data: BasicModuleProductGood[]): void;
}

const Component: FC<IProps> = (props) => {
    const { value = [], onChange, classifyPid, visible } = props;
    const selectedRowKeys = useMemo(() => value.map((item) => item.id), [value]);

    const { request, actionRef, dataSource } = useProTableRequest(
        useLatest((params) =>
            api['/circle/v1/console/posts/page_GET']({
                ...params,
                classifyPid
            })
        ),
        {}
    );
    // const [classifyData, setClassifyData] = useState<any[]>([]); /** 咨询分类数据 */
    useEffect(() => {
        visible && actionRef.current?.reload();
    }, [props]);

    const [columns] = useState<MMProColumns<InformationResponseDTO>[]>(() => {
        return [
            { title: '文章编号', dataIndex: 'postsNo', fieldProps: { maxLength: 50 } },
            { title: '文章标题', dataIndex: 'title', fieldProps: { maxLength: 50 } }
        ] as MMProColumns<InformationResponseDTO>[];
    });

    return (
        <ProTable
            manualRequest={false}
            actionRef={actionRef}
            rowKey='id'
            columns={columns}
            request={request}
            rowSelection={{
                selectedRowKeys,
                onChange(_ks, rows) {
                    const currentRowIds = dataSource.current!.map((item) => item.id!);
                    const otherKeys = selectedRowKeys.filter(
                        (key) => currentRowIds.indexOf(key) === -1
                    );
                    const otherValues = value.filter((item) => otherKeys.indexOf(item.id) !== -1);

                    const cValues = otherValues.concat(
                        rows.map((item) => {
                            return {
                                id: item.id!,
                                ...item
                            };
                        })
                    );
                    onChange?.(cValues);
                }
            }}
            size='small'
            toolBarRender={false}
        />
    );
};

Component.displayName = 'NewsList';

const NewsList = memo(Component);
export default NewsList;
