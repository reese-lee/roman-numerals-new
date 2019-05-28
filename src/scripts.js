export function RomanNumeral(number) {
  this.number = number;
}

export function returnNumeral (number) {
  var arabicNumbersList = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  var romanNumeralList = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];
  var romanNumeral = ""; //make it a local var to refresh answers
  if (number > 3999) {
    return "Roman Numerals do not go higher than 3,999";
  }
  if (number < 0) {
    return "Please enter another number";
  }
  if ((typeof number) !== "number") {
    return "Please enter a number";
  }
  for (var i = arabicNumbersList.length-1; i >= 0; i--) {
    while (number >= arabicNumbersList[i]) {
      number -= arabicNumbersList[i];
      romanNumeral += romanNumeralList[i];
    }
  }
  return romanNumeral;
}

//First user submits a sentence.
//When its submitted we want to hide the original
//take the vowels out and return the Puzzle
//loop through the string with for  and change vowels to dashes
// loop through the array and replace each vowel with a "-"
//
// $(document).ready(function(){
//   $("form").submit(function(event) {
//     event.preventDefault();
//       var input = $("#inputString").val();
//       var vowels = ["a","e","i","o","u"];
//       var output = "";
//         console.log("after variables");
//       for(var i=0;i<=input.length; i++){
//         var trueOrFalse = false;
//
//       for(var x=0; x<=vowels.length; x++) {
//
//           if (vowels[x]===input.charAt(i)){
//             trueOrFalse =true;
//
//
//
//           }
//
//         }
//         if(output+ "-")
//       }
//
//         });
//                 });

// export function romanNumeral(value){
//   var output = "";
//   if(value > 3999 || value < 0){
//     return "Please input a number from 0-3999";
//   }
//   while(value>=1000){
//      value -=1000;
//      output += "M";
//   }
//   while(value>=900){
//     value-=900;
//     output+="CM";
//   }
//   while(value >=500){
//     value -=500;
//     output +="D";
//   }
//   while(value>=400){
//     value-=400;
//     output +="CD";
//   }
//   while(value>=100){
//       value-=100;
//       output+="C"
//   }
//   while(value>=90){
//     value-=90;
//     output+="XC";
//   }
//   while(value>=50){
//     value-=50;
//     output+="L";
//   }
//   while(value>=40){
//     value-=40;
//     output+="XL";
//   }
//   while(value>=10){
//     value-=10;
//     output+="X";
//   }
//   while(value>=9){
//     value-=9;
//     output+="IX";
//   }
//   while(value>=5){
//     value-=5;
//     output+="V";
//   }
//   while(value>=4){
//     value-=4;
//     output+="IV";
//   }
//   //while(value>=1){
//     //  value-=1;
//     //  output+="I";
//   //}
// reduce(1,"I");
// function reduce(val, add){
//   while(value>=val){
//     value-=val;
//     output+=add;
//   }
// }
//
//
//   return output;
// }
