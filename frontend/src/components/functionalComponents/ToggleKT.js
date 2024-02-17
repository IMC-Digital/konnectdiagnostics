import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import OrganCarousel from "../requiredPages/OrganCarousel";
import AtoZ from "../requiredPages/AtoZ";
import SearchBar from "../requiredPages/SearchBar";
import axios from "axios";
import TestsGrid from "../testsComponents/TestsGrid";
import { BASE_API_URL } from "../../api";


const ToggleKT = ({ localCartItems, setLocalCartItems, userId, auth, cart, setCart, handleLoginClick }) => {
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    async function fetchInitialData() {
        try {
            const response = await axios.get(`${BASE_API_URL}/search?q=A`);
            setSearchResults(response.data);
        } catch (error) {
            console.error(error);
        }
    } 
    fetchInitialData();
  }, []);
  
  return (
    <Wrapper>
      <div className="s2-kt mt-4">
        <div className="selectionBox mx-auto d-flex gap-2 mb-4">
          <div className="a-zBox mx-auto">
            <div className="kt-a-z d-flex flex-wrap me-3">
              <SearchBar searchResults={searchResults} setSearchResults={setSearchResults} />
              <AtoZ setSearchResults={setSearchResults} />
            </div>
          </div>
          <div className="organsBox">
            <div className="">
              <OrganCarousel testsOrPackage={"tests"} setSearchResults={setSearchResults} />
            </div>
          </div>
        </div>
      

        <TestsGrid 
          searchResults={searchResults} 
          localCartItems={localCartItems} 
          setLocalCartItems={setLocalCartItems} 
          userId={userId} 
          auth={auth} 
          cart={cart} 
          setCart={setCart} 
          cardsPerPage={8} 
          handleLoginClick={handleLoginClick}
        />

      </div>
    </Wrapper>
  );
};

export default ToggleKT;
const Wrapper = styled.section`
  .s2-kt {
    .a-zBox{
      width: 70%;
      margin-bottom: 15px;
    }
    .kt-searchBox {
      gap: 25px;
      .filterBy {
        align-items: center;
        select {
          color: ${({ theme }) => theme.colors.primary};
          border: none;
          &:focus {
            outline-style: none;
          }
        }
        svg {
          fill: ${({ theme }) => theme.colors.primary};
          width: 25px;
          height: 25px;
        }
      }
      .searchBar {
        padding: 2px 10px;
        align-items: center;
        width: 100%;
        input {
          color: ${({ theme }) => theme.colors.primary};
          text-decoration: none;
          border: 2px solid ${({ theme }) => theme.colors.primary};
          font-size: 15px;
          padding: 5px 25px;
          width: 100%;
          &:focus {
            outline-style: none;
          }
        }
        svg {
          width: 10%;
          fill: ${({ theme }) => theme.colors.white};
        }
      }
    }
  }

  /* ---------------------- */

  .selectionBox {
    width: 950px;
    .kt-organs {
      align-items: center;
      &:hover {
        color: ${({ theme }) => theme.colors.primary};
      }
    }
    .carousel-root {
      .carousel .slider {
        padding: 0;
      }
    }
  }

  @media (max-width: 768px) {
    .s2-kt {
      justify-content: flex-start;
      .selectionBox{
        width: 100%;
        display: block !important;
        .a-zBox{
          width: 100%;
        }
      }
      .kt-searchBox {
        gap: 0;
        .filterBy {
          select {
            &:focus {
            }
          }
          svg {
          }
        }
        .searchBar {
          input {
            &:focus {
            }
          }
          svg {
          }
        }
      }
    }
  }
`;
