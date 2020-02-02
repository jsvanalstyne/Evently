import React from "react";
import "./style.css";

function FeaturesCardGroup(props) {
    return (
        <div className="card-columns">
          <div className="card">
            <img className="card-img-top" src="https://place-hold.it/500" alt="" />
            <div className="card-body">
              <h5 className="card-title">Online Registration</h5>
              <p className="card-text">Easily register for any event within your organization with our intuitive registration. Instantly become part of any event with a few clicks.</p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Secure User Data</h5>
              <p className="card-text">You can have the peace of mind knowing all your valuable information is safe with our use of Square and Okta.</p>
            </div>
          </div>
          <div className="card">
            <img className="card-img-top" src="https://place-hold.it/500" alt="" />
            <div className="card-body">
              <h5 className="card-title">Integrated Payments</h5>
              <p className="card-text">Easliy pay for any event as you register with our built-in Square payment system.</p>
            </div>
          </div>
          <div className="card bg-primary text-white text-center p-3">
            <blockquote className="blockquote mb-0">
              <p>"All for one, one for all."</p>
              <p>That's Evently.</p>
              <footer className="blockquote-footer">
                <small>
                  Alexandre Dumas
                </small>
              </footer>
            </blockquote>
          </div>
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">Event Messaging</h5>
              <p className="card-text">Have a question about an upcoming event? Just message the event group with our built-in messaging system.</p>
            </div>
          </div>
          <div className="card">
            <img className="card-img-top" src="https://place-hold.it/500" alt="" />
            <div className="card-body">
              <h5 className="card-title">User Dashboard</h5>
              <p className="card-text">View all of your upcoming events at a glance with your personalized user dashboard.</p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Live Look Calendar</h5>
              <p className="card-text">Easily view your events as well as all events for your club in a smooth flowing calendar view.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
    )
}

export default FeaturesCardGroup;