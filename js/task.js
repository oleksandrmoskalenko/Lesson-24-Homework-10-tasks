"use strict"

let $btn1 = document.createElement('button'),
    $btn2 = document.createElement('button'),
    $btn3 = document.createElement('button'),
    $btn4 = document.createElement('button'),
    $btn5 = document.createElement('button'),
    $btn6 = document.createElement('button'),
    $btn7 = document.createElement('button'),
    $btn8 = document.createElement('button'),
    $btn9 = document.createElement('button'),
    $btn10 = document.createElement('button')
$btn1.innerText = 'Task 1', $btn2.innerText = 'Task 2', $btn3.innerText = 'Task 3', $btn4.innerText = 'Task 4', $btn5.innerText = 'Task 5', $btn6.innerText = 'Task 6', $btn7.innerText = 'Task 7', $btn8.innerText = 'Task 8', $btn9.innerText = 'Task 9', $btn10.innerText = 'Task 10'
$btn1.style = "width: 120px; height: 40px; font-size: 16px; text-transform: uppercase; margin: 15px;"
$btn2.style = "width: 120px; height: 40px; font-size: 16px; text-transform: uppercase; margin: 15px;"
$btn3.style = "width: 120px; height: 40px; font-size: 16px; text-transform: uppercase; margin: 15px;"
$btn4.style = "width: 120px; height: 40px; font-size: 16px; text-transform: uppercase; margin: 15px;"
$btn5.style = "width: 120px; height: 40px; font-size: 16px; text-transform: uppercase; margin: 15px;"
$btn6.style = "width: 120px; height: 40px; font-size: 16px; text-transform: uppercase; margin: 15px;"
$btn7.style = "width: 120px; height: 40px; font-size: 16px; text-transform: uppercase; margin: 15px;"
$btn8.style = "width: 120px; height: 40px; font-size: 16px; text-transform: uppercase; margin: 15px;"
$btn9.style = "width: 120px; height: 40px; font-size: 16px; text-transform: uppercase; margin: 15px;"
$btn10.style = "width: 120px; height: 40px; font-size: 16px; text-transform: uppercase; margin: 15px;"
document.body.append($btn1, $btn2, $btn3, $btn4, $btn5, $btn6, $btn7, $btn8, $btn9, $btn10)

//Task 1
$btn1.addEventListener('click', () => {
    let numFrom = Number(prompt("Set the beginning of the range"))
    let numTo = Number(prompt("Set the end of the range"))
    let sumRange = 0
    for (numFrom; numFrom <= numTo; numFrom++) sumRange += numFrom
    alert(`The sum is ${sumRange}`)
})

//Task 2
$btn2.addEventListener('click', () => {
    let num1 = prompt("Write the 1st number")
    let num2 = prompt("Write the 2nd number")
    alert(`The Greatest Common Divisor is ${gcd(num1, num2)}`)
})

//Task 3
$btn3.addEventListener('click', () => {
    let num = prompt("Write the number")
    let divisors = 'The divisors are '
    for (let i = 1; i <= Math.round(num / 2); i++)
        if (!(num % i)) divisors += i + ', '
    alert(divisors + num)
})

//Task 4
$btn4.addEventListener('click', () => {
    let num = prompt("Write the number")
    alert(`The amount of digits is ${num.length}`)
})

//Task 5
$btn5.addEventListener('click', () => { })

//Task 6
$btn6.addEventListener('click', () => { })

//Task 7
$btn7.addEventListener('click', () => { })

//Task 8
$btn8.addEventListener('click', () => { })

//Task 9
$btn9.addEventListener('click', () => { })

//Task 10
$btn10.addEventListener('click', () => { })


function gcd(m, n) {
    while (n !== 0) n = m % (m = n);
    return m;
}