import React, { useState } from "react";
import OrganCarousel from "../requiredPages/OrganCarousel";
import PackageCard from "../packages(New)/PackageCard";

const ToggleKHP = ({ userId, auth, cart, setCart, handleLoginClick }) => {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div className="container mt-4">
      <div className="results d-flex flex-column flex-wrap gap-3 justify-content-center">
        <OrganCarousel testsOrPackage={"packages"} searchResults={searchResults} setSearchResults={setSearchResults} />

        <div className="mt-3 d-flex justify-content-center flex-wrap gap-3">
          {
            searchResults.map((item, index) => (
              <PackageCard key={index} cart={cart} setCart={setCart} item={item} />
            )) 
          }
        </div>
      </div>
    </div>
  );
};

export default ToggleKHP;
