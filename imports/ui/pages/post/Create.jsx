import React from 'react';
import create from './create.css';
import { Posts } from '../../../api/posts.js';
export default class Create extends React.Component {

  constructor() {
    super();
    this.state = {
      name: '',
      description: '',
      cost: 0,
    };
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  addPost (event) {
    event.preventDefault();
    const email = Meteor.user().emails[0].address;
    const { name, description, cost } = this.state;
    if (name && description && (cost>0)) {
      Posts.insert({ name, description, cost, email })
      this.props.history.push("/")
    }
  }

  render() {
    const { name, description, cost } = this.state;
    return (
      <section id="createpost">
        <div>
          <h4>Залишіть свою заявку</h4>
        </div>
        <main>
          <div>
            <input name="name" value={name} onChange={this.onChange} type="text" placeholder="Введите свое имя"/>
          </div>
          <div>
            <textarea name="description" value={description} onChange={this.onChange} id="" cols="30" rows="10" placeholder="Введите описание товара"></textarea>
          </div>
          <div>
            <input name="cost" value={cost} onChange={this.onChange} type="number"/>
          </div>
          <div><button onClick={this.addPost.bind(this)}>Отправыть на доску</button></div>
        </main>    
      </section>
    );
  }
}