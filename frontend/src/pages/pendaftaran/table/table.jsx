import React from "react";
import { NavLink as Link } from "react-router-dom";

export function DataPasien() {
  return (
    <div
      id="dataPasien"
      role="tabpanel"
      aria-labelledby="dataPasien-tab"
      className="hidden bg-white px-5 py-4 rounded-xl mb-6"
    >
      <div className="max-w-xs">
        <label
          for="medical_record"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          No. Medical Record
        </label>
        <input
          type="number"
          id="medical_record"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
          disabled
        />
      </div>

      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label
            for="first_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            No. Identitas
          </label>
          <input
            type="number"
            id="no-identitas"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            disabled
          />
        </div>
        <div>
          <label
            for="no-bpjs"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            No. Peserta BPJS
          </label>
          <input
            type="number"
            id="no-bpjs"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            disabled
          />
        </div>
      </div>

      <div className="w-full mb-6 flex gap-5 ">
        <div className="max-w-md">
          <label
            for="alias"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Alias
          </label>
          <input
            type="text"
            id="alias"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            disabled
          />
        </div>
        <div className="w-full">
          <label
            for="nama-lengkap"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Nama Lengkap
          </label>
          <input
            type="text"
            id="nama-lengkap"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            disabled
          />
        </div>
      </div>

      <div className="w-full mb-6 flex gap-5 ">
        <div className="w-1/3">
          <label
            for="tempat-lahir"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Tempat Lahir
          </label>
          <input
            type="text"
            id="tempat-lahir"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            disabled
          />
        </div>
        <div className="w-1/3">
          <label
            for="tanggal-lahir"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Tanggal Lahir
          </label>
          <input
            type="date"
            id="tanggal-lahir"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            disabled
          />
        </div>

        <div className="w-1/3">
          <label
            for="jenis-kelamin"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Jenis Kelamin
          </label>
          <input
            type="text"
            id="jenis-kelamin"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            disabled
          />
        </div>
      </div>

      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label
            for="alamat-domisili"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Alamat Domisili
          </label>
          <input
            type="text"
            id="alamat-domisili"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Alamat"
            required
            disabled
          />
        </div>
        <div>
          <label
            for="no-telp"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            No. Telpon
          </label>
          <input
            type="tel"
            id="no-bpjs"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="+62-000-0000-XXXX"
            required
            disabled
          />
        </div>
      </div>

      <div className="w-full mb-6 flex gap-5 ">
        <div className="w-1/3">
          <label
            for="agama"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Agama
          </label>
          <input
            type="text"
            id="agama"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            disabled
          />
        </div>

        <div className="w-1/3">
          <label
            for="Status-nikah"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Status Nikah
          </label>
          <input
            type="text"
            id="status-nikah"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            disabled
          />
        </div>

        <div className="w-1/3">
          <label
            for="golongan-darah"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Golongan Darah
          </label>
          <input
            type="text"
            id="golongan-darah"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            disabled
          />
        </div>
      </div>

      <div className=" flex justify-center items-center gap-2">
        <button className="w-[250px] px-4 bg-teal-400 active:bg-blue-900 py-4 shadow-2xl shadow-black rounded-3xl">
         <Link to={'/Dashboard/Registrasi/Update-pasien'}>Update Data Pasien</Link>
        </button>

        <button className="w-[250px] px-4 bg-teal-400 active:bg-blue-900 shadow-2xl shadow-black rounded-3xl py-4">
          Riwayat Rawat Jalan
        </button>

        <button
          type="button"
          data-modal-target="authentication-modal"
          data-modal-toggle="authentication-modal"
          className="w-[250px] px-4 bg-teal-400 active:bg-blue-900 shadow-2xl shadow-black rounded-3xl py-4"
        >
          Telemedic
        </button>

        <button
          type="button"
          className="w-[250px] px-4 bg-teal-400 active:bg-blue-900 shadow-2xl shadow-black rounded-3xl py-4"
        >
          Cetak Kartu
        </button>

        <button className="w-[250px] px-4 bg-teal-400 active:bg-blue-900 shadow-2xl shadow-black rounded-3xl py-4">
          Surat Persetujuan
        </button>

        <button className="w-[250px] px-4 bg-teal-400 active:bg-blue-900 shadow-2xl shadow-black rounded-3xl py-4">
          Riwayat Soap
        </button>
      </div>
    </div>
  );
}

export function RiwayatRawatJalan() {
  return (
    <div
      id="rawatJalan"
      role="tabpanel"
      aria-labelledby="rawatJalan-tab"
      className="hidden"
    >
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
        <div className="my-6">
          <button className="bg-blue-400 px-4 py-2 rounded-lg">
            Tamabah Kunjungan Rawat Jalan
          </button>
        </div>
      </div>
    </div>
  );
}

export function RiwayatRawatInap() {
  return (
    <div
      id="rawatInap"
      role="tabpanel"
      aria-labelledby="rawatInap-tab"
      className="hidden"
    >
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
  );
}

export function RiwayatIGD() {
  return (
    <div
      id="riwayatIGD"
      role="tabpanel"
      aria-labelledby="riwayatIGD-tab"
      className="hidden"
    >
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
        <div className="my-6">
          <button className="bg-blue-400 px-4 py-2 rounded-lg">
            Tamabah Kunjungan IGD
          </button>
        </div>
      </div>
    </div>
  );
}

export function RiwayatTelemedik() {
  return (
    <div
      id="riwayatTele"
      role="tabpanel"
      aria-labelledby="riwayatTele-tab"
      className="hidden"
    >
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
  );
}
