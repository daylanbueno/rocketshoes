import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 50px 0;
    a {
        transition: 0.1s;
        &:hover {
            opacity: 0.5;
        }
    }
`;

export const Card = styled(Link)`
    display: flex;
    justify-content: center;
    text-decoration: none;
    transition: opacity 0.1s;

    &:hover {
        opacity: 0.5;
    }

    div {
        text-align: right;
        margin-right: 10px;

        strong {
            display: block;
            color: #fff;
        }
        span {
            font-size: 12px;
            color: #999;
        }
    }
`;
