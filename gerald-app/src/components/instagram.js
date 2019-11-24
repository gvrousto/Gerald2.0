import React from 'react';

class Instagram extends React.Component {

  componentDidMount(){
    window.close();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Authorized
          </p>
        </header>
      </div>
    );
  }
}

export default Instagram;
