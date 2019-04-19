import React, {Component} from 'react'
import axios from 'axios';

export default class Form extends Component{
    constructor(){
        super()

        this.state = {
            name: '',
            price: 0,
            imageurl: ''
        }
    }

    changeUrl = (event) => {
        let {value} = event.target
        this.setState({
            imageurl: value
        })
    }

    changeName = (event) => {
        let {value} = event.target
        this.setState({
            name: value
        })
    }

    changePrice = (event) => {
        let {value} = event.target
        this.setState({
            price: value
        })
    }

    cancel = () => {
        this.setState({
            name: '',
            price: 0,
            imageurl: ''
        })
    }

    add = () => {
        let {name, price, imageurl} = this.state
        let product= {name: name, price: price, imageurl: imageurl}
        axios.post('/api/shelfie', product).then(res => {
            res.sendStatus(200)
            this.setState({
                name: '',
                price: 0,
                imageurl: ''
            })
        }).catch(err => console.log(err))

        
    }
    
    render(){
        return(
            <div>
                <span>Image URL:</span>
                <input value={this.state.imageurl} onChange={this.changeUrl}/>
                <span>Product Name:</span>
                <input value={this.state.name} onChange={this.changeName}/>
                <span>Price:</span>
                <input value={this.state.price} onChange={this.changePrice}/>
                <button onClick={this.cancel}>Cancel</button>
                <button onClick={this.add}>Add to Inventory</button>
            </div>
        )
    }
}