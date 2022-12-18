module.exports = {
  title: 'JavaScript',
  description: 'Another JavaScript book explained by Alireza Balouch',
  markdown: {
    lineNumbers: true,
  },
  navbar: 'auto',
  sidebar: 'auto',
  themeConfig: {
    nav: [{ text: 'Home', link: '/' }],
    sidebar: [
      {
        text: 'Home',
        link: '/',
        children: [
          { text: 'Home', link: '/' },
          { text: 'Getting started', link: '/chapter1/index' },
        ],
      },
      {
        text: 'Chapter 1',
        link: '/chapter1/index',
        children: [
          { text: 'Semicolons', link: '/chapter1/semicolons' },
          { text: 'Variables', link: '/chapter1/variables' },
          { text: 'Comments', link: '/chapter1/comments' },
          { text: 'Concatenating', link: '/chapter1/concatenating' },
          { text: 'Boolean', link: '/chapter1/boolean' },
          { text: 'Array', link: '/chapter1/arrays' },
          { text: 'Functions', link: '/chapter1/functions' },
          { text: 'Object', link: '/chapter1/object' },
        ],
      },
      {
        text: 'Chapter 2',
        link: '/chapter2/index',
        children: [
          { text: 'Function Types', link: '/chapter2/functionTypes' },
          { text: 'Function Parameters', link: '/chapter2/functionParameters' },
          { text: 'Return', link: '/chapter2/return' },
          { text: 'Class', link: '/chapter2/class' },
          { text: 'Loops', link: '/chapter2/loops' },
          { text: 'Array Loops', link: '/chapter2/arrayLoops' },
          { text: 'Template Literals', link: '/chapter2/templateLiterals' },
          { text: 'Spread Operator', link: '/chapter2/spreadOperator' },
          { text: 'Set', link: '/chapter2/set' },
          { text: 'Map', link: '/chapter2/map' },
        ],
      },
      {
        text: 'Chapter 3',
        link: '/chapter3/index',
        children: [{ text: 'Promise', link: '/chapter3/promise' }],
      },
    ],
  },
}
