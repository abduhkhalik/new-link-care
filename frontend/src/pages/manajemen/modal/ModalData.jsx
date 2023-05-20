import React from 'react'

export default function ModalData() {
  return (
    <>
      {/* Main Modal */}
      <div
        id="tambah-data"
        tabindex="-1"
        aria-hidden="true"
        className="fixed backdrop-blur-sm top-0 left-0 right-0 z-[9999] hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative w-full max-w-md max-h-full bg-slate-400 px-5 py-7 rounded-2xl">
          {/* Modal Content */}
          <form>
            <div>
              <label
                for="no-antrian"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Nomor Antrian
              </label>
              <input
                type="number"
                id="no-antrian"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="0"
                required
              />
            </div>
            <div className="grid gap-6 mb-6 md:grid-cols-2"></div>

            <div className="w-full mb-6 flex gap-5 ">
              <div className="w-1/2">
                <label
                  for="cara-bayar"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Cara Bayar
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
              <div className="w-1/2">
                <label
                  for="no-sep"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Nomor SEP
                </label>
                <input
                  type="number"
                  id="no-sep"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="00******"
                  required
                />
              </div>
            </div>

            <div className="w-full mb-6 flex gap-5 ">
              <div className="w-1/2">
                <label
                  for="Klinik"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Klinik
                </label>
                <select
                  id="klinik"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected>-</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>

              <div className="w-1/2">
                <label
                  for="rujukan"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Rujukan
                </label>
                <select
                  id="rujukan"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected>-</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
            </div>

            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label
                  for="sumber-rujukan"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Sumber Rujukan
                </label>
                <input
                  type="text"
                  id="sumber-rujukan"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Sumber Rujukan"
                  required
                />
              </div>
              <div>
                <label
                  for="penanggung"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Penanggung Jawab
                </label>
                <input
                  type="text"
                  id="penanggung"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Penanggung Jawab"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
