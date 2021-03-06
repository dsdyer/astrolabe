// Probably no spoilers for: http://www.codewars.com/kata/51b66044bce5799a7f000003


Test.describe('Roman Numeral Helper', function() {

  it('Should take a number and return the Roman Numeral', function() {
    let input = 4;
    let my_numeral = RomanNumerals.toRoman(input);
    let correct = 'IV';

    Test.assertEquals(my_numeral, correct, 'Failed on ' + input + '. Should have been ' + correct + '.');

    input = 900;
    my_numeral = RomanNumerals.toRoman(input);
    correct = 'CM';

    Test.assertEquals(my_numeral, correct, 'Failed on ' + input + '. Should have been ' + correct + '.');

    input = 999;
    my_numeral = RomanNumerals.toRoman(input);
    correct = 'CMXCIX';

    Test.assertEquals(my_numeral, correct, 'Failed on ' + input + '. Should have been ' + correct + '.');


  });

  it('Should take a Roman Numeral and return the number', function() {
    let input = 'IV';
    let my_number = RomanNumerals.fromRoman(input);
    let correct = 4;

    Test.assertEquals(my_number, correct, 'Failed on ' + input + '. Should have been ' + correct + '.');

    input = 'C';
    my_number = RomanNumerals.fromRoman(input);
    correct = 100;

    Test.assertEquals(my_number, correct, 'Failed on ' + input + '. Should have been ' + correct + '.');

    input = 'MDCLXVI';
    my_number = RomanNumerals.fromRoman(input);
    correct = 1666;

    Test.assertEquals(my_number, correct, 'Failed on ' + input + '. Should have been ' + correct + '.');
  });
});