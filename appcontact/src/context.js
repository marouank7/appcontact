import React, {Component} from 'react'

const Context = React.createContext();

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
        ]
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