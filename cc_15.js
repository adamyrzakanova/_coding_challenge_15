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

 // Task 6 - Handling Event Propagation
 riskCard.addEventListener("click", function(event) {
    event.stopPropagation();
});

 // Task 3 - Removing Risk Items
 riskCard.querySelector(".resolveBtn").addEventListener("click", function() {
    riskCard.remove();
});

riskDashboard.appendChild(riskCard);
}

// Handling form submission to add risks dynamically
riskForm.addEventListener("submit", function(event) {
event.preventDefault();

const riskName = document.getElementById("riskName").value;
const riskLevel = document.getElementById("riskLevel").value;
const department = document.getElementById("department").value;

addRiskItem(riskName, riskLevel, department);

riskForm.reset();
});

// Task 5 - Implementing Bulk Updates
increaseRiskLevelsBtn.addEventListener("click", function() {
    document.querySelectorAll(".riskCard").forEach(card => {
        let levelSpan = card.querySelector(".riskLevel");
        let currentLevel = levelSpan.innerText;

        let newLevel;
        if (currentLevel === "Low") newLevel = "Medium";
        else if (currentLevel === "Medium") newLevel = "High";
        else newLevel = "High";

        levelSpan.innerText = newLevel;

        // Update color accordingly
        card.classList.remove("low", "medium", "high");
        if (newLevel === "Low") card.classList.add("low");
        else if (newLevel === "Medium") card.classList.add("medium");
        else card.classList.add("high");
    });
});

// Preload Test Cases
addRiskItem("Data Breach", "High", "IT");
addRiskItem("Supply Chain Disruption", "Medium", "Operations");
addRiskItem("Market Fluctuations", "High", "Finance");
});
