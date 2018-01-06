import React, { Component } from 'react';
import SearchBar from './SearchBar'
import GifList from './GifList'
import axios from 'axios'
import '../styles/App.css'


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      gifs: []
    }

    this.handleTermChange = this.handleTermChange.bind(this)
  }

  handleTermChange(term) {

    axios.get('http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=rcTBZeNohHwlWFGmvBj0xebOmhx6S6UN')
      // .then(res => {
      //   console.log(res.data.data[0].images)
      // })
      .then(res => {
        this.setState({ gifs: res.data.data})
      })
      .catch(error => {
        console.log('error :', error)
      })
    console.log('term', term)

  }

  render() {
    return (
      <div style={{backgroundColor: "aquamarine"}}>
        <div>
          <SearchBar onTermChange={ term => this.handleTermChange(term)}/>
          <GifList gifs={this.state.gifs}/>
        </div>
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
- we call this.setState during onTermChange, but it doesn't have access to the react
methods inherited by App component, need to update it 2 places:
    - constructor: this.handleTermChange = thisHandleTermChange
    - handler in Searchbar term => this.handleTermChange(term)

*/
