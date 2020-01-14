import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    render () {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/home" className="navbar-brand">Home</Link>
                
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <Link to="/articles"  className="nav-link">Articles <span className="sr-only">(current)</span></Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/detail" className="nav-link" >Detail <span className="sr-only">(current)</span></Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/login" class="nav-link" >Login <span className="sr-only">(current)</span></Link>
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>                       

        );
    }
};

export default Navbar;