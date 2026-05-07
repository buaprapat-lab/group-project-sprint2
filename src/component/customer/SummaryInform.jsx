// src/components/OrderSetup.jsx
import React, { useState } from 'react';

export default function SummaryInform({ orderState, setOrderState, profile, setProfile }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editProfile, setEditProfile] = useState(profile);
  const [editOrder, setEditOrder] = useState({ type: orderState.type, member: orderState.member });

  // จัดรูปแบบวันที่ให้สวยงาม
  const formatDisplayDate = (dateString) => {
    if (!dateString) return '';
    const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    const parts = dateString.split('-');
    if (parts.length !== 3) return dateString;
    return `${parseInt(parts[2], 10)} ${months[parseInt(parts[1], 10) - 1]} ${parts[0]}`;
  };

  const handleSaveProfile = () => {
    setProfile(editProfile);
    setOrderState(prev => ({ ...prev, type: editOrder.type, member: editOrder.member }));
    setIsEditing(false);
  };

  const cancelBooking = () => {
    if (window.confirm("คุณต้องการยกเลิกใช่ไหม?")) {
      window.location.href = '/'; // เปลี่ยนเส้นทางตาม Router ของคุณ
    }
  };

  const showMember = orderState.type === 'Booking';

  return (
    <section className="flex flex-col gap-6 sticky top-10">
      <h2 className="text-center lg:text-left text-2xl font-black uppercase tracking-widest text-brand-black border-l-8 border-brand-red pl-4">
        2. Order Setup
      </h2>

      {/* แถบสีส้ม เลือกวัน/เวลา/จำนวนคน */}
      <div className="bg-brand-orange p-6 rounded shadow-md flex flex-wrap justify-center sm:justify-start items-center gap-4">
        <div className="flex flex-col w-full sm:w-auto">
          <label className="font-black text-brand-white uppercase tracking-wider text-sm mb-1">Date</label>
          <input 
            type="date" 
            value={orderState.date} 
            onChange={(e) => setOrderState({ ...orderState, date: e.target.value })}
            className="text-brand-black font-semibold p-2 rounded bg-brand-white focus:outline-none w-full" 
          />
        </div>

        <div className="flex flex-col w-full sm:w-auto flex-1">
          <label className="font-black text-brand-white uppercase tracking-wider text-sm mb-1">Time</label>
          <select 
            value={orderState.time} 
            onChange={(e) => setOrderState({ ...orderState, time: e.target.value })}
            className="text-brand-black font-semibold p-2 rounded bg-brand-white focus:outline-none w-full"
          >
            <option value="10:00-12:00">10:00 - 12:00</option>
            <option value="13:00-15:00">13:00 - 15:00</option>
            <option value="16:00-18:00">16:00 - 18:00</option>
            <option value="19:00-21:00">19:00 - 21:00</option>
          </select>
        </div>

        {showMember && (
          <div className="flex flex-col w-full sm:w-auto">
            <label className="font-black text-brand-white uppercase tracking-wider text-sm mb-1">Member</label>
            <select 
              value={orderState.member} 
              onChange={(e) => setOrderState({ ...orderState, member: e.target.value })}
              className="text-brand-black font-semibold p-2 rounded bg-brand-white focus:outline-none w-full"
            >
              <option value="1P">1 P</option>
              <option value="2P">2 P</option>
              <option value="3P">3 P</option>
              <option value="4P">4 P</option>
              <option value="5P">5 P</option>
              <option value="6P">6 P</option>
            </select>
          </div>
        )}
      </div>

      {/* รายละเอียดการจอง */}
      <div className="bg-white border-2 border-brand-black p-6 rounded shadow-lg">
        <h3 className="text-xl font-black uppercase tracking-widest mb-6 text-brand-black text-center border-b-2 border-brand-gray pb-2">Booking Information</h3>
        
        <div className="text-left text-base font-black uppercase space-y-4 text-brand-black">
          
          <p className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 border-b border-brand-gray pb-2">
            <span className="text-xs text-gray-500">Order Type</span> 
            {isEditing ? (
               <select 
                 value={editOrder.type} 
                 onChange={e => setEditOrder({...editOrder, type: e.target.value})}
                 className="font-bold border-b-2 border-brand-black focus:outline-none text-right text-brand-orange bg-transparent w-1/2"
               >
                 <option value="Booking">Booking</option>
                 <option value="Pickup">Pickup</option>
                 <option value="Delivery">Delivery</option>
               </select>
            ) : (
              <span className="font-bold text-brand-orange text-lg">{orderState.type}</span>
            )}
          </p>

          <p className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 border-b border-brand-gray pb-2">
            <span className="text-xs text-gray-500">Branch</span> 
            {orderState.branch ? (
              <span className="font-bold text-brand-orange">{orderState.branch}</span>
            ) : (
              <span className="font-bold text-gray-400">- ยังไม่ได้เลือกสาขา -</span>
            )}
          </p>
          
          <p className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 border-b border-brand-gray pb-2">
            <span className="text-xs text-gray-500">Date & Time</span> 
            <span className="font-bold">{formatDisplayDate(orderState.date)} ({orderState.time})</span>
          </p>
          
          <p className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 border-b border-brand-gray pb-2">
            <span className="text-xs text-gray-500">Name</span> 
            {isEditing ? (
              <input type="text" value={editProfile.name} onChange={e => setEditProfile({...editProfile, name: e.target.value})} className="font-bold border-b-2 border-brand-black text-right w-1/2 bg-transparent" />
            ) : (
              <span className="font-bold">{profile.name}</span>
            )}
          </p>

          {showMember && (
            <p className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 border-b border-brand-gray pb-2">
              <span className="text-xs text-gray-500">Member</span> 
              {isEditing ? (
                <select value={editOrder.member} onChange={e => setEditOrder({...editOrder, member: e.target.value})} className="font-bold border-b-2 border-brand-black text-right bg-transparent w-1/2">
                   {['1P','2P','3P','4P','5P','6P'].map(p => <option key={p} value={p}>{p}</option>)}
                </select>
              ) : (
                <span className="font-bold">{orderState.member}</span>
              )}
            </p>
          )}

          <p className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 border-b border-brand-gray pb-2">
            <span className="text-xs text-gray-500">Email</span> 
            {isEditing ? (
               <input type="email" value={editProfile.email} onChange={e => setEditProfile({...editProfile, email: e.target.value})} className="font-bold lowercase border-b-2 border-brand-black text-right w-1/2 bg-transparent" />
            ) : (
              <span className="font-bold lowercase">{profile.email}</span>
            )}
          </p>

          <p className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 border-b border-brand-gray pb-2">
            <span className="text-xs text-gray-500">Contact</span> 
            {isEditing ? (
               <input type="text" value={editProfile.contact} onChange={e => setEditProfile({...editProfile, contact: e.target.value})} className="font-bold border-b-2 border-brand-black text-right w-1/2 bg-transparent" />
            ) : (
              <span className="font-bold">{profile.contact}</span>
            )}
          </p>
        </div>
      </div>

      {/* Action Bar */}
      <div className="bg-brand-black flex justify-between items-center p-4 rounded shadow-md text-sm sm:text-base font-black uppercase tracking-widest mt-2">
        <div>
          {isEditing ? (
            <button onClick={handleSaveProfile} className="text-brand-orange hover:opacity-90 transition px-2 py-2 flex items-center gap-2">
              💾 UPDATE
            </button>
          ) : (
            <button onClick={() => {
                setEditProfile(profile);
                setEditOrder({ type: orderState.type, member: orderState.member });
                setIsEditing(true);
              }} 
              className="text-brand-gray hover:text-white transition px-2 py-2 flex items-center gap-2"
            >
              ✏️ EDIT
            </button>
          )}
        </div>
        
        <button 
          disabled={!orderState.branch} 
          onClick={() => alert('ไปหน้า Menu...')} 
          className={`px-6 py-3 rounded transition font-bold ${!orderState.branch ? 'bg-gray-400 text-gray-600 cursor-not-allowed' : 'bg-[#4ade80] text-brand-black hover:bg-green-300'}`}
        >
          Confirm Order
        </button>
        
        <button onClick={cancelBooking} className="text-brand-red hover:opacity-80 transition px-2 py-2">
          Cancel
        </button>
      </div>
    </section>
  );
}