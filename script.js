// 1) Agregá dos nuevos productos al final de la lista.

let arrSuper = ["Leche", "Pan", "Huevos", "Frutas", "Verduras"]

arrSuper.push("Harina","Dulces")



// 2) Agregá dos productos al principio de tu lista.

arrSuper.unshift("Queso","Yogurt")

console.log(arrSuper)

// 3) Determiná cuán largo es el Arreglo en este momento.

console.log (arrSuper.length)

// 4) Sacá un producto y guardalo en una Variable que se llame noHabia.

let noHabia = arrSuper.splice(2,1)

//5 Sacá un producto y guardalo en otra Variable que se llame comprado.

let comprado = arrSuper.shift()