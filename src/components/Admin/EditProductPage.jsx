import React, { useState } from "react";

const EditProductPage = () => {
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: 0,
    countInStock: 0,
    sku: "",
    category: "",
    brand: "",
    sizes: [],
    colors: [],
    collections: "",
    material: "",
    gender: "",
    images: [
      {
        url: "https://picsum.photos/150?product=1",
      },
      {
        url: "https://picsum.photos/150?product=2",
      },
    ],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    console.log(file);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(productData);
  };

  return (
    <div className="max-w-5xl mx-auto p-6 shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-6">Edit Product</h2>
      <form className="" onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="block font-semibold mb-2 text-gray-700">
            Product Name
          </label>
          <input
            type="text"
            name="name"
            value={productData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-400 rounded-md"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block font-semibold mb-2 text-gray-700">
            Description
          </label>
          <textarea
            name="description"
            value={productData.description}
            onChange={handleChange}
            className="w-full p-2 border border-gray-400 rounded-md"
            rows={4}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block font-semibold mb-2 text-gray-700">
            Price
          </label>
          <input
            type="number"
            name="price"
            value={productData.price}
            onChange={handleChange}
            className="w-full p-2 border border-gray-400 rounded-md"
          />
        </div>
        <div className="mb-6">
          <label className="block font-semibold mb-2 text-gray-700">
            Count In Stock
          </label>
          <input
            type="number"
            name="countInStock"
            value={productData.countInStock}
            onChange={handleChange}
            className="w-full p-2 border border-gray-400 rounded-md"
          />
        </div>
        <div className="mb-6">
          <label className="block font-semibold mb-2 text-gray-700">SKU</label>
          <input
            type="text"
            name="sku"
            value={productData.sku}
            onChange={handleChange}
            className="w-full p-2 border border-gray-400 rounded-md"
          />
        </div>
        <div className="mb-6">
          <label className="block font-semibold mb-2 text-gray-700">
            Sizes
          </label>
          <input
            type="text"
            name="sizes"
            value={productData.sizes.join(",")}
            onChange={(e) =>
              setProductData({
                ...productData,
                sizes: e.target.value.split(",").map((size) => size.trim()),
              })
            }
            className="w-full p-2 border border-gray-400 rounded-md"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block font-semibold mb-2 text-gray-700">
            Colors
          </label>
          <input
            type="text"
            name="colors"
            value={productData.colors.join(",")}
            onChange={(e) =>
              setProductData({
                ...productData,
                colors: e.target.value.split(",").map((color) => color.trim()),
              })
            }
            className="w-full p-2 border border-gray-400 rounded-md"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block font-semibold mb-2 text-gray-700">
            Upload Image
          </label>
          <input type="file" onChange={handleImageUpload} />
          <div className="flex gap-4 mt-4">
            {productData.images.map((image, index) => (
              <div className="" key={index}>
                <img
                  src={image.url}
                  alt={image.altText || "Product Image"}
                  className="w-20 h-20 object-cover rounded-md shadow-md"
                />
              </div>
            ))}
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded-md cursor-pointer hover:bg-green-600 transition-colors"
        >
          Update Product
        </button>
      </form>
    </div>
  );
};

export default EditProductPage;
