import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import { fetchData } from "../../axios";
import { useEffect } from "react";

const CheckoutForm = ({ data }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [sucess, setSuccess] = useState("");
  const [transactionId, setTransactionId] = useState("");

  const { _id, fee, patientName, patientEmail, paid } = data;

  useEffect(() => {
    fetchData
      .post(
        "/payment/create-payment-indent",
        {
          price: parseInt(fee),
        },
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
      .then(({ data: { clientSecret } = {} }) => {
        setClientSecret(clientSecret);
      });
  }, [fee]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (elements == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    setCardError(error?.message || "");

    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: patientName,
            email: patientEmail,
          },
        },
      });
    if (error) {
      setCardError(intentError?.message);
    } else {
      setCardError("");
      setSuccess("Congrats! your payment is completed.");
      setTransactionId(paymentIntent.id);
      fetchData
        .put(
          `/bookings/${_id}`,
          {
            appointment: _id,
            transactionId: paymentIntent.id,
          },
          {
            headers: {
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        )
        .then((res) => {});
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      {cardError && <p className="text-sm text-error mt-4">{cardError}</p>}
      {sucess && (
        <div>
          <p className="text-sm text-success mt-4">{sucess}</p>
          <p className="text-sm text-success mt-4">
            Your transaction id is: {transactionId}
          </p>
        </div>
      )}
      <button
        className="mt-5 btn btn-sm"
        type="submit"
        disabled={!stripe || !elements || !clientSecret || paid || sucess}
      >
        Pay
      </button>
    </form>
  );
};

export default CheckoutForm;
