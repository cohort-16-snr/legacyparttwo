import React, { Component } from 'react';
import Cards from './Card.jsx';
import '../index.css';
import Outfit from './Outfit.jsx';
import ProdectDetails from './ProdectDetails.jsx';

export default class App extends Component {
    constructor(props){
        super(props);      
    }
    render() {
        return (
            <div>
              <Cards/>
              <Outfit />
              <ProdectDetails />
            </div>
        )
    }
}
