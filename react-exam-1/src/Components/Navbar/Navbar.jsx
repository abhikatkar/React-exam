import '../Navbar/Navbar.css';
import {Link} from "react-router-dom";

export const Navbar = ()=>{


    return(
        <div>
            
          <nav className='nav'>
              <Link to="/">Home</Link>
              <Link to="/add-city">Add Country</Link>
              <Link to="/add-country">Add city</Link>
          </nav>

        </div>
    )
}