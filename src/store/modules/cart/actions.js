export function addToCart(product) {
    return {
        type: '@CART/ADD',
        product,
    };
}

export function removeFromCart(id) {
    return {
        type: '@CART/REMOVE',
        id,
    };
}

export function updateAmount(id, amount) {
    return {
        type: '@CART/UPDATE_AMOUNT',
        id,
        amount,
    };
}
