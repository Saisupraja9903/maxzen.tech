// import React, { useState, useEffect } from "react";

// const CheckoutPage = () => {
//   const [cartItems, setCartItems] = useState([
//     {
//       id: 1,
//       name: "Hocco Hazelnut Mudslide Ice Cream Cone",
//       quantity: 1,
//       price: 89,
//       original: 95,
//       image:
//         "https://b.zmtcdn.com/data/dish_photos/1d5/0e1d4a23563f4f08ac51f6fa6b32d1d5.jpg",
//       size: "135 ml",
//     },
//     {
//       id: 2,
//       name: "Classic Cold Coffee",
//       quantity: 1,
//       price: 99,
//       original: 179,
//       image:
//         "https://b.zmtcdn.com/data/dish_photos/78a/bb8b6db1972ad6f1db947ff1a8ac878a.jpg",
//       size: "350 ml",
//     },
//     {
//       id: 3,
//       name: "Tiramisu",
//       quantity: 1,
//       price: 83,
//       original: 139,
//       image:
//         "https://b.zmtcdn.com/data/dish_photos/425/0b2b2d90b939a6a27a69b5de8d6cb425.jpg",
//       size: "1 Piece",
//     },
//     {
//       id: 4,
//       name: "Vietnamese Cold Coffee",
//       quantity: 1,
//       price: 119,
//       original: 209,
//       image:
//         "https://b.zmtcdn.com/data/dish_photos/cc7/3a935d315f91fae847c62f5a802b6cc7.jpg",
//       size: "450 ml",
//     },
//     {
//       id: 5,
//       name: "Double Egg & Cheese Sandwich",
//       quantity: 1,
//       price: 39,
//       original: 299,
//       image:
//         "https://b.zmtcdn.com/data/dish_photos/51a/a0c7d08a792d3a14aef58a49f7e6e51a.jpg",
//       size: "Serves 1",
//     },
//     {
//       id: 6,
//       name: "Chocolate Mousse",
//       quantity: 1,
//       price: 83,
//       original: 139,
//       image:
//         "https://b.zmtcdn.com/data/dish_photos/9d9/5ef768fa8a4e35b2b4b0b7a324f059d9.jpg",
//       size: "1 Piece",
//     },
//   ]);

//   const [total, setTotal] = useState(0);

//   // Update quantity
//   const updateQuantity = (id, type) => {
//     setCartItems((prevItems) =>
//       prevItems.map((item) =>
//         item.id === id
//           ? {
//               ...item,
//               quantity:
//                 type === "increase"
//                   ? item.quantity + 1
//                   : item.quantity > 1
//                   ? item.quantity - 1
//                   : 1,
//             }
//           : item
//       )
//     );
//   };

//   // Remove item
//   const removeItem = (id) => {
//     setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
//   };

//   // Calculate total automatically
//   useEffect(() => {
//     const newTotal = cartItems.reduce(
//       (sum, item) => sum + item.price * item.quantity,
//       0
//     );
//     setTotal(newTotal);
//   }, [cartItems]);

//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col items-center py-6">
//       {/* Cart Header */}
//       <div className="w-full max-w-md bg-white shadow rounded-2xl p-4 mb-4">
//         <h1 className="text-lg font-semibold mb-2">Cart</h1>
//         {/* <div className="bg-green-50 text-green-700 text-sm p-2 rounded-md mb-2">
//           ✅ Free Delivery auto applied on this order
//         </div>
//         <p className="text-gray-600 text-sm mb-3">
//           🚚 Delivery in <span className="font-semibold">17 mins</span>
//         </p> */}

//         {/* Cart Items */}
//         {cartItems.length > 0 ? (
//           <div className="divide-y divide-gray-200">
//             {cartItems.map((item) => (
//               <div key={item.id} className="flex items-center py-3">
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="w-14 h-14 rounded-lg object-cover"
//                 />
//                 <div className="flex-1 ml-3">
//                   <p className="text-sm font-medium">{item.name}</p>
//                   <p className="text-xs text-gray-500">{item.size}</p>
//                   <button
//                     onClick={() => removeItem(item.id)}
//                     className="text-xs text-red-500 hover:underline mt-1"
//                   >
//                     Remove
//                   </button>
//                 </div>

//                 <div className="flex items-center space-x-2">
//                   <button
//                     onClick={() => updateQuantity(item.id, "decrease")}
//                     className="px-2 py-1 text-lg font-semibold text-gray-600 bg-gray-100 rounded hover:bg-gray-200"
//                   >
//                     -
//                   </button>
//                   <span>{item.quantity}</span>
//                   <button
//                     onClick={() => updateQuantity(item.id, "increase")}
//                     className="px-2 py-1 text-lg font-semibold text-gray-600 bg-gray-100 rounded hover:bg-gray-200"
//                   >
//                     +
//                   </button>
//                 </div>

//                 <div className="ml-3 text-right">
//                   <p className="text-sm font-semibold">
//                     ₹{item.price * item.quantity}
//                   </p>
//                   <p className="text-xs line-through text-gray-400">
//                     ₹{item.original}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p className="text-center text-gray-500 py-6">
//             Your cart is empty 🛒
//           </p>
//         )}
//       </div>

//       {/* Address Section */}
//       {/* <div className="w-full max-w-md bg-white shadow rounded-2xl p-4 mb-4">
//         <h2 className="font-semibold text-gray-700 mb-2">Delivering to</h2>
//         <p className="text-sm text-gray-600 mb-3">
//           4-32-1026/2/34, Plot no 34, lane beside Jalakanya, Hyderabad
//         </p>
//         <button className="w-full py-2 rounded-lg bg-orange-500 text-white font-semibold hover:bg-orange-600 transition">
//           Add or Select Address
//         </button>
//       </div> */}

//       {/* Payment Section */}
//       <div className="w-full max-w-md bg-white shadow rounded-2xl p-4">
//         <div className="flex justify-between items-center mb-3">
//           <p className="text-gray-600 font-medium">Total to Pay</p>
//           <p className="text-lg font-semibold text-gray-800">
//             ₹{total.toFixed(2)}
//           </p>
//         </div>

//         <div className="grid grid-cols-2 gap-3">
//           <button className="py-2 bg-gray-100 rounded-lg font-medium text-gray-800 hover:bg-gray-200 transition">
//             Pay Online
//           </button>
//           <button className="py-2 bg-pink-100 rounded-lg font-medium text-pink-700 hover:bg-pink-200 transition">
//             Pay Cash/UPI 
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CheckoutPage;

// import React, { useState, useEffect } from "react";

// const CheckoutPage = () => {
//   const [cartItems, setCartItems] = useState([
//     {
//       id: 1,
//       name: "Hocco Hazelnut Mudslide Ice Cream Cone",
//       quantity: 1,
//       price: 89,
//       original: 95,
//       image:
//         "https://b.zmtcdn.com/data/dish_photos/1d5/0e1d4a23563f4f08ac51f6fa6b32d1d5.jpg",
//       size: "135 ml",
//     },
//     {
//       id: 2,
//       name: "Classic Cold Coffee",
//       quantity: 1,
//       price: 99,
//       original: 179,
//       image:
//         "https://b.zmtcdn.com/data/dish_photos/78a/bb8b6db1972ad6f1db947ff1a8ac878a.jpg",
//       size: "350 ml",
//     },
//     {
//       id: 3,
//       name: "Tiramisu",
//       quantity: 1,
//       price: 83,
//       original: 139,
//       image:
//         "https://b.zmtcdn.com/data/dish_photos/425/0b2b2d90b939a6a27a69b5de8d6cb425.jpg",
//       size: "1 Piece",
//     },
//     {
//       id: 4,
//       name: "Vietnamese Cold Coffee",
//       quantity: 1,
//       price: 119,
//       original: 209,
//       image:
//         "https://b.zmtcdn.com/data/dish_photos/cc7/3a935d315f91fae847c62f5a802b6cc7.jpg",
//       size: "450 ml",
//     },
//     {
//       id: 5,
//       name: "Double Egg & Cheese Sandwich",
//       quantity: 1,
//       price: 39,
//       original: 299,
//       image:
//         "https://b.zmtcdn.com/data/dish_photos/51a/a0c7d08a792d3a14aef58a49f7e6e51a.jpg",
//       size: "Serves 1",
//     },
//     {
//       id: 6,
//       name: "Chocolate Mousse",
//       quantity: 1,
//       price: 83,
//       original: 139,
//       image:
//         "https://b.zmtcdn.com/data/dish_photos/9d9/5ef768fa8a4e35b2b4b0b7a324f059d9.jpg",
//       size: "1 Piece",
//     },
//   ]);

//   const [total, setTotal] = useState(0);
//   const [removedItem, setRemovedItem] = useState(null);
//   const [showUndo, setShowUndo] = useState(false);
//   const [undoType, setUndoType] = useState(null); // "single" or "all"
//   const [timer, setTimer] = useState(null);
//   const [backupItems, setBackupItems] = useState([]);

//   // Update quantity — if 0, remove automatically (no undo)
//   const updateQuantity = (id, type) => {
//     setCartItems((prevItems) => {
//       return prevItems
//         .map((item) =>
//           item.id === id
//             ? {
//                 ...item,
//                 quantity:
//                   type === "increase"
//                     ? item.quantity + 1
//                     : item.quantity > 1
//                     ? item.quantity - 1
//                     : 0,
//               }
//             : item
//         )
//         .filter((item) => item.quantity > 0);
//     });
//   };

//   // Remove single item manually — show undo option
//   const removeItem = (id) => {
//     const itemToRemove = cartItems.find((item) => item.id === id);
//     setRemovedItem(itemToRemove);
//     setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
//     setShowUndo(true);
//     setUndoType("single");

//     const undoTimer = setTimeout(() => {
//       setShowUndo(false);
//       setRemovedItem(null);
//       setUndoType(null);
//     }, 10000);

//     setTimer(undoTimer);
//   };

//   // Undo single or all clear action
//   const undoRemove = () => {
//     if (undoType === "single" && removedItem) {
//       setCartItems((prev) => [...prev, removedItem]);
//       setRemovedItem(null);
//     } else if (undoType === "all" && backupItems.length > 0) {
//       setCartItems(backupItems);
//       setBackupItems([]);
//     }

//     setShowUndo(false);
//     setUndoType(null);
//     clearTimeout(timer);
//   };

//   // Clear all items — with undo option
//   const clearAll = () => {
//     setBackupItems(cartItems);
//     setCartItems([]);
//     setShowUndo(true);
//     setUndoType("all");

//     const undoTimer = setTimeout(() => {
//       setShowUndo(false);
//       setBackupItems([]);
//       setUndoType(null);
//     }, 10000);

//     setTimer(undoTimer);
//   };

//   // Calculate total automatically
//   useEffect(() => {
//     const newTotal = cartItems.reduce(
//       (sum, item) => sum + item.price * item.quantity,
//       0
//     );
//     setTotal(newTotal);
//   }, [cartItems]);

//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col items-center py-6">
//       {/* Cart Section */}
//       <div className="w-full max-w-md bg-white shadow rounded-2xl p-4 mb-4 relative">
//         <div className="flex justify-center items-center mb-2 relative">
//           <h1 className="text-lg font-semibold text-center w-full">Cart</h1>
//           {cartItems.length > 0 && (
//             <button
//               onClick={clearAll}
//               className="absolute right-0 text-sm text-red-500 font-medium hover:underline"
//             >
//               Clear All
//             </button>
//           )}
//         </div>

//         {/* Cart Items */}
//         {cartItems.length > 0 ? (
//           <div className="divide-y divide-gray-200">
//             {cartItems.map((item) => (
//               <div key={item.id} className="flex items-center py-3">
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="w-14 h-14 rounded-lg object-cover"
//                 />
//                 <div className="flex-1 ml-3">
//                   <p className="text-sm font-medium">{item.name}</p>
//                   <p className="text-xs text-gray-500">{item.size}</p>
//                   <button
//                     onClick={() => removeItem(item.id)}
//                     className="text-xs text-red-500 hover:underline mt-1"
//                   >
//                     Remove
//                   </button>
//                 </div>

//                 <div className="flex items-center space-x-2">
//                   <button
//                     onClick={() => updateQuantity(item.id, "decrease")}
//                     className="px-2 py-1 text-lg font-semibold text-gray-600 bg-gray-100 rounded hover:bg-gray-200"
//                   >
//                     -
//                   </button>
//                   <span>{item.quantity}</span>
//                   <button
//                     onClick={() => updateQuantity(item.id, "increase")}
//                     className="px-2 py-1 text-lg font-semibold text-gray-600 bg-gray-100 rounded hover:bg-gray-200"
//                   >
//                     +
//                   </button>
//                 </div>

//                 <div className="ml-3 text-right">
//                   <p className="text-sm font-semibold">
//                     ₹{item.price * item.quantity}
//                   </p>
//                   <p className="text-xs line-through text-gray-400">
//                     ₹{item.original}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p className="text-center text-gray-500 py-6">
//             Your cart is empty 🛒
//           </p>
//         )}
//       </div>

//       {/* Payment Section */}
//       <div className="w-full max-w-md bg-white shadow rounded-2xl p-4">
//         <div className="flex justify-between items-center mb-3">
//           <p className="text-gray-600 font-medium">Total to Pay</p>
//           <p className="text-lg font-semibold text-gray-800">
//             ₹{total.toFixed(2)}
//           </p>
//         </div>

//         <div className="grid grid-cols-2 gap-3">
//           <button className="py-2 bg-gray-100 rounded-lg font-medium text-gray-800 hover:bg-gray-200 transition">
//             Pay Online
//           </button>
//           <button className="py-2 bg-pink-100 rounded-lg font-medium text-pink-700 hover:bg-pink-200 transition">
//             Pay Cash/UPI
//           </button>
//         </div>
//       </div>

//       {/* Undo Snackbar */}
//       {showUndo && (
//         <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-4">
//           <span>
//             {undoType === "all"
//               ? "All items cleared."
//               : "Item removed."}
//           </span>
//           <button
//             onClick={undoRemove}
//             className="underline font-semibold text-blue-400"
//           >
//             Undo
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

import React, { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { FaUtensils, FaEarthAmericas } from "react-icons/fa6";
import { GrDirections } from "react-icons/gr";
import img1 from "../assests/img1.jpg";
import img2 from "../assests/img2.jpg";

const CartPage = () => {
  const [cart, setCart] = useState([
    { id: 1, name: "Chicken Dum Biryani", price: 180, quantity: 1, image: "https://via.placeholder.com/60" },
    { id: 2, name: "Egg Paratha", price: 90, quantity: 1, image: "https://via.placeholder.com/60" },
    { id: 3, name: "Gulab Jamun", price: 60, quantity: 1, image: "https://via.placeholder.com/60" },
    { id: 4, name: "Paneer Butter Masala", price: 150, quantity: 1, image: "https://via.placeholder.com/60" },
    { id: 5, name: "Butter Naan", price: 40, quantity: 1, image: "https://via.placeholder.com/60" },
  ]);

  const [removedItems, setRemovedItems] = useState([]);
  const [undoTimer, setUndoTimer] = useState(null);
  const [showUndo, setShowUndo] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const restaurantImages = [img1, img2];

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const increaseQty = (id) =>
    setCart(cart.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item)));

  const decreaseQty = (id) => {
    const updatedCart = cart
      .map((item) =>
        item.id === id ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 } : item
      )
      .filter((item) => item.quantity !== 0);
    setCart(updatedCart);
  };

  const removeItem = (id) => {
    const itemToRemove = cart.find((i) => i.id === id);
    setRemovedItems([itemToRemove]);
    setCart(cart.filter((item) => item.id !== id));
    setShowUndo(true);

    const timer = setTimeout(() => {
      setRemovedItems([]);
      setShowUndo(false);
    }, 10000);
    setUndoTimer(timer);
  };

  const undoRemove = () => {
    clearTimeout(undoTimer);
    setCart([...cart, ...removedItems]);
    setRemovedItems([]);
    setShowUndo(false);
  };

  const clearAll = () => {
    setRemovedItems([...cart]);
    setCart([]);
    setShowUndo(true);

    const timer = setTimeout(() => {
      setRemovedItems([]);
      setShowUndo(false);
    }, 10000);
    setUndoTimer(timer);
  };

  const visibleItems = showAll ? cart : cart.slice(0, 3);
  const nextImage = () => setCurrentImage((prev) => (prev + 1) % restaurantImages.length);
  const prevImage = () => setCurrentImage((prev) => (prev === 0 ? restaurantImages.length - 1 : prev - 1));

  return (
    <div className="min-h-screen bg-gray-50 p-8 flex flex-col items-center">
      {/* ✅ Restaurant Card Section */}
      <div className="w-full max-w-5xl bg-white shadow-md rounded-lg overflow-hidden mb-8">
        {/* Image Carousel */}
        <div className="relative w-full h-72">
          <img
            src={restaurantImages[currentImage]}
            alt="Restaurant"
            className="w-full h-full object-cover transition-all duration-500"
          />

          {/* Transparent Arrows */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-transparent hover:scale-110 transition-transform"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/271/271220.png"
              alt="Previous"
              className="w-8 h-8 opacity-80 hover:opacity-100"
            />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-transparent hover:scale-110 transition-transform"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/271/271228.png"
              alt="Next"
              className="w-8 h-8 opacity-80 hover:opacity-100"
            />
          </button>
        </div>

        {/* ✅ Details Section */}
        <div className="pt-8 pb-6 px-6 text-center">
          <h2 className="text-2xl font-semibold text-gray-800">Pista House Kukatpally</h2>
          <p className="text-gray-600 text-sm mt-1">
            Ground Floor, Fortune Signature, Kukatpally, Hyderabad
          </p>
          <p className="text-yellow-600 font-medium text-sm mt-1">Opens soon • 11 AM</p>
        </div>

        {/* ✅ Centered Logos BELOW details */}
        <div className="flex justify-center mb-6">
          <div className="flex gap-10">
            {/* Dine-in */}
            <a href="#dinein" className="flex flex-col items-center group">
              <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center transition-colors duration-300 group-hover:bg-blue-500">
                <FaUtensils size={22} className="text-gray-600 group-hover:text-white" />
              </div>
              <span className="text-sm text-gray-700 mt-1 group-hover:text-blue-600">Dine-in</span>
            </a>

            {/* Location */}
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center group"
            >
              <div className="w-12 h-12 rounded-full bg-blue-200 flex items-center justify-center transition-colors duration-300 group-hover:bg-blue-500">
                <FaEarthAmericas size={22} className="text-gray-600 group-hover:text-white" />
              </div>
              <span className="text-sm text-gray-700 mt-1 group-hover:text-blue-600">Location</span>
            </a>

            {/* Directions */}
            <a href="#directions" className="flex flex-col items-center group">
              <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center transition-colors duration-300 group-hover:bg-blue-500">
                <GrDirections size={22} className="text-gray-600 group-hover:text-white" />
              </div>
              <span className="text-sm text-gray-700 mt-1 group-hover:text-blue-600">Directions</span>
            </a>
          </div>
        </div>
      </div>

      {/* ✅ Cart Section */}
      <div className="w-full max-w-5xl bg-white shadow-md rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <FaUtensils size={22} className="text-gray-600 group-hover:text-white" /> Your Items
          </h3>
          <button onClick={clearAll} className="text-red-500 hover:underline text-sm font-medium">
            Clear All
          </button>
        </div>

        {cart.length === 0 ? (
          <p className="text-gray-500 text-center py-4">Empty 🛒</p>
        ) : (
          <>
            {visibleItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b border-gray-200 py-3"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-md object-cover border"
                  />
                  <div>
                    <p className="font-medium text-gray-700">{item.name}</p>
                    <p className="text-sm text-gray-500">₹{item.price * item.quantity}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button onClick={() => decreaseQty(item.id)} className="bg-gray-200 px-2 rounded">
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQty(item.id)} className="bg-gray-200 px-2 rounded">
                    +
                  </button>
                  {/* <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 text-sm hover:underline"
                  >
                    Remove
                  </button> */}
                </div>
              </div>
            ))}

            {/* ✅ See More / See Less Button */}
            {cart.length > 3 && (
              <div className="text-center mt-3">
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="text-blue-600 text-sm font-medium hover:underline"
                >
                  {showAll ? "See Less" : "See More"}
                </button>
              </div>
            )}

            <div className="flex justify-between mt-5 font-semibold">
              <span>Total:</span>
              <span>₹{total}</span>
            </div>
          </>
        )}

        {showUndo && (
          <div className="mt-5 text-center bg-yellow-100 p-3 rounded text-yellow-800">
            <p className="text-sm mb-2">Item(s) removed.</p>
            <button onClick={undoRemove} className="bg-yellow-500 text-white px-3 py-1 rounded">
              Undo
            </button>
          </div>
        )}
        {/* ✅ Payment Section — continuation of total */}
<div className="bg-white border-t border-gray-200 shadow-md p-4 flex flex-col items-center mt-6 rounded-lg">
  <p className="text-gray-800 font-medium text-center mb-2 text-sm">
    Need to pay 50% Amount
  </p>
  <button className="bg-green-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg w-[90%] md:w-[300px] transition-all text-sm md:text-base whitespace-nowrap">
    Proceed to Pay
  </button>
</div>


      </div>
    </div>
  );
};

export default CartPage;
