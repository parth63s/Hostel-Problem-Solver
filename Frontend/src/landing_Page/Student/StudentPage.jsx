import React from 'react';
import NavBar from '../NavBar';
import GroupOfWorker from './GroupOfWorker';
import Problems from './Problems';
import Footer from '../Footer';

function StudentPage() {
    return ( 
        <div style={{background:"#FAF7F0"}} >
            <NavBar/>
            <GroupOfWorker/>
            <Problems/>
            <Footer/>
        </div>
     );
}

export default StudentPage;