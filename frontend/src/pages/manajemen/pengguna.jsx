import React from "react";
import ModalAkun from "./modal/ModalAkun";
import Navbar from "../../component/Navbar";

export default function Pengguna() {
  return (
    <main>
      <Navbar />
      <div className="content">
        <ModalAkun />
        <h4 className="text-3xl font-bold text-center mb-6">
          {" "}
          Manajeman Akun{" "}
        </h4>

        <button
          type="button"
          data-modal-target="tambah-akun"
          data-modal-toggle="tambah-akun"
          className="bg-teal-700 px-4 rounded-lg py-2"
        >
          Tambah Akun
        </button>
        <div className="relative overflow-x-auto mt-5 bg-gray-50 rounded-xl shadow-lg px-10 py-8">
          <table className="w-full text-sm  text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs border-b-2 border-slate-500  text-gray-700 uppercase  dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Nama Lengkap
                </th>
                <th scope="col" className="px-6 py-3">
                  Akun
                </th>
                <th scope="col" className="px-6 py-3">
                  Peran
                </th>
                <th scope="col" className="px-6 py-3">
                  Bidang
                </th>
                <th scope="col" className="px-6 py-3">
                  Poliklink
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium cursor-pointer text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Admin
                </th>
                <td className="px-6 py-4 cursor-pointer">Manajeman</td>
                <td className="px-6 py-4 cursor-pointer">Admin</td>
                <td className="px-6 py-4 cursor-pointer">Manajeman</td>
                <td className="px-6 py-4 cursor-pointer">-</td>
                <td className="px-6 py-4 cursor-pointer">Aktif</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
