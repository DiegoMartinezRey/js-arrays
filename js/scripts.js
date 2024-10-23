const getNumberRandom = (num) => {
  return Math.floor(Math.random() * num + 1);
};

const randomArrayPosition = (array) => {
  if (array && array.length === 5) {
    const random = getNumberRandom(array.length - 1);
    return array[random];
  }
  return "El array debe ser de 5 datos";
};

console.log(randomArrayPosition([11, 25, 33, 42, 14]));

const arrayOperations = (array) => {
  if (array && array.length === 3) {
    const add = array[0] + array[1] + array[2];
    const average = add / 3;
    let major = 0;
    let minor = 0;
    if (array[0] > array[1] && array[0] > array[2]) {
      major = array[0];
      array[1] > array[2] ? (minor = array[2]) : (minor = array[1]);
    } else if (array[1] > array[0] && array[1] > array[2]) {
      major = array[1];
      array[0] > array[2] ? (minor = array[2]) : (minor = array[0]);
    } else if (array[2] > array[0] && array[2] > array[1]) {
      major = array[2];
      array[0] > array[1] ? (minor = array[1]) : (minor = array[0]);
    }
    return `- La suma de todos los números es: ${add}
            - La media de todos los números es: ${average}
            - El mayor es ${major} y el menor es ${minor}`;
  }
  return "El array debe ser de 3 datos";
};

console.log(arrayOperations([3, 5, 9]));

const isNumberOnArray = (array) => {
  if (array && array.length === 5) {
    const numRandom = getNumberRandom(10);
    if (array.includes(numRandom)) {
      return `El numero ${numRandom} esta en la posicion ${array.indexOf(
        numRandom
      )}`;
    }
    return `El numero ${numRandom} no esta dentro del array`;
  }
};

console.log(isNumberOnArray([1, 2, 3, 4, 5]));

const addThreeNumbers = (array) => {
  console.log(array.length);
  if (array && array.length === 0) {
    array.push(getNumberRandom(100));
    array.push(getNumberRandom(100));
    array.push(getNumberRandom(100));
    return array;
  }
  return "El array debe estar vacio";
};

console.log(addThreeNumbers([]));

const dniLetter = (dni) => {
  const letters = [
    "T",
    "R",
    "W",
    "A",
    "G",
    "M",
    "Y",
    "F",
    "P",
    "D",
    "X",
    "B",
    "N",
    "J",
    "Z",
    "S",
    "Q",
    "V",
    "H",
    "L",
    "C",
    "K",
    "E",
  ];
  const index = dni % 23;
  const letterDni = letters[index];
  return `${dni}${letterDni}`;
};

console.log(dniLetter(1125374));

const threeWordsInArray = (array) => {
  if (array && array.length === 3) {
    let arrayLetters = [];
    arrayLetters.push(array[0].charAt(0).toUpperCase());
    arrayLetters.push(array[0].charAt(array[0].length - 1).toUpperCase());
    arrayLetters.push(array[1].charAt(0).toUpperCase());
    arrayLetters.push(array[1].charAt(array[1].length - 1).toUpperCase());
    arrayLetters.push(array[2].charAt(0).toUpperCase());
    arrayLetters.push(array[2].charAt(array[2].length - 1).toUpperCase());
    return arrayLetters;
  }
  return "El array debe tener 3 elementos";
};

console.log(threeWordsInArray(["hola", "adios", "gracias"]));

const oddNumbers = (array) => {
  if (array && array.length === 3) {
    let count = 0;
    if (array[0] % 2 === 0) {
      count++;
    }
    if (array[1] % 2 === 0) {
      count++;
    }
    if (array[2] % 2 === 0) {
      count++;
    }
    return `Hay ${count} numeros pares`;
  }
  return "El array debe ser de 3 elementos";
};

console.log(oddNumbers([43, 22, 86]));

const inverseNumbers = (array) => {
  if (array && array.length === 3) {
    let numArray = [];
    numArray.push(array[2]);
    numArray.push(array[1]);
    numArray.push(array[0]);
    return numArray;
  }
  return "El array debe ser de 3 elementos";
};

console.log(inverseNumbers([2, 6, 9]));

const capitalLetters = (array) => {
  if (array && array.length === 3) {
    let letters = [];
    letters.push(array[0].toUpperCase());
    letters.push(array[1].toUpperCase());
    letters.push(array[2].toUpperCase());
    return letters;
  }
  return "El array debe ser de 3 elementos";
};

console.log(capitalLetters(["Hola", "Adios", "Gracias"]));
