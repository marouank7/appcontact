import React, { Component } from 'react'

export default class Contact extends Component {

        state ={
            show : true
        }

        supprimeContact = () => {
           this.props.supprimeClick()
        }

        montrerContact = () =>{
            this.setState({
                show : !this.state.show
            })
            
        }


    render() {
        return (
            <div className="card card-body mb-4 text-center">
                <h4>{this.props.nom}&nbsp;
                    <i className="fas fa-sort-down" onClick={this.montrerContact}></i>
                    <i className="fas fa-times" style={{cursor:'pointer', float: 'right', color: 'red' }} onClick={this.supprimeContact}></i>
                </h4>
                        {this.state.show ? (
                        
                            <ul className="card card-body mb-4">
                                <li className="list-group-item">
                                    Email : {this.props.email}
                                </li>
                                <li className="list-group-item">
                                    Téléphone : {this.props.tel}
                                </li>
                            </ul>
                        ) : null}
                
                
            </div>
        )
    }
}
