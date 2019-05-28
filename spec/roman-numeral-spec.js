import { RomanNumeral, returnNumeral } from './../src/scripts.js';

describe('RomanNumeral', function() {

  it('should test whether a single number outputs a Roman Numeral', function() {
    var romanNumber = new RomanNumeral(5);
    expect(romanNumber.number).toEqual(5);
  });

  it('should test whether a 4 will output a IV', function() {
    var answer = returnNumeral(4);
    expect(answer).toEqual("IV");
  });

  it('should test whether a number containing 90 will output XC', function() {
    var answer = returnNumeral(90);
    expect(answer).toEqual("XC");
  });

  it('should test whether a number containing 900 and 4 will output CMIV', function(){
    var answer = returnNumeral(904);
    expect(answer).toEqual("CMIV");
  });

  it('should test whether a negative number returns\'please enter another number\'', function(){
    var answer = returnNumeral(-43);
    expect(answer).toEqual("Please enter another number");
  });

  it('should test whether a number over 3999 returns \'Roman Numerals do not go higher than 3,999\'', function() {
    var answer = returnNumeral(4021);
    expect(answer).toEqual("Roman Numerals do not go higher than 3,999");
  });

  it('should test whether non-numerical inputs returns \'Please enter a number\'', function() {
    var answer = returnNumeral("hello");
    expect(answer).toEqual("Please enter a number");
  })
});
