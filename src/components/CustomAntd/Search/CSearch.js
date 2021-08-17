import React from 'react';
import { Input, Space } from 'antd';
import styled from 'styled-components'


const { Search } = Input;

const StyledSearch = styled(Search)`
 .ant-input,
 .ant-btn-primary{
   background-color: #e2e8f0;
   color:#718096
 }
 .ant-input{

 }
 .ant-btn-primary,
 .ant-btn-primary:hover,
 .ant-btn-primary:focus{

 }

`

const CSearch = () => {

  const onSearch = value => console.log(value);

  return (
    <StyledSearch
      placeholder="Discover news, articles and more..."
      onSearch={onSearch}
      enterButton
      size='large' />
  )
}

export default CSearch
