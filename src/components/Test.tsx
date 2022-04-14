import React from 'react'
import 'styles/Test.css'

const Test = () => {
  return (
    <div>
      <div className="can-toggle">
        <input id="a" type="checkbox" />
        <label htmlFor="a">
          <div
            className="can-toggle__switch"
            data-checked="On"
            data-unchecked="Off"
          ></div>
          <div className="can-toggle__label-text">.can-toggle</div>
        </label>
      </div>
    </div>
  )
}

export default Test
