import React from "react";
import ModalData from "./modal/ModalData";
import Navbar from "../../component/Navbar";

export default function Referensi() {
  return (
    <main>
      <Navbar />
      <ModalData />
      <div className="content">
        
        <h4 className="text-3xl font-bold text-center mb-6">
          {" "}
          Manajeman Data{" "}
        </h4>

        <button
          type="button"
          data-modal-target="tambah-data"
          data-modal-toggle="tambah-data"
          className="bg-teal-700 px-4 rounded-lg py-2"
        >
          Tambah Data
        </button>
        <div className="relative overflow-x-auto mt-5 bg-gray-50 rounded-xl shadow-lg px-10 py-8">
          <table className="w-full text-sm  text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs border-b-2 border-slate-500  text-gray-700 uppercase  dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Items
                </th>
                <th scope="col" className="px-6 py-3">
                  Harga
                </th>
                <th scope="col" className="px-6 py-3">
                  Instalasi
                </th>
                <th scope="col" className="px-6 py-3">
                  Bidang
                </th>
                <th scope="col" className="px-6 py-3">
                  Kategori
                </th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium cursor-pointer text-gray-900 whitespace-nowrap dark:text-white"
                >
                  -
                </th>
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