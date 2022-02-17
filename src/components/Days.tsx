import '../styles/days.css'
import React from 'react'
import PropTypes from 'prop-types'

interface Day {
  day: number
  month: string
}

export default function Days(props: Day) {
  let dt = new Date()
  let actualDay = dt.getDate()

  if (props.day != actualDay) {
    return (
      <>
        {
          <div className="days">
            <p>{props.month}</p> <h2>{props.day}</h2>
          </div>
        }
      </>
    )
  } else {
    return (
      <>
        {
          <div className="actualDay">
            <p>{props.month}</p> <h2>{props.day}</h2>
          </div>
        }
      </>
    )
  }
}
