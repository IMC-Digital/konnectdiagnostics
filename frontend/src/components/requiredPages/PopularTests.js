import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { TestCard } from "./TestCard";
import { BASE_API_URL } from "../../api";

export const PopularTests = ({ userId, auth, cart, setCart, handleLoginClick }) => {
  const [popularTests, setPopularTests] = useState([]);

  useEffect(() => {
    const poptestscode = ["COMPLETE BLOOD COUNT", "BLOOD CULTURE", "TSH", "URINE MICROALBUMIN"];
    async function getPopularTests() {
      try {
        const response = await axios.get(`${BASE_API_URL}/tests/getpoptests`, { params: { codes: poptestscode } });
        setPopularTests(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getPopularTests();
  }, []);

  return (
    <Wrapper>
      <div className="container pt-4 w-100 my-3 d-flex flex-wrap gap-3">
        {popularTests.slice(0, 4).map((item, index) => (
          <TestCard
            key={index}
            item={item}
            auth={auth}
            userId={userId}
            cart={cart}
            setCart={setCart}
            handleLoginClick={handleLoginClick}
          />
        ))}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
${'' /* @media (max-width: 768px) {
  .ptCards{ overflow: scroll; }
} */}
`;
