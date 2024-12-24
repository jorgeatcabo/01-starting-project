import React from 'react'

export default function Result({data}) {
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
            <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
                <td>Maria Anders</td>
                <td>Germany</td>                  
            </tr>
            </tbody>
        </table>
      </>
  )
}
