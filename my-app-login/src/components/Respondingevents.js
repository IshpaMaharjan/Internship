import React from 'react'

function Respondingevents() {
  function handleClick() {
    alert('You clicked me!');
  }
return (
  <div>
    <button onClick={handleClick}>I'm a button.</button>
  </div>
)
}

export default Respondingevents