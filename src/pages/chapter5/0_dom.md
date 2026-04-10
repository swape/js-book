---
layout: ../../layouts/normal.astro
title: 'DOM & Browser'
---

# DOM & Browser

So far we have run JavaScript in Node.js or in the browser console. Now let us look at how to use JavaScript to interact with an actual webpage.

The **DOM** (Document Object Model) is a tree of all the HTML elements on the page. JavaScript can read, change, add, and remove elements using the DOM.

## querySelector

`querySelector` returns the first element that matches a CSS selector.

```javascript
const button = document.querySelector('#submit')       // by id
const heading = document.querySelector('h1')           // by tag
const card = document.querySelector('.card')           // by class
```

## querySelectorAll

`querySelectorAll` returns all matching elements as a list.

```javascript
const allButtons = document.querySelectorAll('button')

allButtons.forEach((btn) => {
  console.log(btn.textContent)
})
```

## getElementById

A shorthand for selecting a single element by its `id`:

```javascript
const title = document.getElementById('page-title')
```

## textContent

`textContent` sets or reads the plain text of an element. It does not parse HTML.

```javascript
const heading = document.querySelector('h1')
heading.textContent = 'Hello from JavaScript!'
```

## innerHTML

`innerHTML` sets or reads the HTML inside an element. Be careful with user input — never insert untrusted data with `innerHTML` directly, as it can open your page to XSS attacks.

```javascript
const container = document.querySelector('#app')
container.innerHTML = '<p>Hello <strong>World</strong></p>'
```

## Changing styles and attributes

```javascript
const box = document.querySelector('.box')
box.style.backgroundColor = 'blue'
box.style.display = 'none'

const link = document.querySelector('a')
link.setAttribute('href', 'https://example.com')
```

## Event listeners

`addEventListener` lets you run code when the user interacts with the page — clicking a button, typing in a field, submitting a form, and more.

```javascript
const button = document.querySelector('#submit')

button.addEventListener('click', () => {
  console.log('Button was clicked!')
})
```

The second argument is a function that runs every time the event fires.

## Common events

- `click`: when the user clicks an element
- `input`: when the value of an input changes
- `submit`: when a form is submitted
- `keydown`: when a key is pressed
- `mouseover`: when the mouse moves over an element

## Passing the event object

The listener function receives an event object that holds information about what happened.

```javascript
const input = document.querySelector('#name')

input.addEventListener('input', (event) => {
  console.log('Current value:', event.target.value)
})
```

`event.target` is the element that triggered the event.

## Preventing default behaviour

Some elements have default behaviour (a link navigates, a form submits and reloads the page). You can stop this with `event.preventDefault()`.

```javascript
const form = document.querySelector('form')

form.addEventListener('submit', (event) => {
  event.preventDefault()
  console.log('Form submitted without page reload')
})
```

## Putting it together

A simple counter that updates the page when a button is clicked:

```html
<p id="count">0</p>
<button id="increment">+1</button>
```

```javascript
let count = 0
const display = document.querySelector('#count')
const button = document.querySelector('#increment')

button.addEventListener('click', () => {
  count = count + 1
  display.textContent = count
})
```
