var persons = [
  {firstname : "Malcom", lastname: "Reynolds"},
  {firstname : "Kaylee", lastname: "Frye"},
  {firstname : "Jayne", lastname: "Cobb"}
];

function getFullName(item) {
  var fullname = [item.firstname,item.lastname].join(" ");
  return fullname;
}

newMap = persons.map(getFullName);
console.log(newMap);