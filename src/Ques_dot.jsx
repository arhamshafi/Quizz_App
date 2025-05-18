import React from 'react';
import styled from 'styled-components';

const Quest_dot = () => {
  return (
    <StyledWrapper>
      <span className="loader" />
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .loader {
    display: block;
    width: 20px;
    height: 20px;
    position: relative;
  }

  .loader:before , .loader:after {
    content: "";
    position: absolute;
    left: 50%;
    top: 0;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background:rgb(37, 99, 255);
    transform: translate(-50% , -100%)  scale(0);
    animation: push_401 2s infinite linear;
  }

  .loader:after {
    animation-delay: 1s;
  }

  @keyframes push_401 {
    0% , 50% {
      transform: translate(-50% , 0%)  scale(1)
    }

    100% {
      transform: translate(-50%, -100%) scale(0)
    }
  }`;

export default Quest_dot;
