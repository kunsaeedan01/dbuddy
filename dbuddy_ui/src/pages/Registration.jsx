import React from "react";
import { Link } from "react-router-dom";
import RegistrationForm from "../components/authentication/RegistrationForm";


function Registration() {
 return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 d-flex align-items-center">
          <div className="text-center px-4">
            <h1 className="text-primary">
              Welcome to DiploMate!
            </h1>
            <p>
              This is a new social media site that will
              allow you to find an instructor and teammates (diplomates) for
              your diploma project. Register now
              and start enjoying! <br />
              Or if you already have an account, please {""}
              <Link to="/login/">Login</Link>.
            </p>
          </div>
        </div>
        <div className="col-md-6 p-5">
          <RegistrationForm />
        </div>
      </div>
    </div>
  );
}

export default Registration;






