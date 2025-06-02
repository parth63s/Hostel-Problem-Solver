import React from 'react';
import NavBar from '../NavBar';
import Footer from '../Footer';
import Problems from './Problems';

function WardenPage() {
    return ( 
        <div style={{backgroundColor:"#FAF7F0"}}>
            <NavBar/>
            <Problems/>
            <Footer/>
        </div>
     );
}

export default WardenPage;