import { Link } from "react-router-dom";

function Home() {
  return ( 
    <>
      this is HOME PAGE <br/>
      <Link to='/about'>About</Link>
    </>
   );
}

export default Home;