function buy(name, price) {
  document.getElementById("shop").classList.add("hidden");
  document.getElementById("payment").classList.remove("hidden");

  document.getElementById("nftName").innerText = name;
  document.getElementById("nftPrice").innerText = price + " ₽";
}

function goBack() {
  document.getElementById("shop").classList.remove("hidden");
  document.getElementById("payment").classList.add("hidden");
  document.getElementById("waitingBox").classList.add("hidden");
}

function showWaiting() {
  document.getElementById("waitingBox").classList.remove("hidden");
}
