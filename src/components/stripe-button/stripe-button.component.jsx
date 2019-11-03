import React from "react";
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price})=>{
    
    const priceForStripe = price*100;
    const publicStripeKey = "pk_test_tKZW0sfu8xHR6oMTHFogrwOg00txVIyAGl";
    const onToken = (token)=>{
        console.log(token);
        alert("Payment Successfull");
    }
    return(
        <StripeCheckout 
        name="CRWN Clothing ltd" // the pop-in header title
        description={`Your total amount is ${price}`}
        image="https://svgshare.com/i/Fsn.svg" 
        label="Pay Now" 
        panelLabel="Pay Now" 
        amount={priceForStripe} // cents
        shippingAddress
        billingAddress={false}
        token={onToken}
        stripeKey={publicStripeKey}
        />
    )
}

export default StripeCheckoutButton;