import { BiSearchAlt } from 'react-icons/bi';
import './SearchBar.css';

import { useState } from 'react';

function SeachBar(){

  let [searchValue, setsearchValue] = useState('');

  return(
    <form className='search-bar'>

      <input 
        type="seach"
        value={ searchValue } 
        placeholder="Buscar produtos" 
        className="search__input" 
        onChange={(target) => setsearchValue(target.value)}
        required
      />

      <button type="submit" className="search__button">
        <BiSearchAlt/>
      </button>

    </form>
  );
}

export default SeachBar;