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

  return <div>OrderDetailsPage</div>;
};

export default OrderDetailsPage;
