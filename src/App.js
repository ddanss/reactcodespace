import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {headline: "CAT"};
    // this.getHeadlines();
  }

  getHeadlines = async () => {
    const response = await fetch("https://api.thecatapi.com/v1/images/search");
    const responseJson = await response.json();
    this.setState(_ => ({
      headline: responseJson
    }));
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            <button onClick={this.getHeadlines}>
              Get Random Cat
            </button>
          </p>
          <p className="small">
            {this.state.headline[0].url ? JSON.stringify(this.state.headline[0].url) : ""}
          </p>
          {this.state.headline == "CAT" ? "" : 
            <img
              src={this.state.headline[0].url}
              alt="new"
            />
          }
        </header>
      </div>
    );
  }
}
export default App;
