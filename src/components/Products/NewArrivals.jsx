import { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const newArrivals = [
  {
    id: 1,
    name: "New Arrival 1",
    price: 120,
    images: [
      {
        url: "https://picsum.photos/500/500?random=1",
        altText: "Image 1",
      },
    ],
  },
  {
    id: 2,
    name: "New Arrival 2",
    price: 130,
    images: [
      {
        url: "https://picsum.photos/500/500?random=2",
        altText: "Image 2",
      },
    ],
  },
  {
    id: 3,
    name: "New Arrival 3",
    price: 140,
    images: [
      {
        url: "https://picsum.photos/500/500?random=3",
        altText: "Image 3",
      },
    ],
  },
  {
    id: 4,
    name: "New Arrival 4",
    price: 150,
    images: [
      {
        url: "https://picsum.photos/500/500?random=4",
        altText: "Image 4",
      },
    ],
  },
  {
    id: 5,
    name: "New Arrival 5",
    price: 160,
    images: [
      {
        url: "https://picsum.photos/500/500?random=5",
        altText: "Image 5",
      },
    ],
  },
  {
    id: 6,
    name: "New Arrival 6",
    price: 170,
    images: [
      {
        url: "https://picsum.photos/500/500?random=6",
        altText: "Image 6",
      },
    ],
  },
  {
    id: 7,
    name: "New Arrival 7",
    price: 180,
    images: [
      {
        url: "https://picsum.photos/500/500?random=7",
        altText: "Image 7",
      },
    ],
  },
];

const NewArrivals = () => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [canScrollLeft, setCanScrollLeft] = useState(false);

  const scroll = (direction) => {
    const scrollAmount = direction === "left" ? -300 : 300;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };
  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = x - startX;
    // @ts-ignore
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };
  const handleMouseUporLeave = () => {
    setIsDragging(false);
  };

  const updateScrollButtons = () => {
    const container = scrollRef.current;

    if (container) {
      const leftScroll = container.scrollLeft;
      const rightScrollable =
        container.scrollWidth > leftScroll + container.clientWidth;

      setCanScrollLeft(leftScroll > 0);
      setCanScrollRight(rightScrollable);
    }
  };

  useEffect(() => {
    const container = scrollRef.current;

    if (container) {
      container.addEventListener("scroll", updateScrollButtons);
      updateScrollButtons();
      return () => container.removeEventListener("scroll", updateScrollButtons);
    }
  }, []);

  return (
    <section className="px-16 py-4 lg:px-0">
      <div className="container mx-auto text-center mb-10 relative">
        <h2 className="text-3xl font-bold mb-4">Explore New Arrivals</h2>
        <p className="text-lg text-gray-600 mb-8">
          Discover the latest fashion trends and must-have items .
        </p>

        <div className="absolute right-0 bottom-[-30px] flex space-x-2">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={` p-2 rounded border
              ${
                canScrollLeft
                  ? "bg-white text-black"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
          >
            <FaChevronLeft className="text-2xl" />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={` p-2 rounded border
              ${
                canScrollRight
                  ? "bg-white text-black"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
          >
            <FaChevronRight className="text-2xl" />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className={`container mx-auto overflow-x-scroll flex space-x-6 relative ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUporLeave}
        onMouseLeave={handleMouseUporLeave}
      >
        {newArrivals.map((product) => (
          <div
            className="min-w-[100%] sm:min-w-[50%] lg:min-w-[30%] relative"
            key={product.id}
          >
            <img
              src={product.images[0]?.url}
              alt={product.images[0]?.altText || product.name}
              className="w-full h-[500px] object-cover rounded-lg"
              draggable="false"
            />
            <div className="absolute bottom-0 left-0 right-0 backdrop-blur-md text-white p-4 rounded-b-lg">
              <Link to={`/product/${product.id}`} className="block">
                <h4 className="font-medium">{product.name}</h4>
                <p className="mt-1">${product.price}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
