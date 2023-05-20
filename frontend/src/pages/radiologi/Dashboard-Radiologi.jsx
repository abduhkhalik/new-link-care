import React from "react";
import Navbar from "../../component/Navbar";
export default function Dashboard() {
  return (
    <main>
      <Navbar />
      <div className="content">
        <h4 className="mb-6">Selamat Datang</h4>
        <h5 className="mb-6 text-center text-3xl font-bold">Radiologi</h5>
        
        <div className="mb-6 flex justify-center items-center gap-5">
          <div className="w-1/2 bg-white text-center ">
            <h5>GRUP 1</h5>
            <p>1000</p>
          </div>

          <div className="w-1/2 bg-white text-center ">
            <h5>GRUP 1</h5>
            <p>1000</p>
          </div>
        </div>
        
        <div className="mb-6 flex justify-center items-center gap-5">
          <div className="w-1/2 bg-white text-center ">
            <h5>GRUP 1</h5>
            <p>1000</p>
          </div>

          <div className="w-1/2 bg-white text-center ">
            <h5>GRUP 1</h5>
            <p>1000</p>
          </div>
        </div>

      </div>
    </main>
  );
}
