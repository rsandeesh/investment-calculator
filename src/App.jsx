import Header from "./components/Header";
import UserInput from "./components/UserInput";
import { useState } from "react";

const ANNUAL_INVESTMENT_DATA = {
  initialInvestment: 0,
  annualInvestment: 0,
  expectedReturn: 0,
  duaration: 0,
};

function App() {
  const [annualInvestmentData, setAnnualInvestmentData] = useState(
    ANNUAL_INVESTMENT_DATA
  );
  const handleInvestmentData = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setAnnualInvestmentData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <>
      <Header />
      <UserInput handleInvestmentData={handleInvestmentData} />
    </>
  );
}

export default App;
