import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'
import { getData } from './../../ducks/reducer'

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    this.props.getData()
  }


  render() {
    console.log(this.props.user)
    return (
      <div>
          <Link to='/dashboard'>Home</Link>
          <Link to='/new'>New Post</Link>
          <Link to='/'>Logout</Link>
      </div>
    )
  }
}

function mapStateToProps(reduxStoreState) {
  return {
    user: reduxStoreState.user
  };
}

export default withRouter(connect(mapStateToProps, { getData })(Nav));

