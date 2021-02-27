import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    // const total = cart.reduce((total, prd) => total + prd.price, 0)
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
    }

    //for shipping value count
    let shipping = 0;
    if (total > 35) {
        shipping = 0;
    }
    else if (total > 15) {
        shipping = 4.99;
    }
    else if (total > 0) {
        shipping = 12.99;
    }
    //

    //tax count
    // const tax = Math.round(total / 10);
    const tax = (total / 10).toFixed(2); //for show .2 decimal value but value is string so need convert to number
    const grandTotal = (total + shipping + Number(tax)).toFixed(2);

    //multi decimal fixed by function
    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }

    
    return (
        <div>
            <h3>Order Summary</h3>
            <p>Items ordered: {cart.length}</p>
            <p><small>Items: {formatNumber(total)}</small></p>
            <p><small>Shipping and Handling: {shipping}</small></p>
            <p><small>Total before tax: {formatNumber(total + shipping)}</small></p>
            <p><small>Estimated tax: {tax}</small></p>
            <p>Order Total: {grandTotal}</p>
        </div>
    );
};

export default Cart;