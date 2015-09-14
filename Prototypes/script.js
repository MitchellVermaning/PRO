var opdr1 = {};

opdr1.var1 = "Tekst1";
opdr1.var2 = "Tekst2";
opdr1.var3 = "Tekst3";

/////////////////////////////////////////

var opdr2 = {};

opdr2.test = "Hoi";

console.log(opdr2.test);


opdr2.empty = function(){
    opdr2.test = "";
};


opdr2.empty();
console.log(opdr2.test);

//////////////////////////////////////////

Array.prototype.push = function () {
    console.log("Het is op dit moment niet mogelijk, om iets in de Array te pushen");
};

//////////////////////////////////////////

function createUser(name, age){
    var users = {};
    users.name = name;
    users.age = age;
}

createUser("Mitchell", 17);