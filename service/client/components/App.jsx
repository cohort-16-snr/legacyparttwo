import React, { Component } from 'react';
import Cards from './Card.jsx';
import '../index.css';
import Outfit from './Outfit.jsx';
import axios from 'axios'
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            data: [],
            outfitData: []
        })
        this.check = this.check.bind(this);
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
            .then(response => {
                response.data.map(element => {
                    var configuration = {
                        method: 'get',
                        url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/' + element.id + '/styles',
                        headers: {
                            'Authorization': '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'
                        }
                    };
                    axios(configuration)
                        .then(response=> {
                            this.setState({
                                data: response.data.results
                            })
                        })
                        .catch(error=> {
                            console.log(error);
                        });
                })
            })
         
            .catch(error =>{
                console.log(error);
            })
    }

    check() { 
        if (this.state.data.length > 0) {
            return <Cards data={this.state.data} addOutfit={this.AddToOutfit} />
        }
    }
    componentDidMount() {
        this.getdata();
    }

    AddToOutfit = id => {
      const datas= this.state.data.find((element)=>{
         return element.style_id===id
        })
      this.setState({
        outfitData :[...this.state.outfitData, datas]
      })
    }
    deleteOutfiy = id => {
        const outfit = this.state.outfitData.filter(item => item.style_id !== id);
        this.setState({ outfitData: outfit });
      };
    //   displayDetails = _=>{
    //       return(
    //           `<div>

    //           </div>`
    //       )
    //   }
    render() {
        return (
            <div>
                {this.check()}
                <Outfit outfit={this.state.outfitData} delete={this.deleteOutfiy}/>
            </div>
        )
    }
}
