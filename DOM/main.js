const body = document.body
let n = 0
const angka = document.createElement("p");
angka.textContent = n;
body.append(angka);

function nambah() {
    n += 1
    angka.textContent = n;
    body.append(angka);
}

function ngurang() {
    n -= 1
    angka.textContent = n;
    body.append(angka);
}