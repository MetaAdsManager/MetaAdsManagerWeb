import getLabelByValue from '@MetaAdsManager/utils/src/tree/getLabelByValue'
import { ProRenderFieldPropsType } from '@ant-design/pro-provider'
import { Cascader } from 'antd'
import defaultOptions from '@MetaAdsManager/backend-pro/assets/json/district.json'

const cityValueType: ProRenderFieldPropsType = {
  renderFormItem: (_text, props) => <Cascader options={defaultOptions} {...props.fieldProps} />,

  render: (text) => {
    return <span>{getLabelByValue(text, defaultOptions).join(',')}</span>
  }
}

export default cityValueType
