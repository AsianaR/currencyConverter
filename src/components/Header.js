import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { _apiBase } from "../apiSettings";

const StyledUl = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  justify-content: space-around;
  padding-top: 10px;
  padding-left: 0px;
  color: #3c3c3c;
`;

export const Header = ({data}) => {
  const buyUSD = parseFloat(data[0]?.buy).toFixed(2);
  const buyEUR = parseFloat(data[1]?.buy).toFixed(2);
  const saleUSD = parseFloat(data[0]?.sale).toFixed(2);
  const saleEUR = parseFloat(data[1]?.sale).toFixed(2);

  return (
    <>
      <StyledUl>
        <li><strong>Buy:</strong></li>
        <li>{buyUSD}/USD</li>
        <li>{buyEUR}/EUR</li>
      </StyledUl>
      <StyledUl>
        <li><strong>Sale:</strong></li>
        <li>{saleUSD}/USD</li>
        <li>{saleEUR}/EUR</li>
      </StyledUl>
    </>
  );
};

export default Header;
