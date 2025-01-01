import UserInput from "./components/UserInput"
import Result from "./components/Result"
import { useState } from "react"
import { calculateInvestmentResults,formatter } from './util/investment'

function App() {
  //const [investmentData, setInvestementData] = useState({})

    const [investmentData, setInvestmentData] = useState({
      initialInvestment:0,
      annualInvestment:0,
      expectedReturn:0,
      duration: 0,
      durationArray:[],
    })
  
  const [durationArray, setDurationArray] = useState([])
  const [investmentResultsArray, setInvestmentResultsArray] = useState([]);
  
  return (
    <main>
      <UserInput setInvestmentObject={setInvestmentData} setInvestmentResults={ setInvestmentResultsArray} data={investmentData}  />
      <Result data={investmentData} duration={calculateInvestmentResults(investmentData)} />
    </main>
  )
}

export default App
