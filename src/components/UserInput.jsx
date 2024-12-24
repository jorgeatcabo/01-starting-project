import React from 'react'
import { useState } from "react"
import { calculateInvestmentResults,formatter } from '../util/investment'


export default function UserInput({ setInvestmentObject,setDurationArr }) {
  
  const [initial, setInitial] = useState(0)
  const [annual, setAnnual] = useState(0)
  const [expected, setExpected] = useState(0)
  const [duration, setDuration] = useState(0)
  
  const onChangeInitial = (event) => {
    setInitial(event.target.value); 
    setInvestmentObject((initial) => ({ ...initial, initialInvestment: event.target.value }));
  }

  const onChangeAnual = (event) => {
    setAnnual(event.target.value); 
    setInvestmentObject((annual) => ({ ...annual, annualInvestment: event.target.value }));
  }

  const onChangeExpected = (event) => {
    setExpected(event.target.value);
    setInvestmentObject((expected) => ({ ...expected, expectedReturn: event.target.value }));
  }

  const onChangeDuration = (event) => {
    setDuration(event.target.value); 
    setInvestmentObject((duration) => ({ ...duration, duration: event.target.value }));
    function createArray(N) {
      return [...Array(N).keys()].map(i => i + 1);
    }
    console.log(event.target.value)
    let arr = createArray(event.target.value);
    setDurationArr(arr);
  }

  return (
    <div id='user-input'>
      <div class="input-group">
        <label for="initial">Initial Investment
          <input type="number" name="initial" id="initial" value={initial} onChange={onChangeInitial} />
        </label>
        <label for="annual">Annual Investment
          <input type="number" name="annual" id="annual" value={annual} onChange={onChangeAnual}/>
        </label>
      </div>
      <div class="input-group">
        <label for="expected">Expected Return
          <input type="number" name="expected" id="expected" value={expected} onChange={onChangeExpected} />
        </label>
        <label for="duration">Duration
          <input type="number" name="duration" id="duration" value={duration} onChange={onChangeDuration} /> 
        </label>  
      </div>
    </div>
  )
}
