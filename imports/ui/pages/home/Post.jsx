import React, { Component } from 'react';
import { Posts } from '../../../api/posts.js'; 
export default class Post extends Component {

  constructor(props) {
    super(props);
    this.deleteHandler.bind(this)
  }

  deleteHandler(id) {
    Posts.remove(id);
  }

  render() {
    return (
        <section className="notice">
            <div>{this.props.post.name}</div>
            <div>{this.props.post.description}</div>
            <div>{this.props.post.cost}</div>
            <div><button onClick={()=>this.deleteHandler(this.props.post._id)}>delete</button></div>
        </section>
    );
  }
}