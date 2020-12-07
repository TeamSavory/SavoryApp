import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {firstName, lastName, email} = props

  return (
    <div>
      {firstName ? <h3>Welcome, {email}</h3> : <h3>Welcome!</h3>}
      <h3>Account Info:</h3>
      <span>First Name: {firstName}</span>
      <span>Last Name: {lastName}</span>
      <span>Email: {email}</span>
      <span>Password: (hidden)</span>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email,
    firstName: state.user.firstName,
    lastName: state.user.lastName
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
