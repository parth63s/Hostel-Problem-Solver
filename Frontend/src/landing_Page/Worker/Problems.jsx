import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaEye, FaSyncAlt } from 'react-icons/fa';

function Problems() {
     const [allComplaint, setAllComplaint] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8080/Complaint").then((res) => {
            setAllComplaint(res.data);
        })
    })
    function handleClick() {
        window.location.reload();
    }

    return ( 
        <div className="container m-5 p-2 min-background" style={{backgroundColor:"white"}}>
            <h1 className='text-center fs-3 mb-4 fw-bold text-primary'>All Problem</h1>
             {
                    (allComplaint.length > 0) ? (
                        <table className="text-center table table-bordered table-striped table-hover text-nowrap">
                            <thead className='table-dark'>
                                <tr>
                                    <th scope='col' className='sticky-column'>No.</th>
                                    <th scope='col'>Name</th>
                                    <th scope='col'>Moblie No.</th>
                                    <th scope='col'>Worker</th>
                                    <th scope='col'>Room No.</th>
                                    <th scope='col'>Problem</th>
                                    <th scope='col'>Show</th>
                                </tr>
                            </thead>
                            <tbody>
                                {allComplaint.map((complaint, index) => {
                                    return (
                                        
                                        <tr key={complaint._id || index}>
                                            <td className='sticky-column'>{index+1}</td>
                                            <td>{complaint.name}</td>
                                            <td>{complaint.mobile}</td>
                                            <td>{complaint.workType}</td>
                                            <td>{complaint.room}</td>
                                            <td className='problem-column'>{complaint.problemDescription}</td>
                                            <td> 
                                                <button className='btn btn-sm btn-outline-primary'>
                                                    <FaEye /> Show
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    ) : (
                        <div >
                            <h1 className='fs-4 text-center'>Not have any Complaint</h1>
                            <button className='btn btn-primary' onClick={handleClick}>refresh</button>
                        </div>
                    )
                }
        </div>
     );
}

export default Problems;