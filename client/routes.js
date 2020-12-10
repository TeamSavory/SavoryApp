import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import {
  Login,
  Signup,
  UserHome,
  Homepage,
  Recipe,
  RecipeForm,
  AllRecipes,
  SingleRecipe,
  AllDrafts,
  LoginSignup,
  MyBooks
} from './components'
import {me} from './store'

class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const {isLoggedIn} = this.props

    return (
      <Switch>
        <Route exact path="/" component={Homepage} />
        {/* available to all users */}
        <Route path="/loginsignup" component={LoginSignup} />
        {/* <Route path="/login" component={LoginSignup} />
        <Route path="/signup" component={LoginSignup} /> */}
        {isLoggedIn && (
          <Switch>
            {/* only available after logging in */}
            <Route exact path="/recipes" component={Recipe} />
            <Route path="/recipeform" component={RecipeForm} />
            <Route path="/myrecipes" component={AllRecipes} />
            <Route path="/home" component={UserHome} />
            <Route path="/drafts" component={AllDrafts} />
            <Route path="/books" component={MyBooks} />

            <Route
              path="/recipes/:recipeId"
              render={routeProps => <SingleRecipe {...routeProps} />}
            />
          </Switch>
        )}

        <Route component={Login} />
      </Switch>
    )
  }
}

const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    }
  }
}

export default withRouter(connect(mapState, mapDispatch)(Routes))

Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
