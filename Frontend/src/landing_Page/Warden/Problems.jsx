import React from 'react';

function Problems() {
    return ( 
        <div className="container mt-5 min-background p-3 " style={{backgroundColor:"white"}}>
            <h1 className='text-center p-3' >All Problem</h1>
            <table className=' text-center table table-bordered double-border table-container'>
                <tr>
                    <th scope='col' className='sticky-column'>No.</th>
                    <th scope='col'>Name</th>
                    <th scope='col'>Moblie No.</th>
                    <th scope='col'>Worker</th>
                    <th scope='col'>Room No.</th>
                    <th scope='col'>Problem</th>
                    <th scope='col'>Show</th>
                </tr>
                
                <tr >
                    <td className='sticky-column'>1</td>
                    <td>Parth</td>
                    <td>9054344346</td>
                    <td>Plumer</td>
                    <td>318</td>
                    <td>Dish wish</td>
                    <td><button className='btn'>Show</button></td>
                </tr>

                <tr>
                    <td className='sticky-column'>1</td>
                    <td>Parth</td>
                    <td>9054344346</td>
                    <td>Plumer</td>
                    <td>318</td>
                    <td>Dish wish</td>
                    <td><button className='btn'>Show</button></td>
                </tr>

                <tr>
                    <td className='sticky-column'>1</td>
                    <td>Parth</td>
                    <td>9054344346</td>
                    <td>Plumer</td>
                    <td>318</td>
                    <td>Dish wish</td>
                    <td><button className='btn'>Show</button></td>
                </tr>

                <tr >
                    <td className='sticky-column'>1</td>
                    <td>Parth</td>
                    <td>9054344346</td>
                    <td>Plumer</td>
                    <td>318</td>
                    <td>Dish wish</td>
                    <td><button className='btn'>Show</button></td>
                </tr>

            </table>
        </div>
     );
}

export default Problems;