import React from 'react'

function Props(props) {
  return (
    <div>
        <h1>{props.name}</h1>
    </div>
  )
}

function Lok() {
  return (
    <div>
        <Props name="Lokesh"/>
    </div>
  )
}

export default Lok