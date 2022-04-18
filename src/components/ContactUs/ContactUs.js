import React from 'react';
// import './ContactUs.css';
import contact from '../../images/contact-us.jpg'

const ContactUs = () => {
    return (
        <section className="container mb-5">
            <h1 className="mb-5 text-center fw-bold text-primary">CONTACT US</h1>
            <div className="row">
                <div className="col-lg-6">
                    <img className="img-fluid" src={contact} alt="" />
                </div>
                <div className="col-lg-6">
                    <form>
                        <div className="input">
                            <span className="input-text">Name</span>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text"></div>
                        </div>
                        <div className="form-floating">
                            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                            <label for="floatingTextarea">Comments</label>
                        </div>
                        <button type="submit" className="btn btn-primary mt-3">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;