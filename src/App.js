import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import Story from './components/Story';

const API_KEY = "ARuCoAhGryJsCNl6mLb7tzn2GUAG5DGC";
//const API_KEY_SECRET = "TNkVl2bwRAoVUPj9";

class App extends Component {
  state = {
    stories: []
  };

  setRef = (ref) => {
      this.select = ref;
  }

  getTopStories = async (e) => {
    e.preventDefault();
    const category = this.select.value;
    const api_call = await fetch(`https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=${API_KEY}`);
    
    const data = await api_call.json();
    console.log(data.results);
    this.setState({ stories: data.results });
    
  }

  render(){
    return (
      <div className="App">
        <Header/>
        <Form getTopStories={this.getTopStories} setRef={this.setRef}/>
        <Story stories={this.state.stories} />
      </div>
    );
  }
}
export default App;