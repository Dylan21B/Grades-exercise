console.log("hello");
const scores = [82, 71, 62, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87, 60]
const grades = {
  alpha: 0,
  bravo: 0,
  charlie: 0,
  delta: 0,
  foxtrot: 0
} 

for (let i = 0; i < scores.length; i++) {
  switch (true) {
  case scores[i] >= 91:
    grades.alpha += 1;
    break;
  case (scores[i] >= 81 && scores[i] < 91):
    grades.bravo += 1;
    break;
  case (scores[i] >= 71 && scores[i] < 81):
    grades.charlie += 1;
    break;
  case (scores[i] >= 61 && scores[i] < 71):
    grades.delta += 1;
    break;
  case (scores[i] < 61):
    grades.foxtrot += 1;
    break;
  default:;
}
}
console.log("There were " + grades.alpha + " A's, " + grades.bravo + " B's, " + grades.charlie + " C's, " + grades.delta + " D's, and " + grades.foxtrot + " F's.");

scores.sort(function(a, b){
return a - b;
});
console.log("The lowest score was " + scores[0] + ".");
console.log("The highest score was " + scores[scores.length - 1] + "!");

var currentGradeCount = 0;
var highestGrade = [];
var leastFrequent = [];
var newGradeCount = 100;

for (var x in grades) {
    if (grades[x] > currentGradeCount) {
      highestGrade = [x];
      currentGradeCount = grades[x];
    } else if (grades[x] === currentGradeCount){
        highestGrade.push(x);
    }
    if (grades[x] < newGradeCount) {
         leastFrequent = [x];
         newGradeCount = grades[x];
      }else if (grades[x] === newGradeCount) {
        leastFrequent.push[x];
      }
  }
    console.log(grades.alpha);

console.log("This is the most common score:", highestGrade);
console.log("The least frequent grade is:", leastFrequent);