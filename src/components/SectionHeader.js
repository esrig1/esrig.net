import "./SectionHeader.css"
import React, {Component} from 'react'

class SectionHeader extends Component {
  render() {
    return (
        <div className="section-header">
            <h1>{this.props.heading}</h1>
        </div>
        )
    }
}

export default SectionHeader
