---
layout: ../../layouts/normal.astro
title: "Promise"
---
# Promise

Asynchronous and Synchronous.

In many programming languages, you write a code and each line is executed synchronously.

But some languages you can do multiple actions at the same time.

Think about a website. Your browser can fetch some data fra backend and load some images on the page and you can interact with the page by clicking around and do stuff without waiting for browser to finish the data to load in the background.

So it is important to be able to do multiple tasks and not blocking the user.

With help of Promise and Async function.

When you declare a promise, you get an object with 3 special functions.

```javascript
const fetchMyData = new Promise((resolve, reject) => {
  resolve('data from promise')
})

fetchMyData
  .then(data => {
    console.log(data)
  })
  .catch(error => {
    console.log('error:', error)
  })
  .finally(() => {
    console.log("this is running after 'then' and 'catch'")
  })
```

Output:

```
data from promise
this is running after 'then' and 'catch'
```

## then (resolve)

As you can se we pass a function to our `Promise`. This function have 2 argument functions. "resolve" and "reject".

When we user `resolve('some data')`, we can get that data with `.then()` function on our `fetchMyData` object.

## catch (reject)

```javascript
const fetchMyData = new Promise((resolve, reject) => {
  reject('No data to get')
})

fetchMyData
  .then(data => {
    console.log(data)
  })
  .catch(error => {
    console.log('error:', error)
  })
  .finally(() => {
    console.log("this is running after 'then' and 'catch'")
  })
```

Output:

```
error: No data to get
this is running after 'then' and 'catch'
```

Now you can see that `.then()` function is not invoked at all. This is because we only use `reject` in the promise. So only `catch()` part is run.

## finally

In both examples we have `finally()` this runs no matter if it is `catch()` or `then()`.
This nice function is normally used to clean up stuff like change the loading status or some other stuff we have to do actions that have to be run no matter it fails or not.

## chaining

You can chain more `then()` functions if you have to fetch and process more data before returning.

```javascript
const fetchMyData = new Promise((resolve, reject) => {
  resolve(4)
})

fetchMyData
  .then(data => {
    return data * 10
  })
  .then(data => {
    return data + 2
  })
  .then(data => {
    console.log(data)
  })
  .catch(error => {
    console.log('error:', error)
  })
  .finally(() => {
    console.log("this is running after 'then' and 'catch'")
  })
```

Output:

```
42
this is running after 'then' and 'catch'
```

But just returning some number or text don't require async. Let us use something that actually do that.

## fetch

`fetch` is a function that can fetch data from other URL's async. It is not blocking anything on the page and runs the `then` function when it is done fetching.

```javascript
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
```

On line 1 we have the URL of where it can fetch some data.
On line 2 it gets the response and use `.json()` function to convert the data from `String` to JSON object so that we can use it in JavaScript.
On line 3 it prints out to console.

Output:

```javascript
{
  completed: false
  id: 1
  title: 'delectus aut autem'
  userId: 1
}
```

<div class="tip"> 
PS:

In real project you have to do more than just trusting that the url is correct and we might not always get the right information.
</div>

You can also assign the `fetch` to `const` before running `then` function.
So here is same example:

```javascript
const myData = fetch('https://jsonplaceholder.typicode.com/todos/1')

myData.then(response => response.json()).then(json => console.log(json))
```

Let us make this even better:

```javascript
const fetchData = id =>
  fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)

const myData = fetchData(1)

myData.then(response => response.json()).then(json => console.log(json))
```

Now we can re-use this function with different id's.

But we can do better:

```javascript
const fetchData = id => {
  return new Promise((resolve, reject) => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(data => {
        if (data) {
          try {
            const jsonData = data.json()
            return resolve(jsonData)
          } catch (e) {
            return reject(e)
          }
        }
        return reject(new Error('Error'))
      })
      .catch(e => {
        return reject(e)
      })
  })
}

fetchData(1)
  .then(console.log)
  .catch(console.log)
```

Now we have made a function that fetch and return json or an error.

On line 2 it is returning a promise.

On line 3 we fetch from url.

On line 5 we check if we have any data or else return a reject from line 13.

On line 6 we use `try`. Content of try have to be run without any error or else it jumps to line 9 in `catch` function and rejects so that we can catch that on line 22.

On line 7 it tries to convert the data to a JSON object. If it fails and since it is inside the `try`, line 9 return the reject.

If everything is ok line 8 resolves and return the data then end up in line 21 and passed to console.log.

If line 21 is confusing for you, let me explain:

```javascript
// line 21
.then(console.log)

// is same as this
.then( (data) => console.log(data) )

// and same as
.then( function (data){
  return console.log(data)
  })
```

We just simply pass inn a function that handles `then()`

Another example of passing function as argument

```javascript
function printOut(info) {
  console.log(info)
}

const myPromise = new Promise((resolve, reject) => {
  // ...some fetching and stuff here
  resolve(2)
})

myPromise.then(printOut)
```

`resolve` from line 7 is passing only one argument `2`. When `then` function on line 10 is run, it passes the `2` as argument to our `printOut` function.

<div class="tip">
You get more than 3 functions on Promise, but those are not used so often.

But if you like, you can read more about it here: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank" rel="noreferrer noopener" >Promise</a>
</div>
