/** @format */

import {
    ProFormCascader,
    ProFormDependency,
    ProFormDigit,
    ProFormRadio,
    ProFormSelect
} from '@ant-design/pro-form';
import { BasicModuleProductDTO, BasicModuleProductGood } from '@MetaAdsManager-modules/decoration-data';
import { EProductDataType } from '@MetaAdsManager-modules/decoration-data/src/enums/EProductDataType';
import { getResizeUrl } from '@MetaAdsManager/aliyun';
import { api } from '@MetaAdsManager/backend-api/src/request';
import convertToTree from '@MetaAdsManager/utils/src/tree/convertToTree';
import { Form, List, message } from 'antd';
import { FC, memo, useEffect, useState } from 'react';
import AddImageButton from '../../../commModuleComponents/addImageButton';
import DragFormItem from '../../../commModuleComponents/dragFormItem';
import CommunityModal from '../../../commModuleComponents/communityModal';
import TabContainer from '../../../commModuleComponents/tabContainer';
import { IModuleEditFormProps, blockWrapperCol } from '../../../moduleEditForm/const';
import { useModuleEditForm } from '../../../moduleEditForm/useModuleEditForm';
import ComponentStyle from '../../../styleSetting/componentStyle';
import SettingItem from '../settingItem';

interface ISettingComponetProps extends IModuleEditFormProps<BasicModuleProductDTO> {}

const { List: FormList, Item: FormItem } = Form;

const Component: FC<ISettingComponetProps> = (props) => {
    const [visible, setVisible] = useState(false);
    const { form, formProps } = useModuleEditForm(props);

    const [data, setData] = useState(props.data.data || []);
    const [i, setI] = useState(0);
    const onAdd = () => {
        if (data.length >= 8) {
            return message.warn('最多添加8个');
        }
        setData(data.concat({ tab: '', list: [], key: String(Date.now()) }));
    };
    const onRemove = (i) => {
        data.splice(i, 1);
        setData([...data]);
    };
    const onChangeTab = (i, value) => {
        data[i].tab = value;
        setData([...data]);
    };
    const onMove = ({ source, destination }) => {
        const cur = source.index;
        const tar = destination.index;
        data[cur] = [data[tar], (data[tar] = data[cur])][0];
        setData([...data]);
    };
    const onShow = (i) => {
        const { tab } = data[i];
        if (!tab) {
            return message.warn('请先选择分类');
        }
        setVisible(true);
        setI(i);
    };
    useEffect(() => {
        props.onChange({ data });
    }, [data]);

    return (
        <Form {...formProps}>
            <TabContainer
                renderContent={
                    <SettingItem
                        data={data}
                        onAdd={onAdd}
                        onRemove={onRemove}
                        onChange={onChangeTab}
                        onMove={onMove}
                        onShow={onShow}
                        columns={(j) => [
                            { title: '序号', valueType: 'index', align: 'center' },
                            { title: '文章标题', dataIndex: 'title', align: 'center', width: 250 },
                            {
                                title: '操作',
                                align: 'center',
                                render: ($1, $2, i) => (
                                    <a
                                        onClick={() => {
                                            data[j].list.splice(i, 1);
                                            data[j].list = [...data[j].list];
                                            setData([...data]);
                                        }}
                                    >
                                        删除
                                    </a>
                                )
                            }
                        ]}
                    />
                }
                renderStyle={<ComponentStyle />}
            />
            <CommunityModal
                data={props.data}
                visible={visible}
                index={i}
                onCancel={() => setVisible(false)}
                onOk={(res = []) => {
                    if (res.length > 50) {
                        return message.warn('最多选择50个');
                    }
                    data[i].list = res;
                    setData([...data]);
                    setVisible(false);
                }}
            />
        </Form>
    );
};

Component.displayName = 'SettingComponet';

const SettingComponet = memo(Component);
export default SettingComponet;

function GoodCard(props: { value?: BasicModuleProductGood }) {
    const {
        value = {
            coverImg: '',
            title: ''
        }
    } = props || {};
    return (
        <div style={{ position: 'relative' }}>
            <img
                src={value.coverImg + getResizeUrl({ width: 40, height: 40 })}
                style={{ width: 40, height: 40, position: 'absolute', top: 0, left: 0 }}
            />
            <div style={{ paddingLeft: 48 }}>
                <div>{value.title}</div>
            </div>
        </div>
    );
}
