export function addToCartRequest(id) {
    return {
        type: '@CART/ADD_REQUEST',
        id,
    };
}

export function addToCartSucess(product) {
    return {
        type: '@CART/ADD_SUCESS',
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
