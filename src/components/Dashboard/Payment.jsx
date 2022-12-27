import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchData } from "./../../axios";
import DashboardMenu from "./../shared/Dashboard/DashboardMenu";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import Loading from "../Loading/Loading";

const stripePromise = loadStripe(
  "pk_test_51MJLHfAHK4c2AaUvd8VpsGYW3KXrkSgIW8yYzUv3TeKXhWkhwecOGFpXXunlDIkJYiTK0d8Bk5RiKk1QvoNzj6Ri007s8c3fBN"
);

const Payment = () => {
  const { id } = useParams();
  const { data: { data } = {}, isLoading } = useQuery(["booking"], () =>
    fetchData.get(`/bookings/${id}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-10">
        <DashboardMenu />
        <h1 className="text-xl lg:text-3xl font-semibold">Payment</h1>
      </div>
      <div className="bg-white rounded-xl">
        <div className="overflow-x-auto p-4 lg:p-10">
          <h3 className="text-md">
            Payment for <strong>{data?.treatment}</strong>
          </h3>
          <p>
            We will see you on <strong>{data?.date}</strong> at{" "}
            <strong>{data?.slot}</strong>
          </p>
          <p>
            Consultation fee: <strong>${data?.fee}.00</strong>
          </p>
          <div className="card bg-base-100 shadow-xl mt-10">
            <div className="card-body">
              <Elements stripe={stripePromise}>
                <CheckoutForm data={data} />
              </Elements>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
