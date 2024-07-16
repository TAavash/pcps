import React from 'react'
import EventHandling from './EventHandling'

const EventFunctionProps = () => {
    const handleClick = () => {
        alert("Button clicked!");
        }
  return (
     <EventHandling onButtonClick={handleClick} />
  )
}

export default EventFunctionProps