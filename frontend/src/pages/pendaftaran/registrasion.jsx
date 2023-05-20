import React from "react";
import Navbar from "../../component/Navbar";

export default function Registrasion() {
  return (
    <main>
      <Navbar />
      <div className="content">
        <h2 className="text-center text-2xl mb-10">Registrasi Pasien</h2>
        <div className="flex justify-center items-center gap-5">
          <input
            className="w-1/2 bg-transparent"
            type="search"
            placeholder="Masukkan Nama atau Nomor MR"
          />
          <button
            className=" px-4 py-2 w-[150px] bg-blue-400 rounded-md"
            type="submit"
          >
            Cari Pasien
          </button>
          <button
            className="px-4 py-2 w-[150px] bg-blue-400 rounded-md"
            type="submit"
          >
            Pasien Baru
          </button>
        </div>

        <div className="relative overflow-x-auto mt-5 bg-gray-50 rounded-xl shadow-lg px-10 py-8">
          <table className="w-full text-sm  text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs border-b-2 border-slate-500  text-gray-700 uppercase  dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Nama Lengkap
                </th>
                <th scope="col" className="px-6 py-3">
                  No. MR
                </th>
                <th scope="col" className="px-6 py-3">
                  Tanggal Lahir
                </th>
                <th scope="col" className="px-6 py-3">
                  Tempat Lahir
                </th>
                <th scope="col" className="px-6 py-3">
                  Kunjungan Terakhir
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
                <td className="px-6 py-4 cursor-pointer">Silver</td>
                <td className="px-6 py-4 cursor-pointer">Laptop</td>
                <td className="px-6 py-4 cursor-pointer">$2999</td>
                <td className="px-6 py-4 cursor-pointer">$2999</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
