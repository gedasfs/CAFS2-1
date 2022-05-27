function bandMembers() {

    const number = prompt('Kiek grupėje narių?');

    console.log(number);

    if (isNaN(number)) {
        alert('Įvedėt ne numerį')
        bandMembers();
    } else {
        if (number <= 0) {
            alert('ne grupė')
        } else if (number == 1) {
            alert('solo')
        } else if (number == 2) {
            alert('duetas')
        } else if (number == 3) {
            alert('trio')
        } else if (number == 4) {
            alert('kvartetas')
        } else {
            alert('didelė grupė')
        }
    }

}

bandMembers();