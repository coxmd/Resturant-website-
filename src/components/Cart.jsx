import React, { useState, useRef } from 'react'
import './Styles/Cart.css'
import {  useRecoilValue ,useSetRecoilState } from 'recoil'
import { CartState, cartStateWithRemove } from './Shop'
import { food } from '../constants'
import { dec, del, emptycart, inc } from '../assets'
import emailjs from '@emailjs/browser'


function Cart() {
    const [quantity, setquantity] = useState({});
    const [showCheckout, setShowCheckout] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        location: '',
        specialRequest: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState('');

    const cart = useRecoilValue(CartState)
    const setCartState = useSetRecoilState(cartStateWithRemove);
    const form = useRef();


    if(Object.keys(cart).length === 0){
        return( <div className='empty-cart'>
                <h1>Oops! Your Cart is Empty</h1>
                <div className='empty-cart-gif'>
                    <img src={emptycart} width="200px" />
                </div>
            </div>
        );
    }
    
    
    const handleRemoveItem = (itemId) => {
        const updatedCart = { ...cart };
        delete updatedCart[itemId];
        setCartState(updatedCart);
    };

    const IncrementQuantity = (itemId) => {
    setCartState((prevCart) => ({
        ...prevCart,
        [itemId]: (prevCart[itemId] || 1) + 1,
    }));

    setquantity((prevQuantities) => ({
        ...prevQuantities,
        [itemId]: (prevQuantities[itemId] || 1) + 1,
    }));
};

    const DecrementQuantity = (itemId) => {
        if (quantity[itemId] > 1) {
            setCartState((prevCart) => ({
                ...prevCart,
                [itemId]: prevCart[itemId] - 1,
            }));

            setquantity((prevQuantities) => ({
                ...prevQuantities,
                [itemId]: prevQuantities[itemId] - 1,
            }));
        }
    };

    function calculateSubtotal(id, quantity) {
        return food[id].Price * (quantity || 1);
    }
    
    function calculateTotalPrice(cart) {
        let total = 0;
        for (const [id, quantity] of Object.entries(cart)) {
            total += calculateSubtotal(id, quantity);
        }
        return total;
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        // Map form field names to formData property names
        const fieldMapping = {
            'user_name': 'name',
            'user_phone': 'phone',
            'user_email': 'email',
            'user_location': 'location',
            'user_request': 'specialRequest'
        };
    
        setFormData(prev => ({
            ...prev,
            [fieldMapping[name]]: value
        }));
    };

    const handleSubmitOrder = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitError('');

        // Prepare order details
        const orderItems = Object.entries(cart).map(([id]) => 
            `${food[id].Name} x${quantity[id] || 1} = $${calculateSubtotal(id, quantity[id])}`
        ).join('\n');

        const totalPrice = calculateTotalPrice(cart);

        // Set hidden input values for EmailJS template
        const formElement = form.current;
        formElement.order_details.value = orderItems;
        formElement.total_amount.value = `$${totalPrice}`;

        emailjs
            .sendForm(
                'service_eu2crfq', // Replace with your EmailJS service ID
                'template_ajidrx4', // Replace with your EmailJS template ID
                form.current,
                {
                    publicKey: 'yPawXT1HVf2jLGFot', // Replace with your EmailJS public key
                }
            )
            .then(
                () => {
                    // Reset form and cart
                    setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        location: '',
                        specialRequest: ''
                    });
                    setShowCheckout(false);
                    setCartState({});
                    alert('Order submitted successfully!');
                },
                (error) => {
                    console.error('Error submitting order:', error);
                    setSubmitError('Failed to submit order. Please try again.');
                }
            )
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    
    const total = calculateTotalPrice(cart);

    console.log(Object.keys(cart).length);

    return (
        <div className='cart-container'>
            {!showCheckout ? (
                <>
                    <div className='cart-list-container'>
                        {Object.entries(cart).map(([id]) => (
                            <div key={id} className='cart-list'>
                                <div className='cart-item-details'>
                                    <img src={food[id].pic} width="120px" alt={food[id].Name} />
                                    <div className='cart-item-info'>
                                        <p className='cart-item-name'>
                                            {food[id].Name}
                                        </p>
                                        <p>Price: {food[id].Price}$</p>
                                        <button className="Btn" onClick={() => handleRemoveItem(id)}>
                                            <img src={del} className='sign' width="15px" alt="delete" />
                                            <div className="text">Remove</div>
                                        </button>
                                    </div>
                                </div>
                                <div className='quantity-controls'>
                                    <button className='qty-button'
                                        onClick={() => DecrementQuantity(id)}
                                    > <img src={dec} width="20px" alt="decrease" /></button>
                                    <p>{quantity[id] || 1}</p>
                                    <button className='qty-button'
                                        onClick={() => IncrementQuantity(id)}
                                    > <img src={inc} width="20px" alt="increase" /> </button>
                                </div>

                                <p className='cart-item-price'>
                                    SubTotal: {calculateSubtotal(id, quantity[id])}$
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className='divider'></div>

                    <div className="total-price">
                        <h2>Total Price</h2>
                        <h2>{calculateTotalPrice(cart)}$</h2>
                    </div>
                    <div className='checkout-btn'>
                        <button className='cart-button' onClick={() => setShowCheckout(true)}>
                            Check Out
                        </button>
                    </div>
                </>
            ) : (
                <div className='checkout-form'>
                    <h2>Checkout Details</h2>
                    {submitError && <div className="error-message">{submitError}</div>}
                    <form ref={form} onSubmit={handleSubmitOrder}>
                        <div className='form-group'>
                            <label>Name:</label>
                            <input
                                type="text"
                                name="user_name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className='form-group'>
                            <label>Phone Number:</label>
                            <input
                                type="tel"
                                name="user_phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className='form-group'>
                            <label>Email:</label>
                            <input
                                type="email"
                                name="user_email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className='form-group'>
                            <label>Location:</label>
                            <input
                                type="text"
                                name="user_location"
                                value={formData.location}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className='form-group'>
                            <label>Special Request:</label>
                            <textarea
                                name="user_request"
                                value={formData.specialRequest}
                                onChange={handleInputChange}
                                rows="4"
                            />
                        </div>
                        {/* Hidden fields for order details */}
                        <input type="hidden" name="order_details" />
                        <input type="hidden" name="total_amount" />
                        <div className='checkout-buttons'>
                            <button 
                                type="button" 
                                className='cart-button secondary' 
                                onClick={() => setShowCheckout(false)}
                                disabled={isSubmitting}
                            >
                                Back to Cart
                            </button>
                            <button 
                                type="submit" 
                                className='cart-button'
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Submitting...' : 'Submit Order'}
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
}

export default Cart