import "./OtherImg.css"

import React, {Component} from 'react'

class OtherImg extends Component {
  render() {

  return (
    <div className="other-hero-img">
      <div className="heading">
        <h1>{this.props.heading}</h1>
        <p>{this.props.text}</p>
      </div>
    </div>
  )
}
}

export default OtherImg

