import React, { Component } from 'react';
import { Row, Col } from 'antd';
import data from '../data.json'
import Cart from './cart';

export default class CartList extends Component {
    render() {
        return (
            <Row justify="space-around">
                {data.map((product, index) => {
                    return (
                        <Col span={4} key={index}>
                            <Cart product={product} />
                        </Col>
                    )
                })}
            </Row>
        )
    }
}
