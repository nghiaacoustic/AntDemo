// import React from 'react';
// import Button from 'antd';
// import Checkbox from 'antd';
// import styled from 'styled-components';
// import Typography from 'antd//lib/typography';
// import 'antd/dist/antd.css';

// const styles = {
//   display: 'flex',
//   justifyContent: 'space-evenly',
//   alignItems: 'center',
//   margin: 0,
//   padding: '25px 100px',
// }

// const StyledButton = styled(Button)`
//   color: palevioletred;
//   font-weight: normal;
//   :focus {
//     color: palevioletred;
//     border-color: palevioletred;
//   }
//   :hover {
//     color: palevioletred;
//     border-color: palevioletred;
//   }
//   &.ant-btn-clicked:after {
//     content: '';
//     position: absolute;
//     top: -1px;
//     left: -1px;
//     bottom: -1px;
//     right: -1px;
//     border-radius: inherit;
//     border: 0 solid palevioletred;
//     opacity: 0.4;
//     -webkit-animation: buttonEffect 0.4s;
//     animation: buttonEffect 0.4s;
//     display: block;
//   }
// `;

// const StyledCheckbox = styled(Checkbox)`
//   .ant-checkbox-input:focus + .ant-checkbox-inner,
//   .ant-checkbox-wrapper:hover .ant-checkbox-inner,
//   .ant-checkbox:hover .ant-checkbox-inner {
//     border-color: palevioletred;
//   }
//   .ant-checkbox-checked .ant-checkbox-inner,
//   .ant-checkbox-indeterminate .ant-checkbox-inner {
//     background-color: palevioletred;
//     border-color: palevioletred;
//   }
//   .ant-checkbox-checked:after {
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     border-radius: 2px;
//     border: 1px solid palevioletred;
//     content: '';
//     -webkit-animation: antCheckboxEffect 0.36s ease-in-out;
//     animation: antCheckboxEffect 0.36s ease-in-out;
//     -webkit-animation-fill-mode: both;
//     animation-fill-mode: both;
//     visibility: hidden;
//   }
// `;

// const CustomAntd = () => {
//   return (
//     <div style={styles}>
//       <div>
//         <Typography>This is AntDesign Components</Typography>
//         <Button>Button</Button>
//         <Checkbox>Checkbox</Checkbox>
//       </div>
//       <div>
//         <Typography>This is AntDesign with Styled Component</Typography>
//         <StyledButton>Custom Button</StyledButton>
//         <StyledCheckbox>Custom Checkbox</StyledCheckbox>
//       </div>
//     </div>
//   )
// }

// export default CustomAntd

import React, { Component } from 'react';
import './styles.css'

import { Tabs, Switch } from 'antd';
import CSearch from '../../components/CustomAntd/Search/CSearch';
import { StyledButton } from '../../components/CustomAntd/Button/CButton';
// import CButton from '../../components/CustomAntd/Button/CButton';

export default class CustomAntd extends Component {

  renderHtml = () => {
    return (
      <nav className='nav'>
        <div className='nav_logo'>
          <img src='https://flexiblog-beauty.netlify.app/static/e1abc27a01b56d93f5fcdff62c84fdd7/edeef/logo.webp' />
        </div>
        <div className='nav_search'>
          <CSearch />
        </div>
        <div className='nav_items'>
          <StyledButton>Button Styled</StyledButton>
        </div>
        <div className='nav_switch-theme'>
          <Switch checkedChildren="Dark" unCheckedChildren="Light" defaultChecked />
        </div>
      </nav>
    )
  }

  render() {
    return (
      <div>
        {this.renderHtml()}
      </div>
    )
  }
}
