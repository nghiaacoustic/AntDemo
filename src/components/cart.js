import React, { Component } from 'react';
import { Card, Button } from 'antd';
import { connect } from 'react-redux'

class Cart extends Component {
    render() {
        const { product } = this.props;
        const { Meta } = Card;
        console.log(product)
        return (
            <Card
                hoverable
                style={{ width: 320 }}
                cover={<img alt={product.img} src={product.img} />}
            >
                <Meta title={product.name} description={product.price} />
                <Button onClick={() => { this.props.addCart(product) }}>Add cart</Button>
            </Card>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addCart: (product) => {
            const cartItem = {
                id: product.id,
                name: product.name,
                price: product.price,
                quantity: 1,
                img: product.img,
                totalPrice: null
            }
            console.log(cartItem)
            dispatch({
                type: 'ADD_CART',
                cartItem,
            })
        }
    }
}

export default connect(null, mapDispatchToProps)(Cart)