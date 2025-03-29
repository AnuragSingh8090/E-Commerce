import "./Cart.css";
import { useState, useEffect } from "react";
import { sucessToast, errorToast } from "../../components/Toasters/Toasters";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

const Cart = () => {
  // State management for cart items
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Loose Fit Printed T-shirt",
      brand: "H&M",
      size: "M",
      price: 499,
      quantity: 1,
      image: "https://nobero.com/cdn/shop/files/black_e4d19185-c19d-4e7c-a14a-8d2a29c7bad3.jpg?v=1711976456&width=1066"
    },
    {
      id: 2,
      name: "Slim Fit Jeans",
      brand: "Levi's",
      size: "32",
      price: 1299,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amVhbnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 3,
      name: "Running Shoes",
      brand: "Nike",
      size: "9",
      price: 2499,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 4,
      name: "Classic Denim Jacket",
      brand: "Zara",
      size: "L",
      price: 1899,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGVuaW0lMjBqYWNrZXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 5,
      name: "Wireless Headphones",
      brand: "Sony",
      size: "One Size",
      price: 8999,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhlYWRwaG9uZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
    }
  ]);

  // State for coupon code
  const [couponCode, setCouponCode] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [couponError, setCouponError] = useState("");

  // Available coupon codes
  const availableCoupons = [
    { code: "WELCOME10", discount: 10, type: "percentage" },
    { code: "FLAT100", discount: 100, type: "fixed" }
  ];

  // State for checkout loading
  const [checkoutLoading, setCheckoutLoading] = useState(false);

  // Calculate subtotal
  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  // Calculate delivery fee based on subtotal
  const calculateDeliveryFee = () => {
    const subtotal = calculateSubtotal();
    return subtotal > 1000 ? 0 : 49;
  };

  // Calculate taxes (6% of subtotal)
  const calculateTaxes = () => {
    const subtotal = calculateSubtotal();
    return Math.round(subtotal * 0.06);
  };

  // Apply coupon code
  const applyCoupon = () => {
    // Reset previous error
    setCouponError("");
    
    if (!couponCode.trim()) {
      setCouponError("Please enter a coupon code");
      return;
    }

    const coupon = availableCoupons.find(c => c.code === couponCode.toUpperCase());
    
    if (coupon) {
      setAppliedCoupon(coupon);
      sucessToast(`Coupon ${coupon.code} applied successfully!`);
      setCouponCode("");
    } else {
      setCouponError("Invalid coupon code");
      errorToast("Invalid coupon code. Please try again.");
    }
  };

  // Remove applied coupon
  const removeCoupon = () => {
    setAppliedCoupon(null);
    sucessToast("Coupon removed successfully!");
  };

  // Calculate discount amount
  const calculateDiscount = () => {
    if (!appliedCoupon) return 0;
    
    const subtotal = calculateSubtotal();
    
    if (appliedCoupon.type === "percentage") {
      return Math.round((subtotal * appliedCoupon.discount) / 100);
    } else {
      // Don't allow discount greater than subtotal
      return Math.min(appliedCoupon.discount, subtotal);
    }
  };

  // Calculate the final total
  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const deliveryFee = calculateDeliveryFee();
    const discount = calculateDiscount();
    const taxes = calculateTaxes();
    
    return subtotal + deliveryFee + taxes - discount;
  };

  // Handle proceed to checkout
  const handleCheckout = () => {
    if (cartItems.length === 0) {
      errorToast("Your cart is empty");
      return;
    }

    setCheckoutLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setCheckoutLoading(false);
      sucessToast("Order placed successfully!");
      // Would normally redirect to checkout success page
    }, 1500);
  };

  // Handle removal of an item from cart
  const handleRemoveItem = (itemId) => {
    const itemToRemove = cartItems.find(item => item.id === itemId);
    setCartItems(cartItems.filter(item => item.id !== itemId));
    sucessToast(`${itemToRemove.name} has been removed from cart`);
  };

  // Handle quantity change
  const handleQuantityChange = (itemId, newQuantity) => {
    setCartItems(cartItems.map(item => 
      item.id === itemId ? {...item, quantity: newQuantity} : item
    ));
  };

  // Empty cart confirmation
  const [showEmptyCartConfirm, setShowEmptyCartConfirm] = useState(false);
  
  const emptyCart = () => {
    setCartItems([]);
    setShowEmptyCartConfirm(false);
    setAppliedCoupon(null);
    sucessToast("Cart emptied successfully");
  };

  // Check if cart is empty
  const isCartEmpty = cartItems.length === 0;

  return (
    <div className="bg-gray-50 min-h-screen py-8 px-4">
      <ScrollToTop />
      
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-[var(--primary)] mb-2">My Cart</h1>
          <p className="text-gray-600 max-w-xl mx-auto text-xs md:text-sm">
            Review your items and proceed to checkout
          </p>
        </div>

        {isCartEmpty ? (
          /* Empty Cart View */
          <div className="bg-white rounded-xl shadow-md p-10 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6">
              <i className="fa-solid fa-cart-shopping text-[var(--primary)] text-3xl"></i>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Cart is Empty</h2>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Looks like you haven't added anything to your cart yet. Browse our products and find something you'll love!
            </p>
            <a 
              href="/products" 
              className="inline-block bg-gradient-to-r from-blue-500 to-[var(--primary)] text-white py-3 px-8 rounded-lg font-medium hover:from-blue-600 hover:to-blue-500 transition duration-300 shadow-md active:scale-[0.98] cursor-pointer"
            >
              <i className="fa-solid fa-bag-shopping mr-2"></i>
              Continue Shopping
            </a>
          </div>
        ) : (
          /* Cart with Items */
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Cart Items Section */}
            <div className="lg:col-span-2 space-y-4">
              <div className="rounded-xl overflow-hidden">
                <div className="flex justify-between items-center p-5 border-b border-gray-100 bg-white">
                  <h2 className="text-lg font-bold text-gray-800">
                    Cart Items ({cartItems.length})
                  </h2>
                  <button 
                    onClick={() => setShowEmptyCartConfirm(true)}
                    className="flex items-center text-red-500 hover:text-red-600 text-sm font-medium cursor-pointer"
                  >
                    <i className="fa-solid fa-trash-can mr-1"></i>
                    Empty Cart
                  </button>
                </div>
                
                <div className="space-y-4 pt-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="bg-white rounded-xl shadow-md p-4">
                      <div className="flex flex-col sm:flex-row gap-4">
                        {/* Product Image */}
                        <div className="flex-shrink-0">
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-full sm:w-28 h-28 object-cover rounded-lg border border-gray-200" 
                          />
                        </div>
                        
                        {/* Product Details */}
                        <div className="flex-grow space-y-2">
                          <div className="flex justify-between">
                            <h3 className="text-base font-semibold text-gray-800">{item.name}</h3>
                            <button 
                              onClick={() => handleRemoveItem(item.id)}
                              className="text-red-500 hover:text-red-600 cursor-pointer p-1 hover:bg-red-50 rounded-full transition-colors"
                              title="Remove item"
                            >
                              <i className="fa-solid fa-trash-alt"></i>
                            </button>
                          </div>
                          
                          <div className="text-sm text-gray-600 space-y-1">
                            <p>Brand: {item.brand}</p>
                            <p>
                              Size: <span className="inline-block bg-gray-100 px-2 py-0.5 rounded text-gray-800 font-medium">{item.size}</span>
                            </p>
                            <p className="font-medium">₹{item.price.toLocaleString()}</p>
                          </div>
                          
                          {/* Quantity and Total */}
                          <div className="flex justify-between items-center pt-2 mt-2 border-t border-gray-100">
                            <div className="flex items-center space-x-2">
                              <span className="text-sm text-gray-600">Qty:</span>
                              <div className="flex items-center border border-gray-300 rounded-md">
                                <button 
                                  onClick={() => item.quantity > 1 && handleQuantityChange(item.id, item.quantity - 1)}
                                  disabled={item.quantity <= 1}
                                  className="px-2 py-1 text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer transition-colors active:scale-95"
                                >
                                  <i className="fa-solid fa-minus text-xs"></i>
                                </button>
                                <span className="px-2 py-1 text-gray-800 font-medium">{item.quantity}</span>
                                <button 
                                  onClick={() => item.quantity < 10 && handleQuantityChange(item.id, item.quantity + 1)}
                                  disabled={item.quantity >= 10}
                                  className="px-2 py-1 text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer transition-colors active:scale-95"
                                >
                                  <i className="fa-solid fa-plus text-xs"></i>
                                </button>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="text-sm text-gray-600">Subtotal:</p>
                              <p className="text-base font-bold text-gray-800">
                                ₹{(item.price * item.quantity).toLocaleString()}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Order Summary Section */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-md sticky top-30">
                <div className="p-5 border-b border-gray-100">
                  <h2 className="text-lg font-bold text-gray-800">Order Summary</h2>
                </div>
                
                <div className="p-5 space-y-4">
                  {/* Price breakdown */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-medium">₹{calculateSubtotal().toLocaleString()}</span>
                    </div>
                    
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Delivery Fee</span>
                      <span className={calculateDeliveryFee() === 0 ? "text-green-600 font-medium" : "font-medium"}>
                        {calculateDeliveryFee() === 0 ? "Free" : `₹${calculateDeliveryFee()}`}
                      </span>
                    </div>
                    
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Taxes & Charges (6%)</span>
                      <span className="font-medium">₹{calculateTaxes().toLocaleString()}</span>
                    </div>
                    
                    {appliedCoupon && (
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600 flex items-center">
                          Discount
                          <span className="ml-1 text-xs bg-green-100 text-green-800 py-0.5 px-1.5 rounded">
                            {appliedCoupon.code}
                          </span>
                          <button 
                            onClick={removeCoupon}
                            className="ml-1 text-red-500 hover:text-red-600 cursor-pointer"
                            title="Remove coupon"
                          >
                            <i className="fa-solid fa-times-circle text-xs"></i>
                          </button>
                        </span>
                        <span className="font-medium text-green-600">-₹{calculateDiscount().toLocaleString()}</span>
                      </div>
                    )}
                  </div>
                  
                  {/* Coupon code input */}
                  {!appliedCoupon && (
                    <div>
                      <div className="flex space-x-2">
                        <input 
                          type="text" 
                          value={couponCode}
                          onChange={(e) => setCouponCode(e.target.value)}
                          placeholder="Enter coupon code"
                          className="flex-grow p-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[var(--primary)] focus:border-transparent cursor-text"
                        />
                        <button 
                          onClick={applyCoupon}
                          className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-2 rounded text-sm font-medium transition-colors cursor-pointer active:scale-95"
                        >
                          Apply
                        </button>
                      </div>
                      {couponError && <p className="text-xs text-red-500 mt-1">{couponError}</p>}
                      <p className="text-xs text-gray-500 mt-1">Try WELCOME10 for 10% off or FLAT100 for ₹100 off</p>
                    </div>
                  )}
                  
                  <div className="border-t border-gray-100 pt-3 mt-3">
                    <div className="flex justify-between mb-3">
                      <span className="font-bold text-gray-800">Total</span>
                      <span className="font-bold text-lg text-gray-800">₹{calculateTotal().toLocaleString()}</span>
                    </div>
                    {calculateDeliveryFee() === 0 && (
                      <p className="text-xs text-green-600 mt-1 mb-3">
                        <i className="fa-solid fa-circle-check mr-1"></i>
                        Free delivery on orders above ₹1000
                      </p>
                    )}
                  </div>
                  
                  <button 
                    onClick={handleCheckout}
                    disabled={checkoutLoading || isCartEmpty}
                    className="w-full mt-4 bg-gradient-to-r from-blue-500 to-[var(--primary)] text-white py-2.5 rounded-lg font-medium text-sm hover:from-blue-600 hover:to-blue-500 transition duration-300 shadow-md active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center cursor-pointer"
                  >
                    {checkoutLoading ? (
                      <>
                        <i className="fa-solid fa-circle-notch fa-spin mr-2"></i>
                        Processing...
                      </>
                    ) : (
                      <>
                        <i className="fa-solid fa-lock mr-2"></i>
                        Proceed to Checkout (₹{calculateTotal().toLocaleString()})
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Floating Cart Summary Button for Mobile View */}
        {!isCartEmpty && (
          <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 shadow-lg lg:hidden z-10">
            <div className="flex justify-between items-center mb-2">
              <div>
                <p className="text-sm text-gray-600">Total ({cartItems.length} items)</p>
                <p className="text-lg font-bold text-gray-800">₹{calculateTotal().toLocaleString()}</p>
              </div>
              <button 
                onClick={handleCheckout}
                disabled={checkoutLoading}
                className="bg-gradient-to-r from-blue-500 to-[var(--primary)] text-white py-2 px-4 rounded-lg font-medium text-sm hover:from-blue-600 hover:to-blue-500 transition duration-300 shadow-md active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center cursor-pointer"
              >
                {checkoutLoading ? (
                  <i className="fa-solid fa-circle-notch fa-spin"></i>
                ) : (
                  <>Checkout</>
                )}
              </button>
            </div>
            {appliedCoupon && (
              <p className="text-xs text-green-600">
                <i className="fa-solid fa-tag mr-1"></i>
                Coupon applied: {appliedCoupon.code} ({appliedCoupon.type === 'percentage' ? `${appliedCoupon.discount}%` : `₹${appliedCoupon.discount}`} off)
              </p>
            )}
          </div>
        )}
      </div>
      
      {/* Empty Cart Confirmation Modal */}
      {showEmptyCartConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-lg font-bold text-gray-800 mb-3">Empty Your Cart?</h3>
            <p className="text-gray-600 mb-4">
              Are you sure you want to remove all items from your cart? This action cannot be undone.
            </p>
            <div className="flex space-x-3">
              <button 
                onClick={emptyCart}
                className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded font-medium transition-colors cursor-pointer"
              >
                Empty Cart
              </button>
              <button 
                onClick={() => setShowEmptyCartConfirm(false)}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded font-medium transition-colors cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart; 