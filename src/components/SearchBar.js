import React from 'react'

class SearchBar extends React.Component {
  constructor() {
    super()
    this.state = { term: ''}  //initialise state with empty string, which we'll update through the input field
  }

  onInputChange(term) {
    this.setState({term})
    this.props.onTermChange(term)
  }

  render(){
    return(
      <div className="search">
        <input onChange={event => this.onInputChange(event.target.value)} />
      </div>

    )
  }
}

export default SearchBar

/*
Everytime we update our input, onChange event automatically fires and passes the input value to onInputChange()

We pass data from our child component SearchBar to parent App through props(term)


*/
