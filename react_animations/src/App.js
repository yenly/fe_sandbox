// Libs
import React, { Component } from 'react';
import { render } from 'react-dom';
import { CSSTransitionGroup } from 'react-transition-group';

// CSS
import './css/style.css';

// Panel

class Panel extends Component {
  render() {
    return (
      <CSSTransitionGroup
        transitionName="panel"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}
        transitionAppear={true}
        transitionAppearTimeout={500}>
        <div className="panel">Testing Panel</div>
      </CSSTransitionGroup>
    );
  }
}

// Component
class GuestList extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      names: [
        { name: 'Joel' },
        { name: 'Alena' },
        { name: 'Andrew' },
        { name: 'Thera' }
      ]
    }
  }

  handleChange(event) {
    if(event.key == 'Enter') {
      let newName = { name: event.target.value }
      let newNames = this.state.names.concat(newName);
      event.target.value = '';
      this.setState({ names: newNames });
    }
  }

  handleRemove(i) {
    var newNames = this.state.names;
    newNames.splice(i, 1);
    this.setState({ names: newNames });
  }

  render() {
    let guests = this.state.names.map((name, i) => (
      <li key={name.name}>
        {name.name}
        <button onClick={this.handleRemove.bind(this, i)}>Remove</button>
      </li>
    ));

    return (
      <div className="guest-list">
        <h1>Guest List</h1>
        <input type="text" placeholder="Invite Someone" value={this.state.newName} onKeyDown={this.handleChange.bind(this)} />
        <Panel />
        <CSSTransitionGroup
          component="ul"
          transitionName="slide"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
          transitionAppear={true}
          transitionAppearTimeout={300}>

          {guests}

        </CSSTransitionGroup>
      </div>
    );
  }
}

render(
  <GuestList />,
  document.getElementById('root')
);
