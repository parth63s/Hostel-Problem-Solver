import React from 'react';
import NavBar from '../NavBar';
import GroupOfWorker from './Workers/GroupOfWorker';
import Problems from './Problems';
import Footer from '../Footer';

function StudentPage() {
    return ( 
        <>
            <NavBar/>
            <GroupOfWorker/>
            <Problems/>
            <Footer/>
        </>
     );
}

export default StudentPage;