import React from 'react';
import styled from 'styled-components';

const Question_anime = ({ style }) => {
  return (
    <StyledWrapper style={{ style }}>
      <div className="hole">

        <i />
        <i />
        <i />
        <i />
        <i />
        <i />
        <i />
        <i />
        <i />
        <i />
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .hole {
    display: flex;
    align-items: center;
    justify-content: center;
    opacity:.5 ;
  }

  i {
    display: block;
    position: absolute;
    width: 80px;
    height: 30px;
    border-radius: 140px;
    opacity: 0;
    animation-name: scale;
    animation-duration: 5s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

    i:nth-child(1) {
    animation-delay: 0.5s;
  }

  i:nth-child(2) {
    animation-delay: 1s;
  }

  i:nth-child(3) {
    animation-delay: 1.5s;
  }

  i:nth-child(4) {
    animation-delay: 2s;
  }

  i:nth-child(5) {
    animation-delay: 2.5s;
  }

  i:nth-child(6) {
    animation-delay: 3s;
  }

  i:nth-child(7) {
    animation-delay: 3.5s;
  }

  i:nth-child(8) {
    animation-delay: 4s;
  }

  i:nth-child(9) {
    animation-delay: 4.5s;
  }

  i:nth-child(10) {
    animation-delay: 5s;
  }


  @keyframes scale {
    0% {
      transform: scale(4);
      opacity: 0;
      box-shadow: 0px 0px 50px rgba(255, 255, 255, 0.5);
    }
    50% {
      transform: scale(1) translate(0px, -5px);
      opacity: 1;
      box-shadow: 0px 8px 20px rgba(255, 255, 255, 0.5);
    }
    100% {
      transform: scale(0.3) translate(0px, 5px);
      opacity: 0;
      box-shadow: 0px 10px 20px rgba(255, 255, 255, 0);
    }
  }`;

export default Question_anime;
