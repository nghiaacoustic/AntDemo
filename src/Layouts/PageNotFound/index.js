import React from 'react';
import { Typography, Button } from 'antd';
import {Link} from 'react-router-dom'

const { Title } = Typography;

function PageNotFound() {
    return (
        <div style={{textAlign:'center', marginTop:'15%'}}>
            <Title>Oops!</Title>
            <Title level={2}>404 Not Found</Title>
            <Title level={4}>Sorry, an error has occured, Requested page not found!</Title>
            <Button><Link to='/'>Back To Homepage</Link></Button>
        </div>
    )
}

export default PageNotFound
