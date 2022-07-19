import { Link, Outlet, useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate()
  return ( 
    <>
      this is ABOUT PAGE <br/>
      {/* 1. create links routing in NESTED COMPONENTS */}
      <Link to='company'>Company</Link>
      <Link to='ceo'>CEO</Link> <br/>
      {/* 2. point where NESTED COMPONENT will be render using OUTLET */}
      <Outlet/> <br/>
      <button onClick={()=>navigate(-1)}>Go back</button>
    </>
   );
}

export default About;