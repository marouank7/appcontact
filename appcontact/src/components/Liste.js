import React, { Component } from 'react'
import Contact from './Contact'

export default class Liste extends Component {

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

    supprime = (id) => {
        const nvContacts = this.state.contacts.filter(contact =>
            contact.id !== id)

            this.setState({ 
                contacts: nvContacts 
            });
    }

    render() {
        return (
            <div>
                {this.state.contacts.map(contact => (
                    <Contact
                        key={contact.id}
                        nom={contact.nom}
                        email={contact.email}
                        tel={contact.tel}
                        supprimeClick={()=> this.supprime(contact.id)}
                    />
                ))} 
            </div>
        )
    }
}
