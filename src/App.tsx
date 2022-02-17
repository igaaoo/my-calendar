import './App.css'
import Days from '../src/components/Days'
import '../src/styles/days.css'
import React from 'react'
import { useState } from 'react'

export default function App() {
  const days = 31

  return (
    <div className="main">
      <div className="headerCalendar">
        <div className="bg-image"></div>
        <div className="bg-text">
          <h1>MY CALENDAR</h1>
        </div>
      </div>

      <div className="calendar">
        {[...Array(days)].map((e, i) => (
          <Days valor={i} />
        ))}
      </div>
    </div>
  )
}
