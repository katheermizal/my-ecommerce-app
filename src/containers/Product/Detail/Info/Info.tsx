import React, { useState, useEffect } from 'react';

/** import dependency packages */
import { useNavigate } from 'react-router-dom';

/** import to get image path */
import { Images } from '../../../../shared/util/images';

/** import child components */
import { ProductDescription } from '../Description/Description';
import { Button, SpinIcon } from '../../../../components/core';

/** import interface */
import { ProductInfoProps } from '../../../../shared/model/core.component.model';

/** import custom hooks */
import { useCurrencyFormat } from '../../../../hooks/useCurrencyFormat';

/** handle data api request from redux_toolkit */
import { cartApi } from '../../../../services/cartApi';

/** primary UI component */
export const ProductInfo = ({
  id,
  price = "0",
  title,
  image,
  description,
  category,
}: ProductInfoProps) => {
  /** set useNavigate to constant */
  const navigate = useNavigate();

  /** set states with useState */
  const [qtyValue, setQtyValue] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [cartResponse, setCartResponse] = useState<any>([]);

  /** add new product to cart throgh the api request */
  const [ addNewProduct ] = cartApi.useAddNewProductMutation();

  /** re-initialize in each render */
  useEffect(() => {
    // get localStorage data
    const cartListData:any = localStorage.getItem('CartListData');

    // check localStorage item availability
    if (cartListData) {
      // if available set storage data in to state
      setCartResponse(JSON.parse(cartListData));
    }else{
      // if not set local storage item with Empty state
      localStorage.setItem('CartListData', JSON.stringify(''));
    }
  }, []);

  // handle Qty input change
  const handleInputChange = (event: any) => {
    // set qty in input change
    setQtyValue(event.target.value);
  }
 
  // function to handle cart button submission
  const handleAddtoCart = async () => {
    // make isLoading state true
    setIsLoading(true);

    try{
      const response = await addNewProduct({
        productId: id, 
        quantity:qtyValue
      }).unwrap();

      // single response
      const setAddedCartSingleResponse:any = {
        cartId: response.id,
        id,
        image,
        title,
        price: useCurrencyFormat(price),
        quantity: qtyValue,
        subTotal: qtyValue * parseInt(price)
      }

      // combined response
      const setAddedCartResponse:any = [
        ...cartResponse,
        setAddedCartSingleResponse
      ];

      // set the data in to Lodalstorage, depend on the cartResponse state
      if(!cartResponse){
        localStorage.setItem('CartListData', JSON.stringify([setAddedCartSingleResponse]));
      }else{
        localStorage.setItem('CartListData', JSON.stringify(setAddedCartResponse));
      }

      setIsLoading(false); // make isLoading state false
      navigate('/cart'); // navigate to cart page
    }catch(error:any){
      setIsLoading(false); // make isLoading state false
      console.log(error); 
    }
  }

  return (
    <>
      <div className="max-w-2xl mx-auto pt-10 pb-0 lg:max-w-7xl lg:pt-16  lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
        {/** Left aligned block  */}
        <div className="pl-8 pr-8 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8 ">
          {/** Product name visible only for mobile  */}
          <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sr-only sm:text-3xl">{title}</h1>
          {/** Product Image  */}
          <div className='w-full h-80 lg:h-auto'>
           <img
             src={image ? image : Images.PLACEHOLDER}
             alt={Images ? title : 'placeholder'}
             className="object-contain w-full h-full max-h-screen border border-gray-200 rounded-md lg:h-auto"
           />
          </div>
        </div>
        {/** RIght aligned block  */}
        <div className="pl-4 pr-8 mt-4 lg:mt-0 lg:row-span-3 lg:pl-0 ">
          {/** Category name  */}
          <span className="inline-block px-4 py-1 mb-4 text-xs font-semibold tracking-wide text-teal-800 uppercase rounded-full bg-teal">
            {category}
          </span>
          {/** Product name visible only for desktop  */}
          <h1 className="mb-4 text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">{title}</h1>
          {/** Product price  */}
          <p className="text-3xl text-gray-900">{price}</p>
          <div className="mt-0">
            <div className="flex items-center">
              <div className="flex items-center">
                {/** Qty and submit button block */}
                <div className='flex items-center mt-8'>
                  <input 
                    type="number"
                    name='qty'
                    className='w-24 px-2 py-3 mr-4 text-base bg-gray-100 border rounded md:text-lg focus:outline-none'
                    defaultValue={qtyValue}
                    onChange={handleInputChange}
                    min={1}
                  />
                  <Button label="Add To Cart" onClick={handleAddtoCart} />
                  {isLoading && <span className='ml-2 text-gray-800'><SpinIcon /></span>}
                </div>
              </div>
            </div>
          </div>
          {/** Product description  */}
          {description && (
            <ProductDescription
              description={description}
            />
          )}
        </div>
      </div>
    </>
  );
};


