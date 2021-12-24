import { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import Router from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { CARD_OPTIONS } from "../../data/cardOptionsStyle";
import { resetCart } from "../../redux/shop/shopAction";


// TODO: hacer bbdd pedido al concluir el pago
const StripeCheckoutForm = () => {

  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)
  const user = useSelector(state => state.user)
  
  const [isProcessing, setProcessingTo] = useState(false);
  const [checkoutError, setCheckoutError] = useState();

  const stripe = useStripe();
  const elements = useElements();

  /**
   * The cardElements onChange prop can be used to
   * add a handler for setting any errors.
   * @param event
   */
  const handleCardDetailsChange = event => {
      event.error ? setCheckoutError(event.error.message) : setCheckoutError();
  };

  const handleFormSubmit = async ev => {
    ev.preventDefault();


    /**
     * We disable the form, until the stripe.js has finished
     * loading.
     */
    if (!stripe || !elements) {
      return;
    }

    const billingDetails = {
      name: 'Carlos test',
      email: 'test@test.com',
      address: {
        city: 'sin city',
        line1: 'Address 1',
        state: 'my state',
        postal_code: '1234'
      }
    };

    setProcessingTo(true);

    const cardElement = elements.getElement("card");

    try {
      const data  = await fetch("/api/stripePaymentIntent", {
        method: "POST",
        body: cart.total
      });

      const clientSecret = await data.text()

      const paymentMethodReq = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
        billing_details: billingDetails
      });

      if (paymentMethodReq.error) {
        setCheckoutError(paymentMethodReq.error.message);
        setProcessingTo(false);
        return;
      }
    
      const {paymentIntent, error} = await stripe.confirmCardPayment(clientSecret, {
        payment_method: paymentMethodReq.paymentMethod.id
      });

      if (paymentIntent.status === "succeeded") {
        setProcessingTo(false);
        dispatch(resetCart())
        return Router.push("/thank-you")
      }

      if (error) {
        setCheckoutError(error.message);
        setProcessingTo(false);
        return;
      }
      setProcessingTo(false);
      
    } catch (err) {
      setCheckoutError(err.message);
      setProcessingTo(false);
    }
  };


  return (
    <div className="form-container">
      {user.token === "" ? <h2 className="title">Login first for pay</h2>
        :
        cart.total === 0 ? <h2 className="title">your cart is empty</h2>
        :
        <form onSubmit={handleFormSubmit} className="form">
          <div className="form__pay">
            <h2 className="form__title"> Payment with card</h2>
            <div className="form__card-info">
              <h6 className="form__card-info-title">Card Information</h6>
              <CardElement
                options={CARD_OPTIONS}
                onChange={handleCardDetailsChange}
                />
              <div className="form__card-try">try: 4242424242424242 12/24 999</div>
            </div>

            {checkoutError && <div className="form__info-req">{checkoutError}</div>}

            <button className="button-pay" disabled={isProcessing || !stripe}>
              {isProcessing ? "Processing..." : `Pay ${cart.total} $`}
            </button>
            <div className="form__transaction-safe"> Your transaction is secured with SSL encryption</div>
          </div>
        </form>
      }
    </div>
  );
};

export default StripeCheckoutForm;