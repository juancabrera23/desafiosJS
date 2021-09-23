function Producto (alimento, precio, animal){
    this.alimento = alimento;
    this.precio = parseInt(precio);
    this.animal = animal;
};
var producto1 = new Producto("Royal Canin", 1800, "perro");
console.log(producto1);
var producto2 = new Producto("Royal Cat", 580, "gato");
console.log(producto2);