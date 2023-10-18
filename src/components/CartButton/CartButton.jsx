import {BsCart4} from 'react-icons/bs';
import './CartButton.css';

function CarButton(){
  return(
    <button type="button" className="cart__button">
      <BsCart4/>
      <span className='cart-status'> 3 </span>
    </button>
  ); 
}

export default CarButton;