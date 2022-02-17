import './App.css'
import Days from '../src/components/Days'
import '../src/styles/days.css'
import React from 'react'
import { useState } from 'react'

export default function App() {
  let dt = new Date()
  let year = dt.getFullYear()
  let month = dt.getMonth()

  console.log(year)
  console.log(month + 1)

  function daysInMonth(year: number, month: number) {
    return new Date(year, month, 0).getDate()
  }

  let daysValue = daysInMonth(year, month + 1)

  let daysArray = new Array()

  for (let i = 1; i <= daysValue; i++) {
    daysArray.push(i)
  }

  return (
    <div className="main">
      <div className="headerCalendar">
        <div className="bg-image"></div>
        <div className="bg-text">
          <h1>MY CALENDAR</h1>
        </div>
      </div>

      <div className="calendar">
        {daysArray.map((days, day) => (
          <Days valor={days} />
        ))}
      </div>
    </div>
  )
}
