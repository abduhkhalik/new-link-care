import React from "react";
import Navbar from "../../component/Navbar";

export default function Radiologi() {
  return (
    <main>
      <Navbar />
      <div className="content">
        {/* Date */}
        <div className=" bg-white px-4 py-2 rounded-lg">
          <h4 className="mb-4 font-bold">Laporan Instalasi Radiologi</h4>
          <div className="w-full rounded-lg bg-white flex gap-5 justify-center items-center">
            <div className="w-1/2">
              <div className="mb-3">
                <label className="w-full">Dari Tanggal</label>
              </div>
              <input type="date" className="w-full rounded-lg" />
            </div>

            <div className="w-1/2">
              <div className="mb-3">
                <label className="w-full">Sampai Tanggal</label>
              </div>
              <input type="date" className="w-full rounded-lg" />
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="relative overflow-x-auto mt-5 bg-gray-50 rounded-xl shadow-lg px-10 py-8">
          <table className="w-full text-sm  text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs border-b-2 border-slate-500  text-gray-700 uppercase  dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Waktu Permintaan
                </th>
                <th scope="col" className="px-6 py-3">
                  No.MR
                </th>
                <th scope="col" className="px-6 py-3">
                  Nama Pasien
                </th>
                <th scope="col" className="px-6 py-3">
                  Instalasi
                </th>
                <th scope="col" className="px-6 py-3">
                  Dokter
                </th>
                <th scope="col" className="px-6 py-3">
                  Grup
                </th>
                <th scope="col" className="px-6 py-3">
                  Item
                </th>
                <th scope="col" className="px-6 py-3">
                  Diperoses
                </th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium cursor-pointer text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Apple MacBook Pro 17"
                </th>
                <td className="px-6 py-4 cursor-pointer">-</td>
                <td className="px-6 py-4 cursor-pointer">-</td>
                <td className="px-6 py-4 cursor-pointer">-</td>
                <td className="px-6 py-4 cursor-pointer">-</td>
                <td className="px-6 py-4 cursor-pointer">-</td>
                <td className="px-6 py-4 cursor-pointer">-</td>
                <td className="px-6 py-4 cursor-pointer">-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
