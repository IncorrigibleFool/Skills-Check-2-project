import React, {Component} from 'react'
import './Product.css'

export default class Product extends Component{
    render(){
        let {item} = this.props
        let {image_url, product_name, product_price, product_id} = item
        return(
            <div>
                <img id='image' src={image_url} alt='url invalid'/>
                <span>{product_name}</span>
                <span>{product_price}</span>
                <button onClick={() => this.props.select(product_id)}>Edit</button>
                <button onClick={() => this.props.delete(product_id)}>Delete</button>
            </div>
        )
    }
}