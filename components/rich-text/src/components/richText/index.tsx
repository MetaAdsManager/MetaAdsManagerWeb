/** @format */

import { DomEditor, IDomEditor, IEditorConfig, IToolbarConfig } from '@wangeditor/editor';
import { Editor, Toolbar } from '@wangeditor/editor-for-react';
import '@wangeditor/editor/dist/css/style.css'; // 引入 css
import { FC, memo, useEffect, useMemo, useRef, useState } from 'react';
import audioConfig from '../audio';
import PreviewModal from '../previewModal';
import { IMMRichTextProps, InsertFnType, defaultUploadImage, defaultUploadVideo } from './const';
import styles from './index.module.less';
import Material from '../../../../backend-pages/src/components/material';

audioConfig.register();

const Component: FC<IMMRichTextProps> = (props) => {
    const { value, plain = true, readonly = false, fileUpload, onChange } = props;

    const [editor, setEditor] = useState<IDomEditor | null>(null); // 存储 editor 实例
    const [show, setShow] = useState(false);
    const [materialVisible, setMaterialVisible] = useState(false);
    const materialFn = useRef<Function>();
    const valueRef = useRef(value);
    valueRef.current = value;

    const toolbarConfig: Partial<IToolbarConfig> = useMemo(() => {
        const excludeKeys = ['fontFamily', 'insertVideo', 'uploadVideo', 'group-video'];
        if (plain) {
            excludeKeys.push(
                ...[
                    'blockquote',
                    'group-more-style',
                    'todo',
                    'insertLink',
                    'insertImage',
                    'bulletedList',
                    'numberedList',
                    'insertTable',
                    'codeBlock'
                ]
            );
        }
        if (plain === 'minimalism') {
            excludeKeys.push(
                'headerSelect',
                '|',
                'emotion',
                'group-image',
                'group-video',
                'group-indent',
                'divider',
                'fullScreen'
            );
        }
        excludeKeys.push(...(props.toolbarConfig?.excludeKeys ?? []));

        return {
            ...props.toolbarConfig,
            excludeKeys: [...new Set(excludeKeys)]
        };
    }, [props.toolbarConfig, plain]);

    const editorConfig: Partial<IEditorConfig> = {
        placeholder: '请输入内容...',
        autoFocus: false,
        MENU_CONF: {
            // 字号
            fontSize: {
                fontSizeList: [
                    '10px',
                    '12px',
                    '14px',
                    '16px',
                    '18px',
                    '20px',
                    '22px',
                    '24px',
                    '26px',
                    '32px',
                    '36px',
                    '40px',
                    '50px'
                ]
            },
            /**
             * 图片上传
             */
            uploadImage: {
                ...defaultUploadImage,
                /**
                 * 自定义上传
                 *
                 * 自己实现上传，并可设置图片 url alt href
                 * @param file 即选中的文件
                 * @param insertFn 插入函数
                 */
                // async customUpload(file: File, insertFn: InsertFnType) {
                //   const [url] = await upload([file])
                //   insertFn(url, url)
                // },
                // 自定义选择图片
                customBrowseAndUpload(insertFn: InsertFnType) {
                    // TS 语法
                    materialFn.current = insertFn;
                    setMaterialVisible(true);
                }
            },
            // 上传视频的配置
            uploadVideo: {
                ...defaultUploadVideo,
                /**
                 * 自定义上传
                 * @param file 即选中的文件
                 * @param insertFn 插入函数
                 */
                async customUpload(file: File, insertFn: InsertFnType) {
                    const [url] = await upload([file]);
                    insertFn(url);
                }
            }
        }
    };

    // 及时销毁 editor ，重要！
    useEffect(() => {
        if (editor) {
            const toolbar = DomEditor.getToolbar(editor);
            const toolbarConfig = toolbar?.getConfig();
            // console.log(toolbar, toolbarConfig, '11')
        }
        return () => {
            if (editor == null) return;
            editor.destroy();
            setEditor(null);
        };
    }, [editor]);

    function upload(files: File[]) {
        if (!fileUpload) {
            const msg = 'warn: MMRichText 涉及上传文件，但 props 未传入 fileUpload';
            // eslint-disable-next-line no-console
            console.warn(msg);
            return Promise.reject(new Error(msg));
        }

        return fileUpload(files);
    }

    function handlePreview() {
        setShow(true);
    }

    function handleClose() {
        setShow(false);
    }

    function handleInsertAudio() {
        const audioSrc =
            'http://wmeimob-frame.oss-cn-shanghai.aliyuncs.com/juduo_temp/b2da53c3-eee9-ce9b-669a-bd8450ea206c.mp4';
        const node = {
            type: 'paragraph',
            children: [
                {
                    type: 'audio',
                    src: audioSrc,
                    children: [{ text: '' }]
                }
            ]
        };
        editor!.restoreSelection();
        editor?.insertNode(node);
    }

    function renderReadonlyContent() {
        return (
            <div
                className={styles.readonly}
                dangerouslySetInnerHTML={{ __html: props.value || '' }}
            />
        );
    }

    return (
        <div className={styles.richTextStyle}>
            {plain !== 'minimalism' && (
                <div className={styles.customButtonGroup}>
                    <div className={styles.previewButton} onClick={handlePreview}>
                        预览
                    </div>
                    {/* <div className={styles.previewButton} onClick={handleInsertAudio}>
            音频
          </div> */}
                </div>
            )}

            {readonly ? (
                renderReadonlyContent()
            ) : (
                <>
                    <Toolbar
                        editor={editor}
                        defaultConfig={toolbarConfig}
                        mode='default'
                        style={
                            plain !== 'minimalism'
                                ? { borderBottom: '1px solid #ccc', borderTop: '1px solid #ccc' }
                                : undefined
                        }
                    />
                    <Editor
                        value={value}
                        defaultConfig={editorConfig}
                        onCreated={setEditor}
                        onChange={(editor) => {
                            let text = editor.getHtml();
                            if (
                                text === '<p><br></p>' ||
                                text === `<p style="text-align: left;"><br></p>`
                            ) {
                                text = '';
                            }
                            // FIXED: 修复回调函数取不到最新value导致的判断错误问题
                            if (valueRef.current !== text) {
                                onChange?.(text);
                            }
                        }}
                        mode='default'
                        style={{ height: '500px', overflowY: 'hidden' }}
                    />
                </>
            )}

            <Material
                visible={materialVisible}
                max={20}
                onOk={(value) => {
                    if (value.length > 0) {
                        value.forEach((item) => {
                            materialFn.current!(item, item);
                        });
                    }

                    materialFn.current = undefined;
                    setMaterialVisible(false);
                }}
                onCancel={() => setMaterialVisible(false)}
            />

            <PreviewModal show={show} htmlString={props.value} onClose={handleClose} />
        </div>
    );
};

Component.displayName = 'RichText';

const MMRichText = memo(Component);
export default MMRichText;
