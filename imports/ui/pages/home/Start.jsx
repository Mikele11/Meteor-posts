import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Posts } from '../../../api/posts.js';
import Post from './Post.jsx';
import create from './start.css';
 
class Start extends Component {
  renderPosts() {
    return this.props.posts.map((post) => (
      <Post 
        key={post._id}
        post={post} />
    ));
  }

  render() {
    return (
      <div className="container">
        <div>
          <h1>Пропозиції</h1>
        </div>
        <ul>
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

export default withTracker(() => {
  return {
    posts: Posts.find({}).fetch(),
  };
})(Start);
