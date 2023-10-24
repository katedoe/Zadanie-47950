function dzialania(a, b) {

    let suma = a + b;
    let roznica = a  - b;
    let iloczyn = a * b;

    if (suma>= 0) {
        console.log("Wynik dodawania wynosi " + suma);
    } else {
        console.log("Wynik jest nieprawidłowy");
    }

    if (roznica>=0) {
        console.log("Wynik odejmowania wynosi " + roznica);
    } else {
        console.log("Wynik jest nieprawidłowy");
    }

    if (iloczyn>=0) {
        console.log("Wynik mnożenia wynosi " + iloczyn);
    } else {
        console.log("Wynik jest nieprawidłowy");
    }

}

dzialania(8, -3);
/* dzialania(8, 3); */