import React, {Component} from 'react'
import Product from './Dashboard components/Product'
import axios from 'axios';

export default class Dashboard extends Component{

    delete = (id) => {
        axios.delete(`/api/shelfie/${id}`).then(res => {
            res.status(200)
            this.props.get()
        }).catch(err => `Error found: ${err}`)

        
    }
    
    render(){
        let {inventory} = this.props
        return(
            <div>
                Dashboard
                {inventory.map(item => {
                    return <Product 
                    key={item.product_id}
                    item={item}
                    delete={this.delete}
                    select={this.props.select}
                    />
                })}
            </div>
        )
    }
}