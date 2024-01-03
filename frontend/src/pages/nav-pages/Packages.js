import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import axios from "axios";
import PackageItemInfo from "../../components/packagesComponents/PackageItemInfo";
import { BASE_API_URL } from "../../api";

const Packages = ({ auth, userId, cart, setCart, handleLoginClick }) => {
  const [packages, setPackages] = useState([]);
  const [activeTab, setActiveTab] = useState();
  useEffect(() => {
    async function getallpackagesdata() {
      try {
        const response = await axios.get(`${BASE_API_URL}/getpackages`);
        setPackages(response.data);
        setActiveTab(response.data[0].product_id);
      } catch (error) {
        console.error(error);
      }
    }
    getallpackagesdata();
  }, []);

  return (
    <Wrapper>
      <div className="banner pb d-flex">
        <div className="container flex">
          <h1 className="page_title text-k-mainHeadings">Packages</h1>
        </div>
      </div>
      <section className="pkg container my-5" id="hp_sec">
        <div className="pkg-tabs mt-4">
          <div className="tabs" style={{ width: "25%" }}>
            {packages.map((item) => (
              <button
                key={item.product_id}
                className={item.product_id === activeTab ? "active" : ""}
                onClick={() => setActiveTab(item.product_id)}
              >
                {item.product_name}
              </button>
            ))}
          </div>
          <div className="tab-content" style={{ width: "75%" }}>
            {packages.map((item) => (
              <PackageItemInfo
                key={item.product_id_id}
                item={item}
                auth={auth}
                userId={userId}
                cart={cart}
                setCart={setCart}
                activeTab={activeTab}
                handleLoginClick={handleLoginClick}
              />
            ))}
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default Packages;

const Wrapper = styled.section`
  .banner {
    background: url("/images/banners/packages-bg-image.jpg");
  }
  .pkg-tabs {
    display: flex;
    gap: 25px;
    .tabs {
      display: flex;
      flex-direction: column;
      button {
        background-color: white;
        border: none;
        font-size: 1rem;
        font-weight: 500;
        border-bottom: 1px solid #e3e3e3;
        padding: 10px;
        text-align: start;
        border-radius: 8px;
        &:hover {
          color: #00aeef;
        }
      }
      button.active {
        background: #005bab;
        color: white;
      }
    }
    .tab-content {
      /* .atc {
        border: none;
        background-image: url(/images/k-10.png),
          linear-gradient(220deg, #005bab, #00ffbb90);
        font-size: 1rem;
        font-weight: 500;
        border-radius: 5px;
        margin-bottom: 10px;
        padding: 8px 20px;
        transition: all 0.3s;
        &:hover {
          background-image: url(/images/k-10.png),
            linear-gradient(90deg, #005bab, #00ffbb90);
        }
      } */
    }
  }
  .tab-bg {
    align-items: center;
    text-align: center;
    /* background-image: var(--primary-color); */
    border-radius: 15px;
    /* height: 200px; */
    z-index: 0;
    /* margin-bottom: -155px; */
  }
  .pkg-active-bg-top {
    justify-content: center;
    margin-bottom: 25px;
    .pkg-top {
      box-shadow: rgba(100, 100, 111, 0.2) 0px 2px 10px 0px;
      background-color: white;
      border-radius: 15px;
      width: 100%;
      .pkg-image {
        margin-right: 3%;
        img {
          width: 350px;
          height: 100%;
          border-radius: 15px 0 0 15px;
        }
      }
      .pkg-info-right {
        width: 100%;
        background-image: url(/images/k-10.png);
        background-size: cover;
        padding: 25px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .code {
          font-size: 1rem;
          font-weight: 600;
        }
        .price {
          border-radius: 5px;
          margin: 15px 0;
          font-size: 1.5rem;
          font-weight: 700;
          svg {
            margin-right: 5px;
          }
        }
      }
    }
  }
  .pkg-tab-active-content {
    display: flex;
    overflow-y: scroll;
    margin: 0px auto;
    padding-right: 30px;
    /* width: 88%; */
    height: 80vh;
    &::-webkit-scrollbar {
      width: 5px;
      box-shadow: inset 0 0 7px #11010125;
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
      background: linear-gradient(220deg, #005bab, #00ffbb90);
      border-radius: 10px;
      cursor: pointer;

      &:hover {
        background: linear-gradient(360deg, #005bab80, #00ffbb80);
      }
    }
  }

  @media only screen and (max-width: 600px) {
    .pkg-tabs {
      gap: 15px;
      .tabs {
        button {
          background-color: white;
          border: none;
          font-size: 1rem;
          font-weight: 500;
          border-bottom: 1px solid #e3e3e3;
          padding: 10px;
          text-align: start;
          border-radius: 5px;
          &:hover {
            color: #00aeef;
          }
        }
        button.active {
          color: white;
        }
      }
    }
    .pkg-active-bg-top {
      .pkg-top {
        padding: 10px;
        flex-wrap: wrap;
        .pkg-image {
          margin: 0;
          img {
            width: 100%;
            border-radius: 10px;
          }
        }
      }
    }
  }
`;
