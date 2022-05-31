import React, {useState, useEffect} from 'react';

/** import child components */
import { CartIcon } from '../Icons/Icons';

/** primary UI component */
export const MiniCart = () => {
  /** set states with useState hook */
  const [cartItemCount, setCartItemCount] = useState(0);

  /** initial render */
  useEffect(() => {
    // get from local storage
    const getCartData:any = localStorage.getItem('CartListData');
    // convert to object data
    const getCartObject = JSON.parse(getCartData);
    //get sum from the quanitity property's value
    const TotalQty = getCartObject && getCartObject.map((item: { quantity: any; }) => item.quantity).reduce((prev: any, curr: any) => prev + curr);
    // set the total quantity
    {
      getCartData && setCartItemCount(TotalQty);
    }
  }, []);
  
  return (
    <a className="relative ml-4 text-black cursor-pointer hover:text-gray-600" href="/cart">
      <CartIcon />
      <span className="absolute flex items-center justify-center w-4 h-4 text-white bg-green-100 rounded-full -top-1 -right-2">
        {cartItemCount}
      </span>
    </a>
  );
};
