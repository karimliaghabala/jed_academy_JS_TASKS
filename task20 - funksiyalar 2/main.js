// #task1
// prop2Taker adinda funksiya yaradin. Argument kimi obyekt alsin. Hemin obyektin 'prop-2' propertysinin value-nu cixarsin. Mes:

let prop2Taker = (obj) => {
  console.log(obj["prop-2"]);
};
prop2Taker({ one: 1, "prop-2": 2 }); // 2
prop2Taker({ "prop-2": "two", prop: "test" }); // 'two'

// #task2.
// propertyTaker adinda funksiya yaradin. Argument kimi obyekt (obj) ve string (proprtyName) alsin. Hemin obyektin verdiyim propertyni cixarsin. Mes:

let propertyTaker = (obj, pName) => {
  console.log(obj[pName]);
};

propertyTaker({ continent: "Asia", country: "Japan" }, "continent"); // 'Asia'
propertyTaker({ country: "Sweden", continent: "Europe" }, "country"); // 'Sweden'
propertyTaker({ name: "ali", age: 12 }, "name"); // 'ali'

// #task3.
// existsAndTruthy adinda funksiya yaradin. Argument kimi obyekt(obj) ve string (propertyName)  alsin. Eger hemin obyektden o adda property varsa ve truthy-dirse, true qaytarsin eks halda false qaytarsin. Mes,

let existsAndTruthy = (obj1, pName1) => {
  if (obj1[pName1]) {
    console.log(true);
  } else {
    console.log(false);
  }
};

existsAndTruthy({ a: 1, b: 2, c: 3 }, "b"); // true
existsAndTruthy({ x: "a", y: null, z: "c" }, "y"); // false (obyektde 'y' var amma falsy-di ona gore false)
existsAndTruthy({ x: "a", b: "b", z: undefined }, "z"); // false  (obyektde 'z' yoxdu ona gore false)

function myFunction(a, n) {
  if (n > 0 && n < a.length) {
    n = n - 1;
    console.log(a[n]);
  }
  return;
}

myFunction("abcd", 1);
myFunction("zyxbwpl", 5);
myFunction("gfedcba", 3);

function myFunction(a, n) {
  n = n - 1;
  return console.log(a[n]);
}
myFunction("abcd", 1);
myFunction("zyxbwpl", 5);
myFunction("gfedcba", 3);



function myFunction(a) {
    return a.length<3;
}
console.log(myFunction('abcdefg'))
