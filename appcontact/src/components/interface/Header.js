import React from 'react'

export default function Header() {
    return (
        <div>
            <nav className="navbar navbar-dark bg-primary mb-3 p-0y">
                <div className="container">
                    <a href="/" className="navbar-brand">AppContact</a>
                        <ul className="navbar-nav">
                            <li>
                                <a href="/" className="nav-link">Accueil</a>
                            </li>

                        </ul>
                </div>
            </nav>
        </div>
    )
}
