import React from "react";
import {Link} from "react-router-dom";

function Worker({ image, work }) {
  return (
    <div className="col-4 border-success">
      <Link to={`/studentPanel/problem-from?work=${work}`}>
        <img
          src={image}
          alt={work}
          className="worker-img border border-dark rounded"
          style={{ width: "100%" }}
        />
      </Link>
      <h1 className="text-center fs-4 mt-3">{work}</h1>
    </div>
  );
}

export default Worker;
