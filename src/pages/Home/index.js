/* eslint-disable react/require-default-props */
/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MdAddShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';

import { formatPrice } from '../../util/format';
import api from '../../services/api';

import * as CartActions from '../../store/modules/cart/actions';

class Home extends Component {
    state = {
        products: [],
    };

    async componentDidMount() {
        const response = await api.get('/products');
        const data = response.data.map((product) => ({
            ...product,
            priceFormatted: formatPrice(product.price),
        }));
        this.setState({ products: data });
    }

    handleAddProduct = async (product) => {
        const { addToCart, amount } = this.props;
        const response = await api.get(`/stock/${product.id}`);
        const stock = response.data.amount;
        const quantityCart = amount[product.id] || 0;
        if (stock > quantityCart) {
            addToCart(product);
        } else {
            toast.error('Produto indisponível');
        }
    };

    render() {
        const { products } = this.state;
        const { amount } = this.props;
        return (
            <ProductList>
                {products.map((product) => (
                    <li key={product.id}>
                        <img src={product.image} alt={product.title} />
                        <strong>{product.title}</strong>
                        <span>{product.priceFormatted}</span>
                        <button
                            type="button"
                            onClick={() => this.handleAddProduct(product)}
                        >
                            <div>
                                <MdAddShoppingCart size={16} color="#fff" />{' '}
                                {amount[product.id] || 0}
                            </div>
                            <span>ADICIONAR AO CARRINHO</span>
                        </button>
                    </li>
                ))}
            </ProductList>
        );
    }
}

const mapStateToProps = (state) => ({
    amount: state.cart.reduce((amount, product) => {
        amount[product.id] = product.amount;
        return amount;
    }, {}),
});

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(CartActions, dispatch);

Home.propTypes = {
    addToCart: PropTypes.func.isRequired,
    amount: PropTypes.shape({}),
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
