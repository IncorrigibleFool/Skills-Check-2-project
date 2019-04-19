import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import Form from './components/Form'

class App extends Component {
  constructor(){
    super()

    this.state = {
      inventory: [],
      selectedItem: null
    }

    this.selectItem = this.selectItem.bind(this)
  }

  componentDidMount(){
    axios.get('/api/shelfie').then(res =>{
      this.setState({
        inventory: res.data
      })
    }).catch(err => console.log(`Error found: ${err}`))
  }

  selectItem(id) {
    this.setState({
      selectedItem: id
    })
  }

  // componentDidUpdate(){
  //   axios.get('/api/shelfie').then(res =>{
  //     this.setState({
  //       inventory: res.data
  //     })
  //   }).catch(err => console.log(`Error found: ${err}`))
  // }
  
  render() {
    return (
      <div className="App">
        <Header/>
        <Dashboard 
          inventory={this.state.inventory}
          get={this.componentDidMount()}
          select={this.selectItem}/>
        <Form
          item={this.state.selectedItem}
          inventory={this.state.inventory}/>
      </div>
    );
  }
}

export default App;
