import React, { Component } from 'react'
import axios from 'axios'

export class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: this.props.posts
    }
  }
  componentDidMount() {
    axios.get(`https://localhost:3000/post/${this.props.match.params.id}`).then(res => {
      this.setState({ posts: res.data })
    })
  }
  render() {
    console.log(this.props.match.params)
    return (
      <div>
       
      </div>
    )
  }
}

export default Post
