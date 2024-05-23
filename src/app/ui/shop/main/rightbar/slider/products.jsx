import { gql } from '@apollo/client';

export const GET_PRODUCTS_BY_PRICE = gql`
    query GetProductsByPrice($min_price: Float!, $max_price: Float!) {
        products(min_price: $min_price, max_price: $max_price) {
            id
            name
            unit_price
        }
    }
`;