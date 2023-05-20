/* eslint-disable no-undef */
import React from "react";
import Navbar from "../../component/Navbar";

export default function Dashboard() {
  google.charts.load("current", { packages: ["corechart", "bar"] });
  google.charts.setOnLoadCallback(drawChart);
  google.charts.setOnLoadCallback(drawStuff);

  // Pie Charts
  function drawChart() {
    let data = google.visualization.arrayToDataTable([
      ["Instalasi", "Hours per Day"],
      ["Bedah", 11],
      ["Urinologi", 2],
      ["Saraf", 2],
      ["Penyakit Dalam", 7],
    ]);

    let options = {
      title: "My Daily Activities",
      pieSliceText: "label",
    };

    let chart = new google.visualization.PieChart(
      document.getElementById("pieChart")
    );

    chart.draw(data, options);
  }

  // Bar Charts
  function drawStuff() {
    const data = new google.visualization.arrayToDataTable([
      ['Opening Move', 'Percentage'],
      ["King's pawn (e4)", 44],
      ["Queen's pawn (d4)", 31],
      ["Knight to King 3 (Nf3)", 12],
      ["Queen's bishop pawn (c4)", 10],
      ['Other', 3]
    ]);

    const options = {
      title: 'Chess opening moves',
      width: 900,
      legend: { position: 'none' },
      chart: { title: 'Chess opening moves',
               subtitle: 'popularity by percentage' },
      bars: 'Vertikal', // Required for Material Bar Charts.
      axes: {
        x: {
          0: { side: 'top', label: 'Percentage'} // Top x-axis.
        }
      },
      bar: { groupWidth: "90%" }
    };

    const chart = new google.charts.Bar(document.getElementById('barChart'));
    chart.draw(data, options);
  };

  return (
    <main>
      <Navbar />
      <div className="content">
        <h4 className="mb-6">Selamat Datang</h4>
        <h5 className="mb-6 text-center text-3xl font-bold">Laboratorium</h5>

        <div className="mb-6 flex justify-center items-center gap-5">
          {/* PIE CHART */}
          <div id="pieChart" className="w-1/2 h-96 rounded-lg"></div>

          {/* DATA PASIEN */}
          <div className="w-1/2 h-auto">
            <div className="w-full px-10 mb-6">
              <div className="w-full">
                <div className="bg-blue-700 mb-6 w-full px-2 py-4 rounded-lg">
                  <p className="flex justify-between items-center">
                    Pria <span>Test</span>
                  </p>
                </div>
              </div>
              <div className="w-full">
                <div className="bg-blue-200 mb-6 w-full px-2 py-4 rounded-lg">
                  <p className="flex justify-between items-center">
                    Wanita <span>Test</span>
                  </p>
                </div>
              </div>
              {/* Status */}
              <div className="w-full py-4 bg-white rounded-lg">
                <h4 className="text-center mb-4">Status</h4>

                <div className="w-full bg-green-400 ">
                  <p className="flex px-5 justify-between items-center">
                    Proses <span>Test</span>{" "}
                  </p>
                </div>
                <div className="w-full bg-red-400 ">
                  <p className="flex px-5 justify-between items-center">
                    Tolak <span>Test</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bar Charts */}
        <div className="px-10">
          <div
            id="barChart"
            className="w-full h-96 bg-white rounded-2xl py-4 px-2"
          ></div>
        </div>
        
      </div>
    </main>
  );
}
