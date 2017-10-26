'use strict'

const entries =
  obj =>
    Object.keys(obj)
      .map(key => [key, obj[key]])


const listing =
  (name, price) => ({
    name,
    price
  })

const customer =
  (name, shoppingList) => ({
    name,
    shoppingList
  })

const cart =
  (customer, ...items) => ({
    customer,
    items
  })

/**
 * should return an array with the `itemName` repeated `count` number of times
 */
const itemRepeater =
  itemName =>
    count => {
      return Array(count).fill(itemName)
    }

/**
 * should return an array of carts with each given customer's shopping list
 * as an array of items
 */
const constructCarts =
  listings =>
    customers => {
      return [...customers].map( c => ({ customer: c.name, 
                                         items: [...entries(c.shoppingList)]
                                                .map( (a) => itemRepeater(a[0])(a[1])).reduce( (a, c) => a.concat(c))
                                                .map( (a) => ({ name: a, 
                                                  price: listings.find( ent => ent.name === a).price }))
      }))
    }

module.exports = {
  listing,
  customer,
  constructCarts
}
