const newArrivals = [
  {
    id: 1,
    name: "New Arrival 1",
    price: 120,
    images: [
      {
        url: "https://picsum.photos/500/500/random=1",
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
        url: "https://picsum.photos/500/500/random=2",
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
        url: "https://picsum.photos/500/500/random=3",
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
        url: "https://picsum.photos/500/500/random=4",
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
        url: "https://picsum.photos/500/500/random=5",
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
        url: "https://picsum.photos/500/500/random=6",
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
        url: "https://picsum.photos/500/500/random=7",
        altText: "Image 7",
      },
    ],
  },
];

const NewArrivals = () => {
  return (
    <section className="">
      <div className="container mx-auto text-center mb-10 relative">
        <h2 className="text-3xl font-bold mb-4">Explore New Arrivals</h2>
        <p className="text-lg text-gray-600 mb-8">
          Discover the latest fashion trends and must-have items .
        </p>
      </div>
    </section>
  );
};

export default NewArrivals;
