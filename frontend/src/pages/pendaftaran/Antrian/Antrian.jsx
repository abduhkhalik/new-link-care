import React from "react";
import Navbar from "../../../component/Navbar";

export default function Antrian() {
  return (
    <>
      <Navbar />
      <section className="content h-[100vh]">
        <div className="w-full flex justify-center gap-10 items-center">
          <div className="w-1/2 py-10 rounded-2xl bg-slate-500 flex justify-center items-center">
            <div className="col text-center">
              <h4 className="font-bold w-full text-lg">Nomor Antrian</h4>
              <p className="font-bold w-full text-2xl">A-0001</p>
            </div>
          </div>

          <div className="w-1/2 py-10 rounded-2xl bg-slate-500 flex justify-center items-center">
            <div className="col text-center">
              <h4 className="font-bold w-full text-lg">Antrian Selanjutnya</h4>
              <p className="font-bold w-full text-2xl">A-0002</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
