/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toast } from 'react-toastify';
import {
    MdAddCircleOutline,
    MdRemoveCircleOutline,
    MdDelete,
} from 'react-icons/md';
import { Container, ProductTable, Total } from './styles';

import { formatPrice } from '../../util/format';
import * as CartActions from '../../store/modules/cart/actions';
import api from '../../services/api';

function Card({ cart, removeFromCart, updateAmount, total }) {
    const handleRemoveProduct = (product) => {
        removeFromCart(product.id);
    };

    const increment = async (product) => {
        const { amount } = product;
        const response = await api.get(`/stock/${product.id}`);
        const stock = response.data.amount;
        if (stock > amount) {
            updateAmount(product.id, product.amount + 1);
        } else {
            toast.error('Não tem produtos disponvíes');
        }
    };

    const decrement = (product) => {
        updateAmount(product.id, product.amount - 1);
    };

    return (
        <Container>
            <ProductTable>
                <thead>
                    <tr>
                        <th />
                        <th>PRODUTO</th>
                        <th>QTD</th>
                        <th>SUBTOTAL</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    {cart.map((product) => (
                        <tr key={product.id}>
                            <td>
                                <img src={product.image} alt={product.title} />
                            </td>
                            <td>
                                <strong>{product.title}</strong>
                                <span>{product.priceFormatted}</span>
                            </td>
                            <td>
                                <div>
                                    <button
                                        type="button"
                                        onClick={() => decrement(product)}
                                    >
                                        <MdRemoveCircleOutline
                                            size={20}
                                            color="#7159c1"
                                        />
                                    </button>
                                    <input
                                        type="number"
                                        readOnly
                                        value={product.amount}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => increment(product)}
                                    >
                                        <MdAddCircleOutline
                                            size={20}
                                            color="#7159c1"
                                        />
                                    </button>
                                </div>
                            </td>
                            <td>
                                <strong>{product.subtotal}</strong>
                            </td>
                            <td>
                                <button
                                    type="button"
                                    onClick={() => handleRemoveProduct(product)}
                                >
                                    <MdDelete size={20} color="#7159c1" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </ProductTable>

            <footer>
                <button type="button">Finalizar pedito</button>
                <Total>
                    <span>TOTAL</span>
                    <strong>{total}</strong>
                </Total>
            </footer>
        </Container>
    );
}

const mapStateToProps = (state) => ({
    cart: state.cart.map((product) => ({
        ...product,
        subtotal: formatPrice(product.price * product.amount),
    })),

    total: formatPrice(
        state.cart.reduce((total, product) => {
            return total + product.price * product.amount;
        }, 0)
    ),
});

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(CartActions, dispatch);

Card.propTypes = {
    cart: PropTypes.array.isRequired,
    removeFromCart: PropTypes.func.isRequired,
    updateAmount: PropTypes.func.isRequired,
    total: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
