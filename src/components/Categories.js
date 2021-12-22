import React from 'react';
import styled from 'styled-components';

const Categories = () => {
  return (
    <Wrapper>
      <h1>
        Unlimited access to 100+ instructors <div></div>
      </h1>
      <ul>
        <li>
          All categories<span></span>
        </li>
        <li>
          Entertaiment <span></span>
        </li>
        <li>
          Lifestyle <span></span>
        </li>
        <li>
          Writing <span></span>
        </li>
        <li>
          Business <span></span>
        </li>
        <li>
          Food <span></span>
        </li>
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 2rem;

  h1 {
    font-size: 40px;
    padding-bottom: 48px;

    div {
      width: 5px;
      height: 5px;
      background: #97c680;
      display: inline-block;
    }
  }

  ul {
    display: flex;
    gap: 44px;
  }

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style-type: none;
    color: #1e1e2f;
    font-size: 16px;
    cursor: pointer;
    gap: 3px;

    span {
      width: 100%;
      height: 2px;
      background: #1e1e2f;
      opacity: 0;
      transform: translateY(400%);
      transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
    }

    &:hover span {
      opacity: 1;
      transform: translateY(0%);
    }
  }
`;
export default Categories;
