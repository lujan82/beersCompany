import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import MainLayout from "../components/layouts/mainLayout";
import StripeCheckoutForm from "../components/stripe/stripeCheckoutForm";

const Checkout = () => {

 // const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
 const stripePromise = loadStripe('pk_test_51JJalJLXMXnonUZ019wkVxroBYLGALpeFfnPC5Bt5kkW4Jd1y8oDDLWfKLT0Q4SuY2QHIhPmojRekr7woLfbOkst00FUGg1Ups');

  return (
    <MainLayout className="container-checkout">
      <Elements stripe={stripePromise}>
        <StripeCheckoutForm/>
      </Elements>
    </MainLayout>
  );
};

export default Checkout;
