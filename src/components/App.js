import React from 'react';
import SearchBar from './SearchBar'
import GifList from './GifList'
import axios from 'axios'
// import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      gifs: []
    }

    // this.handleTermChange = this.handleTermChange.bind(this)
  }

  handleTermChange(term) {

    axios.get('http://api.giphy.com/v1/gifs/search?q=${term}&api_key=dc6zaTOxFJmzC')

      // .catch(error => {
      //   console.log('error :', error)
      // })
      .then(res => {
        console.log(res.data.data[0].images)
      })
    console.log('term', term)

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
