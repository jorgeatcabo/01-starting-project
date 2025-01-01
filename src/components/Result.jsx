import React from 'react'

export default function Result({ data, duration }) {

console.log(duration)
  return (
    <>
          <table id="result">
          <thead>
            <tr>
                <th key="year">Year</th>
            <th key="investment">Investment Value</th>
                <th key="interest">Interest(Year)</th>
                <th key="total">Total Interest</th>
            <th key="invested">Invested Capital</th>                  
            </tr>
              </thead>
          <tbody>
            {duration.map((row, rowIndex)=>
            <tr key={rowIndex}>
                <td>{row.year}</td>
                <td>{row.valueEndOfYear}</td>
                
            </tr>
            )}
          </tbody>
        </table>
      </>
  )
}
