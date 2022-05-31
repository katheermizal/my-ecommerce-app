import React, {useState, useEffect} from 'react';

/** import dependency packages */
import { useNavigate } from 'react-router-dom';

/** import to get seo content */
import { SEO } from '../../shared/util/seo';

/** import child components */
import { Wrapper } from '../../components/layout';
import { CartTable, Button } from '../../components/core';

/** primary UI component */
export const CartContainer = () => {
  // initialize the useNavigate
  const navigate = useNavigate();
  // set the custeme state
  const [cartData, setCartData] = useState();
  
  // handle in initial load
  useEffect(() => {
    // get from localStorage
    const cartListData:any = localStorage.getItem('CartListData');
    // check constant state null or not
    if (cartListData) {
      // if not null set the storage data into cartData state 
      setCartData(JSON.parse(cartListData));
    }
  }, []);

  // function for handle clear cart
  const handleClearAllCart = () => {
    // remove it from localStorage
    localStorage.removeItem('CartListData');
    // then navigate to all-products screen
    navigate('/products/all');
  }

  return (
    <Wrapper pageTitle={SEO.PageTitle.Cart}>
      <div className="min-h-screen bg-gray-300">
        {/** Cart with Data */}
        {cartData && (
          <div className="max-w-2xl px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="w-full px-8 py-8 bg-white rounded-lg shadow-lg">
              <h1 className="text-xl font-medium ">Shopping Cart</h1>
              <CartTable cartData={cartData} />
            </div>
            <div className="flex justify-between w-full mt-8 lg:mt-4">
              <div className='underline cursor-pointer text-orange hover:text-gray-600' onClick={handleClearAllCart}>
                Clear All Cart
              </div>
              <div>
                <Button label="Procced To Checkout" />
              </div>
            </div>
          </div>
        )}

        {/** Empty Cart */}
        {!cartData && (
          <div className="max-w-2xl px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="w-full px-8 py-8 bg-white rounded-lg shadow-lg">
              <h1 className="text-xl font-medium text-center">Your Cart Is Empty</h1>
            </div>
            <div className="flex justify-center w-full mt-8 lg:mt-4">
              <div>
                <Button label="Continue Shopping" isLinkType linkUrl='/' />
              </div>
            </div>
          </div>
        )}
      </div>
    </Wrapper>
  );
};
