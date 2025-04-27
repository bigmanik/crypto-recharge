// CoinGecko API endpoint for Litecoin to NGN
const apiURL = "https://api.coingecko.com/api/v3/simple/price?ids=litecoin&vs_currencies=ngn";

// Your Litecoin receiving wallet address
const yourLTCWallet = "LXoExampleWalletAddress"; // replace with your actual wallet

document.getElementById("rechargeForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const amountNGN = parseFloat(document.getElementById("amount").value);

  if (!amountNGN) {
    alert("Please select a valid amount.");
    return;
  }

  try {
    // Fetch LTC to NGN rate
    const response = await fetch(apiURL);
    const data = await response.json();

    const ltcRate = data.litecoin.ngn;
    const ltcAmount = (amountNGN / ltcRate).toFixed(6); // 6 decimal places for precision

    // Show payment info
    document.getElementById("cryptoAmount").textContent = `${ltcAmount} LTC`;
    document.getElementById("walletAddress").textContent = yourLTCWallet;
    document.getElementById("paymentInfo").classList.remove("hidden");
  } catch (err) {
    console.error("Error fetching LTC rate:", err);
    alert("Failed to fetch Litecoin rate. Please try again.");
  }
});
