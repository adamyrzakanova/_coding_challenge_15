// Task 1 - Base Structure Setup
document.addEventListener("DOMContentLoaded", function() {
    console.log("Risk Dashboard Loaded");

    const riskDashboard = document.getElementById("riskDashboard");
    const riskForm = document.getElementById("riskForm");
    const increaseRiskLevelsBtn = document.getElementById("increaseRiskLevels");
    const decreaseRiskLevelsBtn = document.getElementById("decreaseRiskLevels");
    const riskLevels = document.getElementById("riskLevels");

// Task 2 - Adding Risk Items
function addRiskItem(riskName, riskLevel, department) {
    const riskCard = document.createElement("div");
    riskCard.classList.add("riskCard");
    riskCard.innerHTML = `
        <h3>${riskName}</h3>
        <p>Risk Level: ${riskLevel}</p>
        <p>Department: ${department}</p>
    `;
    riskDashboard.appendChild(riskCard);
}       
        