// import PropTypes from 'prop-types';
import { Component } from 'react'
// import css from './Section.module.css'

class Section extends Component {
    render() {
        const {title, children} = this.props
        return( <>
         <h2>{title}</h2>
        {children}
        </>
        )
    }
}

export default Section