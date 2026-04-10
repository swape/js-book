---
layout: ../../layouts/normal.astro
title: 'Optional Chaining & Nullish Coalescing'
---

# Optional Chaining & Nullish Coalescing

These two features are part of modern JavaScript and you will use them every day. They help you write safer, cleaner code when dealing with values that might be `null` or `undefined`.

## Optional Chaining (`?.`)

When you try to read a property from `null` or `undefined`, JavaScript throws a `TypeError`. Optional chaining lets you safely access nested properties — if any part of the chain is `null` or `undefined`, the whole expression returns `undefined` instead of crashing.

```javascript
const user = {
  name: 'Alice',
  address: {
    city: 'Oslo',
  },
}

// Without optional chaining — crashes if address is missing
console.log(user.address.city) // 'Oslo'
console.log(user.address.zipCode) // undefined (no crash, key just doesn't exist)
console.log(user.profile.avatar) // TypeError: Cannot read properties of undefined

// With optional chaining — safe
console.log(user?.address?.city) // 'Oslo'
console.log(user?.profile?.avatar) // undefined (no crash)
```

You can also use it for optional method calls:

```javascript
const button = document.querySelector('#submit')
button?.addEventListener('click', handleClick) // safe — does nothing if button is null
```

And for optional array access:

```javascript
const firstTag = post?.tags?.[0]
```

## Nullish Coalescing (`??`)

The `??` operator returns the right-hand side value when the left side is `null` or `undefined`. This is different from `||`, which also triggers on falsy values like `0`, `''`, or `false`.

```javascript
const name = null
console.log(name ?? 'Anonymous') // 'Anonymous'

const count = 0
console.log(count ?? 10) // 0   — 0 is not null/undefined
console.log(count || 10) // 10  — 0 is falsy, so || falls through
```

Use `??` when `0`, `false`, or `''` are valid values you want to keep, and you only want to provide a fallback for `null` and `undefined`.

## Combining both

A very common pattern is to combine `?.` and `??` together:

```javascript
const city = user?.address?.city ?? 'Unknown city'
console.log(city) // 'Oslo' if address exists, 'Unknown city' otherwise
```

This reads as: "get the city if it exists, otherwise use 'Unknown city'".
