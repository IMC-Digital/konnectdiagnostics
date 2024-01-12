import React from "react";
import styled from "styled-components";
import { BiLogOut } from "react-icons/bi";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export const User = ({ auth, userName, message, handleLoginClick, handleLogout }) => {
  return (
    <Wrapper>
      <div className="profile">
        {auth ? (
          <>
            <DropdownButton
              align="end"
              id="dropdown-menu-align-responsive-2"
              variant="secondary"
              title={
                  <button className="btn border px-2">
                    <span>{userName}</span>
                    <i className="fa-solid fa-user rounded p-2"></i>
                  </button>
              }
            >
              <Dropdown.Item href="/profile">
                <i className="fa-solid fa-user"></i>
                <span className="text-k-text"> {userName} </span>
              </Dropdown.Item>
              <Dropdown.Item href="/profile">
                <span className="text-k-text"> My Account </span>
              </Dropdown.Item>
              <Dropdown.Item href="/cart">
                <span className="text-k-text"> My Orders </span>
              </Dropdown.Item>
              <Dropdown.Item href="/cart">
                <span className="text-k-text"> My Reports </span>
              </Dropdown.Item>
              <Dropdown.Item href="/cart">
                <span className="text-k-text"> Help? </span>
              </Dropdown.Item>
              <Dropdown.Item onClick={handleLogout} className="bg-light">
                  <BiLogOut />
                  <span className="text-k-text"> Logout </span>
              </Dropdown.Item>
            </DropdownButton>
          </>
        ) : (
          <div>
            <h3>{message}</h3>
            <button className='btn btn-primary' onClick={handleLoginClick}>Login</button>
          </div>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .profile {
    cursor: pointer;
    .image {
      display: flex;
      padding-bottom: 20px;
      img {
        margin-right: 20px;
        border: none;
      }
    }
    button {
      font-size: 1rem;
      padding: 0;
      border: none;
      background: none;
      font-weight: 500;
    }
  }
  .profile img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    object-fit: cover;
    &:focus {
      border: none;
    }
  }
  .openProfile {
    color: ${({ theme }) => theme.colors.white};
    align-items: flex-start;
    box-shadow: 0 2px 4px rgb(0 0 0 / 8%);
    position: absolute;
    border-radius: 0 0 5px 5px;
    top: 65px;
    right: 10px;
    width: 250px;
    background: #fff;
    z-index: 100;
    /* background-color: ${({ theme }) => theme.colors.primary90}; */
  }
  .openProfile .box {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 8px 15px;
    transition: 0.5s;
  }
  .openProfile .box h4{
    margin-bottom: 0;
  }
  .openProfile .icon {
    font-size: 15px;
    margin-right: 15px;
  }
  .openProfile h4 {
    font-size: 15px;
    font-weight: 500;
  }
  .openProfile button:hover {
    background: rgba(0, 91, 171, 0.075);
  }
  .logoutbtn{
    background: rgba(0,0,0,0.05);
    display: flex;
    justify-content: flex-start;
  }
  .logoutbtn:hover{
    background-color: rgba(255,0,0,0.05);
  }
`;
