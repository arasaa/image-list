import React from 'react'
import SearchInput from './SearchInput'
import axios from 'axios'
import Images from './Images'


class App extends React.Component {

    constructor(props) {
        super(props)
        this.onSearchSubmit = this.onSearchSubmit.bind(this)
        this.state = {images: []}
    }
    async onSearchSubmit(entry) {
    
      const response = await axios.get(`https://pixabay.com/api/?key=25388383-26811d3c8ac7d808a08cafc91&q=${entry}&image_type=photo`)
      this.setState({images: response.data.hits})
    }

    render() {
    return(
        <div className="ui container" style={{marginTop: '30px'}}>
            <SearchInput onSearchSubmit={this.onSearchSubmit} />
            <Images images = {this.state.images} />
        </div>
    )
}
}
export default App