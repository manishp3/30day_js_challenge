const book = {
  title: ["the dark night", "hello", "manish", "kem"],
  author: "Manish Patadiya",
  year: 2023,
};
const lib = {
  name: "arunati",
  books: book.title,
};
console.log(lib);

for (const key in lib) {
  console.log(key + "  " + lib[key]);
}
// console.log(tit,aut,yr);
// console.log(key.author);
// console.log(key.year);
// }

// console.log(book);
// console.log(book.desc(21));

//

// console.log(lib.books);
