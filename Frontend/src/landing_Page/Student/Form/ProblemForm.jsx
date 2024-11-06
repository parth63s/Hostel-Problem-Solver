import React from "react";

function ProblemForm({worker}) {
  return (
    <div className="container" style={{backgroundColor:"white"}}>
        
      <form className="row g-3 min-background p-2 mt-4">
        <h1 className="text-center fs-3">Problem Form</h1>
        <div className="col-12">
          <label htmlFor="name" className="form-label ">
            Name
          </label>
          <input type="text" className="form-control" id="name"/>
        </div>

        <div className="col-12">
          <label htmlFor="mobile" className="form-label">
            Mobile No.
          </label>
          <input
            type="tel"
            className="form-control"
            id="moblie"
            pattern="[0-9]{10}"
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="hostelName" className="form-label">
            Hostel Name: 
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Milkha bhawan A"
            id="hostelName"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="room" className="form-label">
            Room Number:
          </label>
          <input
            type="number"
            className="form-control"
            placeholder="318"
            id="room"
            max={999}
          />
        </div>


        <div className="col-12">
          <label htmlFor="Work" className="form-label">
            Work:
          </label>
          <input type="text" className="form-control opacity-75" id="work" value={worker} readOnly/>
        </div>

        <div className="col-12">
          <label htmlFor="problem" className="form-label">
            Problem:
          </label>
          <input type="text" id="problem" className="form-control"/>
        </div>

        <div className="input-group mb-3">
            <input type="file" className="form-control" id="photo" />
            <label className="input-group-text" htmlFor="photo">Upload</label>
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Submit Problem
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProblemForm;
