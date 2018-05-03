function parity(number) {
  return isEven(number) ? 'even' : 'odd';
}
function prime(number) {
  // We know how to test a number for primitude
  return isPrime(number) ? 'prime' : 'divisible';
}



//SELECT * FROM numbers GROUP BY parity
query().select().from(numbers).groupBy(parity).execute();

//SELECT * FROM numbers GROUP BY parity, isPrime

query().select().from(numbers).groupBy(parity, prime).execute(); 

// input
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]; 

  // output of stuff.from(numbers).groupBy(parity)
  [ 
    [
      "odd", [1,3,5,7,9]
    ],

    [
      "even", [2,4,6,8] 
    ]
  ]
  // Definitely the output of stuff.from(numbers).groupBy(parity, prime)

  // stuff.from(numbers).groupBy(parity).groupBy(prime)
  [
      // Group 1
      [ "odd", [
                 // Group 1[0]
                 [
                   "divisible", [1,9]
                 ],

                 // Group 1[1]
                 [
                   "prime", [3,5,7]
                 ]
               ]
      ],
      // ///

      // Group 2
      [ "even", [
                  // Group 2[0]
                  [
                    "prime", [2]
                  ],

                  // Group 2[1]
                  [
                    "divisible", [4,6,8]
                  ]
                ]
      ]
      // ///
  ]



// //SELECT profession FROM persons GROUP BY profession
// query().select(professionGroup).from(persons).groupBy(profession).execute(); 

// //["teacher","scientific","politician"]
