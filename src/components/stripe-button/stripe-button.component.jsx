import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishablekey = 'pk_test_51HebU4AkSr6E4I2eY0N08C4hJikLw9rZLhHYSHK0PUI0rI2L6yZBKuhJdrxW3niZyNQOaxSBbxwbbzhoFaafq8Sk002OaaCRzm';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }
    
    return(
        <StripeCheckout
           label='Pay Now'
           name='Floof Store'
           billingAddress
           shippingAddress
           image='https://i.ibb.co/19D5pgw/Floof-Store.png'
           description={`Your total is $${price}`}
           amount={priceForStripe}
           panelLabel='Pay Now'
           token={onToken}
           stripeKey={publishablekey}
        />
    );
};

export default StripeCheckoutButton;