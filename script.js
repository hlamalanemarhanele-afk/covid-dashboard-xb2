const data = {
 global: { confirmed: 693224, deaths: 33106, recovered: 152412, active: 507706, trend: [100, 500, 4000, 20000, 80000, 200000, 400000, 693224] },
 USA: { confirmed: 122653, deaths: 2112, recovered: 0, active: 120541, trend: [5, 15, 1000, 8000, 25000, 70000, 122653] },
 China: { confirmed: 81961, deaths: 3301, recovered: 75885, active: 2775, trend: [40, 200, 1000, 5000, 20000, 50000, 75000, 81961] },
 Italy: { confirmed: 92472, deaths: 10023, recovered: 12384, active: 70065, trend: [2, 20, 200, 2000, 10000, 30000, 60000, 92472] },
 "South Africa": { confirmed: 1187, deaths: 1, recovered: 31, active: 1155, trend: [1, 1, 3, 13, 62, 202, 554, 1187] },
 Spain: { confirmed: 73235, deaths: 5982, recovered: 12285, active: 54968, trend: [1, 10, 100, 1000, 8000, 20000, 45000, 73235] },
 Germany: { confirmed: 57695, deaths: 433, recovered: 8481, active: 48781, trend: [4, 20, 150, 800, 4000, 15000, 35000, 57695] }
};
let lineChart, pieChart;
function updateDashboard(country) {
 const c = data[country];
 document.getElementById('confirmed').textContent = c.confirmed.toLocaleString();
 document.getElementById('deaths').textContent = c.deaths.toLocaleString();
 document.getElementById('recovered').textContent = c.recovered.toLocaleString();
 document.getElementById('active').textContent = c.active.toLocaleString();
 const ctx1 = document.getElementById('lineChart').getContext('2d');
 if(lineChart) lineChart.destroy();
 lineChart = new Chart(ctx1, { type: 'line', data: { labels: ['Jan','Feb 1','Feb 15','Mar 1','Mar 10','Mar 20','Mar 25','Mar 30'], datasets: [{ label: 'Confirmed', data: c.trend, borderColor: '#3498db', fill: false, tension: 0.3 }] }, options: { responsive: true } });
 const ctx2 = document.getElementById('pieChart').getContext('2d');
 if(pieChart) pieChart.destroy();
 pieChart = new Chart(ctx2, { type: 'doughnut', data: { labels: ['Deaths','Recovered','Active'], datasets: [{ data: [c.deaths, c.recovered, c.active], backgroundColor: ['#e74c3c','#2ecc71','#f39c12'] }] }, options: { responsive: true } });
}
document.getElementById('countrySelect').addEventListener('change', (e) => { updateDashboard(e.target.value); });
updateDashboard('global');
