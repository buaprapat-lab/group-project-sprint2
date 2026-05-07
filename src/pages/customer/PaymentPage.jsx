import React, { useContext } from "react";
import { OrdersContext } from "../../context/ordersContext/OrdersContext";
import CheckoutSteps from "../../component/customer/CheckoutStep";
import OrderSummary from "../../component/customer/OrderSummary";


export default function PaymentPage() {
  const { orderList } = useContext(OrdersContext);

  // ดึงรายการอาหารทั้งหมดออกมาจาก orderList เพื่อส่งให้ OrderSummary แบบ Array ชั้นเดียว
  const allCartItems = orderList
    ? orderList.flatMap((order) => order.List || order.orderList || [])
    : [];

  return (
    <div className="bg-[#121212] min-h-screen py-10 font-sans text-white">
      <main className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-3xl font-black mb-8 flex items-center gap-3 text-white">
          <span className="bg-[#DC5F00] w-2 h-8 rounded-full"></span>
          Checkout
        </h1>

        {/* แบ่ง Grid 3 ส่วน (ซ้าย 2 ส่วน ขวา 1 ส่วน) สำหรับหน้าจอขนาดใหญ่ */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* ฝั่งซ้าย: ขั้นตอนการจัดส่งและชำระเงิน */}
          <div className="lg:col-span-2">
            <CheckoutSteps />
          </div>

          {/* ฝั่งขวา: สรุปคำสั่งซื้อ */}
          <div className="lg:col-span-1">
            <OrderSummary cartItems={allCartItems} />
          </div>

        </div>
      </main>
    </div>
  );
}