let cartBtn = document.getElementById("cart");
let priceElement = document.getElementById("price");
let cartBtnMin = document.getElementById("minus");


let total = 0;
const hargaProduk = 30; // harga produk

cartBtn.addEventListener("click", function () {
    total += hargaProduk;
    priceElement.textContent = total + "$";
});

cartBtnMin.addEventListener("click", function () {
    if (total < 0) {
        hargaProduk = 0;
        total -= 0;
        priceElement.textContent = total + "$"
    } else {
        total -= hargaProduk
        priceElement.textContent = total + "$"
    }
})