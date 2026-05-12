import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbarmenu from "./component/Navbarmenu";
import CookBoard from "./pages/CookBoard";
import IndexPage from "./pages/customer/IndexPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CheckoutPage from "./pages/cashier/CheckoutPage";
import TableMap from "./pages/shared/TableMap";
import OrderList from "./pages/cashier/OrderList";
import OrderHistory from "./pages/cashier/OrderHistory";
import MenuPage from "./pages/customer/MenuPage";
import PaymentPage from "./pages/customer/PaymentPage";
import OrderPage from "./pages/customer/OrderPage";
import BookingPage from "./pages/customer/BookingPage";
// import DeliveryTracking from "./pages/customer/DeliveryTracking";
import OrderTrackingPage from "./pages/customer/OrderTrackingPage";
import ProtectedRoute from "./component/ProtectedRoute";

export default function App() {
  return (
    <Router>
      <Navbarmenu />
      <Routes>
        {/* PUBLIC ROUTES (ใครก็เข้าได้ ไม่ต้องล็อกอิน) */}
        <Route path="/" element={<IndexPage />} />
        <Route path="/home" element={<IndexPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/booking" element={<BookingPage />} />

        {/* CUSTOMER ROUTES (ต้องล็อกอิน และเป็น Customer)

          <Route path="/order" element={
          <ProtectedRoute allowedRoles={["customer"]}>
            <OrderPage />
          </ProtectedRoute>
        } />
        <Route path="/payment" element={
          <ProtectedRoute allowedRoles={["customer"]}>
            <PaymentPage />
          </ProtectedRoute>
        } />
        <Route path="/booking" element={
          <ProtectedRoute allowedRoles={["customer"]}>
            <BookingPage />
          </ProtectedRoute>
        } />
        <Route path="/order-tracking" element={
          <ProtectedRoute allowedRoles={["customer"]}>
            <OrderTrackingPage />
          </ProtectedRoute>
        } /> */}

        {/* เพิ่ม Route ของ chasier / shared (with waiter)  */}
        <Route path="/cashier/checkout" element={<CheckoutPage />} />
        <Route path="/shared/tables" element={<TableMap />} />
        <Route path="/cashier/orders" element={<OrderList />} />
        <Route path="/cashier/history" element={<OrderHistory />} />
        <Route path="/cookBoard" element={<CookBoard />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/order-tracking" element={<OrderTrackingPage />} />
      </Routes>
    </Router>
  );
}
