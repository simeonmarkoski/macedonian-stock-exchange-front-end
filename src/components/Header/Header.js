import React from 'react';
import {Link} from "react-router-dom";

const Header = (props) => {

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
                <Link className="navbar-brand" to={"/"}>Stocks</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to={"/"}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/mbi10-companies"}>MBI 10</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/belex15-companies"}>BELEX 15</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/sbitop-companies"}>SBITOP</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;