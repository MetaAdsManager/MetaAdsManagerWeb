/** @format */

import { ModalForm, ModalFormProps, ProFormTextArea } from '@ant-design/pro-form';
import { Form } from 'antd';
import { forwardRef, memo } from 'react';
import PreviewList from '../../../../components/previewList';
import { IGoodsComment } from '../../const';

export interface IEditModalProps extends ModalFormProps {
    detail?: IGoodsComment;
}

const textareaProps: any = { showCount: true, maxLength: 300, rows: 4 };

const Component = forwardRef<any, IEditModalProps>((props, ref) => {
    const { detail, flag, ...modalProps } = props;

    return (
        <ModalForm
            {...modalProps}
            layout='horizontal'
            title='回复用户'
            labelCol={{ span: 3 }}
            wrapperCol={{ span: 20 }}
        >
            <Form.Item label='用户评价'>
                <div>{detail?.content}</div>
                {!!detail?.commentImgs.length && (
                    <PreviewList size={80} list={detail?.commentImgs} />
                )}
                <div>{detail?.gmtCreated}</div>
            </Form.Item>

            {(flag || detail?.replyAt) && (
                <Form.Item label='回复内容'>
                    <ProFormTextArea
                        noStyle
                        name='replyContent'
                        readonly={!flag}
                        rules={[{ required: true }]}
                        fieldProps={textareaProps}
                    />
                    <div>{detail?.replyAt}</div>
                </Form.Item>
            )}

            {detail?.isAdd && (
                <>
                    <Form.Item label='用户追评'>
                        <div>{detail?.addContent}</div>
                        {!!detail?.addCommentImgs.length && (
                            <PreviewList size={80} list={detail?.addCommentImgs} />
                        )}
                        <div>{detail?.addAt}</div>
                    </Form.Item>
                    {(!flag || detail?.addReplyAt) && (
                        <Form.Item label='回复内容'>
                            <ProFormTextArea
                                noStyle
                                name='addReplyContent'
                                rules={[{ required: true }]}
                                fieldProps={textareaProps}
                                readonly={flag}
                            />
                            <div>{detail?.addReplyAt}</div>
                        </Form.Item>
                    )}
                </>
            )}
        </ModalForm>
    );
});

Component.displayName = 'EditModal';

const EditModal = memo(Component);
export default EditModal;
