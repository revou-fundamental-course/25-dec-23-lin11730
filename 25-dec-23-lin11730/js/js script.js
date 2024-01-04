var tinggi =document.getElementById("tinggi")
var alas =document.getElementById("alas")
var hasil =document.getElementById("hasil")

function fluas()
    {hasil.value = 1/2 * Number(tinggi.value) * Number(alas.value)}

function fhapus()
    {hasil.value =""; tinggi.value = ""; alas.value=""}

    let btnclear = document.querySelector('#Hapus')

var a =document.getElementById("a")
var b =document.getElementById("b")
var c =document.getElementById("c")
var keliling =document.getElementById("keliling")
function fkeliling()
    {keliling.value = Number(a.value) + Number(b.value) + Number(c.value)}
function fkhapus()
    {keliling.value =""; a.value = ""; b.value=""; c.value=""}