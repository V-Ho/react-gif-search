import React from 'react';
import SearchBar from '../components/SearchBar'
// import './App.css';

class App extends React.Component {
  handleTermChange(term) {
    console.log(term)
  }

  render() {
    return (
      <div>
        <SearchBar onTermChange={this.handleTermChange}/>
      </div>
    )
  }
}

export default App;

/*
- App component renders SearchBar component with a prop of OnTermChange,
passing in handleTermChange
- SearchBar calls constructor() upon initialisation, setting state with
an empty string
- Each time user inputs or deletes text, onChange is called, passing in
event object as argument to onInputChange
- SearchBar's onInputChange calls this.setState to update the state's term property,
and also calls handleTermChange which is passed through the onTermChange prop


*/
