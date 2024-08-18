//Task 1
// const shoppingList = [
//   { productName: "bread", quantity: 2, purchased: true },
//   { productName: "milk", quantity: 1, purchased: false },
//   { productName: "cheese", quantity: 3, purchased: true },
//   { productName: "coffee", quantity: 1, purchased: true },
//   { productName: "juice", quantity: 2, purchased: false },
// ];

// const print = (list) => {
//   const sortedList = list.sort((a, b) => a.purchased - b.purchased);
//   sortedList.forEach((item) => {
//     console.log(
//       ${item.productName} - Quantity: ${item.quantity} - Purchased: ${item.purchased}
//     );
//   });
// };
// print(shoppingList);

// const addToShoppingList = (list, productName, quantity) => {
//   const index = list.findIndex((item) => item.productName === productName);
//   if (index !== -1) {
//     list[index].quantity += quantity;
//   } else {
//     list.push({
//       productName: productName,
//       quantity: quantity,
//       purchased: false,
//     });
//   }
// };
// addToShoppingList(shoppingList, 'milk', 1);
// addToShoppingList(shoppingList, 'squid', 5);
// print(shoppingList);

// const productPurchase = (list, productName, quantity) => {
//   const index = list.findIndex((item) => item.productName === productName);
//   if (index !== -1 && list[index].quantity === quantity) {
//     list[index].purchased = true;
//   } else if (index !== -1 && list[index].quantity !== quantity) {
//     list[index].quantity -= quantity;
//     if (list[index].quantity <= 0) {
//       list.purchased = true;
//     }
//   } else {
//     addToShoppingList(list, productName, quantity);
//     const newIndex = list.findIndex((item) => item.productName === productName);
//     list[newIndex].purchased = true;
//   }
// };

// productPurchase(shoppingList, "milk", 1);
// productPurchase(shoppingList, "juice", 1);
// productPurchase(shoppingList, "juice", 1);
// print(shoppingList);

//Task 2
// const receipt = [
//   { nameOfProduct: "bread", quantity: 2, price: 0.5 },
//   { nameOfProduct: "milk", quantity: 1, price: 3.77 },
//   { nameOfProduct: "detergent", quantity: 5, price: 6.7 },
//   { nameOfProduct: "egg", quantity: 30, price: 0.2 },
//   { nameOfProduct: "apple", quantity: 10, price: 0.35 },
// ];

// const print = (list) => {
//   list.forEach((element) => {
//     console.log(
//       ${element.nameOfProduct} - Quantity: ${element.quantity} - Price for one: ${element.price}
//     );
//   });
// };
// print(receipt);

// const totalPurchase = (items) => {
//   return items.reduce((total, item) => {
//     return total + item.quantity * item.price;
//   }, 0);
// };
// const totalAmount = totalPurchase(receipt);
// console.log(totalAmount);

// const getMostExpensivePurchase = (items) => {
//   return items.reduce((mostExpensive, item) => {
//     const itemTotal = item.quantity * item.price;
//     const mostExpensiveTotal = mostExpensive.quantity * mostExpensive.price;

//     if (itemTotal > mostExpensiveTotal) {
//       return item;
//     } else {
//       return mostExpensive;
//     }
//   });
// };

// const mostExpensivePurchase = getMostExpensivePurchase(receipt);
// console.log(`Самая дорогая покупка: ${mostExpensivePurchase.nameOfProduct}, 
//     \nКоличество: ${mostExpensivePurchase.quantity}, 
//     \nЦена за единицу: ${mostExpensivePurchase.price}, 
//     \nОбщая стоимость: ${
//       mostExpensivePurchase.quantity * mostExpensivePurchase.price
//     }`);

// const calculateAveragePrice = (items) => {
//   const totalCost = items.reduce((total, item) => {
//     return total + item.quantity * item.price;
//   }, 0);
//   const totalQuantity = items.reduce((total, item) => {
//     return total + item.quantity;
//   }, 0);
//   return totalCost / totalQuantity;
// };
// const averagePrice = calculateAveragePrice(receipt);
// console.log(`Average price of one product:${averagePrice}`);
 
// task 4
    // const classrooms = [
    //     { name: 'Аудитория 101', seats: 15, faculty: 'Факультет Информатики' },
    //     { name: 'Аудитория 102', seats: 20, faculty: 'Факультет Экономики' },
    //     { name: 'Аудитория 103', seats: 12, faculty: 'Факультет Информатики' },
    //     { name: 'Аудитория 104', seats: 18, faculty: 'Факультет Биологии' },
    //     { name: 'Аудитория 105', seats: 10, faculty: 'Факультет Экономики' }
    // ];
    
    // // Группа
    // const group = { name: 'Группа A', students: 12, faculty: 'Факультет Информатики' };
    
    // // 1. Вывод всех аудиторий
    // console.log('Все аудитории:');
    // classrooms.forEach(({ name, seats, faculty }) => {
    //     console.log(`Название: ${name}, Мест: ${seats}, Факультет: ${faculty}`);
    // });
    
    // // 2. Вывод аудиторий для указанного факультета
    // const facultyToDisplay = 'Факультет Информатики';
    // console.log(`\nАудитории для факультета "${facultyToDisplay}":`);
    // classrooms
    //     .filter(classroom => classroom.faculty === facultyToDisplay)
    //     .forEach(({ name, seats, faculty }) => {
    //         console.log(`Название: ${name}, Мест: ${seats}, Факультет: ${faculty}`);
    //     });
    
    // // 3. Вывод аудиторий, подходящих для группы
    // console.log('\nАудитории, подходящие для группы:');
    // classrooms
    //     .filter(classroom => classroom.seats >= group.students && classroom.faculty === group.faculty)
    //     .forEach(({ name, seats, faculty }) => {
    //         console.log(`Название: ${name}, Мест: ${seats}, Факультет: ${faculty}`);
    //     });
    
    // // 4. Аудитории, отсортированные по количеству мест
    // console.log('\nАудитории, отсортированные по количеству мест:');
    // [...classrooms]
    //     .sort((a, b) => a.seats - b.seats)
    //     .forEach(({ name, seats, faculty }) => {
    //         console.log(`Название: ${name}, Мест: ${seats}, Факультет: ${faculty}`);
    //     });
    
    // // 5. Аудитории, отсортированные по названию
    // console.log('\nАудитории, отсортированные по названию:');
    // [...classrooms]
    //     .sort((a, b) => a.name.localeCompare(b.name))
    //     .forEach(({ name, seats, faculty }) => {
    //         console.log(`Название: ${name}, Мест: ${seats}, Факультет: ${faculty}`);
    //     });