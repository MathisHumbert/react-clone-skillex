import React from 'react';
import styled from 'styled-components';
import photo1 from '../images/6183bce7320d030e82c15028_hero_person-1-p-500.jpeg';
import photo2 from '../images/6183bce3e584104be2e330e0_hero_person-2-p-500.jpeg';
import photo3 from '../images/6183bb01e5841050e8e31f3b_hero_person-3-p-500.jpeg';

const FindPassion = () => {
  const [mainPhoto, setMainPhoto] = React.useState('photo1');
  return (
    <Wrapper>
      <article className="left">
        <header>
          <h1>Watch.</h1>
          <h1>Learn.</h1>
          <h1>Grow.</h1>
        </header>
        <form>
          <input type="text" placeholder="Find your passion" />
          <button type="submit">Go</button>
        </form>
      </article>
      <article className="right">
        <div
          className={
            mainPhoto === 'photo1' ? 'img-container active' : 'img-container '
          }
          onMouseEnter={() => setMainPhoto('photo1')}
        >
          <img src={photo1} alt="photo1" />
          <div className="info">
            <h3 className="special">
              Writting<span>course</span>
            </h3>
            <h2>
              100 <small>topics</small>
            </h2>
          </div>
        </div>
        <div
          className={
            mainPhoto === 'photo2' ? 'img-container active' : 'img-container '
          }
          onMouseEnter={() => setMainPhoto('photo2')}
        >
          <img src={photo2} alt="photo2" />
          <div className="info">
            <h3>
              Writting<span>course</span>
            </h3>
            <h2>
              100 <small>topics</small>
            </h2>
          </div>
        </div>
        <div
          className={
            mainPhoto === 'photo3' ? 'img-container active' : 'img-container '
          }
          onMouseEnter={() => setMainPhoto('photo3')}
        >
          <img src={photo3} alt="photo3" />
          <div className="info">
            <h3>
              Bussiness<span>course</span>
            </h3>
            <h2>
              100 <small>topics</small>
            </h2>
          </div>
        </div>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  margin-bottom: 6rem;
  height: 590px;

  .left {
    grid-column: 1 / 6;
    display: flex;
    align-items: center;
    position: relative;
    height: 590px;

    header {
      padding-bottom: 10rem;
    }

    h1 {
      font-size: 76px;
    }

    form {
      width: fit-content;
      height: 120px;
      background: #fff;
      box-shadow: 0 46px 50px 0 rgb(0, 0, 0, 0.3);
      position: absolute;
      bottom: 40px;
      right: -60px;
      z-index: 10;
    }

    input {
      width: 330px;
      height: 40px;
      background: transparent;
      border: 0;
      padding-left: 3rem;
      font-family: inherit;
      font-size: 20px;
      color: #1e1e2f;

      &::placeholder {
        font-family: inherit;
        font-size: 20px;
        color: #1e1e2f;
      }

      &:focus {
        outline: none;

        &::placeholder {
          opacity: 0.4;
        }
      }
    }

    button {
      width: 120px;
      height: 120px;
      border: 0;
      font-size: 34px;
      color: #1e1e2f;
      background: #97c680;
      font-weight: bold;
      cursor: pointer;
    }
  }

  .right {
    grid-column: 6 / 13;
    display: flex;
    width: 100%;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: stretch;
    gap: 40px;
  }

  .img-container {
    overflow: hidden;
    flex: 1;
    position: relative;
    border-radius: 20px;
    height: 100%;
    transition: flex 0.3s ease-in-out;
    cursor: pointer;

    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      height: 200px;
      width: 100%;
      background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0.2) 20%,
        rgba(0, 0, 0, 0.85) 100%
      );
    }

    img {
      width: 100%;
      height: 100%;
      max-height: 590px;
      object-fit: cover;
    }

    .info {
      position: absolute;
      bottom: 100px;
      width: 100%;
      z-index: 3;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  h2 {
    display: none;
    color: #fff;
    font-size: 52px;
  }

  h3 {
    color: #fff;
    transition: transform 0.1s ease-in-out;
    font-size: 34px;
    transform: rotate(270deg);
  }

  .special {
    display: none;
  }

  span {
    display: none;
  }

  small {
    font-size: 14px;
    font-weight: 400;
    text-transform: uppercase;
  }

  .active {
    flex: 4;

    .info {
      justify-content: space-between;
      bottom: 60px;
    }

    h2 {
      display: flex;
      margin-right: 20px;
      flex-direction: column;
      align-items: center;
    }

    h3 {
      display: block;
      transform: rotate(360deg);
      margin-left: 20px;
    }

    .special {
      margin-left: 80px;
    }

    span {
      display: block;
    }
  }
`;
export default FindPassion;
