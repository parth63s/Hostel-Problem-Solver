import React from 'react';

function Problems() {
    const problemData = [
        { id: 1, hostel: "Milkha Bhawan A", problem: "Plumber", worker: "Dipesh", process: "Approve", rating: 4 },
        { id: 2, hostel: "Milkha Bhawan A", problem: "Plumber", worker: "Dipesh", process: "Approve", rating: 4 },
    ];

    return ( 
        <div className="container mt-5 p-2 min-background" style={{ background: "white" }}>
            <h1 className="fs-3 text-center mb-4">All Problems</h1>
            {/* Responsive Table */}
            <div className="table-responsive">
                <table className="text-center table table-bordered table-striped table-hover text-nowrap">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">No.</th>
                            <th scope="col">Hostel Name</th>
                            <th scope="col">Problem</th>
                            <th scope="col">Worker Name</th>
                            <th scope="col">Process</th>
                            <th scope="col">Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        {problemData.map((problem, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{problem.hostel}</td>
                                <td>{problem.problem}</td>
                                <td>{problem.worker}</td>
                                <td>
                                    <button className="btn btn-success btn-sm">{problem.process}</button>
                                </td>
                                <td>{problem.rating}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Problems;
