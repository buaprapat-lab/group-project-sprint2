// import React, { useContext } from "react";
// import { OrdersContext } from "../../context/ordersContext/OrdersContext";
// import { useNavigate } from "react-router-dom";

// const OrderItem = ({ item, orderId, onUpdateQty, onRemove }) => {
//   return (
//     <div className="flex items-center justify-between border-b border-gray-100 py-4 last:border-0">
//       <div className="flex-1">
//         <h3 className="font-bold text-gray-800">{item.name}</h3>
//         <p className="text-sm text-orange-600 font-semibold">
//           {item.price
//             ? `${(item.price * item.quantity).toLocaleString()} บาท`
//             : "รอระบุราคา"}
//         </p>
//       </div>

//       <div className="flex items-center gap-4">
//         {/* ส่วนเพิ่ม-ลดจำนวน */}
//         <div className="flex items-center bg-gray-100 rounded-lg p-1">
//           <button
//             onClick={() => onUpdateQty(orderId, item.id, -1)}
//             className="w-8 h-8 flex items-center justify-center hover:bg-white rounded-md transition-all text-gray-600 shadow-sm"
//             disabled={item.quantity <= 1}
//           >
//             -
//           </button>
//           <span className="w-10 text-center font-bold text-gray-700">
//             {item.quantity}
//           </span>
//           <button
//             onClick={() => onUpdateQty(orderId, item.id, 1)}
//             className="w-8 h-8 flex items-center justify-center hover:bg-white rounded-md transition-all text-gray-600 shadow-sm"
//           >
//             +
//           </button>
//         </div>

//         {/* ปุ่มลบทิ้ง */}
//         <button
//           onClick={() => onRemove(orderId, item.id)}
//           className="text-gray-300 hover:text-red-500 transition-colors p-2"
//         >
//           🗑️
//         </button>
//       </div>
//     </div>
//   );
// };

// const OrderPage = () => {
//   const { orderList, setOrderList } = useContext(OrdersContext);
//   const navigate = useNavigate();

//   // ฟังก์ชันปรับจำนวน
//   const handleUpdateQty = (orderId, itemId, change) => {
//     const updated = orderList.map((order) => {
//       if (order.orderId === orderId) {
//         const key = order.List ? "List" : "orderList";
//         return {
//           ...order,
//           [key]: order[key].map((item) =>
//             item.id === itemId
//               ? { ...item, quantity: Math.max(1, item.quantity + change) }
//               : item,
//           ),
//         };
//       }
//       return order;
//     });
//     setOrderList(updated);
//   };

//   // ฟังก์ชันลบรายการ
//   const handleRemove = (orderId, itemId) => {
//     if (window.confirm("ต้องการลบรายการนี้ใช่หรือไม่?")) {
//       const updated = orderList
//         .map((order) => {
//           if (order.orderId === orderId) {
//             const key = order.List ? "List" : "orderList";
//             return {
//               ...order,
//               [key]: order[key].filter((item) => item.id !== itemId),
//             };
//           }
//           return order;
//         })
//         .filter((order) => (order.List || order.orderList).length > 0);
//       setOrderList(updated);
//     }
//   };

//   // คำนวณราคาสรุป
//   const calculateTotal = () => {
//     return orderList?.reduce((total, order) => {
//       const items = order.List || order.orderList || [];
//       return (
//         total +
//         items.reduce((sum, item) => sum + (item.price || 0) * item.quantity, 0)
//       );
//     }, 0);
//   };

//   // ฟังก์ชันสำหรับกดปุ่มชำระเงิน
//   const handleCheckout = () => {
//     if (!orderList || orderList.length === 0) {
//       alert("กรุณาเพิ่มสินค้าลงตะกร้าก่อนชำระเงิน");
//       return;
//     }

//     const total = calculateTotal();
//     const tax = total * 0.07;
//     const netTotal = total + tax;

//     // ส่งข้อมูลตะกร้าและราคาไปกับ state ไปยัง Path /payment
//     navigate("/payment", {
//       state: {
//         subTotal: total,
//         tax: tax,
//         netTotal: netTotal,
//         orderData: orderList,
//       },
//     });
//   };

//   return (
//     <div className="py-10 bg-gray-50 min-h-screen">
//       <main className="container mx-auto px-4 max-w-4xl">
//         <h1 className="text-3xl font-black text-gray-800 mb-8 flex items-center gap-3">
//           <span className="bg-orange-500 w-2 h-8 rounded-full"></span>
//           My Cart
//         </h1>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* รายการอาหาร */}
//           <div className="lg:col-span-2 space-y-4">
//             <div className="bg-white rounded-3xl shadow-sm p-6 border border-gray-100">
//               {!orderList || orderList.length === 0 ? (
//                 <div className="text-center py-20 text-gray-400">
//                   ตะกร้าสินค้าว่างเปล่า
//                 </div>
//               ) : (
//                 orderList.map((order) => (
//                   <div key={order.orderId}>
//                     {(order.List || order.orderList || []).map((item) => (
//                       <OrderItem
//                         key={item.id}
//                         item={item}
//                         orderId={order.orderId}
//                         onUpdateQty={handleUpdateQty}
//                         onRemove={handleRemove}
//                       />
//                     ))}
//                   </div>
//                 ))
//               )}
//             </div>
//           </div>

//           {/* สรุปยอดและปุ่มชำระเงิน */}
//           <div className="lg:col-span-1">
//             <div className="bg-white rounded-3xl shadow-lg p-6 border border-gray-100 sticky top-10">
//               <h2 className="text-xl font-bold text-gray-800 mb-6">
//                 สรุปยอดเงิน
//               </h2>

//               <div className="space-y-3 mb-6">
//                 <div className="flex justify-between text-gray-500">
//                   <span>ราคารวม</span>
//                   <span>{calculateTotal().toLocaleString()} บาท</span>
//                 </div>
//                 <div className="flex justify-between text-gray-500">
//                   <span>ภาษี (7%)</span>
//                   <span>{(calculateTotal() * 0.07).toLocaleString()} บาท</span>
//                 </div>
//                 <div className="border-t border-dashed pt-3 mt-3 flex justify-between font-black text-xl text-gray-900">
//                   <span>สุทธิ</span>
//                   <span className="text-orange-600">
//                     {(calculateTotal() * 1.07).toLocaleString()}
//                   </span>
//                 </div>
//               </div>

//               {/* ปุ่มชำระเงินที่ผูกฟังก์ชัน handleCheckout ไว้แล้ว */}
//               <button
//                 onClick={handleCheckout}
//                 className="w-full bg-gray-900 hover:bg-black text-white py-4 rounded-2xl font-bold text-lg transition-all active:scale-95 shadow-xl"
//               >
//                 ชำระเงินตอนท้าย
//               </button>

//               <p className="text-[10px] text-center text-gray-400 mt-4 uppercase tracking-widest">
//                 Secured by Payment Gateway
//               </p>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default OrderPage;


import React, { useContext } from "react";
import { OrdersContext } from "../../context/ordersContext/OrdersContext";
import { useNavigate } from "react-router-dom";
import { Trash2, PlusCircle, MessageSquare } from "lucide-react";

// --- ส่วนของรายการอาหารย่อย ---
const OrderItem = ({ item, orderId, onUpdateQty, onRemove }) => {
  return (
    <div className="flex items-center gap-4 border-b border-gray-100 py-6 last:border-0">
      {/* 1. รูปภาพสินค้าด้านซ้ายมือ */}
      <div className="w-20 h-20 rounded-2xl overflow-hidden bg-gray-100 flex-shrink-0">
        <img 
          src={item.image || ""} 
          alt={item.name} 
          className="w-full h-full object-cover"
        />
      </div>

      {/* 2. รายละเอียดสินค้ากลาง */}
      <div className="flex-1 min-w-0">
        <h3 className="font-bold text-gray-800 truncate">{item.name}</h3>
        <p className="text-sm text-orange-600 font-bold mt-1">
          {item.price
            ? `${(item.price * item.quantity).toLocaleString()} บาท`
            : "รอระบุราคา"}
        </p>
        
        {/* ปุ่ม Note สำหรับแต่ละรายการ */}
        <button className="flex items-center gap-1 text-[10px] text-gray-400 mt-2 hover:text-orange-500 transition-colors">
          <MessageSquare size={12} />
          ระบุคำขอพิเศษ (Note)
        </button>
      </div>

      {/* 3. ส่วนจัดการจำนวนและปุ่มลบด้านขวา */}
      <div className="flex flex-col items-end gap-3">
        <div className="flex items-center bg-gray-100 rounded-xl p-1 border border-gray-200">
          <button
            onClick={() => onUpdateQty(orderId, item.id, -1)}
            className="w-7 h-7 flex items-center justify-center hover:bg-white rounded-lg transition-all text-gray-600 disabled:opacity-30 shadow-sm"
            disabled={item.quantity <= 1}
          >
            -
          </button>
          <span className="w-8 text-center font-bold text-gray-700 text-sm">
            {item.quantity}
          </span>
          <button
            onClick={() => onUpdateQty(orderId, item.id, 1)}
            className="w-7 h-7 flex items-center justify-center hover:bg-white rounded-lg transition-all text-gray-600 shadow-sm"
          >
            +
          </button>
        </div>

        <button
          onClick={() => onRemove(orderId, item.id)}
          className="text-gray-300 hover:text-red-500 transition-colors"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
};

// --- หน้าเพจหลัก ---
const OrderPage = () => {
  const { orderList, setOrderList } = useContext(OrdersContext);
  const navigate = useNavigate();

  const handleUpdateQty = (orderId, itemId, change) => {
    const updated = orderList.map((order) => {
      if (order.orderId === orderId) {
        const key = order.List ? "List" : "orderList";
        return {
          ...order,
          [key]: order[key].map((item) =>
            item.id === itemId
              ? { ...item, quantity: Math.max(1, item.quantity + change) }
              : item
          ),
        };
      }
      return order;
    });
    setOrderList(updated);
  };

  const handleRemove = (orderId, itemId) => {
    if (window.confirm("ต้องการลบรายการนี้ใช่หรือไม่?")) {
      const updated = orderList
        .map((order) => {
          if (order.orderId === orderId) {
            const key = order.List ? "List" : "orderList";
            return {
              ...order,
              [key]: order[key].filter((item) => item.id !== itemId),
            };
          }
          return order;
        })
        .filter((order) => (order.List || order.orderList).length > 0);
      setOrderList(updated);
    }
  };

  const calculateTotal = () => {
    return orderList?.reduce((total, order) => {
      const items = order.List || order.orderList || [];
      return total + items.reduce((sum, item) => sum + (item.price || 0) * item.quantity, 0);
    }, 0);
  };

  const handleCheckout = () => {
    if (!orderList || orderList.length === 0) {
      alert("กรุณาเพิ่มสินค้าลงตะกร้าก่อนชำระเงิน");
      return;
    }
    const total = calculateTotal();
    navigate("/payment", {
      state: {
        subTotal: total,
        tax: total * 0.07,
        netTotal: total * 1.07,
        orderData: orderList,
      },
    });
  };

  return (
    <div className="py-10 bg-gray-50 min-h-screen">
      <main className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-black text-gray-800 mb-8 flex items-center gap-3">
          <span className="bg-orange-500 w-2 h-8 rounded-full"></span>
          My Cart
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white rounded-[2rem] shadow-sm p-6 border border-gray-100">
              {!orderList || orderList.length === 0 ? (
                <div className="text-center py-20">
                  <p className="text-gray-400 mb-4">ตะกร้าสินค้าว่างเปล่า</p>
                  <button 
                    onClick={() => navigate("/menu")}
                    className="text-orange-500 font-bold border-b-2 border-orange-500 pb-1"
                  >
                    ไปหน้าเมนู
                  </button>
                </div>
              ) : (
                <>
                  {orderList.map((order) => (
                    <div key={order.orderId}>
                      {(order.List || order.orderList || []).map((item) => (
                        <OrderItem
                          key={item.id}
                          item={item}
                          orderId={order.orderId}
                          onUpdateQty={handleUpdateQty}
                          onRemove={handleRemove}
                        />
                      ))}
                    </div>
                  ))}
                  
                  {/* ปุ่มเพิ่มรายการสินค้าอื่นๆ ภายในกล่องรายการ */}
                  <div className="mt-6 pt-4 border-t border-dashed border-gray-200">
                    <button 
                      onClick={() => navigate("/menu")}
                      className="flex items-center justify-center gap-2 w-full py-3 bg-orange-50 text-orange-600 rounded-2xl font-bold hover:bg-orange-100 transition-all border border-orange-100"
                    >
                      <PlusCircle size={20} />
                      เพิ่มรายการอาหารอื่น
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-[2rem] shadow-xl p-8 border border-gray-100 sticky top-10">
              <h2 className="text-xl font-bold text-gray-800 mb-6">สรุปยอดเงิน</h2>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-gray-500 text-sm">
                  <span>ราคารวม</span>
                  <span className="font-semibold text-gray-800">{calculateTotal().toLocaleString()} บาท</span>
                </div>
                <div className="flex justify-between text-gray-500 text-sm">
                  <span>ภาษี (7%)</span>
                  <span className="font-semibold text-gray-800">{(calculateTotal() * 0.07).toLocaleString()} บาท</span>
                </div>
                <div className="border-t border-gray-100 pt-4 mt-4 flex justify-between font-black text-xl text-gray-900">
                  <span>สุทธิ</span>
                  <span className="text-orange-600">
                    {(calculateTotal() * 1.07).toLocaleString()}
                  </span>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full bg-gray-900 hover:bg-black text-white py-4 rounded-2xl font-bold text-lg transition-all active:scale-95 shadow-lg shadow-gray-200"
              >
                ชำระเงินตอนท้าย
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OrderPage;