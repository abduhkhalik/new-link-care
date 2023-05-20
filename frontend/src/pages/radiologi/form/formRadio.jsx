import React from "react";
import Navbar from "../../../component/Navbar";

export default function FormRadio() {
  return (
    <main>
      <Navbar />
      <div className="content">
        <h4 className="font-bold mb-6">Form Radiologi</h4>
        <div className="w-full px-4 py-2 bg-white rounded-lg">
          <div className="mb-6">
            <p>
              Nama Pasien : <span>-</span>
            </p>
            <p>
              No.MR : <span>-</span>
            </p>
          </div>

          <form className="mb-6">
            <div className="max-w-xs">
              <label
                for="medical_record"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Status
              </label>
              <select
                id="cara-bayar"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>-</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>

            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label
                  for="catatan-dokter"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Catatan Dokter
                </label>
                <textarea
                  type="text"
                  id="catatan-dokter"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
            </div>

            <div className="w-full mb-6">
              <div className="max-w-xs">
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
                />
              </div>
            </div>

            <div className="mb-6 md:grid-cols-2">
              <div>
                <label
                  for="kodifikasi"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Kodifikasi
                </label>
                <textarea
                  type="text"
                  id="kodifikasi"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
            </div>

            <div className="max-w-xs">
              <label
                for="medical_record"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Status
              </label>
              <select
                id="cara-bayar"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>-</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>

              <div className="flex justify-center items-center">
                <button type="submit" className="bg-teal-600 rounded-lg px-4 py-2">Simpan</button>
              </div>
          </form>
        </div>
      </div>
    </main>
  );
}
