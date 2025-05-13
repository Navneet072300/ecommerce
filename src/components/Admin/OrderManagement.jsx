const orders = [
  {
    _id: 123,
    user: {
      name: "John Doe",
    },
    totalPrice: 100,
    status: "pending",
  },
  {
    _id: 123,
    user: {
      name: "John Doe",
    },
    totalPrice: 100,
    status: "pending",
  },
  {
    _id: 123,
    user: {
      name: "John Doe",
    },
    totalPrice: 100,
    status: "pending",
  },
  {
    _id: 123,
    user: {
      name: "John Doe",
    },
    totalPrice: 100,
    status: "pending",
  },
];

const OrderManagement = () => {
  const handleStatusChange = (orderId, newRole) => {
    console.log({ id: orderId, newRole: newRole });
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="min-w-full text-left text-gray-500">
          <thead className="bg-gray-100 text-xs uppercase text-gray-700">
            <tr>
              <th className="py-3 px-4">Order ID</th>
              <th className="py-3 px-4">Customer</th>
              <th className="py-3 px-4">Total Price</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 ? (
              orders.map((order) => (
                <tr
                  key={order._id}
                  className="border-b hover:bg-gray-50 cursor-pointer"
                >
                  <td className="py-4 px-4 font-medium text-gray-900 whitespace-nowrap">
                    #{order._id}
                  </td>
                  <td className="p-4">{order.user.name}</td>
                  <td className="p-4">${order.totalPrice}</td>
                  <td className="p-4">
                    <select
                      value={order.status}
                      onChange={(e) =>
                        handleStatusChange(order._id, e.target.value)
                      }
                      className="bg-gray-50 border border-gray-300 text-gray-900
                    text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                    >
                      <option value="Processing" className="">
                        Processing
                      </option>
                      <option value="Shipped" className="">
                        Shipped
                      </option>
                      <option value="Delivered" className="">
                        Delivered
                      </option>
                      <option value="Cancelled" className="">
                        Cancelled
                      </option>
                    </select>
                  </td>
                  <td className="p-4">
                    <button
                      onClick={() => handleStatusChange(order._id, "Delivered")}
                      className="bg-green-500 text-white py-2 px-4 rounded cursor-pointer hover:bg-green-600"
                    >
                      Mark as Delivered
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="p-4 to-gray-500 text-center">
                  No orders found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderManagement;
