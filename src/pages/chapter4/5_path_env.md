---
layout: ../../layouts/normal.astro
title: 'Path & Environment Variables'
---

# Path & Environment Variables

## The path module

Working with file paths is tricky because the separator character is `/` on Mac/Linux and `\` on Windows. The built-in `path` module handles this for you automatically.

```javascript
import path from 'path'

const filePath = path.join('folder', 'subfolder', 'file.txt')
console.log(filePath) // 'folder/subfolder/file.txt' on Mac/Linux
```

## Common path methods

```javascript
import path from 'path'

const full = '/Users/alice/projects/app/src/index.js'

console.log(path.basename(full)) // 'index.js'
console.log(path.dirname(full)) // '/Users/alice/projects/app/src'
console.log(path.extname(full)) // '.js'
console.log(path.join('src', 'utils.js')) // 'src/utils.js'
console.log(path.resolve('src', 'utils.js')) // absolute path based on cwd
```

`path.join` builds a path from parts. `path.resolve` does the same but always returns an absolute path starting from the current working directory.

## \_\_dirname with ES Modules

In CommonJS, `__dirname` gives you the directory of the current file. In ES Modules it does not exist, but you can recreate it:

```javascript
import { fileURLToPath } from 'url'
import path from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

console.log(__dirname) // directory of the current file
```

## Environment variables

Environment variables let you pass configuration to your app without hardcoding it in the source code. This is how you keep secrets like API keys and database passwords out of your code.

Node.js exposes them through `process.env`.

## Reading environment variables

```javascript
// index.js
const port = process.env.PORT
console.log('Running on port:', port)
```

Set them when you start the app:

```bash
PORT=4000 node index.js
```

Output:

```bash
Running on port: 4000
```

## Default values

Use `??` to provide a fallback when a variable is not set:

```javascript
const port = process.env.PORT ?? 3000
const env = process.env.NODE_ENV ?? 'development'
```

## .env files

In real projects, use a `.env` file to store all your environment variables. Install the `dotenv` package to load them:

```bash
npm install dotenv
```

Create a `.env` file in the root of your project:

```ini
PORT=4000
DATABASE_URL=postgres://localhost/mydb
SECRET_KEY=supersecret
```

Load it at the top of your entry file:

```javascript
import 'dotenv/config'

console.log(process.env.PORT) // '4000'
console.log(process.env.DATABASE_URL) // 'postgres://localhost/mydb'
```

**Important:** Add `.env` to your `.gitignore` file so you never commit secrets to version control.

If you are using VITE, it automatically loads `.env` files without needing `dotenv`. Just prefix your variables with `VITE_` to make them available in your client-side code:

```ini
VITE_API_URL=https://api.example.com
```

Then you can access it in your JavaScript:

```javascript
console.log(import.meta.env.VITE_API_URL) // 'https://api.example.com'
```
