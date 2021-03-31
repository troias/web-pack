import React, { Component } from 'react';
import PizzaImage from '../components/PizzaImage'

class  Pizza extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div>
                <h1> The Pizza </h1>
                <PizzaImage/> 
            </div>
        );
    }
}
 
export default ;