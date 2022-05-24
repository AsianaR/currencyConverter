const useExchangeConverter = (data)  => {


    const convert = (value, inputCurrency, outputCurrency) => {
      switch(outputCurrency){
        case 'UAH':
          return toUAH(value, inputCurrency);

        case 'USD':
          return toUSD(value, inputCurrency);

        case 'EUR':
          return toEUR(value, inputCurrency);
      }
    }


    const toUAH = (value, inputCurrency) => {
        switch(inputCurrency){
          case 'USD' :
            return value * data[0].buy;
         
          case 'EUR':
            return value * data[1].buy;
       
          default:
            return value;
        }
      };
    
      const toEUR = (value, inputCurrency) => {
        switch(inputCurrency){
          case 'UAH' :
            return value / data[1].buy;
         
          case 'USD':
            return value * data[0].buy / data[1].buy;
       
          default:
            return value;
        }
      };
    
      const toUSD = (value, inputCurrency) => {
        switch(inputCurrency){
          case 'UAH' :
            return value / data[0].buy;
         
          case 'EUR':
            return value * data[1].buy / data[0].buy;
       
          default:
            return value;
        }
      };

      return {
          toEUR,
          toUAH,
          toUSD,
          convert,
      };
}

export default useExchangeConverter;