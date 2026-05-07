// src/components/BranchSelector.jsx
import React, { useState } from 'react';
import MapView from './MapView';

export default function BranchSelector({ onSelectBranch, onUpdateAddress }) {
  const [loading, setLoading] = useState(false);

  const findMyLocation = () => {
    if (!navigator.geolocation) {
      alert("เบราว์เซอร์ของคุณไม่รองรับการระบุตำแหน่ง");
      return;
    }

    setLoading(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        // ในสถานการณ์จริง คุณอาจใช้ Reverse Geocoding API เพื่อแปลงพิกัดเป็นที่อยู่
        const mockAddress = `พิกัด: ${latitude.toFixed(4)}, ${longitude.toFixed(4)} (ปากเกร็ด)`;
        
        onUpdateAddress(mockAddress);
        setLoading(false);
        alert(`ดึงตำแหน่งสำเร็จ: ${mockAddress}`);
      },
      (error) => {
        setLoading(false);
        alert("ไม่สามารถเข้าถึงตำแหน่งได้ กรุณาเปิดสิทธิ์การเข้าถึง GPS");
      }
    );
  };

  return (
    <section className="flex flex-col gap-6">
      <h2 className="text-center lg:text-left text-2xl font-black uppercase tracking-widest text-brand-black border-l-8 border-brand-orange pl-4">
        1. Select a Branch
      </h2>

      <MapView onSelectBranch={onSelectBranch} />

      <div className="flex flex-wrap items-center gap-3">
        <input 
          type="text" 
          placeholder="ค้นหาสถานที่..." 
          className="flex-1 border-2 border-brand-gray p-2 rounded focus:outline-none focus:border-brand-orange bg-white shadow-sm min-w-50"
        />
        <button 
          onClick={findMyLocation}
          className={`bg-brand-black text-brand-white px-4 py-2 rounded hover:opacity-80 transition shadow-sm whitespace-nowrap flex items-center gap-2 ${loading ? 'animate-pulse' : ''}`}
        >
          📍 {loading ? 'กำลังค้นหา...' : 'ค้นหาตำแหน่งใกล้ฉัน'}
        </button>
      </div>
      
      {/* ส่วนลิสต์สาขาใกล้เคียงคงเดิม */}
      <div className="bg-white p-5 rounded border-2 border-brand-gray shadow-sm">
        <h3 className="text-xl font-bold mb-4 uppercase border-b-2 border-brand-black pb-2 text-brand-black">
          Nearby Branches (Pakkret)
        </h3>
        {/* Branch list items... */}
      </div>
    </section>
  );
}