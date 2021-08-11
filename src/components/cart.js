import React, { Component } from 'react';
import { Card, Button, Tooltip } from 'antd';
import { connect } from 'react-redux';
import { FiShoppingCart } from 'react-icons/fi'

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
                className='card-meta-detail card'
            >
                <Meta title={product.name} description={product.price} style={{ marginBottom: '5px' }} />
                <Tooltip title="Add cart">
                    <Button shape='round' type='ghost' onClick={() => { this.props.addCart(product) }}><FiShoppingCart style={{ margin: '5px 10px' }} /></Button>
                </Tooltip>
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