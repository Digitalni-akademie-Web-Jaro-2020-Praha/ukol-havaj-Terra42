//data

let osoba1 = {
  jmeno: 'Alena',
  uspory: 53000
};
let osoba2 = {
  jmeno: 'Karolína',
  uspory: 68000
};

//funkce

const vacationCheck = (osoba1, osoba2) => {
  if (osoba1.uspory + osoba2.uspory >= 100000) { //mají dohromady více než 100000
    console.log('Mohou jet na dovolenou.');
    if (osoba1.uspory >= 50000 && osoba2.uspory >= 50000) {
      console.log('Obě mají naspořeno více než polovinu.');
    } else if (osoba1.uspory < 50000) {
      console.log(osoba1.jmeno + ' nemá naspořeno dost. Chybí jí ještě ' + (50000 - osoba1.uspory) + '.');
    } else if (osoba2.uspory < 50000) {
      console.log(osoba2.jmeno + ' nemá naspořeno dost. Chybí jí ještě ' + (50000 - osoba2.uspory) + '.');
    };
  } else { //nemají dohromady více než 100000
    console.log('Nemohou jet na dovolenou. Dohromady jim chybí ještě ' + (100000 - (osoba1.uspory + osoba2.uspory)) + '.');
    if (osoba1.uspory < 50000 && osoba2.uspory >= 50000) {
      console.log(osoba1.jmeno + ' nemá naspořeno dost. Musí ještě naspořit alespoň ' + (100000 - (osoba1.uspory + osoba2.uspory)) + '.');
    } else if (osoba2.uspory < 50000 && osoba1.uspory >= 50000) {
      console.log(osoba2.jmeno + ' nemá naspořeno dost. Musí ještě naspořit alespoň ' + (100000 - (osoba1.uspory + osoba2.uspory)) + '.');
    } else if (osoba1.uspory < 50000 && osoba2.uspory < 50000) {
      console.log(osoba1.jmeno + ' nemá naspořeno dost. Musí naspořit ještě alespoň ' + (50000 - osoba1.uspory) + '. ' + osoba2.jmeno + ' také nemá naspořeno dost. Musí naspořit ještě alespoň ' + (50000 - osoba2.uspory) + '.');
    };
  };
};

vacationCheck(osoba1, osoba2);
//výsledek: Mohou jet, obě mají naspořeno


//testy

//test1 - Mohou jet, osoba1 nemá naspořeno dost

const test1Osoba1 = {
  jmeno: 'Alena',
  uspory: 40000
};
const test1Osoba2 = {
  jmeno: 'Karolína',
  uspory: 68000
};

vacationCheck(test1Osoba1, test1Osoba2);

//test2 - Mohou jet, osoba2 nemá naspořeno dost

const test2Osoba1 = {
  jmeno: 'Alena',
  uspory: 70000
};
const test2Osoba2 = {
  jmeno: 'Karolína',
  uspory: 40000
};

vacationCheck(test2Osoba1, test2Osoba2);

//test3 - Nemohou jet, osoba1 nemá naspořeno dost

const test3Osoba1 = {
  jmeno: 'Alena',
  uspory: 30000
};
const test3Osoba2 = {
  jmeno: 'Karolína',
  uspory: 55000
};

vacationCheck(test3Osoba1, test3Osoba2);

//test4 - Nemohou jet, osoba2 nemá naspořeno dost

const test4Osoba1 = {
  jmeno: 'Alena',
  uspory: 60000
};
const test4Osoba2 = {
  jmeno: 'Karolína',
  uspory: 20000
};

vacationCheck(test4Osoba1, test4Osoba2);

//test5 - Nemohou jet, obě nemají naspořeno dost

const test5Osoba1 = {
  jmeno: 'Alena',
  uspory: 30000
};
const test5Osoba2 = {
  jmeno: 'Karolína',
  uspory: 40000
};

vacationCheck(test5Osoba1, test5Osoba2);