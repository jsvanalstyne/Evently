import React from "react";
import "./style.css";

function FeaturesCardGroup(props) {
    return (
        <div className="card-columns featuresCardGroup">
          <div className="card feature-card-bg">
            <img className="card-img-top" src="https://discover.dtic.mil/wp-content/uploads/2018/10/Registration.png" alt="" />
            <div className="card-body">
              <h5 className="card-title">Online Registration</h5>
              <p className="card-text">Easily register for any event within your organization with our intuitive registration. Instantly become part of any event with a few clicks.</p>
            </div>
          </div>
          <div className="card feature-card-bg">
          <img className="card-img-top" src="https://www.iot-now.com/wp-content/uploads/2018/03/Thumbnail-folderLogos.png" alt="" />
            <div className="card-body">
              <h5 className="card-title">Secure User Data</h5>
              <p className="card-text">You can have the peace of mind knowing all your valuable information is safe with our use of Square and Okta.</p>
            </div>
          </div>
          <div className="card feature-card-bg">
            <img className="card-img-top" src="https://www.imore.com/sites/imore.com/files/topic_images/2015/Square_Logo_Portrait.png" alt="" />
            <div className="card-body">
              <h5 className="card-title">Integrated Payments</h5>
              <p className="card-text">Easliy pay for any event as you register with our built-in Square payment system.</p>
            </div>
          </div>
          <div className="card center-quote-card text-center p-3">
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
          <div className="card feature-card-bg text-center">
          <img className="card-img-top" src="https://cdn0.iconfinder.com/data/icons/general-15/64/chat_reply-512.png" alt="" />
            <div className="card-body">
              <h5 className="card-title">Event Messaging</h5>
              <p className="card-text">Have a question about an upcoming event? Just message the event group with our built-in messaging system. Coming soon!</p>
            </div>
          </div>
          <div className="card feature-card-bg">
            <img className="card-img-top" src="https://blog.edmentum.com/sites/blog.edmentum.com/files/styles/blog_image/public/images/ReadingEggsDashboard.png?itok=3MjZ9Pjw" alt="" />
            <div className="card-body">
              <h5 className="card-title">User Dashboard</h5>
              <p className="card-text">View all of your upcoming events at a glance with your personalized user dashboard.</p>
            </div>
          </div>
          <div className="card feature-card-bg">
          <img className="card-img-top" src="https://media.istockphoto.com/vectors/calendar-reminder-isolated-icon-vector-id670134048?k=6&m=670134048&s=612x612&w=0&h=BlfNFO1EMrQpSfAgp3bCioukxC6uwxUtMd88nMbmxSc=" alt="" /> 
            <div className="card-body">
              <h5 className="card-title">Live Look Calendar</h5>
              <p className="card-text">Easily view your events as well as all events for your club in a smooth flowing calendar view.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
//         <CardColumns>
//   <Card>
//     <Card.Img variant="top" src="holder.js/100px160" />
//     <Card.Body>
//       <Card.Title>Online Registration</Card.Title>
//       <Card.Text>
//       Easily register for any event within your organization with our intuitive registration. Instantly become part of any event with a few clicks.
//       </Card.Text>
//     </Card.Body>
//   </Card>
//   <Card className="p-3">
//     <blockquote className="blockquote mb-0 card-body">
//       <p>
//       "All for one, one for all."
//       </p>
//       <footer className="blockquote-footer">
//         <small className="text-muted">
//           Alexandre Dumas
//         </small>
//       </footer>
//     </blockquote>
//   </Card>
//   <Card>
//     <Card.Img variant="top" src="holder.js/100px160" />
//     <Card.Body>
//       <Card.Title>Card title</Card.Title>
//       <Card.Text>
//         This card has supporting text below as a natural lead-in to additional
//         content.{' '}
//       </Card.Text>
//     </Card.Body>
//     <Card.Footer>
//       <small className="text-muted">Last updated 3 mins ago</small>
//     </Card.Footer>
//   </Card>
//   <Card bg="primary" text="white" className="text-center p-3">
//     <blockquote className="blockquote mb-0 card-body">
//       <p>
//       "All for one, one for all."
//       </p>
//       <footer className="blockquote-footer">
//         <small className="text-muted">
//         Alexandre Dumas
//         </small>
//       </footer>
//     </blockquote>
//   </Card>
//   <Card className="text-center">
//     <Card.Body>
//       <Card.Title>Card title</Card.Title>
//       <Card.Text>
//         This card has supporting text below as a natural lead-in to additional
//         content.{' '}
//       </Card.Text>
//       <Card.Text>
//         <small className="text-muted">Last updated 3 mins ago</small>
//       </Card.Text>
//     </Card.Body>
//   </Card>
//   <Card>
//     <Card.Img src="holder.js/100px160" />
//   </Card>
//   <Card className="text-right">
//     <blockquote className="blockquote mb-0 card-body">
//       <p>
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
//         erat a ante.
//       </p>
//       <footer className="blockquote-footer">
//         <small className="text-muted">
//           Someone famous in <cite title="Source Title">Source Title</cite>
//         </small>
//       </footer>
//     </blockquote>
//   </Card>
//   <Card>
//     <Card.Body>
//       <Card.Title>Card title</Card.Title>
//       <Card.Text>
//         This is a wider card with supporting text below as a natural lead-in to
//         additional content. This card has even longer content than the first to
//         show that equal height action.
//       </Card.Text>
//       <Card.Text>
//         <small className="text-muted">Last updated 3 mins ago</small>
//       </Card.Text>
//     </Card.Body>
//   </Card>
// </CardColumns>
    )
}

export default FeaturesCardGroup;