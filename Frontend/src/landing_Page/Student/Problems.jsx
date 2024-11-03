import React from 'react';

function Problems() {
    return ( 
        <div className="container mt-5 p-2 min-background" style={{background:"white"}}>
            <h1 className='fs-3 text-center mb-4'>All Problems</h1>
            <table className='text-center table table-bordered double-border'>
                <tr>
                    <th scope='col'>No.</th>
                    <th scope='col'>Hostel Name</th>
                    <th scope='col'>Problem</th>
                    <th scope='col'>Worker Name</th>
                    <th scope='col'>Process</th>
                    <th scope='col'>Rating</th>
                </tr>

                <tr>
                    <th >1</th>
                    <td>Milkha Bhawan A</td>
                    <td>Plumber</td>
                    <td>Dipesh</td>
                    <td>Approve</td>
                    <td>4</td>
                </tr>

                <tr>
                    <td>2</td>
                    <td>Milkha Bhawan A</td>
                    <td>Plumber</td>
                    <td>Dipesh</td>
                    <td>Approve</td>
                    <td>4</td>
                </tr>

                <tr>
                    <th >1</th>
                    <td>Milkha Bhawan A</td>
                    <td>Plumber</td>
                    <td>Dipesh</td>
                    <td>Approve</td>
                    <td>4</td>
                </tr>

                <tr>
                    <td>2</td>
                    <td>Milkha Bhawan A</td>
                    <td>Plumber</td>
                    <td>Dipesh</td>
                    <td>Approve</td>
                    <td>4</td>
                </tr>
                

            </table>
        </div>
     );
}

export default Problems;