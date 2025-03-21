import React, { useState } from "react";

const Header = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const items = [
    {
      id: 1,
      label: "Show Description 1",
      description: "This is the first description.",
    },
    {
      id: 2,
      label: "Show Description 2",
      description: "This is the second description.",
    },
    {
      id: 3,
      label: "Show Description 3",
      description: "This is the third description.",
    },
  ];

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6">
      {/* Left Side Buttons */}
      <div className="flex-shrink-0 space-y-4 lg:space-y-2 w-full lg:w-auto">
        {items.map((item, index) => (
          <button
            key={item.id}
            onClick={() => handleClick(index)}
            className="bg-blue-500 text-white px-4 py-2 rounded w-full lg:w-auto"
          >
            {activeIndex === index ? "Hide Description" : item.label}
          </button>
        ))}
      </div>

      {/* Right Side Description */}
      <div className="flex-grow bg-gray-100 p-4 rounded w-full lg:w-2/3">
        {activeIndex !== null && <p>{items[activeIndex].description}</p>}
      </div>
    </div>
  );
};

export default Header;
