/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let categoriesMap = {};

  for (let i = 0; i < transactions.length; i++) {
    let transaction = transactions[i];
    if (categoriesMap[transaction.category]) {
      categoriesMap[transaction.category] += transaction.price;
    } else {
      categoriesMap[transaction.category] = transaction.price;
    }
  }
  let categories = [];
  for (let key of Object.keys(categoriesMap)) {
    let newMap = {};
    newMap.category = key;
    newMap.totalSpent = categoriesMap[key];
    categories.push(newMap);
  }

  return categories;
}

module.exports = calculateTotalSpentByCategory;
