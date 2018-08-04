function transformFirstAndLast(array) {
    let result = {}; //se declara una variable cn un object vacio
      result[array[0]] = array[array.length-1]; //se declara variable result como un object que llama al array 0,
      //array está declarada como variable, así que se le indica que llame al array en la posicion -1
      return result;
}

//ejemplo
console.log(transformFirstAndLast(['Mercurio', 'Venus', 'Marte', 'Júpiter']));