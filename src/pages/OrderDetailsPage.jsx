import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const OrderDetailsPage = () => {
  const { id } = useParams();
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    const mockOrderDetails = {
      _id: id,
      createdAt: new Date(),
      isPaid: true,
      isDelivered: false,
      paymentMethod: "PayPal",
      shippingMode: "Standard",
      shippingAddress: {
        city: "Mohali",
        country: "India",
      },
      orderItems: [
        {
          productId: 1,
          name: "Shirt",
          price: 10.99,
          quantity: 1,
          image: "https://picsum.photos/500/500?random=1",
        },
        {
          productId: 2,
          name: "T-Shirt",
          price: 109,
          quantity: 4,
          image: "https://picsum.photos/500/500?random=2",
        },
        {
          productId: 3,
          name: "Jacket",
          price: 199,
          quantity: 1,
          image: "https://picsum.photos/500/500?random=3",
        },
      ],
    };
    setOrderDetails(mockOrderDetails);
  }, [id]);

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Order Details</h2>
      {!orderDetails ? (
        <p className="">No order detail found!</p>
      ) : (
        <div className="p-4 sm:p-6 rounded-lg border">
          <div className="flex flex-col sm:flex-row justify-between mb-8">
            <div className="">
              <h3 className="text-lg md:text-xl font-semibold">
                Order ID: #{orderDetails._id}
              </h3>
              <p className="text-gray-600">
                {new Date(orderDetails.createdAt).toLocaleDateString()}
              </p>
            </div>
            <div className="flex flex-col items-start sm:items-end mt-4 sm:mt-0">
              <span
                className={`${
                  !orderDetails.isPaid
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                } px-2 py-1 rounded-full text-xs sm:text-sm font-medium`}
              >
                {orderDetails.isPaid ? "Paid" : "Pending"}
              </span>
              <span
                className={`${
                  orderDetails.isDelivered
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                } px-2 py-1 rounded-full text-xs sm:text-sm font-medium`}
              >
                {orderDetails.isDelivered ? "Delivered" : "Pending"}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
            <div className="">
              <h4 className="text-lg font-semibold mb-2">Payment Info</h4>
              <p className="">Payment Method: {orderDetails.paymentMethod}</p>
              <p className="">Status: {orderDetails.isPaid}</p>
            </div>
            <div className="">
              <h4 className="text-lg font-semibold mb-2">Shipping Info</h4>
              <p className="">Shipping Method: {orderDetails.shippingMethod}</p>
              <p className="">
                Address:{" "}
                {`  ${orderDetails.shippingAddress.city}{" "},
                ${orderDetails.shippingAddress.country}`}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderDetailsPage;
