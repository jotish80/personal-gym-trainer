import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='container mt-5'>
            <div className='blog'>
                <h3>Difference between authentication and authorization</h3>
                <p>The authentication is the process of showing identity. In web there is some data is only provide for the person who give his or her identity like username, password. Users are verified. In other hand authorization is the process of users are validated. Users authorize only he or she authenticated. It needs users security levels.</p>
            </div>
            <div className='blog'>
                <h3>Why are you using firebase? What other options do you have to implement authentication?</h3>
                <p>Firebase manages all dta real time in the database system in easy and quick. It reduce web development workload and time. Firebase is simple, lightweight, developer friendly. Increase developer productivity.</p>
                <p>There is some other way to implement authentication. Cards, retina scans, voice recognition and fingerprints. Personal identification number 'PIN'. In bank card use secret token. Fingerprints used in biometrics.</p>
            </div>
            <div className='blog'>
                <h3>What other services does firebase provide other than authentication?</h3>
                <p>Hosting: you can host your websites very easily. Cloud functions, Realtime database, Cloud firestore and cloud messaging.</p>
            </div>
        </div>
    );
};

export default Blogs;