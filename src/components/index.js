import { Typography } from 'antd'
import React, { Component } from 'react'
import CartList from './cartList'
import ModalComponent from './modal'

export default class CartComponent extends Component {
    render() {
        const { Text, Title } = Typography
        return (
            <>
                <Text strong type="secondary">
                    <Title level={1} align="middle">
                        Cart Demo
                    </Title>
                </Text>
                <ModalComponent />
                <CartList />
            </>
        )
    }
}
