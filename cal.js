
// desactivar botones en cada seleccion
window.addEventListener('DOMContentLoaded', function (event) {
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    document.getElementById("b0").disabled = true;
    document.getElementById("ba").disabled = true;
    document.getElementById("bb").disabled = true;
    document.getElementById("bc").disabled = true;
    document.getElementById("bd").disabled = true;
    document.getElementById("be").disabled = true;
    document.getElementById("bf").disabled = true;
    document.getElementById("result").disabled = true;
    clr()
});
function disbutton() {
    if (document.getElementById("seleccion").value == 1) {
        document.getElementById("b1").disabled = false;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        document.getElementById("b0").disabled = false;
        document.getElementById("ba").disabled = true;
        document.getElementById("bb").disabled = true;
        document.getElementById("bc").disabled = true;
        document.getElementById("bd").disabled = true;
        document.getElementById("be").disabled = true;
        document.getElementById("bf").disabled = true
        document.getElementById("result").disabled = false;
        clr()
    } else if (document.getElementById("seleccion").value == 3) {
        document.getElementById("b1").disabled = false;
        document.getElementById("b2").disabled = false;
        document.getElementById("b3").disabled = false;
        document.getElementById("b4").disabled = false;
        document.getElementById("b5").disabled = false;
        document.getElementById("b6").disabled = false;
        document.getElementById("b7").disabled = false;
        document.getElementById("b8").disabled = false;
        document.getElementById("b9").disabled = false;
        document.getElementById("b0").disabled = false;
        document.getElementById("ba").disabled = true;
        document.getElementById("bb").disabled = true;
        document.getElementById("bc").disabled = true;
        document.getElementById("bd").disabled = true;
        document.getElementById("be").disabled = true;
        document.getElementById("bf").disabled = true;
        document.getElementById("result").disabled = false;
        clr()
    } else if (document.getElementById("seleccion").value == 4) {
        document.getElementById("b1").disabled = false;
        document.getElementById("b2").disabled = false;
        document.getElementById("b3").disabled = false;
        document.getElementById("b4").disabled = false;
        document.getElementById("b5").disabled = false;
        document.getElementById("b6").disabled = false;
        document.getElementById("b7").disabled = false;
        document.getElementById("b8").disabled = false;
        document.getElementById("b9").disabled = false;
        document.getElementById("b0").disabled = false;
        document.getElementById("ba").disabled = false;
        document.getElementById("bb").disabled = false;
        document.getElementById("bc").disabled = false;
        document.getElementById("bd").disabled = false;
        document.getElementById("be").disabled = false;
        document.getElementById("bf").disabled = false;
        document.getElementById("result").disabled = false;
        clr()
    } else if (document.getElementById("seleccion").value == 2) {
        document.getElementById("b1").disabled = false;
        document.getElementById("b2").disabled = false;
        document.getElementById("b3").disabled = false;
        document.getElementById("b4").disabled = false;
        document.getElementById("b5").disabled = false;
        document.getElementById("b6").disabled = false;
        document.getElementById("b7").disabled = false;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        document.getElementById("b0").disabled = false;
        document.getElementById("ba").disabled = true;
        document.getElementById("bb").disabled = true;
        document.getElementById("bc").disabled = true;
        document.getElementById("bd").disabled = true;
        document.getElementById("be").disabled = true;
        document.getElementById("bf").disabled = true;
        document.getElementById("result").disabled = false;
        clr()
    }
}
// subir de los botones a la caja
function btn1() {
    var x = document.getElementById("adivinar");
    x.value = x.value + "1"
}

function btn2() {
    var x = document.getElementById("adivinar");
    x.value = x.value + "2"
}

function btn3() {
    var x = document.getElementById("adivinar");
    x.value = x.value + "3"
}

function btn4() {
    var x = document.getElementById("adivinar");
    x.value = x.value + "4"
}

function btn5() {
    var x = document.getElementById("adivinar");
    x.value = x.value + "5"
}

function btn6() {
    var x = document.getElementById("adivinar");
    x.value = x.value + "6"
}

function btn7() {
    var x = document.getElementById("adivinar");
    x.value = x.value + "7"
}

function btn8() {
    var x = document.getElementById("adivinar");
    x.value = x.value + "8"
}

function btn9() {
    var x = document.getElementById("adivinar");
    x.value = x.value + "9"
}

function btn0() {
    var x = document.getElementById("adivinar");
    x.value = x.value + "0"
}

function btna() {
    var x = document.getElementById("adivinar");
    x.value = x.value + "A"
}

function btnb() {
    var x = document.getElementById("adivinar");
    x.value = x.value + "B"
}

function btnc() {
    var x = document.getElementById("adivinar");
    x.value = x.value + "C"
}

function btnd() {
    var x = document.getElementById("adivinar");
    x.value = x.value + "D"
}

function btne() {
    var x = document.getElementById("adivinar");
    x.value = x.value + "E"
}

function btnf() {
    var x = document.getElementById("adivinar");
    x.value = x.value + "F"
}
function clr() {
    var x = document.getElementById("adivinar");
    var y = document.getElementById("responder");
    x.value = ""
    y.value = ""
}


function convertir() {
    console.log(document.getElementById("seleccion"), '/', document.getElementById("seleccion1"));
    // los mismos selectores
    if (document.getElementById("seleccion").value == 1 && document.getElementById("seleccion1").value == 1) {
        console.log("da lo mismo");
        let respuest = document.getElementById("adivinar").value
        document.getElementById("responder").innerHTML = `${respuest}`
        console.log(document.getElementById("responder").value = `${respuest}`);
    }
    else if (document.getElementById("seleccion").value == 2 && document.getElementById("seleccion1").value == 2) {
        console.log("da lo mismo");
        let respuest = document.getElementById("adivinar").value
        document.getElementById("responder").innerHTML = `${respuest}`
        console.log(document.getElementById("responder").value = `${respuest}`);
    } else if (document.getElementById("seleccion").value == 3 && document.getElementById("seleccion1").value == 3) {
        console.log("da lo mismo");
        let respuest = document.getElementById("adivinar").value
        document.getElementById("responder").innerHTML = `${respuest}`
        console.log(document.getElementById("responder").value = `${respuest}`);
    } else if (document.getElementById("seleccion").value == 4 && document.getElementById("seleccion1").value == 4) {
        console.log("da lo mismo");
        let respuest = document.getElementById("adivinar").value
        document.getElementById("responder").innerHTML = `${respuest}`
        console.log(document.getElementById("responder").value = `${respuest}`);
    }
    // bin a oct
    else if (document.getElementById("seleccion").value == 1 && document.getElementById("seleccion1").value == 2) {
        console.log("bin a oct");
        let contenedore = 0
        let comenzarUno = 3
        let octales = []
        let adivinar = document.getElementById("adivinar").value;
        contenedore = adivinar.split("");
        let residuo = parseInt(contenedore.length % 3)
        if (residuo == 2) {
            contenedore.unshift("0")
        } if (residuo == 1) {
            contenedore.unshift("0", "0")
        }
        for (i = 0; i < contenedore.length; i += comenzarUno) {
            let inic = contenedore.slice(i, i + comenzarUno)
            inic = inic.join("")
            if (inic == "000") {
                octales.unshift("0")
            } else if (inic == "001") {
                octales.unshift("1")
            } else if (inic == "010") {
                octales.unshift("2")
            } else if (inic == "011") {
                octales.unshift("3")
            } else if (inic == "100") {
                octales.unshift("4")
            } else if (inic == "101") {
                octales.unshift("5")
            } else if (inic == "110") {
                octales.unshift("6")
            } else if (inic == "111") {
                octales.unshift("7")
            } else {
                console.log("entro aqui");
            }
        }
        octales.reverse();
        let concat = octales.join("")
        console.log(concat);
        document.getElementById("responder").value = concat
    }
    // bin a dec
    else if (document.getElementById("seleccion").value == 1 && document.getElementById("seleccion1").value == 3) {
        let adivinar = document.getElementById("adivinar").value;
        let uno = 0
        let dos = 0
        let arr = []
        for (let i = adivinar.length - 1; i >= 0; i--) {
            z = parseInt(adivinar[i]) * Math.pow(2, uno)
            uno++;
            dos = dos + z
            arr.push(dos)
        }
        let ultimo = arr[arr.length - 1]
        document.getElementById("responder").value = ultimo
    }
    // bin a hex
    else if (document.getElementById("seleccion").value == 1 && document.getElementById("seleccion1").value == 4) {
        let contenedore = 0
        let comenzarUno = 4
        let octales = []
        let adivinar = document.getElementById("adivinar").value;
        contenedore = adivinar.split("");
        let residuo = parseInt(contenedore.length % 4)
        console.log("residuo=" + residuo);
        if (residuo == 3) {
            contenedore.unshift("0")
        }
        if (residuo == 2) {
            contenedore.unshift("0", "0")
        } if (residuo == 1) {
            contenedore.unshift("0", "0", "0")
        }
        console.log(contenedore);
        for (i = 0; i < contenedore.length; i += comenzarUno) {
            let inic = contenedore.slice(i, i + comenzarUno)
            inic = inic.join("")
            console.log(inic);
            if (inic == "0000") {
                octales.unshift("0")
            } else if (inic == "0001") {
                octales.unshift("1")
            } else if (inic == "0010") {
                octales.unshift("2")
            } else if (inic == "0011") {
                octales.unshift("3")
            } else if (inic == "0100") {
                octales.unshift("4")
            } else if (inic == "0101") {
                octales.unshift("5")
            } else if (inic == "0110") {
                octales.unshift("6")
            } else if (inic == "0111") {
                octales.unshift("7")
            } else if (inic == "1000") {
                octales.unshift("8")
            } else if (inic == "1001") {
                octales.unshift("9")
            } else if (inic == "1010") {
                octales.unshift("A")
            } else if (inic == "1011") {
                octales.unshift("B")
            }
            else if (inic == "1100") {
                octales.unshift("C")
            } else if (inic == "1101") {
                octales.unshift("D")
            } else if (inic == "1110") {
                octales.unshift("E")
            }
            else if (inic == "1111") {
                octales.unshift("F")
            } else {
                console.log("entro aqui");
            }
        }
        octales.reverse();
        let concat = octales.join("")
        document.getElementById("responder").value = concat
    }
    // oct a bin
    else if (document.getElementById("seleccion").value == 2 && document.getElementById("seleccion1").value == 1) {
        let contenedor = 0
        let medio = []
        let primero = []
        let ultimo = []
        let adivinar = document.getElementById("adivinar").value;
        console.log(adivinar)
        contenedor = adivinar;
        for (let i = 0; i < contenedor.length; i++) {
            let a = parseInt(contenedor[i]);
            primero.push(a);
        }
        for (let t = 0; t < primero.length; t++) {
            if (primero[t] == 0) {
                medio.push(0, 0, 0)
            }
            else if (primero[t] == 1) {
                medio.push(0, 0, 1)
            }
            else if (primero[t] == 2) {
                medio.push(0, 1, 0)
            }
            else if (primero[t] == 3) {
                medio.push(0, 1, 1)
            }
            else if (primero[t] == 4) {
                medio.push(1, 0, 0)
            }
            else if (primero[t] == 5) {
                medio.push(1, 0, 1)
            }
            else if (primero[t] == 6) {
                medio.push(1, 1, 0)
            }
            else if (primero[t] == 7) {
                medio.push(1, 1, 1)
            }
        }
        for (let e = 0; e < medio.length; e++) {
            let a = medio[e]
            ultimo.push(a);
        }
        let concatenar = ultimo.join('')
        document.getElementById("responder").value = concatenar
    }

    // oct a dec
    else if (document.getElementById("seleccion").value == 2 && document.getElementById("seleccion1").value == 3) {
        let adivinar = document.getElementById("adivinar").value;
        let base = 0
        let dar = 0
        let arr = []
        for (let i = adivinar.length - 1; i >= 0; i--) {
            p = parseInt(adivinar[i]) * Math.pow(8, base)
            base++;
            dar = dar + p
            arr.push(dar)
        }
        let ultimo = arr[arr.length - 1]
        document.getElementById("responder").value = ultimo
    }

    // oct a hex
    else if (document.getElementById("seleccion").value == 2 && document.getElementById("seleccion1").value == 4) {
        let contenedor1 = 0
        let partes1 = 4
        let i = 0
        let tener = []
        let tener1 = []
        let tener2 = []
        let octales = []
        let adivinar = document.getElementById("adivinar").value;
        contenedor1 = adivinar;
        for (let l = 0; l < contenedor1.length; l++) {
            let a = parseInt(contenedor1[l]);
            tener1.push(a);
        }
        for (let j = 0; j < tener1.length; j++) {
            if (tener1[j] == 0) {
                tener.push(0, 0, 0)
            }
            else if (tener1[j] == 1) {
                tener.push(0, 0, 1)
            }
            else if (tener1[j] == 2) {
                tener.push(0, 1, 0)
            }
            else if (tener1[j] == 3) {
                tener.push(0, 1, 1)
            }
            else if (tener1[j] == 4) {
                tener.push(1, 0, 0)
            }
            else if (tener1[j] == 5) {
                tener.push(1, 0, 1)
            }
            else if (tener1[j] == 6) {
                tener.push(1, 1, 0)
            }
            else if (tener1[j] == 7) {
                tener.push(1, 1, 1)
            }
        }
        for (let t = 0; t < tener.length; t++) {
            let a = tener[t]
            tener2.push(a);
        }
        console.log(`binario` + tener2);
        let residuo = parseInt(tener2.length % 4)
        if (residuo == 3) {
            tener2.unshift("0")
        }
        if (residuo == 2) {
            tener2.unshift("0", "0")
        } if (residuo == 1) {
            tener2.unshift("0", "0", "0")
        }
        for (i = 0; i < tener2.length; i += partes1) {
            let part = tener2.slice(i, i + partes1)
            part = part.join("")
            console.log(part);
            if (part == "0000") {
                octales.unshift("0")
            } else if (part == "0001") {
                octales.unshift("1")
            } else if (part == "0010") {
                octales.unshift("2")
            } else if (part == "0011") {
                octales.unshift("3")
            } else if (part == "0100") {
                octales.unshift("4")
            } else if (part == "0101") {
                octales.unshift("5")
            } else if (part == "0110") {
                octales.unshift("6")
            } else if (part == "0111") {
                octales.unshift("7")
            }
            else if (part == "1000") {
                octales.unshift("8")
            }
            else if (part == "1001") {
                octales.unshift("9")
            }
            else if (part == "1010") {
                octales.unshift("A")
            }
            else if (part == "1011") {
                octales.unshift("B")
            }
            else if (part == "1100") {
                octales.unshift("C")
            }
            else if (part == "1101") {
                octales.unshift("D")
            }
            else if (part == "1110") {
                octales.unshift("E")
            }
            else if (part == "1111") {
                octales.unshift("F")
            }
        }
        octales.reverse();
        let concat = octales.join("")
        document.getElementById("responder").value = concat
    }

    // dec a bin
    else if (document.getElementById("seleccion").value == 3 && document.getElementById("seleccion1").value == 1) {
        let adivinar = document.getElementById("adivinar").value;
        let pila = []
        let dividirEn = adivinar;
        while (dividirEn > 0) {
            declarar = dividirEn % 2
            dividirEn = Math.trunc(dividirEn / 2)
            pila.push(declarar)
        }
        let invertido = pila.reverse()
        let concatenado = invertido.join('')
        document.getElementById("responder").value = concatenado
    }

    // dec a oct
    else if (document.getElementById("seleccion").value == 3 && document.getElementById("seleccion1").value == 2) {
        let adivinar = document.getElementById("adivinar").value;
        let guardador = []
        let dividirEn = adivinar;
        while (dividirEn > 0) {
            declarante = dividirEn % 8
            dividirEn = Math.trunc(dividirEn / 8)
            guardador.push(declarante)
        }
        let invertido = guardador.reverse()
        let concatenado = invertido.join('')
        document.getElementById("responder").value = concatenado
    }

    // dec a hex 
    if (document.getElementById("seleccion").value == 3 && document.getElementById("seleccion1").value == 4) {
        let adivinar = document.getElementById("adivinar").value;
        let guardar = []
        let dividirEn = adivinar;
        while (dividirEn > 0) {
            declarar = dividirEn % 16
            dividirEn = Math.trunc(dividirEn / 16)
            guardar.push(declarar)
            if (declarar == 10) {
                const indice = guardar.indexOf(10);
                guardar[indice] = 'A';
            }
            else if (declarar == 11) {
                const indice = guardar.indexOf(11);
                guardar[indice] = 'B';
            }
            else if (declarar == 12) {
                const indice = guardar.indexOf(12);
                guardar[indice] = 'C';
            }
            else if (declarar == 13) {
                const indice = guardar.indexOf(13);
                guardar[indice] = 'D';
            }
            else if (declarar == 14) {
                const indice = guardar.indexOf(14);
                guardar[indice] = 'E';
            }
            else if (declarar == 15) {
                const indice = guardar.indexOf(15);
                guardar[indice] = 'F';
            }
        }
        let invertido = guardar.reverse()
        let concatenado = invertido.join('')
        document.getElementById("responder").value = concatenado
    }

    // hex a bin

    if (document.getElementById("seleccion").value == 4 && document.getElementById("seleccion1").value == 1) {
        let contener = 0
        let octales = []
        let adivinar = document.getElementById("adivinar").value;
        contener = adivinar
        console.log(contener);
        for (let i = 0; i < contener.length; i++) {
            let uno = contener[i]
            uno.split("")
            if (uno == "0") {
                octales.push("0000")
            } else if (uno == "1") {
                octales.push("0001")
            } else if (uno == "2") {
                octales.push("0010")
            } else if (uno == "3") {
                octales.push("0011")
            } else if (uno == "4") {
                octales.push("0100")
            } else if (uno == "5") {
                octales.push("0101")
            } else if (uno == "6") {
                octales.push("0110")
            } else if (uno == "7") {
                octales.push("0111")
            } else if (uno == "8") {
                octales.push("1000")
            } else if (uno == "9") {
                octales.push("1001")
            } else if (uno === "A") {
                octales.push("1010")
            } else if (uno === "B") {
                octales.push("1011")
            } else if (uno === "C") {
                octales.push("1100")
            } else if (uno === "D") {
                octales.push("1101")
            } else if (uno === "E") {
                octales.push("1110")
            } else if (uno === 'F') {
                octales.push("1111")
            }
        }
        let concat = octales.join("")
        document.getElementById("responder").value = concat
    }

    // hex a oct

    if (document.getElementById("seleccion").value == 4 && document.getElementById("seleccion1").value == 2) {
        let contenedorA = 0
        let contenedorB = 0
        let arr2 = []
        let unidades = 3
        let octales = []
        let octales2 = []
        let adivinar = document.getElementById("adivinar").value;
        contenedorA = adivinar
        console.log(contenedorA);
        for (let i = 0; i < contenedorA.length; i++) {
            let numNor = contenedorA[i]
            if (numNor == 0) {
                octales.push(0, 0, 0, 0)
            } else if (numNor == 1) {
                octales.push(0, 0, 0, 1)
            } else if (numNor == 2) {
                octales.push(0, 0, 1, 0)
            } else if (numNor == 3) {
                octales.push(0, 0, 1, 1)
            } else if (numNor == 4) {
                octales.push(0, 1, 0, 0)
            } else if (numNor == 5) {
                octales.push(0, 1, 0, 1)
            } else if (numNor == 6) {
                octales.push(0, 1, 1, 0)
            } else if (numNor == 7) {
                octales.push(0, 1, 1, 1)
            } else if (numNor == 8) {
                octales.push(1, 0, 0, 0)
            } else if (numNor == 9) {
                octales.push(1, 0, 0, 1)
            } else if (numNor == "A") {
                octales.push(1, 0, 1, 0)
            } else if (numNor == "B") {
                octales.push(1, 0, 1, 1)
            } else if (numNor == "C") {
                octales.push(1, 1, 0, 0)
            } else if (numNor == "D") {
                octales.push(1, 1, 0, 1)
            } else if (numNor == "E") {
                octales.push(1, 1, 1, 0)
            } else if (numNor == 'F') {
                octales.push(1, 1, 1, 1)
            }
        }
        for (let t = 0; t < octales.length; t++) {
            let ingresar = octales[t]
            arr2.push(ingresar);
        }
        contenedorB = arr2
        let residuo = parseInt(contenedorB.length % 3)
        if (residuo == 2) {
            contenedorB.unshift(0)
        } if (residuo == 1) {
            contenedorB.unshift(0, 0)
        }
        for (i = 0; i < contenedorB.length; i += unidades) {
            let part = contenedorB.slice(i, i + unidades)
            part = part.join("")
            if (part == "000") {
                octales2.unshift("0")
            } else if (part == "001") {
                octales2.unshift("1")
            } else if (part == "010") {
                octales2.unshift("2")
            } else if (part == "011") {
                octales2.unshift("3")
            } else if (part == "100") {
                octales2.unshift("4")
            } else if (part == "101") {
                octales2.unshift("5")
            } else if (part == "110") {
                octales2.unshift("6")
            } else if (part == "111") {
                octales2.unshift("7")
            }
        }
        octales2.reverse();
        let unirTodo = octales2.join("");
        document.getElementById("responder").value = unirTodo;
    }
    // hex a dec
    if (document.getElementById("seleccion").value == 4 && document.getElementById("seleccion1").value == 3) {
        let primer = 0
        let segund = 0
        let tercer = 0
        let cuarto = 0
        let arr = []
        let almacenar = []
        let adivinar = document.getElementById("adivinar").value;
        declarador = adivinar
        for (let i = 0; i < declarador.length; i++) {
            if (declarador[i] == "A") {
                almacenar.push(10)
            }
            else if (declarador[i] == "B") {
                almacenar.push(11)
            }
            else if (declarador[i] == "C") {
                almacenar.push(12)
            }
            else if (declarador[i] == "D") {
                almacenar.push(13)
            }
            else if (declarador[i] == "E") {
                almacenar.push(14)
            }
            else if (declarador[i] == "F") {
                almacenar.push(15)
            } else {
                primer = parseInt(declarador[i])
                almacenar.push(a)
            }
        }
        for (let i = almacenar.length - 1; i >= 0; i--) {
            segund = almacenar[i] * Math.pow(16, tercer)
            tercer++;
            cuarto = cuarto + segund
            arr.push(cuarto)
        }
        let ultimo = arr[arr.length - 1]
        document.getElementById("responder").value = ultimo
    }
}

// DESARROLLADO POR: JoSeLo 2022 07/12/22 12:04 HRS EN PLENA NAVIDAD F :( 😐