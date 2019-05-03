import React, { Component } from 'react'
import axios from 'axios'

export class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      myPosts: true,
      posts: []
    }
  }

  componentDidMount() {
    axios.get('/api/posts').then(res => {
      this.setState({ posts: res.data })
    })
  }
  
  render() {
    let displayPosts = this.state.posts.map((post, i) => {
      return (
        <p key={i}>Post Title: {post.title} -- Username: {post.username} -- Pic: {post.profile_pic}</p>
      )
    })
    return (
      <div>
        <input/>
        <button>Search</button>
        <button>Reset</button>
        My Posts: <input type="checkbox" onChange={() => this.setState({ myPosts: !this.state.myPosts })} value={this.state.myPosts}/>
        {displayPosts}
      </div>
    )
  }
}

export default Dashboard
