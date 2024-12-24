import UserInput from "./components/UserInput"
import Result from "./components/Result"
import { useState } from "react"

function App() {
  //const [investmentData, setInvestementData] = useState({})

    const [investmentData, setInvestmentData] = useState({
      initialInvestment:0,
      annualInvestment:0,
      expectedReturn:0,
      duration:0,
    })
  
  const [durationArray, setDurationArray] = useState([])
  
  return (
    <main>
      <UserInput setInvestmentObject={setInvestmentData } setDurationArr={setDurationArray} />
      <Result data={investmentData} duration={durationArray} />
    </main>
  )
}

export default App
