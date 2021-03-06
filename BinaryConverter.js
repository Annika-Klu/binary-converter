let num = 39
let d = parseInt(Math.log(num + 1)/Math.log(2))
let binaryRes = ''
let remainder = num

var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~ßabcdeêfghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ]/;

if (format.test(num)) {
  console.log('please specify a number using only digits from 0 to 9!')
} else {

  console.log('your number: ' + num)

  for (let i = d; i >= 0; i--) {
    if (remainder/(2**i) >= 1) {
      binaryRes += '1'
      remainder = remainder%(2**i)
    } else {
      binaryRes += '0'
    }
  }
  
  console.log('your number in binary: ' + binaryRes)

}

let binary = '10110101'
let decimalRes = 0

// look up: how to concat regex
var format2 = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~ß23456789abcdeêfghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ]/;

if (format2.test(binary)) {
  
   console.log('please choose a number containing only 0 and/or 1!')
  
} else {

  console.log('your binary number: ' + binary)

  for (let i = binary.length - 1; i >= 0; i--) {
    let int = parseInt(binary[(binary.length - 1 - i)])
    let result = 2**i * int
    if (result === 0) {
      continue
      } else {
          decimalRes += result
      }
   }
  
  console.log("your binary number in decimal: " + decimalRes)
  
}
