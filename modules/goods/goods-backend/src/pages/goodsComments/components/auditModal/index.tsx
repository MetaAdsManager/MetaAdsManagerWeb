/** @format */

import { ModalForm, ModalFormProps, ProFormTextArea } from '@ant-design/pro-form';
import { useSuperLock } from '@MetaAdsManager/utils/src/hooks/useSuperLock';
import { Button, Form, Modal, message } from 'antd';
import { FC, memo } from 'react';
interface IProps extends ModalFormProps {
    onSubmit?: (type: string, reason?: string) => Promise<void>;
}

const AuditModal: FC<IProps> = memo((props) => {
    const { form, onSubmit, ...modalProps } = props;
    const [handleReject] = useSuperLock(async () => {
        const reason = form?.getFieldValue('reason');
        await onSubmit?.('reject', reason);
    });

    const [handlePass] = useSuperLock(async () => {
        const reason = form?.getFieldValue('reason');
        await onSubmit?.('pass', reason);
    });

    return (
        <ModalForm
            title='评论审核'
            form={form}
            {...modalProps}
            submitter={{
                render: (props) => {
                    return [
                        <Button
                            key='reject'
                            danger
                            onClick={() => {
                                handleReject();
                            }}
                        >
                            驳回
                        </Button>,
                        <Button
                            key='pass'
                            type='primary'
                            onClick={() => {
                                handlePass();
                            }}
                        >
                            通过
                        </Button>
                    ];
                }
            }}
        >
            <ProFormTextArea
                name='reason'
                label='审核说明'
                fieldProps={{ maxLength: 100, rows: 5, showCount: true }}
            />
        </ModalForm>
    );
});

export default AuditModal;
