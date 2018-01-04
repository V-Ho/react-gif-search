import React from 'react';
import SearchBar from './SearchBar'
import GifList from './GifList'
// import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      gifs: [
        { id: 1,
          url: 'www.fakeurl.com/1'
        },
        { id: 2,
          url: 'www.fakeurl.com/2'
        },
        { id: 3,
          url: 'www.fakeurl.com/3'
        }
      ]
    }
  }

  handleTermChange(term) {
    console.log(term)
  }

  render() {
    return (
      <div>
        <SearchBar onTermChange={this.handleTermChange}/>
        <GifList gifs={this.state.gifs}/>
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

- App passes data to GifList via props

*/
