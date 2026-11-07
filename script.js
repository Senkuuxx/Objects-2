// Завдання 1
const user = {
  name: 'Arsenii',
  age: 20,
  hobby: 'html',
  premium: true,
};

user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;

const keys = Object.keys(user);
for (const key of keys) {
  console.log(`${key}:${user[key]}`);
}


// Завдання 2
function countProps(obj) {
  return Object.keys(obj).length;
}

console.log(countProps({})); 
console.log(countProps({ name: 'Mango', age: 2 })); 
console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); 


// Завдання 3
function findBestEmployee(employees) {
  let maxTasks = 0;
  let bestEmployee = '';
  
  const entries = Object.entries(employees);
  for (const [name, tasks] of entries) {
    if (tasks > maxTasks) {
      maxTasks = tasks;
      bestEmployee = name;
    }
  }
  
  return bestEmployee;
}

console.log(
  findBestEmployee({
    ann: 29,
    dan: 35,
    john: 1,
    jack: 99,
  })
); 

console.log(
  findBestEmployee({
    david: 12,
    jenny: 17,
    lora: 4,
  })
); 


// Завдання 4
function countTotalSalary(employees) {
  let totalSalary = 0;
  const salaries = Object.values(employees);
  
  for (const salary of salaries) {
    totalSalary += salary;
  }
  
  return totalSalary;
}

console.log(
  countTotalSalary({
    senna: 100,
    poly: 150,
    alfred: 80,
  })
); 

console.log(
  countTotalSalary({
    melisa: 200,
    lux: 50,
    chelsy: 150,
  })
); 


// Завдання 5
function getAllPropValues(arr, prop) {
  const values = [];
  
  for (const obj of arr) {
    if (prop in obj) {
      values.push(obj[prop]);
    }
  }
  
  return values;
}

const products = [
  { name: 'Телефон', price: 1300, quantity: 4 },
  { name: 'Холодильник', price: 2700, quantity: 3 },
  { name: 'Чайник', price: 400, quantity: 7 },
  { name: 'Навушники', price: 1200, quantity: 2 },
];

console.log(getAllPropValues(products, 'name')); 
console.log(getAllPropValues(products, 'quantity')); 
console.log(getAllPropValues(products, 'category')); 


// Завдання 6
function calculateTotalPrice(allProducts, productName) {
  for (const product of allProducts) {
    if (product.name === productName) {
      return product.price * product.quantity;
    }
  }
  return 0; 
}

const items = [
  { name: 'Телефон', price: 1300, quantity: 4 },
  { name: 'Холодильник', price: 2700, quantity: 3 },
  { name: 'Чайник', price: 400, quantity: 7 },
  { name: 'Навушники', price: 1200, quantity: 2 },
];

console.log(calculateTotalPrice(items, 'Телефон')); 
console.log(calculateTotalPrice(items, 'Чайник'));