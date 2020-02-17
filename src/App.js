import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      menuOpen: false
    }
  }
  handleClick = () => {
    this.setState({menuOpen: !this.state.menuOpen})
  }

  render() {
    return (
      <div>
        <nav>
          <h2>Start Bootstrap</h2>
          <ul className='links'>
            <li>SERVICES</li>
            <li>PORTFOLIO</li>
            <li>ABOUT</li>
            <li>TEAM</li>
            <li>CONTACT</li>
          </ul>
          <img onClick={this.handleClick} src="https://img.icons8.com/pastel-glyph/2x/hamburger.png" />
        </nav>
        <menu className={this.state.menuOpen === true ? "menu-open" : ""}>
          <ul>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>SERVICES</li>
            <li>CONTACT</li>
          </ul>
        </menu>
      </div>

    );
  }
}
export default App;
