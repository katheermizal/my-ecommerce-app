import React from 'react';

/** import child components */
import { Cartitem } from '../Cartitem/Cartitem';

/** import interface */
import { CartTableProps } from '../../../shared/model/core.component.model';

/** import custom hooks */
import { useCurrencyFormat } from '../../../hooks/useCurrencyFormat';

/** primary render component */
export const CartTable = ({ cartData }: CartTableProps) => {
  /** get total sum from the subtotal */
  const Total = cartData && cartData.map((item: { subTotal: any; }) => item.subTotal).reduce((prev: any, curr: any) => prev + curr, 0);
  
  return (
    <div className="w-full">
      { cartData &&
        cartData.map((cartItem: any, index: string) => {
          return (
            <Cartitem
              key={index} 
              price={cartItem.price}
              title={cartItem.title}
              quantity={cartItem.quantity}
              subTotal={cartItem.subTotal}
              image={cartItem.image}
            />
          );
        })}

      { cartData && (
          <div className="flex flex-col items-center justify-between pt-6 mt-6 border-t lg:flex-row">
            <div className="flex items-center mb-2 lg:mb-0">
              <a href="/" className="font-medium text-green-100 text-blue-500 text-md">
                Continue Shopping
              </a>
            </div>

            <div className="flex items-end justify-center">
              <span className="mb-1 mr-1 text-sm font-medium text-gray-400">TOTAL:</span>
              <span className="text-lg font-bold text-gray-800 "> {useCurrencyFormat(Total)}</span>
            </div>
          </div>
        )
      }
    </div>
  );
};
