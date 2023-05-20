import React from "react";
import {
  DataPasien,
  RiwayatIGD,
  RiwayatRawatInap,
  RiwayatRawatJalan,
  RiwayatTelemedik,
} from "./table/table";
import Telemedic from "./modal/ModalTele";
import Navbar from "../../component/Navbar";

export default function RekamMedik() {
  return (
    <main>
      <Navbar />
      <div className="content">
        <Telemedic />
        <h4 className="text-center font-bold mb-8 text-5xl">Rekam Medik</h4>

        {/* TABS RM */}
        <div
          id="tabMR"
          className=" flex justify-center items-center"
          data-tabs-toggle="#ContentMR"
          role="tablist"
        >
          <div className="z-[5]" role="presentation">
            <button
              id="dataPasien-tab"
              data-tabs-target="#dataPasien"
              type="button"
              role="tab"
              aria-controls="dataPasien"
              aria-selected="false"
              className="w-[250px] -mr-8 px-4 py-4 bg-white shadow-2xl shadow-black rounded-3xl"
            >
              Data Pasien
            </button>
          </div>

          <div className="z-[4]" role="presentation">
            <button
              id="rawatJalan-tab"
              data-tabs-target="#rawatJalan"
              type="button"
              role="tab"
              aria-controls="rawatJalan"
              aria-selected="false"
              className="w-[250px] -mr-8 px-4 bg-white shadow-2xl shadow-black rounded-3xl py-4"
            >
              Riwayat Rawat Jalan
            </button>
          </div>

          <div className="z-[3]" role="presentation">
            <button
              id="rawatInap-tab"
              data-tabs-target="#rawatInap"
              type="button"
              role="tab"
              aria-controls="rawatInap"
              aria-selected="false"
              className="w-[250px] -mr-8 px-4 bg-white shadow-2xl shadow-black rounded-3xl py-4"
            >
              Riwayat Rawat Inap
            </button>
          </div>

          <div className="z-[2]" role="presentation">
            <button
              id="riwayatIGD-tab"
              data-tabs-target="#riwayatIGD"
              type="button"
              role="tab"
              aria-controls="riwayatIGD"
              aria-selected="false"
              className="w-[250px] -mr-8 px-4 bg-white shadow-2xl shadow-black rounded-3xl py-4"
            >
              Riwayat IGD
            </button>
          </div>

          <div className="z-[1]" role="presentation">
            <button
              id="riwayatTele-tab"
              data-tabs-target="#riwayatTele"
              type="button"
              role="tab"
              aria-controls="riwayatTele"
              aria-selected="false"
              className="w-[250px] -mr-8 px-4 bg-white shadow-2xl shadow-black rounded-3xl py-4"
            >
              Riwayat Telemedik
            </button>
          </div>
        </div>

        <div id="ContentMR">
          <DataPasien />
          <RiwayatIGD />
          <RiwayatRawatInap />
          <RiwayatRawatJalan />
          <RiwayatTelemedik />
        </div>

      </div>
    </main>
  );
}
