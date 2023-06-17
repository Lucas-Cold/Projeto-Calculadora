
function calcular() {
    var x = document.getElementById("x").value;
    var y = document.getElementById("y").value;
    var i = document.getElementById("i").value;
    var t = document.getElementById("t").value;
    var taxa = document.getElementsByName("rbTaxa");
    var periodo = document.getElementsByName("rbPeriodo");
    if (taxa[0].checked) {
        var i = ((Math.pow((1 + (i / 100)), (1 / 12))) - 1) * 100;
    }
    if (periodo[0].checked) {
        var t = t * 12.0;
    }
    var vf = VF(x, y, i, t);
    resultado = vf.toLocaleString('pt-br');
    console.log(resultado);
    document.getElementById("resposta").value = resultado;
}
function VF(x, y, i, t) {
    var i = i / 100;
    return ((x *(Math.pow(1 + i, t)))) + ((y * (Math.pow(1 + i, t) - 1)) / i);
}









