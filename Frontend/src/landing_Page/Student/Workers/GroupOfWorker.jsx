import React from 'react';
// import Carpenter from './Carpenter';
// import Electrician from './Electrician';
// import Plumber from './Plumber';

function GroupOfWorker() {
    return ( 
        <div className="container mt-4 p-3 min-background" style={{background:"white"}}>
            <div className="row">
                <div className="col-4 border-success">
                    <img src="media/images/Plumber.jpg" alt="Plumber" className='worker-img border border-dark rounded' style={{width:"100%"}} />
                </div>
                <div className="col-4 border-success">
                    <img src="media/images/Electrician.jpg" alt="Electrician" className='worker-img border border-dark rounded' style={{width:"100%"}}/>
                </div>
                <div className="col-4 border-success">
                    <img src="media/images/CarPenter.jpg" alt="CarPenter" className='worker-img border border-dark rounded' style={{width:"100%"}}/>
                </div>
            </div>
        </div>
     );
}

export default GroupOfWorker;