import React from 'react';
import { Switch } from 'antd';
 
 
const TogglerSwitch = ({size,onChangeHandler,checkedIcon,unCheckedIcon}) => {
  return (
    <Switch
      size={size }
      onChange={onChangeHandler}
      checkedChildren={checkedIcon}
      unCheckedChildren={unCheckedIcon}
      defaultChecked
      className='bg-[#001529]'
    />
  )
}

export default TogglerSwitch
