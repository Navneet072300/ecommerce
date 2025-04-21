import { HiArrowPathRoundedSquare } from "react-icons/hi2";
import { FaShoppingBag } from "react-icons/fa";
import { FaRegCreditCard } from "react-icons/fa6";

const FeaturesSection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="flex flex-col items-center">
          <div className="p-4 rounded-full mb-4">
            <FaShoppingBag className="text-xl" />
          </div>
          <h2 className="tracking-tighter mb-2">FREE INTERNATIONAL SHIPPING</h2>
          <p className="text-gray-600 text-sm tracking-tighter">
            On all orders over $100
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="p-4 rounded-full mb-4">
            <HiArrowPathRoundedSquare className="text-xl" />
          </div>
          <h2 className="tracking-tighter mb-2">15 DAYS RETURN</h2>
          <p className="text-gray-600 text-sm tracking-tighter">
            Money Back Guarantee
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="p-4 rounded-full mb-4">
            <FaRegCreditCard className="text-xl" />
          </div>
          <h2 className="tracking-tighter mb-2">SECURE CHECKOUT</h2>
          <p className="text-gray-600 text-sm tracking-tighter">
            100% secure checkout process
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
