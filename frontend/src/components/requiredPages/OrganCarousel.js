import React, { useEffect, useState, useCallback } from "react";
import { styled } from "styled-components";
import axios from "axios";
import { BASE_API_URL } from '../../api';

const OrganCarousel = ({ setSearchResults, testsOrPackage }) => {
  const [categories, setCategories] = useState([]);
  const [activeItemId, setActiveItemId] = useState(null);

  const handleOrgSel = useCallback(async (event, item) => {
    if (event) event.preventDefault();
    try {
      const response = await axios.get(`${BASE_API_URL}/${testsOrPackage}/category/${item.category_id}`);
      
      // Append category property to each object in response.data
      const searchResultsWithCategory = response.data.map(result => ({
        ...result,
        category: item.category_name
      }));

      setSearchResults(searchResultsWithCategory);
      setActiveItemId(item.category_id); // Set the active item ID
    } catch (error) {
      console.error(error);
    }
  }, [setSearchResults, testsOrPackage]);

  useEffect(() => {
    const getAllCategories = async () => {
      try {
        const response = await axios.get(`${BASE_API_URL}/categories`);
        setCategories(response.data);

        // Once categories are fetched, fetch and set the search results for the first category
        if (response.data.length > 0) {
          const firstCategory = response.data[0]; // Assuming the first category is at index 0
          handleOrgSel(null, firstCategory); // Pass null event and first category to handleOrgSel
        }
      } catch (error) {
        console.log(error);
      }
    }
    getAllCategories();
  }, [handleOrgSel]);

  return (
    <Wrapper>
      <div className="organs d-flex justify-content-center align-items-center gap-2 flex-wrap">
        {categories.map((item, index) => (
          <div 
            key={index} 
            className={`org-item py-2 ${activeItemId === item.category_id ? 'active' : ''}`} 
            onClick={(e) => handleOrgSel(e, item)}
            >
            <img src={`/images/organs/${item.category_name}.png`} alt={item.category_name + "icon"} />
            <p className="mb-0 text-k-accent small clr-inherit">{item.category_name}</p>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default OrganCarousel;

const Wrapper = styled.section`
  .organs {
    display: flex;
    .org-item {
      background: white;
      border-radius: 8px;
      width: 90px;
      height: 90px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      cursor: pointer;
      transition: 0.3s;
      &:hover {
        background-color: ${({ theme }) => theme.colors.primary};
        color: white;
      }
      &:hover p {
        color: white;
      }
    }
    .active{
      background-color: ${({ theme }) => theme.colors.primary};
      color: white;
    }
    img {
      width: 40px;
      margin: 5px;
    }
  }
`;
