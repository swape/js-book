module.exports = {
  title: "JavaScript",
  description: "Another JavaScript book explained by Alireza Balouch",
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
    ],
    sidebar: [
      {
        title: "Home", // required
        path: "/" // optional, which should be a absolute path.
      },
      {
        title: "Chapter 1", // required
        path: "/chapter1/", // optional, which should be a absolute path.
        children: [
          "/chapter1/",
          "/chapter1/semicolons.md",
          "/chapter1/variables.md",
          "/chapter1/comments.md",
          "/chapter1/concatenating.md",
          "/chapter1/functions.md",
          "/chapter1/arrays.md",
          "/chapter1/boolean.md",
          "/chapter1/object.md"
        ]
      },
      {
        title: "Chapter 2", // required
        path: "/chapter2/", // optional, which should be a absolute path.
        children: [
          "/chapter2/functionTypes.md",
          "/chapter2/functionParameters.md",
          "/chapter2/return.md",
          "/chapter2/class.md",
          "/chapter2/loops.md",
          "/chapter2/arrayLoops.md",
          "/chapter2/templateLiterals.md",
          "/chapter2/spreadOperator.md",
          "/chapter2/set.md",
          "/chapter2/map.md"
        ]
      }
    ]
  }
};
