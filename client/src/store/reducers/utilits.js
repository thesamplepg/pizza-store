function getCartFromLS () {
    const cart = window.localStorage.getItem('ok-pizza-cart');

    if(cart !== null) {
        return JSON.parse(cart);
    } else {
        return [];
    }
}

module.exports = { getCartFromLS };