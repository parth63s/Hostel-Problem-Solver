import { useState } from "react";
import axios from "axios";


function ProblemForm({worker}) {

  const [formData, setFormData] = useState({
    name: "",
    mobile: 0,
    hostelName: "",
    room: 0,
    workType: worker,
    problemDescription: "",
    file: null,
  });

  const handleChange = (e) => {
    const { id, value, files } = e.target;
    if (id === "photo") {
      setFormData({ ...formData, file: files[0] });
    } else {
      setFormData({ ...formData, [id]: value });
    }
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  // Create a plain JSON object with form data (exclude file)
  const jsonData = {
    name: formData.name,
    mobile: formData.mobile,
    hostelName: formData.hostelName,
    room: formData.room,
    workType: formData.workType,
    problemDescription: formData.problemDescription,
  };

  try {
    const response = await axios.post("http://localhost:8080/Complaint", jsonData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    alert("Problem submitted successfully!");
  } catch (error) {
    console.error("Error submitting problem:", error);
    alert("Submission failed.");
  }
};



  return (
    <div className="container" style={{backgroundColor:"white"}}>
        
      <form className="row g-3 min-background p-2 mt-4" onSubmit={handleSubmit}>
        <h1 className="text-center fs-3">Problem Form</h1>
        <div className="col-12">
          <label htmlFor="name" className="form-label ">
            Name
          </label>
          <input type="text" className="form-control" id="name" onChange={handleChange}/>
        </div>

        <div className="col-12">
          <label htmlFor="mobile" className="form-label">
            Mobile No.
          </label>
          <input
            type="tel"
            className="form-control"
            id="mobile"
            pattern="[0-9]{10}"
            onChange={handleChange}
          />
        </div>

        {/* <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Milkha bhawan A"
            id="hostelName"
            onChange={handleChange}
          />
        </div> */}

        <div className="col-md-6">
          <label htmlFor="hostelName" className="form-label">
            Hostel Name: 
          </label>
          <select className="form-control " id="hostelName" onChange={handleChange}>
            <option value="">Select hostel</option>
            <option value="Milkha Bhawan A">Milkha Bhawan A</option>
            <option value="Milkha Bhawan B">Milkha Bhawan B</option>
            <option value="Milkha Bhawan C">Milkha Bhawan C</option>
          </select>
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
            onChange={handleChange}
          />
        </div>


        <div className="col-12">
          <label htmlFor="workType" className="form-label">
            Work:
          </label>
          <input type="text" className="form-control opacity-75" id="workType" value={worker} readOnly onChange={handleChange}/>
        </div>

        <div className="col-12">
          <label htmlFor="problemDescription" className="form-label">
            Problem:
          </label>
          <input type="text" id="problemDescription" className="form-control" onChange={handleChange}/>
        </div>

        <div className="input-group mb-3">
            <input type="file" className="form-control" id="photo" onChange={handleChange}/>
            <label className="input-group-text" htmlFor="photo" >Upload</label>
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
