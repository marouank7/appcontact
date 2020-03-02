import React, {Component} from 'react'

const Context = React.createContext();

const reducer = (state, action) => {
    switch(action.type){
        case 'DELETE_CONTACT':
            return {
                contacts: state.contacts.filter(contacts =>
                    contacts.id !== action.payload)
            }
            default : return state;
    }
}

export class Provider extends Component {
    
    state = {
        contacts : [
            {
                id : 1,
                nom : 'Marouan Doe',
                email : 'marouan@gmail.com',
                tel : '555-5555-66666'
            },
            {
                id : 2,
                nom : 'Momo Doe',
                email : 'momo@gmail.com',
                tel : '555-5555-77777'
            },
            {
                id : 3,
                nom : 'John Doe',
                email : 'John@gmail.com',
                tel : '555-5555-55555'
            }
        ], 
        dispatch : action => {
            this.setState(state => reducer(state, action));
        }
    }

    render(){
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;