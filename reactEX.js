const data = [
  {title : "One",prix:100},
  {title : "Two",prix:200},
  {title : "Three",prix:300}
]

console.log((data.reduce((a,v) =>  a = a + v.prix , 0 )))

const data2 = [
    {title : "One",prix:100},
    {title : "Two",prix:200},
    {title : "Three",prix:300}
  ]
  
  console.log((data2.reduce((fish ,cat) =>  fish = fish + cat.prix , 0 )))