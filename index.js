/**
 *
 * - String
 * - Boolean
 * - Number
 * - null
 * - Array
 * - Objet
 * let prenom; // => undefined
 *
 */

/*
    // let je peux changer autant de fois que je le souhaite c'est ✅
    let prenom = "Anthony";
    prenom = "Doriane";

    // const IMPOSSIBLE à réasigner ❌
    const nom = "Gorski";
    nom = "Muller";
*/

/**
 * Créer une variable boolean qui m'informe si je suis en remote ou pas
 *
 * En fonction de ce resultat, je souhaite savoir si je paye plus d'éléctricite ou non
 *
 *
 * if(ma condition) {
 *  ma condition est vrai
 * } else {
 *  sinon ma condition est fausse
 * }
 *
 */

/**
 * const et let sont des variables.
 */
const isRemote = true;
let isRemote2 = false;

// if (isRemote) {
// 	console.log("c'est pas Versaille ici!");
// } else {
// 	console.log("le campus c'est pas mal non plus");
// }
function studentRemote(enRemote) {
	if (enRemote) {
		return "enRemote = true";
	} else {
		return "enRemote = false";
	}
}

/**
 * Pour executé une fonction, il suffit de l'appeler par son nom
 * et de lui ajouter les parenthèses ().
 *
 * ex : studentRemote().
 */
let result = studentRemote(isRemote);

/**
 function studentRemote(enRemote = isRemote = true ===> enRemote = true) {
	if (enRemote) {
		return "c'est pas Versaille ici!";
	} else {
		return "le campus c'est pas mal non plus";
	}
}
 */

//console.log(result);
console.log(studentRemote(isRemote));
//isRemote = false;
console.log(studentRemote(isRemote));

/**
 function studentRemote(enRemote = false) {
	if (enRemote) {
		return "c'est pas Versaille ici!";
	} else {
		return "le campus c'est pas mal non plus";
	}
}
 */

const arr = [];

arr.push("coucou");
console.log(arr);

arr = 42;
