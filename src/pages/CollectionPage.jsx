import React, { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa6";

const CollectionPage = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      const fetchedProducts = [
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
          price: 120,
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
          price: 120,
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
          price: 120,
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
          price: 120,
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
          price: 120,
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
          price: 120,
          images: [
            {
              url: "https://picsum.photos/500/500?random=7",
              altText: "Image 7",
            },
          ],
        },
        {
          id: 8,
          name: "New Arrival 8",
          price: 120,
          images: [
            {
              url: "https://picsum.photos/500/500?random=8",
              altText: "Image 8",
            },
          ],
        },
        {
          id: 9,
          name: "New Arrival 9",
          price: 120,
          images: [
            {
              url: "https://picsum.photos/500/500?random=9",
              altText: "Image 9",
            },
          ],
        },
        {
          id: 10,
          name: "New Arrival 10",
          price: 120,
          images: [
            {
              url: "https://picsum.photos/500/500?random=10",
              altText: "Image 10",
            },
          ],
        },
      ];

      setProduct(fetchedProducts);
    }, 1000);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row">
      <button className="lg:hidden border p-2 flex justify-center items-center">
        <FaFilter className="mr-2" />
      </button>
    </div>
  );
};

export default CollectionPage;
