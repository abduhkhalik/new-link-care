import React from 'react'
import Navbar from '../../component/Navbar'

export default function Kodifikasi() {
  return (
    <main>
      <Navbar />
      <div className='content'>
        <h4 className='text-center font-bold text-3xl mb-6 uppercase'>Diagnosa ICD10 & ICD9-CM</h4>
      <div className="relative overflow-x-auto mt-5 bg-gray-50 rounded-xl shadow-lg px-10 py-8">
          <table className="w-full text-sm  text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs border-b-2 border-slate-500  text-gray-700 uppercase  dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Nama Pasien
                </th>
                <th scope="col" className="px-6 py-3">
                  Tanggal Kunjungan
                </th>
                <th scope="col" className="px-6 py-3">
                  Layanan
                </th>
                <th scope="col" className="px-6 py-3">
                  Perawat
                </th>
                <th scope="col" className="px-6 py-3">
                  Dokter
                </th>
                <th scope="col" className="px-6 py-3">
                  ICD10
                </th>
                <th scope="col" className="px-6 py-3">
                  ICD9-CM
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
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  )
}
