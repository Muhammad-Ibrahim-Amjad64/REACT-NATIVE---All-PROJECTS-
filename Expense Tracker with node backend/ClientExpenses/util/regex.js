// Implementation for float input validations

const regfloat = /^[-+]?[0-9]*\.[0-9]$/g
let INPUT1 = `112.0`
console.log(regfloat.test(INPUT1))
INPUT1 = INPUT1.replace(regfloat, "matched")
console.log(INPUT1)

// Implementation for Integer input validation

// const regInt  = /[-+]?[0-9]+/g
const regInt  = /^[-+]?\d*$/g
let INPUT2 = "1"
console.log(regInt.test(INPUT2))
INPUT2 = INPUT2.replace(regInt,"matched")
console.log(INPUT2)


// for Variable (string) string input validation

const regString  = /^[A-Z][a-z]*$/gi
let INPUT3 = "Ibrahim"
console.log(regString.test(INPUT3))
INPUT3 = INPUT3.replace(regString,"matched")
console.log(INPUT3)


