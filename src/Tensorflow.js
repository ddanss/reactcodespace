import React from 'react';
import './App.css';

class Tensorflow extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            <button onClick={this.getHeadlines}>
              TSFLOW
            </button>
          </p>
        </header>
      </div>
    );
  }
}
export default Tensorflow;
