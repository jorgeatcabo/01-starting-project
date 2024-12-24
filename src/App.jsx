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
  return (
    <main>
      <UserInput onChangeValue={investmentData} setInvestmentObject={setInvestmentData } />
      <Result data={investmentData} />
    </main>
  )
}

export default App
