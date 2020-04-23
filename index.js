// 'use strict'

// _________________________________________TASK#1_________________________________________

// const user = {
//     name: 'Mango',
//     age: 20,
//     hobby: 'html',
//     premium: true,
//   };

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;
// console.log(Object.keys(user))
// for (key in user) {
//     console.log('key: ', key)
// };



// _________________________________________TASK#2_________________________________________


// const countProps = function(obj) {
//     return Object.keys(obj).length
//   };


//   console.log(countProps({})); // 0

//   console.log(countProps({ name: 'Mango', age: 2 })); // 2

//   console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3




// _________________________________________TASK#3_________________________________________




// const findBestEmployee = function (employees) {
//     let keysArray = Object.keys(employees);
//         let valueArray = Object.values(employees);
//         let maxValue = 0;

//         for (let i = 0; i < valueArray.length; i++) {
//             if (valueArray[i] > maxValue) {
//                 maxValue = valueArray[i];
//             }
//         }

//         for (key in employees) {
//             if (employees[key] == maxValue) {
//           console.log(`The best employeer is ${key}`)   
             
          
//             }
//         }

//         };


        
//             findBestEmployee({
//                 ann: 29,
//                 david: 35,
//                 helen: 1,
//                 lorence: 99,
//             })
//       // lorence





//           console.log(
//             findBestEmployee({
//               poly: 12,
//               mango: 17,
//               ajax: 4,
//             }),
//           ); // mango

//           console.log(
//             findBestEmployee({
//               lux: 147,
//               david: 21,
//               kiwi: 19,
//               chelsy: 38,
//             }),
//           ); 



// _________________________________________TASK#4_________________________________________

        // const countTotalSalary = function(employees) {
        //    let sum = 0;
        //    let array = Object.values(employees);
        //    for (let el in array)  {
        //        sum += array[el]
        //    }
        //    return sum;
        //   };
          
         




        //   console.log(countTotalSalary({})); // 0
          
        //   console.log(
        //     countTotalSalary({
        //       mango: 100,
        //       poly: 150,
        //       alfred: 80,
        //     }),
        //   ); // 330
          
        //   console.log(
        //     countTotalSalary({
        //       kiwi: 200,
        //       lux: 50,
        //       chelsy: 150,
        //     }),
        //   ); // 400


// _________________________________________TASK#5_________________________________________


    //     const products = [
    //         { name: 'Радар', price: 1300, quantity: 4 },
    //         { name: 'Сканер', price: 2700, quantity: 3 },
    //         { name: 'Дроид', price: 400, quantity: 7 },
    //         { name: 'Захват', price: 1200, quantity: 2 },
    //       ];
          
    //       const getAllPropValues = function(arr, prop) {
    //        let newArr = [];
    //       for (let i = 0; i < arr.length; i++) {
    //         newArr.push(arr[i][prop]);
    //     }
    //  return newArr;
    //       };
         
    //       console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']
          
    //       console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]
          
    //       console.log(getAllPropValues(products, 'category')); // []






   // _________________________________________TASK#6_________________________________________


//     const products = [
//         { name: 'Радар', price: 1300, quantity: 4 },
//         { name: 'Сканер', price: 2700, quantity: 3 },
//         { name: 'Дроид', price: 400, quantity: 7 },
//         { name: 'Захват', price: 1200, quantity: 2 },
//       ];
      
//       const calculateTotalPrice = function(allProducts, productName) {
//    let sum = 0;
//    for (let i = 0; i < allProducts.length; i++) {
//        if (allProducts[i].name == productName) {
//            sum = allProducts[i].price * allProducts[i].quantity;
//        }
//    }
//    return sum;
//       };
      
//       /*
//        * Вызовы функции для проверки работоспособности твоей реализации.
//        */
//       console.log(calculateTotalPrice(products, 'Радар')); // 5200
      
//       console.log(calculateTotalPrice(products, 'Дроид')); // 2800












