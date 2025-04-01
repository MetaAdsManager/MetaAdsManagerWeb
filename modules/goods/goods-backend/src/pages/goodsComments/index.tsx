/** @format */

import { PageContainer } from '@ant-design/pro-layout';
import ProTable, { ProColumns } from '@ant-design/pro-table';
import { MSourceEvaluate } from '@MetaAdsManager-modules/goods-data/src/enums/ESourceEvaluate';
import { api, CommentsImportItem } from '@MetaAdsManager/backend-api';
import OperationsColumns from '@MetaAdsManager/backend-pro/src/components/table/operationsColumns';
import StatusSwitchColumn from '@MetaAdsManager/backend-pro/src/components/table/statusSwitchColumn';
import useProTableForm from '@MetaAdsManager/backend-pro/src/hooks/useProTableForm';
import useProTableRequest from '@MetaAdsManager/backend-pro/src/hooks/useProTableRequest';
import { Button, message, Rate, Upload, Modal } from 'antd';
import Excel from 'exceljs';
import { FC, memo, useRef, useState } from 'react';
import DetailModal from './components/detailModal';
import EditModal from './components/editModal';
import AuditModal from './components/auditModal';
import { IGoodsComment } from './const';
import PreviewList from '../../components/previewList';
import { AuditStatusDto } from '@MetaAdsManager/backend-api/src/request/data-contracts';
import { ModalForm, ProFormInstance, ProFormTextArea } from '@ant-design/pro-form';
import requestInstance from '@MetaAdsManager/backend-api/src/request/instance';

interface IGoodsCommentsProps {
    service: ReturnType<typeof useService>;

    /** 点击下载模板 */
    onTemplateDownloadClick(): void;
}

const Component: FC<IGoodsCommentsProps> = (props) => {
    const { service, flag } = props;
    // 导入评价
    const { handleBeforeUpload } = useImportComments({
        onUploadSuccess: () => service.actionRef.current?.reload()
    });

    return (
        <PageContainer>
            <ProTable
                actionRef={service.actionRef}
                rowKey='id'
                rowSelection={{
                    type: 'checkbox',
                    onChange: service.setIds,
                    selectedRowKeys: service.ids
                    // getCheckboxProps: ({ auditStatus, addAuditStatus }) => ({
                    //     disabled: auditStatus !== 0 && addAuditStatus !== 0
                    // })
                }}
                columns={service.columns}
                request={service.request}
                scroll={{ x: 2000 }}
                search={{
                    defaultCollapsed: false,
                    labelWidth: 'auto',
                    optionRender: (searchConfig, formProps, dom) => [
                        // <Button
                        //     type='primary'
                        //     key='export'
                        //     loading={service.exportLoading}
                        //     onClick={() => service.exportTable()}
                        // >
                        //     导出
                        // </Button>,
                        ...dom
                    ]
                }}
                toolbar={{
                    actions: [
                        <Upload
                            key='upload'
                            showUploadList={false}
                            beforeUpload={handleBeforeUpload}
                        >
                            <Button type='primary'>导入评价</Button>
                        </Upload>,
                        <Button key='download' onClick={props.onTemplateDownloadClick}>
                            下载导入模板
                        </Button>,
                        // <Button
                        //     type='primary'
                        //     key='export'
                        //     loading={service.exportLoading}
                        //     onClick={() => service.exportTable()}
                        // >
                        //     导出评价
                        // </Button>,
                        <Button type='primary' onClick={service.onAllAuditing}>
                            批量审核
                        </Button>,
                        <Button type='primary' onClick={service.onAllShow}>
                            批量显示
                        </Button>,
                        <Button type='primary' onClick={service.onAllHidden}>
                            批量隐藏
                        </Button>,
                        <Button onClick={service.onAllRemove}>批量删除</Button>
                    ]
                }}
            />

            {/* 详情 */}
            <DetailModal
                detail={service.detailModal.editData}
                modalProps={service.detailModal.modalProps}
                onFinish={service.handleDetailModalFinish}
            />

            {/* 回复 */}
            <EditModal
                detail={service.editModalForm.editData}
                {...service.editModalForm.modalProps}
                onFinish={service.handleFormFinish}
                flag={service.flag}
            />

            {/* 审核 */}
            <AuditModal
                {...service.auditModalForm.modalProps}
                onSubmit={service.handleAuditModalFinish}
            />
        </PageContainer>
    );
};

Component.displayName = 'PageGoodsComments';

const PageGoodsComments = memo(Component);
export default PageGoodsComments;

interface IUseServiceProps {
    /** 接口url */
    apiUrl: string;
}

export function useService(props: IUseServiceProps) {
    const { apiUrl } = props;

    const auditStatusEnum = {
        0: '待审核',
        1: '已通过',
        2: '已驳回'
    };

    const [columns] = useState<ProColumns<IGoodsComment>[]>([
        { title: '头像', dataIndex: 'headImg', hideInSearch: true, valueType: 'avatar', width: 60 },
        {
            title: '评论用户',
            dataIndex: 'nickName',
            width: 120
        },
        { title: '手机号', dataIndex: 'mobile', width: 120 },
        // { title: '描述相符', dataIndex: 'goodsGrade', valueType: 'rate', hideInSearch: true },
        // { title: '物流速度', dataIndex: 'logisticsGrade', valueType: 'rate', hideInSearch: true },
        // { title: '服务态度', dataIndex: 'serviceGrade', valueType: 'rate', hideInSearch: true },
        {
            title: '评星',
            dataIndex: 'goodsGrade',
            width: 230,
            hideInSearch: true,
            render: (dom, record) => (
                <div>
                    <div>
                        <span className='ant-rate-text'>描述相符</span>
                        <Rate value={record.goodsGrade} disabled />
                    </div>
                    <div>
                        <span className='ant-rate-text'>物流速度</span>
                        <Rate value={record.logisticsGrade} disabled />
                    </div>
                    <div>
                        <span className='ant-rate-text'>服务态度</span>
                        <Rate value={record.serviceGrade} disabled />
                    </div>
                </div>
            )
        },
        { title: '评价内容', dataIndex: 'content', hideInSearch: true },
        {
            title: '评价图片',
            dataIndex: 'imgs',
            hideInSearch: true,
            renderText: (text) => <PreviewList list={text ? text.split(',') : []} size={48} />
        },

        {
            title: '首评状态',
            dataIndex: 'auditStatus',
            valueType: 'select',
            hideInSearch: true,
            valueEnum: auditStatusEnum,
            width: 120
        },
        {
            title: '追评状态',
            dataIndex: 'addAuditStatus',
            valueType: 'select',
            hideInSearch: true,
            valueEnum: auditStatusEnum,
            width: 120
        },
        {
            title: '评价状态',
            dataIndex: 'auditStatus',
            valueType: 'select',
            hideInTable: true,
            valueEnum: auditStatusEnum,
            width: 120
        },

        { title: '商品编号', dataIndex: 'goodsNo', hideInTable: true },
        { title: '商品名称', dataIndex: 'goodsName', hideInSearch: true },
        { title: '订单编号', dataIndex: 'orderNo' },
        {
            title: '评价来源',
            dataIndex: 'fromType',
            valueType: 'select',
            valueEnum: MSourceEvaluate,
            width: 120
        },
        {
            title: '评价时间',
            dataIndex: 'gmtCreated',
            valueType: 'dateRange',
            render: (_v, record) => record.gmtCreated
        },

        {
            title: '显示状态',
            dataIndex: 'show',
            fixed: 'right',
            width: 100,
            valueType: 'select',
            valueEnum: {
                1: '显示',
                0: '隐藏'
            },
            render: (_v, record) => {
                return (
                    <StatusSwitchColumn
                        disabled={record.auditStatus === 0 || record.auditStatus === 2}
                        checked={record.show}
                        checkedChildren='显示'
                        unCheckedChildren='隐藏'
                        onSwitch={async () => {
                            const { show, id } = record;
                            await api['/admin/comments/show_PUT']([{ id, status: !show }]);
                            actionRef.current?.reload();
                        }}
                    />
                );
            }
        },
        {
            title: '操作',
            dataIndex: 'option',
            valueType: 'option',
            fixed: 'right',
            width: 150,
            render: (_, record) => {
                // 有追评但没回复
                const hadAddCommentButNotReply = record.isAdd && !record.addReplyAt;

                return (
                    <OperationsColumns
                        operations={[
                            {
                                id: 'audit',
                                show: record.auditStatus === 0,
                                text: <a onClick={() => onAuditClick(record, false)}>审核首评</a>
                            },
                            {
                                id: 'reply',
                                show: record.auditStatus === 1 && !record.replyContent, //  用户首次评价，以及追评后显示 ,只要有一次没回复就显示,
                                text: <a onClick={() => onReplyClick(record, true)}>回复首评</a>
                            },
                            {
                                id: 'audit2',
                                show: record.addAuditStatus === 0,
                                text: <a onClick={() => onAuditClick(record, true)}>审核追评</a>
                            },
                            {
                                id: 'reply',
                                show: record.addAuditStatus === 1 && !record.addReplyContent, //  用户首次评价，以及追评后显示 ,只要有一次没回复就显示,
                                text: <a onClick={() => onReplyClick(record, false)}>回复追评</a>
                            },
                            {
                                id: 'detail',
                                onClick: () => onDetailClick(record)
                            },
                            {
                                id: 'del',
                                onClick: async () => {
                                    await api['/admin/comments/{id}_DELETE'](record.id!);
                                    actionRef.current?.reload();
                                }
                            }
                        ]}
                    />
                );
            }
        }
    ]);

    const { request, exportLoading, exportTable, actionRef } = useProTableRequest<IGoodsComment>(
        (params) => api['/admin/comments_GET'](params) as any,
        {
            exportUrl: `${apiUrl}/admin/comments/export`,
            paramsFormat(params) {
                const { gmtCreated, ...rest } = params;
                if (gmtCreated) {
                    const [beginTime, endTime] = gmtCreated;
                    rest.beginTime = beginTime + ' 00:00:00';
                    rest.endTime = endTime + ' 23:59:59';
                }

                return rest;
            },
            dataFormat: (data) =>
                data.map((it) => {
                    return {
                        ...it,
                        commentImgs: it.imgs ? it.imgs?.split(',') : [],
                        addCommentImgs: it.addImgs ? it.addImgs?.split(',') : []
                    };
                })
        }
    );

    const editModalForm = useProTableForm<IGoodsComment>();

    const detailModal = useProTableForm<IGoodsComment>();

    const auditModalForm = useProTableForm({
        title: () => '评论审核'
    });

    const [flag, setFlag] = useState(true);
    const onReplyClick = (record: IGoodsComment, bool: boolean) => {
        setFlag(bool);
        editModalForm.setEditData(record);
        editModalForm.setVisible(true);
        editModalForm.modalProps.form.setFieldsValue({
            replyContent: record.replyContent,
            addReplyContent: record.addReplyContent
        });
    };

    const onDetailClick = (record: IGoodsComment) => {
        detailModal.setEditData(record);
        detailModal.setVisible(true);
    };

    const onAuditClick = (record: IGoodsComment, isReply: boolean) => {
        auditModalForm.setEditData({ ...record, is_audit_reply: isReply });
        auditModalForm.setVisible(true);
        setType('single');
    };

    const handleFormFinish = async (data: Partial<IGoodsComment>) => {
        try {
            flag
                ? await api['/admin/comments/reply_PUT']({
                      commentsId: editModalForm.editData!.id,
                      replyContent: data.replyContent
                  })
                : await api['/admin/comments/replyAdd_PUT']({
                      commentsId: editModalForm.editData!.id,
                      replyContent: data.addReplyContent || data.replyContent
                  });

            message.success('保存成功');
            editModalForm.setVisible(false);
            actionRef.current?.reload();
        } catch (error) {
            message.error('保存失败');
        }
    };

    function handleDetailModalFinish() {
        detailModal.setVisible(false);
        return Promise.resolve();
    }

    async function handleAuditModalFinish(t: string, reason?: string) {
        if (!reason && t === 'reject') {
            return message.error('驳回内容不能为空');
        }
        const params: AuditStatusDto = {
            id: auditModalForm.editData!.id,
            auditStatus: t === 'reject' ? 2 : 1,
            reason
        };
        if (type === 'mult') {
            return handleAllFormFinish(reason, t === 'reject' ? 2 : 1);
        }
        if (auditModalForm.editData!.is_audit_reply) {
            await api['/admin/comments/add/audit_PUT'](params);
        } else {
            await api['/admin/comments/audit_PUT'](params);
        }

        message.success('操作成功');
        auditModalForm.setVisible(false);
        actionRef.current?.reload();
    }

    const [ids, setIds] = useState([]);
    const [type, setType] = useState('single');
    const onAllRemove = () => {
        if (!ids.length) {
            return message.error('删除的内容不能为空');
        }
        Modal.confirm({
            title: '批量删除',
            content: '确认删除选中的记录？',
            onOk: async () => {
                await requestInstance({
                    url: '/admin/comments/batchDelete',
                    method: 'POST',
                    data: { idList: ids }
                });
                message.success('操作成功');
                setIds([]);
                actionRef.current?.reload();
            }
        });
    };
    const onAllHidden = () => {
        if (!ids.length) {
            return message.error('隐藏的内容不能为空');
        }
        Modal.confirm({
            title: '批量隐藏',
            content: '确认隐藏选中的记录？',
            onOk: async () => {
                await api['/admin/comments/show_PUT'](ids.map((v) => {
                    return {
                        id:v,
                        status:false
                    }
                }));
                message.success('操作成功');
                setIds([]);
                actionRef.current?.reload();
            }
        });
    };
    const onAllShow = () => {
        if (!ids.length) {
            return message.error('显示的内容不能为空');
        }
        Modal.confirm({
            title: '批量显示',
            content: '确认显示选中的记录？',
            onOk: async () => {
                await api['/admin/comments/show_PUT'](ids.map((v) => {
                    return {
                        id:v,
                        status:true
                    }
                }));
                message.success('操作成功');
                setIds([]);
                actionRef.current?.reload();
            }
        });
    };
    const onAllAuditing = () => {
        if (!ids.length) {
            return message.error('审核的内容不能为空');
        }
        auditModalForm.setEditData({});
        auditModalForm.setVisible(true);
        setType('mult');
    };
    const handleAllFormFinish = async (reason, auditStatus) => {
        await requestInstance({
            url: '/admin/comments/batchAudit',
            method: 'PUT',
            data: {
                auditStatus,
                idList: ids,
                reason
            }
        });
        message.success('操作成功');
        auditModalForm.setVisible(false);
        setIds([]);
        actionRef.current?.reload();
    };
    return {
        actionRef,
        columns,
        request,
        exportLoading,
        exportTable,
        editModalForm,
        detailModal,
        auditModalForm,
        handleFormFinish,
        handleDetailModalFinish,
        handleAuditModalFinish,
        ids,
        setIds,
        onAllRemove,
        onAllHidden,
        onAllShow,
        onAllAuditing,
        flag
    };
}

/**
 * 导入评价
 * @returns
 */
function useImportComments(option: { onUploadSuccess: () => void }) {
    const workbook = useRef(new Excel.Workbook());

    const handleBeforeUpload = (file) => {
        const reader = new FileReader();
        reader.onload = async () => {
            const wb = await workbook.current.xlsx.load(reader.result! as any);
            const worksheet = wb.getWorksheet(1);

            const keys = ['nickName', 'goodsNo', 'goodsGrade', 'content'];
            const items: CommentsImportItem[] = [];

            worksheet.eachRow((row, rowNumber) => {
                if (rowNumber > 1) {
                    const item: CommentsImportItem = {};
                    row.eachCell((cell, cellNumber) => {
                        if (cellNumber <= keys.length) {
                            item[keys[cellNumber - 1]] = cell.value;
                        }
                    });
                    items.push(item);
                }
            });

            await api['/admin/comments/import_POST']({ items });
            message.success('新增成功');
            option.onUploadSuccess();
        };

        reader.readAsArrayBuffer(file);
        return false;
    };

    return {
        handleBeforeUpload
    };
}
