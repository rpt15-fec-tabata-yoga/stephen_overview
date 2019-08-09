import React from 'react';
import Overview from './Overview.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <Overview />
      </div>
    )
  }
}

export default App;