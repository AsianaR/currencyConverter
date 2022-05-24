import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { _apiBase } from "../apiSettings";
import "normalize.css";
import Header from "./Header";
import Converter from "./Converter";

const AppWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background: linear-gradient(
    90deg,
    hsla(286, 75%, 56%, 1) 0%,
    hsla(386, 75%, 56%, 1) 100%
  );
`;

const Content = styled.div`
  position: relative;
  height: 450px;
  width: 50vh;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Button = styled.button`
  position: absolute;
  bottom: 25px;
  left: 50%;
  transform: translate(-50%, 0);
  display: inline-block;
  outline: 0;
  cursor: pointer;
  border: none;
  padding: 0 56px;
  height: 45px;
  line-height: 45px;
  border-radius: 7px;
  background: linear-gradient(
    270deg,
    hsla(286, 75%, 56%, 1) 0%,
    hsla(386, 75%, 56%, 1) 100%
  );
  color: white;
  font-weight: 400;
  font-size: 16px;
  transition: background 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;
  :hover {
    background: linear-gradient(
      310deg,
      hsla(286, 75%, 56%, 1) 0%,
      hsla(386, 75%, 56%, 1) 100%
    );
  }
`;

function App() {
  const [data, setData] = useState(1);

  useEffect(() => {
    sendRequest();
  }, []);

  const sendRequest = () => {
    axios
      .get(_apiBase)
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <AppWrapper>
      <Content>
        <Header data={data} />
        <Converter data={data} />
        <Button onClick={() => sendRequest}>REFRESH</Button>
      </Content>
    </AppWrapper>
  );
}

export default App;
