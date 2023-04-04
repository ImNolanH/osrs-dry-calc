function toggleTheme(theme) {
  const themeStylesheet = document.getElementById("themeStylesheet");
  themeStylesheet.setAttribute("href", theme);
}

function parseFraction(str) {
  const parts = str.split("/");
  if (parts.length !== 2) {
    return NaN;
  }

  const numerator = parseFloat(parts[0]);
  const denominator = parseFloat(parts[1]);

  if (isNaN(numerator) || isNaN(denominator) || denominator === 0) {
    return NaN;
  }

  return numerator / denominator;
}

function calculateDry() {
  const dropChanceStr = document.getElementById("dropChance").value;
  const dropChance = parseFraction(dropChanceStr);
  const totalKills = parseInt(document.getElementById("totalKills").value);
  const dropsObtained = parseInt(document.getElementById("dropsObtained").value);

  if (isNaN(dropChance) || dropChance <= 0 || totalKills < 0 || dropsObtained < 0) {
    alert("Please enter valid numbers.");
    return;
  }

  const noDropChance = 1 - dropChance;
  const probability = 1 - Math.pow(noDropChance, totalKills - dropsObtained) * Math.pow(dropChance, dropsObtained);

  document.getElementById("result").innerText = `Probability: ${(probability * 100).toFixed(5)}%`;
}

document.getElementById("calculateButton").addEventListener("click", calculateDry);
