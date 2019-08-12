//// { order: 1, compiler: { strict: false } }

// JavaScript objects are collections of values wrapped up with named keys.

const userAccount = {
  name: "Kieron",
  id: 0
}

// You can combine these to make larger, more complex data-models.

const pie = {
  type: "Apple"
}

const purchaseOrder = {
  owner: userAccount,
  item: pie
}

// If you use your mouse to hover over some of these words (try purchaseOrder above)
// you can see how TypeScript is interpreting your JavaScript into labeled types.

// Values can be accessed via the ".", so to get a username for a purchase order
console.log(purchaseOrder.item.type)

// If you hover your mouse over each part of the code between the ()s, you can 
// see TypeScript offering more information about each part. Try re-writing this below:

// Copy this in the next line, character by character: purchaseOrder.item.type



// TypeScript provides feedback to the Playground about what JavaScript objects 
// are available  in this file and lets you avoid typoes and see additional 
// information without having to look it up in another place.

// TypeScript also offers these same features to arrays. Here's an array with 
// just our purchase order above in it.

const allOrders = [purchaseOrder]

// If you hover on allOrders, you can tell it's an array because the hover info
// ends with []. You can access the first order by using square brackets with an
// index (starting from zero)

const firstOrder = allOrders[0]
console.log(firstOrder.item.type)

// An alternative was to get an object is via pop-ing the array to remove objects.
// Doing this removes the object from the array, and returns the object, this is
// called mutating the array, because it changes the underlying data inside it.

const poppedFirstOrder = allOrders.pop()

// Now allOrders is empty. Mutating data can be useful for many things, but 
// one way to reduce the complexity in your codebases is to avoid mutation. 
// TypeScript offers a way to declare an array readonly instead:

// Originally: const allOrders = [purchaseOrder]
const readonlyOrders: readonly typeof purchaseOrder[] = [purchaseOrder] 

// Yep! That's a bit more verbose for sure. There's four new things here:
//
//  : - this is how TypeScript extends JavaScript, it says that the next
//      set of characters are about describing the shape of the const.
//
//  readonly - This object does not support mutation, once it is created
//             then the contents of the array will always stay the same.
// 
//  typeof - Use the type inference system to set the type based on the
//           const which is passed in next.
//
//  purchaseOrder[] - Get the variable purchaseOrder and say it will be
//                    an array of objects which match that shape.
//
//
// Now if you try to pop from the readonlyOrders TypeScript will raise
// an error.

readonlyOrders.pop()
//             ~~~ Property 'pop' does not exist

// You can use readonly in all sorts of places, it's a little bit of extra
// syntax here and there, but it provides a lot of extra safety.

// You can find out more about readonly:
//  - [handbook link]
//  - https://basarat.gitbooks.io/typescript/content/docs/types/readonly.html

// And you can carry on learning about JavaScript and TypeScript in the
// example on functions.
//
// example:functions
//
// or if you want to know more about immutability example:immutability