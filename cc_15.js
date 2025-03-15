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

// Task 4 - Risk Categorization (Color Coding)
if (riskLevel === "Low") {
    riskCard.classList.add("low");
} else if (riskLevel === "Medium") {
    riskCard.classList.add("medium");
} else {
    riskCard.classList.add("high");
}

riskCard.innerHTML = `
    <strong>Risk:</strong> ${riskName} <br>
    <strong>Level:</strong> <span class="riskLevel">${riskLevel}</span> <br>
    <strong>Department:</strong> ${department}
    <button class="resolveBtn">Resolve</button>
`;\

