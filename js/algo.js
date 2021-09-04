/* ossyegyes algoritmusa
osszeg = 0
CIKLUS AMIG van meg szam, ADDIG
     szam = kovetkezo elem
     osszeg = osszeg + szam
CIKLUS vege

let numericArray = [1,3,2,5,4,7,6,9];
let sum=0;
for (let i = 0; i < numericArray.length; i++) {
     sum += numericArray[i];
}
console.log("sum:" , sum);

/* szamlalas algoritmusa:
db = 0
CIKLUS AMIG van meg szam, ADDIG
   szam = kovetkezo elem
    HA igaz a feltetel a kovetkez[ szamra, AKKOR
       db = db+1
    FELTETEL VEGE
CIKLUS VEGE


let db = 0;
for (let i = 0; i < numericArray.length; i++) {
    if (numericArray[i] % 2 == 0) {
        db++;
    }
}
console.log("Even numbers: ", db);


/* szelso ertek kereses algoritmus:
legnagyobb = elso elem
CIKLUS AMIG van meg szam, ADDIG
    szam = kovetkezo szam
    HA szam > legnagyobb, AKKOR
        legnagyobb = szam
    FELTETEL VEGE
CIKLUS VEGE


let biggest = numericArray[0];
for (let i = 0; i < numericArray.length; i++) {
    if (numericArray[i] > biggest) {
        biggest = numericArray[i];
    }
}
console.log("the biggest element: ", biggest);

let smallest = numericArray[0];
for (let i = 0; i < numericArray.length; i++) {
    if (numericArray[i] < smallest) {
        biggest = numericArray[i];
    }
}
console.log("the biggest element: ", smallest);

/* eldontes algoritmusa
talalat = HAMIS
CIKLUS, AMIG van elem ES NEM talalat
        szam = kovetkezo elem
        HA igaz a feltetel a szamra, AKKOR
            talalat = IGAZ
        FELTETEL VEGE
CIKLUS VEGE


let contains = false;
    for (let i = 0; i < numericArray.length && contains == false; i++) {
        if (numericArray[i] == 8) {
            contains = true;
        }
    }
    console.log("This arraz contains: ", contains);
    console.log(3 % 5 > 1 ? 4 : 7);


function massModify (selector, attribute, value) {
    let nodeList = document.querySelectorAll(selector);
    for (let i = 0; i < nodeList.length; i++) {
    nodeList[i][attribute] = value;
    }
}

massModify("input", "placeholder", "ide")*/