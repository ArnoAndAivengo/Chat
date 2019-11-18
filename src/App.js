import React, { Component } from 'react';
import { Button } from 'components';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <h1>Hello</h1>
        <Button type="primary" size="large">Button</Button>
      </div>
    );
  }
}

export default App;
