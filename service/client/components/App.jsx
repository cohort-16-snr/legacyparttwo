import React, { Component } from 'react';
import Cards from './Card.jsx';
import '../index.css';
import Outfit from './Outfit.jsx';
import ProdectDetails from './ProdectDetails.jsx';
import axios from 'axios'
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            data: [],
            outfitData:[]
        })
        this.check=this.check.bind(this)
        this.AddToOutfit=this.AddToOutfit.bind(this)
    }
    getdata() {
        var config = {
            method: 'get',
            url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products',
            headers: {
                'Authorization': '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'
            }
        };

        axios(config)
            .then((response) => {
                this.setState({
                    data: response.data
                })
            })
            .catch(function (error) {
                console.log(error);
            })
       .then()
    }
    check(){
   if(this.state.data.length>0){
       return  <Cards data={this.state.data} addOutfit={this.AddToOutfit}/>
   }
    }
    componentDidMount() {
        this.getdata()
    }
    AddToOutfit(event){
     var outfit = event.target.value;
     this.state.data.push(outfit)
    }
    render() { 
      return (
            <div>
               {this.check()}
                <Outfit />
                <ProdectDetails />
            </div>
        )
    }
}
