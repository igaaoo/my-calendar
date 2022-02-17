import '../styles/days.css'
import React from 'react'
import PropTypes from 'prop-types'

interface Day {
  valor: number
}

export default function Days(props: Day) {
  return (
    <>
      <div className="days">
        <p>January</p> <h2>{props.valor}</h2>
      </div>
    </>
  )
}
