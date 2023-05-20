/* eslint-disable no-undef */
import Navbar from "../../component/Navbar";

export default function Dashboard() {
  google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(drawStuff);

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

        const chart = new google.charts.Bar(document.getElementById('Chart'));
        chart.draw(data, options);
      };

  return (
    <main>
      <Navbar />
      <section className="content">
        <h2 className="mb-10"> Selamat Datang </h2>
        <div className="px-10">
          <div
            id="Chart"
            className="w-full h-96 bg-white rounded-2xl py-4 px-2"
          ></div>
        </div>
        <div className="w-full px-10 mt-10 flex justify-between items-center">
          <div className="w-full mr-5 flex justify-center items-center lg:w-1/2">
            <div className="bg-blue-700 w-full px-2 py-4 rounded-lg flex justify-between items-center">
              <p className="">Pria</p> <span>Test</span>
            </div>
          </div>
          <div className="w-full flex justify-center items-center lg:w-1/2">
            <div className="bg-blue-200 w-full px-2 py-4 rounded-lg flex justify-between items-center">
              <p className="">Wanita</p> <span>Test</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
