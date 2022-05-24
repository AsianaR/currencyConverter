import React, { useState, useEffect} from "react";
import styled from "styled-components";
import Select from "react-select";
import useExchangeConverter from "../useExchangeConverter";

const options = [
  { value: "UAH", label: "UAH" },
  { value: "USD", label: "USD" },
  { value: "EUR", label: "EUR" },
];

const ConverterWrapper = styled.div`
  border-top: solid 5px white;
  padding-top: 50px;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

const StyledInput = styled.input`
  margin-left: 15px;
  padding: 0 10px;
`;

const Converter = ({ data }) => {

  const [firstValue, setFirstValue] = useState();
  const [secondValue, setSecondValue] = useState();
  const [firstCurrency, setFirstCurrency] = useState();
  const [secondCurrency, setSecondCurrency] = useState(); 
  const {convert} = useExchangeConverter(data);

  useEffect(() => {
    clearFields();
  
  
  }, [firstCurrency,secondCurrency])
  
  const clearFields = () => {
    setFirstValue('');
    setSecondValue('');
  };

  const convertValue = (value, fieldId) => {
    if (fieldId === 1){
      setFirstValue(value);
      setSecondValue(convert(value, firstCurrency, secondCurrency));
      }

    else{
      setSecondValue(value);
      setFirstValue(convert(value, secondCurrency, firstCurrency));
      }
  };

  return (
    <ConverterWrapper>
      <Box>
        <Select options={options}  onChange={e => setFirstCurrency(e.value)}/>
        <StyledInput type="text" name="name" value={firstValue} onChange={e => convertValue(e.target.value, 1)}/>
      </Box>
      <Box>
        <Select options={options} onChange={e => setSecondCurrency(e.value)}/>
        <StyledInput type="text" name="name" value={secondValue} onChange={e => convertValue(e.target.value, 2)}/>
      </Box>
    </ConverterWrapper>
  );
};

export default Converter;
