const Companies = [
    { name: "Google", category: "Product Based", Start: 1990, end: 2004 },
    { name: "Amazon", category: "Product Based", Start: 1992, end: 2006 },
    { name: "vamaApp", category: "Product Based", Start: 1994, end: 2008 },
    { name: "Accenture", category: "Service Based", Start: 1900, end: 2010 },
  ];
  
  const ages = [1, 2, 3, 4, 5, , 6, 7, 8, 9, 11, 22, 33, 44, 55, -100];
  
  // for loop
  
  for (let i = 0; i < Companies.length; i++) {
    console.log(Companies[i]);
  }
  
  // forEach
  
  Companies.forEach(function (item, index) {
    console.log(`${index} : ${item}`);
  });
  
  // filter
  
  // ages.filter((item) => {if(item >= 20)console.log(item)})
  // ages.filter(item => {if(item >= 20)console.log(item)})
  const finalAges = ages.filter((item) => item >= 20);
  console.log(finalAges);
  Companies.filter((item) => console.log(item.category));
  
  // Map Function
  // Companies.map((item) => (console.log(item.Start)))
  var name1 = Companies.map((item) => item.Start);
  console.log(name1);
  
  // Sort
  console.log(`***************************`);
  // var start = Companies.sort((item1, item2) => {
  //     if(item1.Start > item2.Start)return 1;
  //     else return -1;
  // })
  var sortedCompanies = Companies.sort((item1, item2) =>
    item1.Start < item2.Start ? 1 : -1
  );
  sortedCompanies = ages.sort((a, b) => (b - a))
  console.log(sortedCompanies);
  
  
  //reduce
  
  var sumAges = ages.reduce((total, item) => (total += item))
   console.log(sumAges);