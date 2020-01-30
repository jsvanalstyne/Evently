import React from "react";
import "./style.css";

function Nav(props) {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-secondary">
            <a class="navbar-brand landing-title" href="/">Evently</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Thing 1</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Thing 2</a>
                    </li>
                </ul>
                <span class="navbar-text">
                    <button type="button" class="btn btn-outline-success bg-light mr-1" data-toggle="modal" data-target="#exampleModal">Sign up</button>
                    <button type="button" class="btn btn-success">Log in</button>
                </span>
            </div>

            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Sign up</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">


                            <form>
                                <div class="form-group">
                                    <label for="exampleFormControlInput1">First name</label>
                                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="John" />
                                </div>
                                <div className="form-group">
                                    <label for="exampleFormControlInput1">Last Name</label>
                                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Doe" />
                                </div>
                                <div className="form-group">
                                    <label for="exampleFormControlInput1">Email</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="john.doe@gmail.com" />
                                </div>
                                <div className="form-group">
                                    <label for="exampleFormControlInput1">Username</label>
                                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Username" />
                                </div>
                                <div className="form-group">
                                    <label for="exampleFormControlInput1">Password</label>
                                    <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="Password" />
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

    )
}

export default Nav;