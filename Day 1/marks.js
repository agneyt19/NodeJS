 let m = [{
  name: "Agney",
  math: 88,
  physics: 82,
  chemistry: 79,
  cs: 94,
  english: 85
},
 {name: "Adam",  english: 80 },
  { name: "Unni",  english: 92 },
  { name: "Rohan",  english: 78 },
  { name: "Damu",  english: 88 },{
    name: "Dinkan", english: 73
  }
]
for (const student of m) {
  for (const key in student) {
    if ( student[key] >= 80) {
      console.log(student.name + " - " + key + ": " + student[key]);
    }
  }
}