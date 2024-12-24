import React from 'react'

export default function Result({data,duration}) {
  return (
    <>
      <p>{data.initialInvestment}</p>
      <p>{data.annualInvestment}</p>
      <p>{data.expectedReturn}</p>
      <p>{data.duration}</p>

      
          <table id="result">
          <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest(Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>                  
            </tr>
              </thead>
          <tbody>
            {duration.map((row, rowIndex)=>
            <tr>
                <td>{row}</td>
            </tr>
            )}
          </tbody>
        </table>
      </>
  )
}
