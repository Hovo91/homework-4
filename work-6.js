function sortedBooks(array) {
  let filteredArray = array.filter((item) => item.readStatus === true);
  return filteredArray.sort((a, b) => b.percent - a.percent);
}

console.log(sortedBooks([
	{ book: "Catcher in the Rye",
    readStatus: true,
    percent: 40},
	{ book: "Animal Farm",
    readStatus: true,
    percent: 20},
	{ book: "Solaris",
    readStatus: false,
    percent: 90 },
	{ book: "The Fall",
    readStatus: true,
    percent: 50 },
	{ book: "White Nights",
    readStatus: false,
    percent: 60 },
	{ book: "After Dark",
    readStatus: true,
    percent: 70 },
]));
