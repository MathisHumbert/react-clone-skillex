import React from 'react';
import styled from 'styled-components';
import logo from '../images/617fa55008f302348b1f7703_logo.svg';

const Navabar = () => {
  return (
    <Wrapper>
      <div className="left">
        <img src={logo} alt="main-logo" />
        <ul>
          <li>
            Find passion <span></span>
          </li>
          <li>
            Categories <span></span>
          </li>
          <li>
            Skills <span></span>
          </li>
          <li>
            Customer <span></span>
          </li>
        </ul>
      </div>
      <div className="right">
        <li>
          Login <span></span>
        </li>
        <button>free trial</button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 38px 0;

  img {
    cursor: pointer;
  }

  .left {
    display: flex;
    align-items: center;
    gap: 126px;
  }

  ul {
    display: flex;
    gap: 44px;
  }

  li {
    list-style-type: none;
    color: #1e1e2f;
    font-size: 16px;
    cursor: pointer;
    position: relative;

    span {
      position: absolute;
      width: 100%;
      height: 0px;
      background: #97c680;
      bottom: -2px;
      left: 0;
      z-index: -1;
      transition: height 0.3s ease-in-out;
    }

    &:hover span {
      height: 8px;
    }
  }

  .right {
    display: flex;
    align-items: center;
    gap: 22px;
  }

  button {
    background: #1e1e2f;
    color: #fff;
    font-family: 'Archivo', sans-serif;
    padding: 10px 30px;
    border-radius: 20px;
    border: 0;
    text-transform: capitalize;
    font-weight: 700;
    cursor: pointer;
  }
`;
export default Navabar;
