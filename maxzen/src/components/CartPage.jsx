// import React, { useState } from "react";
// import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
// import { FaShoppingCart, FaPlus, FaMinus } from "react-icons/fa";

// const CartPage = () => {
//   const [cartItems, setCartItems] = useState([
//     { id: 1, name: "Green Tea", price: 10, qty: 1 },
//     { id: 2, name: "Lemon Juice", price: 15, qty: 1 },
//     { id: 3, name: "Mango Shake", price: 20, qty: 1 },
//   ]);

//   const [showModal, setShowModal] = useState(false);

//   // Increase quantity
//   const increaseQty = (id) => {
//     setCartItems((prev) =>
//       prev.map((item) =>
//         item.id === id ? { ...item, qty: item.qty + 1 } : item
//       )
//     );
//   };

//   // Decrease quantity
//   const decreaseQty = (id) => {
//     setCartItems((prev) =>
//       prev.map((item) =>
//         item.id === id && item.qty > 1
//           ? { ...item, qty: item.qty - 1 }
//           : item
//       )
//     );
//   };

//   // Calculate total
//   const totalPrice = cartItems.reduce(
//     (total, item) => total + item.price * item.qty,
//     0
//   );

//   // Checkout click handler
//   const handleCheckout = () => {
//     setShowModal(true);
//     setTimeout(() => setShowModal(false), 2000); // Auto close modal
//   };

//   return (
//     <div className="min-h-screen bg-green-100 flex flex-col font-[Poppins]">
//       {/* Header */}
//       <header className="w-full bg-green-500 text-white py-4 px-5 flex justify-between items-center shadow-md">
//         <button className="bg-green-600 p-2 rounded-full hover:bg-green-700 transition">
//           <MdOutlineKeyboardArrowLeft size={22} />
//         </button>

//         <h1 className="text-lg font-semibold">Cart</h1>

//         <div className="bg-green-600 p-2 rounded-full hover:bg-green-700 transition relative">
//           <FaShoppingCart size={20} />
//           <span className="absolute -top-1 -right-1 bg-white text-green-700 text-xs font-bold px-1.5 rounded-full">
//             {cartItems.length}
//           </span>
//         </div>
//       </header>

//       {/* Cart Items */}
//       <main className="flex-grow p-5 space-y-4">
//         {cartItems.map((item) => (
//           <div
//             key={item.id}
//             className="bg-white shadow rounded-xl p-4 flex justify-between items-center"
//           >
//             <div>
//               <h2 className="text-green-800 font-semibold">{item.name}</h2>
//               <p className="text-gray-600 text-sm">₹{item.price}</p>
//             </div>

//             <div className="flex items-center space-x-2">
//               <button
//                 onClick={() => decreaseQty(item.id)}
//                 className="bg-green-500 text-white rounded-full p-2 hover:bg-green-600"
//               >
//                 <FaMinus size={12} />
//               </button>
//               <span className="px-2 text-green-700 font-semibold">
//                 {item.qty}
//               </span>
//               <button
//                 onClick={() => increaseQty(item.id)}
//                 className="bg-green-500 text-white rounded-full p-2 hover:bg-green-600"
//               >
//                 <FaPlus size={12} />
//               </button>
//             </div>
//           </div>
//         ))}
//       </main>

//       {/* Footer */}
//       <footer className="bg-white py-4 px-5 shadow-inner flex justify-between items-center">
//         <div>
//           <p className="text-green-800 font-semibold">Total:</p>
//           <p className="text-lg font-bold text-green-700">₹{totalPrice}</p>
//         </div>
//         <button
//           onClick={handleCheckout}
//           className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition"
//         >
//           Checkout
//         </button>
//       </footer>

//       {/* Success Modal */}
//       {showModal && (
//         <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
//             <h2 className="text-green-700 text-lg font-semibold mb-2">
//               ✅ Order Placed Successfully!
//             </h2>
//             <p className="text-gray-600 text-sm">
//               Thank you for your purchase.
//             </p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CartPage;


import React, { useState } from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { FaShoppingCart, FaPlus, FaMinus } from "react-icons/fa";

const CartPage = () => {
  // Shop items (available to add)
  const shopItems = [
    { id: 1, name: "Green Tea", price: 10 },
    { id: 2, name: "Lemon Juice", price: 15 },
    { id: 3, name: "Mango Shake", price: 20 },
  ];

  // Cart items
  const [cartItems, setCartItems] = useState([]);

  // Modal for checkout success
  const [showModal, setShowModal] = useState(false);

  // Add item to cart
  const addToCart = (item) => {
    setCartItems((prev) => {
      const exist = prev.find((p) => p.id === item.id);
      if (exist) {
        return prev.map((p) =>
          p.id === item.id ? { ...p, qty: p.qty + 1 } : p
        );
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  // Increase quantity
  const increaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  // Decrease quantity
  const decreaseQty = (id) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id && item.qty > 1
            ? { ...item, qty: item.qty - 1 }
            : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  // Calculate total
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  // Checkout click handler
  const handleCheckout = () => {
    if (cartItems.length === 0) return;
    setShowModal(true);
    setCartItems([]);
    setTimeout(() => setShowModal(false), 2000);
  };

  return (
    <div className="min-h-screen bg-green-100 flex flex-col font-[Poppins]">
      {/* Header */}
      <header className="w-full bg-green-500 text-white py-4 px-5 flex justify-between items-center shadow-md">
        <button className="bg-green-600 p-2 rounded-full hover:bg-green-700 transition">
          <MdOutlineKeyboardArrowLeft size={22} />
        </button>

        <h1 className="text-lg font-semibold">Cart</h1>

        <div className="bg-green-600 p-2 rounded-full relative">
          <FaShoppingCart size={20} />
          {cartItems.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-white text-green-700 text-xs font-bold px-1.5 rounded-full">
              {cartItems.length}
            </span>
          )}
        </div>
      </header>

      {/* Shop Items */}
      <section className="p-5 space-y-3">
        <h2 className="text-green-800 font-semibold text-lg mb-2">
          Available Items
        </h2>
        {shopItems.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow rounded-xl p-4 flex justify-between items-center"
          >
            <div>
              <h3 className="text-green-800 font-semibold">{item.name}</h3>
              <p className="text-gray-600 text-sm">₹{item.price}</p>
            </div>
            <button
              onClick={() => addToCart(item)}
              className="bg-green-500 text-white px-3 py-1.5 rounded-full hover:bg-green-600 transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </section>

      {/* Cart Items */}
      <main className="flex-grow p-5 space-y-4">
        {cartItems.length > 0 && (
          <>
            <h2 className="text-green-800 font-semibold text-lg mb-2">
              Your Cart
            </h2>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white shadow rounded-xl p-4 flex justify-between items-center"
              >
                <div>
                  <h2 className="text-green-800 font-semibold">{item.name}</h2>
                  <p className="text-gray-600 text-sm">₹{item.price}</p>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="bg-green-500 text-white rounded-full p-2 hover:bg-green-600"
                  >
                    <FaMinus size={12} />
                  </button>
                  <span className="px-2 text-green-700 font-semibold">
                    {item.qty}
                  </span>
                  <button
                    onClick={() => increaseQty(item.id)}
                    className="bg-green-500 text-white rounded-full p-2 hover:bg-green-600"
                  >
                    <FaPlus size={12} />
                  </button>
                </div>
              </div>
            ))}
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white py-4 px-5 shadow-inner flex justify-between items-center">
        <div>
          <p className="text-green-800 font-semibold">Total:</p>
          <p className="text-lg font-bold text-green-700">₹{totalPrice}</p>
        </div>
        <button
          onClick={handleCheckout}
          className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition"
        >
          Checkout
        </button>
      </footer>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
            <h2 className="text-green-700 text-lg font-semibold mb-2">
              ✅ Checkout Successful!
            </h2>
            <p className="text-gray-600 text-sm">
              Thank you for your purchase.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;

