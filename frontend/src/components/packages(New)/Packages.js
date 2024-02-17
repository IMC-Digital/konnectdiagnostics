import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_API_URL } from "../../api/index";
import { styled } from "styled-components";
import PageBanner from "../PageBanner";
import { Nav, Tab } from "react-bootstrap";
import CategoryWisePackagesTabs from "./CategoryWisePackagesTabs";

export default function Packages({ auth, userId, cart, setCart, handleLoginClick }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getAllCategories = async () => {
      try {
        const response = await axios.get(`${BASE_API_URL}/categories`);
        setCategories(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllCategories();
  }, [setCategories]);

  const convertToTitleCase = (str) => {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <Wrapper>
      <PageBanner title={"Packages"} bannerImg={"packages-bg-image"} />

      <div className="container">
        <Tab.Container
          id="packages-tabs"
          className="dashboard-tabs border mx-auto p-0"
          defaultActiveKey="0"
        >
          <div className="h-100 p-0 my-5 pb-0 d-flex flex-row overflow-hidden rounded">
            <Nav
              variant="pills"
              className="me-3 pb-3 bg-light1 d-flex flex-column flex-shrink-0"
              style={{ width: "250px" }}
            >
              <div className="main-tabs-title-wrapper rounded">
                {categories.map((item, index) => (
                  <Nav.Item key={index}>
                    <Nav.Link eventKey={index} >
                      <span>
                        <img
                          src={`/images/organs/${convertToTitleCase(
                            item.category_name
                          )}.png`}
                          alt="organ"
                          className="me-2"
                        />
                        <span className="text-k-text">
                          {item.category_name}
                        </span>
                      </span>
                      <span>
                        <i className="fa-solid fa-angle-right"></i>
                      </span>
                    </Nav.Link>
                  </Nav.Item>
                ))}
              </div>
            </Nav>

            <div className="tab-content bg-white rounded-top ps-3 flex-grow-1" style={{ flex: 1 }}>
              {categories.map((item, index) => (
                <Tab.Pane key={index} eventKey={index}>
                  <CategoryWisePackagesTabs
                    category={item}
                    auth={auth}
                    userId={userId}
                    cart={cart}
                    setCart={setCart}
                    handleLoginClick={handleLoginClick}
                  />
                </Tab.Pane>
              ))}
            </div>
          </div>
        </Tab.Container>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .main-tabs-title-wrapper {
    overflow: hidden;
    background-color: #f6f9fc;
    .nav-item {
      border-bottom: 1px solid #e5e5e5;
      a {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-radius: 0 !important;
        border-bottom: 1px solid #fefefe;
        img {
          width: 20px;
        }
        i {
          font-size: 12px;
        }
      }
      a.active span,
      a.active i {
        color: white !important;
      }
      .nav-item:hover {
        background-color: white;
      }
    }
  }
`;