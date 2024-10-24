import React from 'react'

function EventHandling() {
  const onClicked = ()=>{
    alert("button clicked")
  }
  return (
    <div>
      <button onClick={onClicked}>click</button>
    </div>
  )
}

export default EventHandling