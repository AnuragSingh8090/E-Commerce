import { useState, useMemo } from "react";
import "./Home.css";

const Home = () => {
  const [filter, setFilter] = useState("default");

  // Updated products list with 20 items and working images
  const products = [
    {
      id: 1,
      name: "Smartphone X",
      price: 799,
      image: "https://source.unsplash.com/400x300/?smartphone",
      category: "Mobile",
      isNew: true,
    },
    {
      id: 2,
      name: "Laptop Pro",
      price: 1299,
      image: "https://source.unsplash.com/400x300/?laptop",
      category: "Laptop",
      isNew: false,
    },
    {
      id: 3,
      name: "Wireless Earbuds",
      price: 149,
      image: "https://source.unsplash.com/400x300/?earbuds",
      category: "Accessories",
      isNew: true,
    },
    {
      id: 4,
      name: "4K Smart TV",
      price: 999,
      image: "https://source.unsplash.com/400x300/?tv",
      category: "TV",
      isNew: false,
    },
    {
      id: 5,
      name: "Gaming Console",
      price: 499,
      image: "https://source.unsplash.com/400x300/?gamingconsole",
      category: "Gaming",
      isNew: true,
    },
    {
      id: 6,
      name: "Smart Watch",
      price: 199,
      image: "https://source.unsplash.com/400x300/?smartwatch",
      category: "Wearables",
      isNew: false,
    },
    {
      id: 7,
      name: "Mechanical Keyboard",
      price: 129,
      image: "https://source.unsplash.com/400x300/?keyboard",
      category: "Accessories",
      isNew: true,
    },
    {
      id: 8,
      name: "Noise Cancelling Headphones",
      price: 299,
      image: "https://source.unsplash.com/400x300/?headphones",
      category: "Accessories",
      isNew: false,
    },
    {
      id: 9,
      name: "Fitness Tracker",
      price: 179,
      image: "https://source.unsplash.com/400x300/?fitnesstracker",
      category: "Wearables",
      isNew: true,
    },
    {
      id: 10,
      name: "Tablet Pro",
      price: 899,
      image: "https://source.unsplash.com/400x300/?tablet",
      category: "Tablet",
      isNew: false,
    },
    {
      id: 11,
      name: "Drone Camera",
      price: 1299,
      image: "https://source.unsplash.com/400x300/?drone",
      category: "Gadgets",
      isNew: true,
    },
    {
      id: 12,
      name: "Portable Speaker",
      price: 99,
      image: "https://source.unsplash.com/400x300/?speaker",
      category: "Accessories",
      isNew: false,
    },
    {
      id: 13,
      name: "VR Headset",
      price: 399,
      image: "https://source.unsplash.com/400x300/?vr",
      category: "Gaming",
      isNew: true,
    },
    {
      id: 14,
      name: "Desktop Monitor",
      price: 249,
      image: "https://source.unsplash.com/400x300/?monitor",
      category: "Computer",
      isNew: false,
    },
    {
      id: 15,
      name: "Wireless Mouse",
      price: 49,
      image: "https://source.unsplash.com/400x300/?mouse",
      category: "Accessories",
      isNew: true,
    },
    {
      id: 16,
      name: "Electric Scooter",
      price: 699,
      image: "https://source.unsplash.com/400x300/?scooter",
      category: "Transport",
      isNew: false,
    },
    {
      id: 17,
      name: "Smart Light Bulb",
      price: 25,
      image: "https://source.unsplash.com/400x300/?lightbulb",
      category: "Home",
      isNew: true,
    },
    {
      id: 18,
      name: "Gaming Chair",
      price: 350,
      image: "https://source.unsplash.com/400x300/?gamingchair",
      category: "Furniture",
      isNew: false,
    },
    {
      id: 19,
      name: "E-Reader",
      price: 120,
      image: "https://source.unsplash.com/400x300/?ereader",
      category: "Gadgets",
      isNew: true,
    },
    {
      id: 20,
      name: "Bluetooth Adapter",
      price: 35,
      image: "https://source.unsplash.com/400x300/?bluetooth",
      category: "Accessories",
      isNew: false,
    },
  ];

  // Function to sort products
  const sortedProducts = useMemo(() => {
    switch (filter) {
      case "priceLowToHigh":
        return [...products].sort((a, b) => a.price - b.price);
      case "priceHighToLow":
        return [...products].sort((a, b) => b.price - a.price);
      case "newest":
        return [...products].sort((a, b) =>
          a.isNew === b.isNew ? 0 : a.isNew ? -1 : 1
        );
      default:
        return products;
    }
  }, [filter]);

  return (
    <div className="min-h-[100vh] bg-gray-100 p-[24px]">
      <div className="max-w-[1200px] mx-auto">
        {/* Filter Dropdown */}
        <div className="flex justify-end mb-[24px]">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-[12px] py-[8px] border border-gray-300 rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
          >
            <option value="default">Default</option>
            <option value="priceLowToHigh">Price: Low to High</option>
            <option value="priceHighToLow">Price: High to Low</option>
            <option value="newest">Newest</option>
          </select>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[24px]">
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

// Separate Product Card Component
const ProductCard = ({ product }) => {
  return (
    <div className="bg-white p-[16px] rounded-[12px] shadow-md hover:shadow-lg transition-shadow duration-200">
      <img
        src={product.image}
        alt={product.name}
        loading="lazy"
        className="w-full h-[200px] object-cover rounded-[8px] mb-[12px]"
      />
      <h2 className="text-[18px] font-[500] text-gray-800 mb-[8px]">
        {product.name}
      </h2>
      <p className="text-[16px] text-gray-600 mb-[12px]">${product.price}</p>
      {product.isNew && (
        <span className="inline-block bg-green-500 text-white px-[8px] py-[4px] rounded-[4px] text-[12px]">
          New
        </span>
      )}
    </div>
  );
};

export default Home;
