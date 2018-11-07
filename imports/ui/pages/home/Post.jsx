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

  renderDeleteButton () {
    const emailNow = Meteor.user().emails[0].address;
    if (this.props.post.email === emailNow) {
      return (
        <div><button onClick={()=>this.deleteHandler(this.props.post._id)}>delete</button></div>
      )
    }else {
      return  <div></div>
    }
  }

  render() {
    return (
        <section className="notice">
            <div>{this.props.post.name}  ({this.props.post.email}) </div>
            <div>{this.props.post.description}</div>
            <div>{this.props.post.cost}</div>
            {this.renderDeleteButton()}
        </section>
    );
  }
}