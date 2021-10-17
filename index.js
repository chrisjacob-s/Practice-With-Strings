/* 
To complete this Practice problem, you will write a function called listAllItems(). This function will receive an array of products, that looks something like this:
[
  {
    name: "Slip Dress",
    priceInCents: 8800,
    availableSizes: [0, 2, 4, 6, 10, 12, 16],
  },
];

Depending on the number of items in the array, you will return a different string. In this challenge, you will need to use template literals and the .join() method.

No items
If there are no items, you should return a message that says:
There are no items for sale.

One item
If there is only one item, you should return a message that says like:
There is 1 item for sale: Slip Dress.
Replace "Slip Dress" with the name of whatever the item is.

Two items
If there are two items, you should return a message that says:
There are 2 items for sale: Hat and Shirt.
Replace "Hat" and "Shirt" with the name of whatever the item is.

More than two items
If there are more than two items, you should return a message that says:

There are 3 items for sale: Hat, Shirt, Square-Neck Jumpsuit.
Replace "3" with the number of items for sale and "Hat", "Shirt", and "Square-Neck Jumpsuit" with the names of the items.
*/

let products = [
  {
    name: "Hat",
    priceInCents: 8800,
    availableSizes: ["S", "M", "L"],
  },
  {
    name: "Shirt",
    priceInCents: 9800,
    availableSizes: [0, 10, 12, 2],
  },
  {
    name: "Square-Neck Jumpsuit",
    priceInCents: 8800,
    availableSizes: [6, 10, 14, 2, 12],
  },
  {
    name: "Subtle Sneakers",
    priceInCents: 8000,
    availableSize: [40, 42, 44, 46],
  },
]

function listAllItems(products) {
  const noItem = "There are no items for sale."
  const oneItem = "There is 1 item: "
  const twoItem = "There are 2 items: ";
  let array = [];

  if (products.length === 0) {
    return noItem;
  }

  for (let i = 0; i < products.length; i++) {
    array.push(products[i].name);
  }

  if (products.length === 1) {
    return `${oneItem} ${array.join(", ")}`;
  }
  else if (products.length === 2) {
    return `${twoItem} ${array.join(", ")}`;
  }
  else if (products.length >= 3) {
    return `There are ${products.length} for sale: ${array.join(", ")}`;
  }
}

listAllItems(products);