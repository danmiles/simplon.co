// 1-----------------------------------------------------------------------------
// Exercice 1 Start : Inverser les valeurs de deux variables
function exercice1() {
    let a = 5, b = 6;

    [a, b] = [b, a];
    
    console.log(`${a} ${b}`);

    document.getElementById("result-1").innerHTML = (`${a} ${b}`)
};


// 2-----------------------------------------------------------------------------
// Exercice 2 Start : Afficher des variables

/*A partir des variables suivantes :
Nom = toto;
Age = 30;
Homme = true;
Exercice 3 : Puissance de 2
Réaliser un programme permettant à l’utilisateur de saisir la puissance de 2 qu’il
souhaite afficher
Exercice 3:
Créez une fonction qui prend deux nombres comme arguments et retourne leur somme.
Exemple:
addition(1, 2) ➞ 3
addition(-2, -4) ➞ -6
*/

function exercice2() {
    
    const Nom = "toto", Age = 30,  Homme = true;   


    let a = 2;

    let b = 3;     

    document.getElementById("result-2").innerHTML = (a+b)

    console.log(a + b); 
};


// 3 -----------------------------------------------------------------------------
/*Exercice 3:
Écrivez une fonction qui prend un nombre entier de minutes et le convertit en secondes.
Exemple:
minuteToSecond(4) ➞ 240
minuteToSecond(3) ➞ 180
*/

function exercice3() {

    let minute = 10;

    let second = 60;

    let minuteToSecond = minute * second;    

    document.getElementById("result-3").innerHTML = (minuteToSecond)
    
};

// 4 -----------------------------------------------------------------------------
/*Exercice 4:
Créez une fonction qui prend un nombre en argument, incrémente le nombre +1 et renvoie le
résultat.
Exemple:
increment(1) ➞ 2
increment(4) ➞ 5
*/

function exercice4() {

    let x = 10;

    const y = ++x;

    document.getElementById("result-4").innerHTML = (`${y}`);    

};

// 5 -----------------------------------------------------------------------------
/*Exercice 5:
Écrivez une fonction qui prend la base et la hauteur d’un triangle et retourne sa surface. Notez
que la surface d’un triangle est: (base * hauteur) / 2
Exemple:
getSurface(8, 2) ➞ 8
getSurface(7, 3) ➞ 10.5
*/

function exercice5() {

    let base = 10;

    let hauteur = 4

    let getSurface = (base * hauteur) / 2;

    document.getElementById("result-5").innerHTML = (getSurface)

};

// 6 -----------------------------------------------------------------------------
/*Exercice 6:
Écrivez un programme JavaScript pour inverser une chaîne de caractères.
Exemple:
strReverse(‘WayToLearnX’) ➞ XnraeLoTyaW
strReverse(‘Hello’) ➞ olleH
*/

function exercice6() {

    const normalWords = ['one', 'two', 'three']

    const reversed = normalWords.reverse();    

    document.getElementById("result-6").innerHTML = (reversed)

};

// 7 -----------------------------------------------------------------------------
/*Exercice 7:
Écrivez un programme JavaScript pour trouver le plus grand des trois entiers donnés.
Exemple:
getMax(5, 9, 1) ➞ 9
getMax(2, 3, 10) ➞ 10
*/

function exercice7() {

    let nomberOne = "45";

    let nomberTwo = "23";

    let nomberThree = "95";

    let nombreMax = (Math.max(nomberOne, nomberTwo, nomberThree));

    document.getElementById("result-7").innerHTML = (nombreMax)

};

// 8 -----------------------------------------------------------------------------
/*Exercice 8:
Créez une fonction qui prend un tableau et renvoie le premier élément. Notez que le premier
élément d’un tableau commence toujours par l’index 0.
Exemple:
getFirst([1, 2, 3]) ➞ 1
getFirst([50, 60, 70]) ➞ 50
*/

function exercice8() {

    let arr = [ 1, 2, 3, 4, 5 ];

    let getFirst = arr[0];

    document.getElementById("result-8").innerHTML = (getFirst);

};

// 9 -----------------------------------------------------------------------------
/*Exercice 9:
Écrivez un programme JavaScript pour récupérer l’URL d’un site Web
*/

function exercice9() {

    let urlcourante = document.location.href; 

    alert (' URL : \n' +urlcourante);  

    document.getElementById("result-9").innerHTML = (' URL : \n' +urlcourante);

};

// 10 -----------------------------------------------------------------------------
/*Exercice 10:
Écrivez un programme JavaScript pour renvoyer le reste de deux nombres. Il existe un seul
opérateur en JavaScript, capable de fournir le reste d’une division. Deux nombres sont transmis
comme paramètres. Le premier paramètre divisé par le deuxième paramètre.
Exemple:
resteDiv(1, 3) ➞ 1
resteDiv(2, 4) ➞ 2
resteDiv(3, 3) ➞ 0 
*/

function exercice10() {

    let nomberOne = "45";

    let nomberTwo = "23";   

    let devision = (nomberOne % nomberTwo);

    document.getElementById("result-10").innerHTML = (devision);

};

// 11 -----------------------------------------------------------------------------
/*Exercice 11:
Avec deux nombres, retournez TRUE si la somme des deux nombres est inférieure à 100. Sinon,
retournez FALSE.
Exemple:
check(5, 20) ➞ true
 5 + 20 = 25
check(60, 55) ➞ false
60 + 55 = 115
*/

function exercice11() {

    let nomberOne = 45;

    let nomberTwo = 23;   

    let sum = (nomberOne + nomberTwo);

    if (sum < 100) {
        document.getElementById("result-11").innerHTML = ("TRUE");
    } else  {
        document.getElementById("result-11").innerHTML = ("FALSE");
    };    

};

// 12 -----------------------------------------------------------------------------
/*Exercice 12:
Écrivez une fonction qui convertit les hour en secondes. Notez qu’il y a 60 secondes en une
minute et 60 minutes en une hour.
Exemple:
houreconde(1) ➞ 3600
houreconde(5) ➞ 18000
*/

function exercice12() {

    let hour = 7;

    let second = 3600;

    let hourSeconde = hour * second;    

    document.getElementById("result-12").innerHTML = (hourSeconde);
    
};

// 13 -----------------------------------------------------------------------------
/*Exercice 13:
Créez une fonction qui prend un nombre et renvoie TRUE s’il est inférieur ou égal à zéro, sinon
retournez FALSE.
Exemple:
checkNbr(1) ➞ false
checkNbr(-1) ➞ true
checkNbr(0) ➞ true
*/

function exercice13() {

    let checkNbr = -2;  

    if (checkNbr <= 0) {
        document.getElementById("result-13").innerHTML = ("TRUE");
    } else  {
        document.getElementById("result-13").innerHTML = ("FALSE");
    };    

};

// 14 -----------------------------------------------------------------------------
/*Exercice 14:
Créez une fonction qui renvoie TRUE lorsque nbr1 est égal à nbr2; sinon retournez FALSE.
Exemple:
isEqual(3, 6) ➞ false
isEqual(1, ‘1’) ➞ false
*/

function exercice14() {

    let numberOne = 10;  

    let numberTwo = 15;

    if (numberOne == numberTwo) {
        document.getElementById("result-14").innerHTML = ("TRUE");
    } else  {
        document.getElementById("result-14").innerHTML = ("FALSE");
    };    

};

// 15 -----------------------------------------------------------------------------
/*Exercice 15:
Créez une fonction qui renvoie TRUE si un entier est divisible par 5, sinon retournez FALSE.
Exemple:
isDivisible(5) ➞ true
isDivisible(10) ➞ true
isDivisible(6) ➞ false
*/

function exercice15() {

    let numberExample = 20;  

    let divisibleFive = 5; 

    let isDivisible = numberExample / divisibleFive;

    if (Number.isInteger(isDivisible)) {
        document.getElementById("result-15").innerHTML = ("TRUE");
    } else  {
        document.getElementById("result-15").innerHTML = ("FALSE");
    };    

};

// 16 -----------------------------------------------------------------------------
/*Exercice 16:
Écrivez une fonction qui prend deux entiers (hour, minutes) et les convertit en secondes.
Exemple:
hmTos(1, 10) ➞ 4200
hmTos(0, 59) ➞ 3540
hmTos(0, 0) ➞ 0
*/

function exercice16() {

    let hour = 2;

    let min = 20;
    
    let hmTos = (hour*3600) + (min*60);
    

    document.getElementById("result-16").innerHTML = (hmTos);
    
};

// 17 -----------------------------------------------------------------------------
/*Exercice 17:
Écrivez une fonction pour inverser un tableau. Attention: N’utilisez pas la méthode intégrée
reverse();
Exemple:
reverseTab([1, 2, 3]) ➞ [3, 2, 1]
reverseTab([1, 1, 2, 2, 3]) ➞ [3, 2, 2, 1, 1]
*/
function exercice17() {

    const normalWords = ['Only', 'with', 'Reverse',]

    const reversed = normalWords.reverse();    

    document.getElementById("result-17").innerHTML = (reversed)

};

// 18 -----------------------------------------------------------------------------
/*Exercice 18:
Créez une fonction qui prend un tableau et renvoie le dernier élément du tableau.
Exemple:
getLastElem([1, 2, 3, 4]) ➞ 4
getLastElem([‘Alex’, ‘Bob’, ‘Emily’]) ➞ ‘Emily’
*/

function exercice18() {

    const normalWords = ['Alex', 'Bob', 'Emily'];

    const getLastElem = normalWords[normalWords.length - 1]    

    document.getElementById("result-18").innerHTML = (getLastElem)

};

// 19 -----------------------------------------------------------------------------
/*Exercice 19:
Créez une fonction qui vérifier l’égalité de deux paramètres a et b. La valeur et le type de
paramètres doivent être testés afin d’avoir une égalité. La fonction doit renvoyer TRUE si les
paramètres sont égaux et FALSE s’ils sont différents.
Exemple:
checkEq(5, 5) ➞ true
// number = number: leur type et leur valeur sont égaux
checkEq(5, 0) ➞ false
// number = number: leur type sont égaux et leur valeur sont différent
checkEq(5, false) ➞ false
// number <> boolean: leur type est différent
checkEq(5, ‘5’) ➞ false
// number <> string: leur type est différent
*/

function exercice19() {

    let a = '5';  

    let b = 5; 

    

    if (a === b) {
        document.getElementById("result-19").innerHTML = ("TRUE");
    } else if (a==b)   {
        document.getElementById("result-19").innerHTML = ("FALSE");
    } else if (a!==b) {
        document.getElementById("result-19").innerHTML = ("FALSE");
    } else if (a!=b) {
        document.getElementById("result-19").innerHTML = ("FALSE");
    }

};

// 20 -----------------------------------------------------------------------------
/*Exercice 20:
Créez une fonction qui renvoie TRUE si une chaîne est vide et sinon renvoie FALSE.

isEmpty("1") ➞ false
isEmpty("WayToLearnX") ➞ false
isEmpty(" ") ➞ false
isEmpty("") ➞ true
*/

function exercice20() {

    let isEmpty = '';
    

  
    if (isEmpty === '1') {
        document.getElementById("result-20").innerHTML = ("FALSE");
    } else if (isEmpty === 'WayToLearnX') {
        document.getElementById("result-20").innerHTML = ("FALSE");
    } else if (isEmpty === ' ') {
        document.getElementById("result-20").innerHTML = ("FALSE");
    } else if (isEmpty === null) {
        document.getElementById("result-20").innerHTML = ("FALSE");
    }  else if (isEmpty === '') {
        document.getElementById("result-20").innerHTML = ("TRUE");
    }    
};
