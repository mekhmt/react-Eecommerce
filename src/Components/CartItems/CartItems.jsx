import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'
export default function CartItems() {
    const {getTotalCartValue,all_product, cartItem,addToCart,removeFromCart} = useContext(ShopContext)
    
  return (
    <div className='cartitems'>
        <div className="cartitems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
         {all_product.map((e,i)=>{
           if(cartItem[e.id]>0){

                return(
                    <div key={i}>
                        <div className="cartitems-format cartitems-format-main">
                            <img src={e.image} alt='' className='carticon-product-icon'/>
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className='cartitem-quantity'>{cartItem[e.id]}</button>
                            <p>{e.new_price*cartItem[e.id]}</p>
                            <img className='cartitems-remove-icon' src={remove_icon} alt='' onClick={()=>removeFromCart(e.id)}/>
                        </div>
                        <hr />
                    </div>
                )
            }
            return null;
        })}
        <div className="cartitem-down">
            <div className="cartitem-total">
                <h1>Cart Total</h1>
                <div>
                    <div className="cartitems-total-item">
                        <p>Subtotal</p>
                        <p>${getTotalCartValue()}</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <p>Shiping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <h3>Total</h3>
                        <h3>${getTotalCartValue()}</h3>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                
            </div>
            <div className="cartitems-promocode">
                    <p>If you have a promo code, Enter it here</p>
                    <div className="cartitems-promobox">
                        <input type='text' placeholder='promo code'/>
                        <button>Submit</button>
                    </div>
            </div>
        </div>
    </div>
  )
}
