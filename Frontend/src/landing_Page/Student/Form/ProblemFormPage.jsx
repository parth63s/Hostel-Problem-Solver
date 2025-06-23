import ProblemForm from "./ProblemForm";
import { useLocation } from 'react-router-dom';

function ProblemFormPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const work = queryParams.get("work");
  return (
    <div style={{ backgroundColor: "#FAF7F0" }}>
      
      <ProblemForm worker={work} />
     
    </div>
  );
}

export default ProblemFormPage;
