// El styles lo importamos aquí para que se encargue Vite de compilar todo
import '../scss/styles.scss';

// Crea una funcion que reciba una palabra, si la palabra tiene más de 5 caracteres la imprimirá en mayúsculas, si no en minúsculas. Resuélvelo con un if-else
const upperLowerWord = word => {
  if (word.length > 5) {
    console.log(word.toUpperCase());
  } else {
    console.log(word.toLowerCase());
  }
};

const word = 'PACO';
upperLowerWord(word);

// Repite el ejercicio anterior pero con un operador ternario.
const upperLowerWord2 = word => {
  word.length > 5
    ? console.log(word.toUpperCase())
    : console.log(word.toLowerCase());
};

const word2 = 'caligula';
upperLowerWord2(word2);

// Crea una función que reciba 2 verbos. La función debe imprimir a qué conjugación pertenecen. Por ejemplo, si la función recibe "andar" y "correr" debe imprimir "El verbo andar es de la primera conjugación y el verbo correr de la segunda conjugación".
const verbs = (verb1, verb2) => {
  if (verb1.endsWith('ar') && verb2.endsWith('ar')) {
    console.log(
      `El verbo ${verb1} y el verbo ${verb2} son de la primera conjugación`
    );
  } else if (verb1.endsWith('ar') && verb2.endsWith('er')) {
    console.log(
      `El verbo ${verb1} es de la primera conjugación y el verbo ${verb2} de la segunda conjugación`
    );
  } else if (verb1.endsWith('ar') && verb2.endsWith('ir')) {
    console.log(
      `El verbo ${verb1} es de la primera conjugación y el verbo ${verb2} de la tercera conjugación`
    );
  } else if (verb1.endsWith('er') && verb2.endsWith('ar')) {
    console.log(
      `El verbo ${verb1} es de la segunda conjugación y el verbo ${verb2} de la primera conjugación`
    );
  } else if (verb1.endsWith('er') && verb2.endsWith('er')) {
    console.log(
      `El verbo ${verb1} y el verbo ${verb2} son de la segunda conjugación`
    );
  } else if (verb1.endsWith('er') && verb2.endsWith('ir')) {
    console.log(
      `El verbo ${verb1} es de la segunda conjugación y el verbo ${verb2} de la tercera conjugación`
    );
  } else if (verb1.endsWith('ir') && verb2.endsWith('ar')) {
    console.log(
      `El verbo ${verb1} es de la tercera conjugación y el verbo ${verb2} de la primera conjugación`
    );
  } else if (verb1.endsWith('ir') && verb2.endsWith('er')) {
    console.log(
      `El verbo ${verb1} es de la tercera conjugación y el verbo ${verb2} de la segunda conjugación`
    );
  } else {
    console.log(
      `El verbo ${verb1} y el verbo ${verb2} son de la tercera conjugación`
    );
  }
};

const verb1 = 'andar';
const verb2 = 'comer';
verbs(verb1, verb2);

// Crear una función generateWord que reciba 3 palabras y genere una palabra usando 2 letras de cada palabra. Por ejemplo, "Hola", "Adios" y "Mano" podrían generar "aldona".
const generateWord = (word1, word2, word3) => {
  //   const word =
  //     word1.substring(2, 4) + word2.substring(3, 5) + word3.substring(4, 6);
  //   return word;
  const word1R1 = Math.random() * word1.length;
  const word1R2 = Math.random() * word1.length;
  const word2R1 = Math.random() * word2.length;
  const word2R2 = Math.random() * word2.length;
  const word3R1 = Math.random() * word3.length;
  const word3R2 = Math.random() * word3.length;
  const word =
    word1.charAt(word1R1) +
    word1.charAt(word1R2) +
    word2.charAt(word2R1) +
    word2.charAt(word2R2) +
    word3.charAt(word3R1) +
    word3.charAt(word3R2);

  return word;
};

console.log(generateWord('QUESO', 'CHORIZO', 'MANZANA'));

// Crea una función que reciba un email e imprima por separado el nombre y el dominio. Por ejemplo, si recibe "dorian@gmail.com" deberá imprimir "El usuario es dorian" y por otro lado "El dominio es gmail.com".
const userDomain = email => {
  const at = email.indexOf('@');
  const user = email.substring(0, at);
  const domain = email.substring(at + 1);
  return `El usuario es ${user} y el dominio es ${domain}`;
};

const emailReturn = userDomain('morodo@hotmail.com');
console.log(emailReturn);

// Crea una función que reciba una palabra e imprime por consola una letra aleatoria de esa palabra.
const randomChar = word => {
  const randomCharact = Math.floor(Math.random() * word.length);
  console.log(word.charAt(randomCharact));
};

randomChar('Esternocleidomastoideo');

// Crea una función que reciba una palabra de 5 letras y la devuelva intercalando mayúsculas y minúsculas, por ejemplo adios, sería aDiOs
const upperLower = word => {
  if (word.length > 5) {
    console.log(
      `Miloko usted me ha puesto una palabra de más de 5 letras y eso no se vale.`
    );
  } else {
    console.log(
      word.charAt(0).toUpperCase() +
        word.charAt(1).toLowerCase() +
        word.charAt(2).toUpperCase() +
        word.charAt(3).toLowerCase() +
        word.charAt(4).toUpperCase()
    );
  }
};

upperLower('catre');

// Crea una función que reciba un nombre y un apellido, y devuelva un nombre de usuario compuesto por la primera letra del nombre, el apellido completo, y un número aleatorio del 1 al 100. Por ejemplo, "Juan Perez" podría convertirse en "JPerez87".
const nameSurname = (name, surname) => {
  console.log(name.charAt(0) + surname + Math.floor(Math.random() * 101 + 1));
};

nameSurname('Vicente', 'Monreal');
