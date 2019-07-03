import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <img src="https://i.imgur.com/KDIDiSE.png" />
          <div>
            <span><strong>Meu Perfil</strong></span>
            <i className="material-icons">account_circle</i>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;