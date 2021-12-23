var dataBarang = [
    "Buku Tulis",
    "Pensil",
    "Spidol"
]

function showBarang (){
    var listBarang = document.getElementById("list-barang");
    // clear list barang
    listBarang.innerHTML = "";

    // cetak semua barang
    for(let i = 0; i < dataBarang.length; i++) {
        var btnEdit = "<a herf='#' onclick='editBarang("+i+")'>Edit</a>";
        var btnHapus = "<a herf='#' onclick='deleteBarang("+i+")'>Hapus</a>";
    }
}

function addBarang(){
    var input = document.querySelector("input[name=barang");
    dataBarang.push(input.value);
    showBarang();
}

function editBarang (id) {
    var newBarang = prompt("Nama Baru", dataBarang[id]);
    dataBarang[id] = newBarang;
    showBarang();
}

function deleteBarang(id){
    dataBarang.splice(id, 1);
    showBarang();
}
showBarang();