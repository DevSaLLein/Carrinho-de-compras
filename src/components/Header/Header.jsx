import SeachBar from "../SeachBar/SearchBar";
import CarButton from "../CartButton/CartButton";
import './Header.css';

function Header(){
  return(
    <header className="header">
      <div className="container">

        <SeachBar/>
        <CarButton/>
        
      </div>

    </header>
  );
}

export default Header;