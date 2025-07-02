
async function fetchData() {
  try {
    document.getElementById("loading").style.display = "block";
    const response = await fetch("https://wanin-taixiu-api.up.railway.app/predict");
    const data = await response.json();
    document.getElementById("loading").style.display = "none";
    document.getElementById("result-value").textContent = data.last_result;
    document.getElementById("current-session").textContent = data.current_session;
    document.getElementById("next-session").textContent = data.next_session;
    document.getElementById("prediction-value").textContent = data.prediction;
  } catch (error) {
    document.getElementById("loading").style.display = "none";
    document.getElementById("error").style.display = "block";
    document.getElementById("error-message").textContent = "Không thể tải dữ liệu. Hãy thử lại sau.";
  }
}
setInterval(fetchData, 60000);
fetchData();
