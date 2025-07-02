const API_URL = "https://wanglinapiws.up.railway.app/api/taixiu";

async function getPrediction() {
  const res = await fetch(API_URL);
  const data = await res.json();

  document.getElementById("current-session").textContent = data.phien;
  document.getElementById("next-session").textContent = data.phien + 1;

  const resultEl = document.getElementById("result-value");
  resultEl.textContent = data.ketqua;
  resultEl.className = `result-value ${data.ketqua.toLowerCase()}`;

  const predictionEl = document.getElementById("prediction-value");
  predictionEl.textContent = data.du_doan;
  predictionEl.className = `prediction-value ${data.du_doan.toLowerCase()}`;
}

getPrediction();
setInterval(getPrediction, 60000); // Cập nhật mỗi 60 giây
