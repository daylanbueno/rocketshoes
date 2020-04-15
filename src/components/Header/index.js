import React from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';

import { Container, Card } from './styles';

import logo from '../../assets/images/logo.svg';

export default function Header() {
    return (
        <Container>
            <Link to="/">
                <img src={logo} alt="logoRocket" />
            </Link>

            <Card to="/card">
                <div>
                    <strong>Meu carrinho</strong>
                    <span>3 itens</span>
                </div>
                <MdShoppingBasket size={36} color="#fff" />
            </Card>
        </Container>
    );
}
