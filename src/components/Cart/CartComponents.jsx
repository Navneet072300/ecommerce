import { MdOutlineDeleteOutline } from "react-icons/md";

const cartProducts = [
  {
    productId: 1,
    name: "T-Shirt",
    size: "M",
    color: "Red",
    quantity: 1,
    price: 10.99,
    image: "https://picsum.photos/200?random=1",
  },
  {
    productId: 2,
    name: "Shirt",
    size: "M",
    color: "Red",
    quantity: 1,
    price: 10.99,
    image: "https://picsum.photos/200?random=2",
  },
  {
    productId: 3,
    name: "Oversized T-Shirt",
    size: "M",
    color: "White",
    quantity: 1,
    price: 10.99,
    image: "https://picsum.photos/200?random=3",
  },
  {
    productId: 4,
    name: "Jeans",
    size: "M",
    color: "Blue",
    quantity: 1,
    price: 10.99,
    image: "https://picsum.photos/200?random=4",
  },
  {
    productId: 5,
    name: "Shoes",
    size: "10",
    color: "White",
    quantity: 1,
    price: 12.99,
    image: "https://picsum.photos/200?random=5",
  },
];

const CartComponents = () => {
  return (
    <div className="">
      {cartProducts.map((product, index) => (
        <div
          key={index}
          className="flex items-start justify-between py-4 border-b"
        >
          <div className="flex items-start">
            <img
              src={product.image}
              alt="product"
              className="w-20 h-24
                object-cover mr-4 rounded-md"
            />
            <div className="">
              <h3 className="">{product.name}</h3>
              <p className="text-sm text-gray-500">
                size:{product.size} | color:{product.color}
              </p>
              <div className="flex items-center mt-2 ">
                <button className="border rounded px-2 py-1 text-xl font-medium">
                  -
                </button>
                <span className="mx-4">{product.quantity}</span>
                <button className="border rounded px-2 py-1 text-xl font-medium">
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="">
            <p className="text-lg font-medium">
              ${product.price.toLocaleString()}
            </p>
            <button>
              <MdOutlineDeleteOutline className="text-2xl text-red-500" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartComponents;
