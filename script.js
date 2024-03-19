let userName = "Brad";
userName = "Jenna";

function getUserNameLength(name) {
  const result = name.length;
  return result;
}

console.log(userName);
console.log(getUserNameLength(userName));
console.log(getUserNameLength(userName) > 4);

// TODO: Implement the isString function

const isString = function (myData) {
  return typeof myData === "string";
};

console.log(isString("Hello"));
console.log(isString(3));
console.log(isString(undefined));
console.log(isString(""));
console.log(isString("John" + "Doe"));
