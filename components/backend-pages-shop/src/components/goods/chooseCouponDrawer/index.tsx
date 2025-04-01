/** @format */

import ProTable from '@ant-design/pro-table';
import { AdminGoodsGetParams, GoodsVO } from '@MetaAdsManager/backend-api/src/request/data-contracts';
import AlbumColumn from '@MetaAdsManager/backend-pro/src/components/table/albumColumn';
import { Button, Drawer, DrawerProps, Space, Typography } from 'antd';
import { MMProColumns } from 'MMProType';
import { FC, memo, useEffect, useState } from 'react';
import useGoodClassifyColumn from '../../../hooks/good/useGoodClassifyColumn';
import useGoodRequest from '../../../hooks/good/useGoodRequest';
import { RowSelectionType } from 'antd/lib/table/interface';
import mmCurrenty from '@MetaAdsManager/utils/src/mmCurrency';
import useProTableRequest from '@MetaAdsManager/backend-pro/src/hooks/useProTableRequest';
import { api } from '@MetaAdsManager/backend-api';
import {
    getClassifyValues,
    setClassifyValues
} from '../../../pages/goodsManagement/goodsClassify/const';
import { getCouponUseCondition, getCouponUseExpiredCondition } from '../../../utils/coupon';
import { convertEnum } from '@MetaAdsManager/utils/src/enumUtil'

/** @format */

export enum ECouponStatus {
    /** 已作废 */
    Void = 0,
    /** 正常 */
    Valid = 3,
}

export const MCouponStatus = {
    [ECouponStatus.Valid]: '正常',
    [ECouponStatus.Void]: '已作废'
};

/**
 * 优惠劵类型
 * 0 抵扣 1 折扣
 */
enum ECouponType {
    /** 抵扣/满减 */
    Deduction = 0,
    /** 满折满折 */
    Discount = 1,
    /** 赠品券 */
    Present = 2,
    /** 兑换券 */
    Exchange = 3,
    /** 包邮券 */
    FreeShipping = 4
  }
  
const [MCouponType, OCouponType] = convertEnum([
    [ECouponType.Deduction, '满减'],
    [ECouponType.Discount, '满折'],
    [ECouponType.Present, '赠品券'],
    [ECouponType.Exchange, '兑换券'],
    [ECouponType.FreeShipping, '免邮券']
])
/**
 * 销售方式
 */
enum ESaleTypeEnum {
    Cash = 1, // 纯现金
    Score = 2, // 纯积分
    All = 3 // 现金 + 积分
}
export interface IChooseGoodsDrawerProps extends DrawerProps {
    value: string[];
    /** 表格复选框的类型 checkbox | radio */
    rowSelectionType?: RowSelectionType;
    /** 活动类型 */
    activityType?: any;
    /** 额外请求参数 */
    requestParams?(): { [P in keyof AdminGoodsGetParams]: any };

    onOk(value: string[]): void;
}

/**
 *
 * FIXME: 此文件是复制的backend-shop/src/components/goods中的文件。文件内容
 * 基本一致，后期可直接使用此组件替换
 * @param props
 * @returns
 */
const Component: FC<IChooseGoodsDrawerProps> = (props) => {
    const {
        value,
        visible,
        requestParams,
        onClose,
        activityType,
        onOk,
        rowSelectionType = 'checkbox',
        ...drawerProps
    } = props;

    const [classifyColumn] = useGoodClassifyColumn();
    const { request, dataSource: dataSourceRef } = useProTableRequest(
        async (params: any) => api['/admin/mallCouponTemplate/queryList_GET'](params),
        {
            paramsFormat(params) {
                let { classifys, ...rest } = params;
                //   处理商品分类
                if (classifys?.length) {
                    const classify = getClassifyValues(classifys);
                    rest = { ...rest, ...classify };
                }
                /** 拼团/秒杀活动 */
                if (activityType && (activityType === 'timeBuy' || activityType === 'group')) {
                    rest.saleType = 1;
                }
                return rest;
            },
            dataFormat: (data) => {
                return data.map((it) => {
                    return {
                        ...it,
                        classifys: setClassifyValues(it)
                    };
                });
            }
        }
    );
    const [selectedRowKeys, setSelectedRowKeys] = useState<string[]>([]);

    const [chooseColumns] = useState<MMProColumns<GoodsVO>[]>([
        { title: '优惠券编号', dataIndex: 'templateNo' },
        { title: '优惠券名称', dataIndex: 'name' },
        {
            title: '优惠券类型',
            dataIndex: 'couponType',
            valueType: 'select',
            valueEnum: MCouponType,
            hideInSearch: true
        },
        {
            title: '使用条件',
            dataIndex: 'demandPrice',
            render: (_, record) => getCouponUseCondition(record),
            hideInSearch: true
        },
        {
            title: '使用有效期',
            dataIndex: 'termStart',
            hideInSearch: true,
            render: (_, record) => getCouponUseExpiredCondition(record)
        },

        { title: '已发放(张)', dataIndex: 'sendNum', hideInSearch: true },
        { title: '剩余(张)', dataIndex: 'stock', hideInSearch: true },
        {
            title: '状态',
            dataIndex: 'status',
            valueEnum: MCouponStatus,
            render: (_, { status }) => (status ? '正常' : '已作废')
        }
    ]);

    useEffect(() => {
        setSelectedRowKeys(visible ? [...value] : []);
    }, [visible]);

    const handleOk = () => {
        // const values = [...new Set(value.concat(selectedRowKeys))]
        onOk(selectedRowKeys);
    };

    return (
        <Drawer
            title='选择优惠券'
            width='80%'
            visible={visible}
            closable={false}
            maskClosable={false}
            footer={
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Space>
                        <Button onClick={(ev: any) => onClose?.(ev)}>取消</Button>
                        <Button type='primary' onClick={handleOk}>
                            确定
                        </Button>
                    </Space>
                </div>
            }
            {...drawerProps}
        >
            <ProTable
                columns={chooseColumns}
                rowKey='templateNo'
                toolBarRender={false}
                tableAlertRender={false}
                tableAlertOptionRender={false}
                size='small'
                rowSelection={{
                    selectedRowKeys,
                    type: rowSelectionType,
                    onChange: (keys: any[]) => {
                        // 去除当前列的keys
                        const currentRowIds = dataSourceRef.current!.map((item) => item.templateNo);
                        const otherKeys = value.filter(
                            (item) => currentRowIds.indexOf(item) === -1
                        );
                        // 合并所有的列
                        setSelectedRowKeys([...new Set([...keys, ...otherKeys])]);
                    }
                }}
                request={(params, ...args) => {
                    return request({ ...params, ...requestParams?.() }, ...args);
                }}
            />
        </Drawer>
    );
};

Component.displayName = 'ChooseCouponDrawer';

const ChooseCouponDrawer = memo(Component);
export default ChooseCouponDrawer;
