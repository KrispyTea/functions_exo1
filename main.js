function one (hu,hue) {
    return hu + hue
}
console.log(one(1, 2))

function two (hi,ho) {
    return hi - ho
}
console.log(two(4, 2))

function three (hj,hk) {
    return hj*hk
}
console.log(three(5, 6))

function four (gl, gk) {
    return gl/gk
}
console.log(four(10, 5));

function five (fj, fk) {
    return fj % fk
}
console.log(five(7,2));

function six (tr) {
    return Math.sqrt(tr)
}
console.log(six(4))

function seven (qs, qd) {
    return Math.pow(qs,qd)
}
console.log(seven(2,4));

function capitalize (al) {
    return al.charAt(0).toUpperCase() + al.substr(1).toLowerCase()
}
console.log(capitalize("charades"));

function calcul (nbr1, operator, nbr2) {
    switch (operator) {
        case '+':
            return nbr1 + nbr2
        case '-':
            return nbr1- nbr2
        case '*':
            return nbr1 * nbr2
        case '/':
            return nbr1 / nbr2
        default:
            alert('nope')
            break;
    }
}
console.log(calcul(15,"*",20))