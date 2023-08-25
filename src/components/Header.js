import React from "react";

const Header = () => {
  const city = [
    { id: 1, title: "vellore" },
    { id: 2, title: "chennai" },
    { id: 3, title: "madurai" },
    { id: 4, title: "erode" },
    { id: 5, title: "banglore" },
  ];
  return (
    <>
      <div className="flex items-center justify-around my-6 ">
        {city.map((cities) => (
          <button key={city.id} className=" text-white text-lg font-medium">
            {cities.title}
          </button>
        ))}
      </div>
    </>
  );
};

export default Header;
