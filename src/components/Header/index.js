import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';

import { Container, Card } from './styles';

import logo from '../../assets/images/logo.svg';

function Header({ cartSize }) {
    return (
        <Container>
            <Link to="/">
                <img src={logo} alt="logoRocket" />
            </Link>

            <Card to="/card">
                <div>
                    <strong>Meu carrinho</strong>
                    <span>{cartSize} itens</span>
                </div>
                <MdShoppingBasket size={36} color="#fff" />
            </Card>
        </Container>
    );
}

export default connect((state) => ({
    cartSize: state.cart.length,
}))(Header);
