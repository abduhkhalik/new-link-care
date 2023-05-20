import React from "react";
import Navbar from "../../component/Navbar";
export default function Database() {
  return (
    <main>
      <Navbar />
      <div className="content">
        <h4 className="text-3xl font-bold text-center mb-10">Database</h4>
        <div className="flex flex-wrap">
          {/* BackUp Database */}
          <div className="w-full mb-6 rounded-lg flex justify-between bg-teal-700 px-5 py-3">
            <button type="submit" className="text-white">
              Backup Database
            </button>
            <a href="#!" className="text-gray-300 italic">
              Klik disini untuk panduan backup
            </a>
          </div>

          {/* Restore Database */}
          <div className="mb-6 rounded-lg bg-white w-full">
            <div className="rounded-lg mb-2 flex justify-between bg-teal-700 px-5 py-3">
              <button type="submit" className="text-white">
                Restore Database
              </button>
              <a href="#!" className="text-gray-300 italic">
                Klik disini untuk panduan Restore Database
              </a>
            </div>
            <input type="file" className="bg-slate-500 w-full rounded-lg" />
          </div>

          {/* Import Data */}
          <div className="mb-6 rounded-lg bg-white w-full">
            <div className="rounded-lg mb-2 flex justify-between bg-teal-700 px-5 py-3">
              <button type="submit" className="text-white">
                Import Data
              </button>
              <a href="#!" className="text-gray-300 italic">
                Klik disini untuk panduan Import Data
              </a>
            </div>
            <input type="file" className="bg-slate-500 w-full rounded-lg" />
          </div>

        </div>
      </div>
    </main>
  );
}
