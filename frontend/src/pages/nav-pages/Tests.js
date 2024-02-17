import React, { useEffect, useState } from "react";
import { BASE_API_URL } from "../../api";
import axios from "axios";
import { styled } from "styled-components";
import PageBanner from "../../components/PageBanner";
import { Nav, Tab } from "react-bootstrap";
import TestsGrid from "../../components/tests(New)/TestsGrid";
// import SearchBar from "../../components/requiredPages/SearchBar";

const Tests = ({ userId, cart, setCart }) => {
  const [categories, setCategories] = useState([]);
  // const [tests, setTests] = useState([]);

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
      <PageBanner title={"Tests"} bannerImg={"tests-bg-image"} />

      <div className="container">
        <Tab.Container id="tests-tabs" className="tests-tabs border mx-auto p-0" defaultActiveKey="0">
          <div className="h-100 p-0 my-5 pb-0 d-flex overflow-hidden rounded">
            <div>
              {/* <SearchBar setSearchResults={setTests} /> */}

              <Nav variant="pills" className="pb-3 bg-light1 d-flex flex-column flex-shrink-0" style={{ width: "280px" }}>
                <div className="main-tabs-title-wrapper rounded">
                  {categories.map((item, index) => (
                    <Nav.Item key={index}>
                      <Nav.Link eventKey={index} >
                        <span>
                          <img src={`/images/organs/${convertToTitleCase(item.category_name)}.png`} alt="organ" className="me-2" />
                          <span className="text-k-text"> {item.category_name} </span>
                        </span>
                        <span> <i className="fa-solid fa-angle-right"></i> </span>
                      </Nav.Link>
                    </Nav.Item>
                  ))}
                </div>
              </Nav>
            </div>

            <div className="tab-content bg-white rounded-top ps-5 flex-grow-1" style={{ flex: 1 }}>
              {categories.map((item, index) => (
                <Tab.Pane key={index} eventKey={index}>
                  <TestsGrid item={item} cart={cart} setCart={setCart} />
                </Tab.Pane>
              ))}
            </div>
          </div>
        </Tab.Container>
      </div>

    </Wrapper>
  );
};

export default Tests;

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