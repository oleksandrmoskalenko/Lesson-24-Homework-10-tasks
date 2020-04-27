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
    let numFrom = Number(prompt("Set the beginning of the range", ''))
    let numTo = Number(prompt("Set the end of the range", ''))
    let sumRange = 0
    for (numFrom; numFrom <= numTo; numFrom++) sumRange += numFrom
    alert(`The sum is ${sumRange}`)
})

//Task 2
$btn2.addEventListener('click', () => {
    let num1 = prompt("Write the 1st number", '')
    let num2 = prompt("Write the 2nd number", '')
    alert(`The Greatest Common Divisor is ${gcd(num1, num2)}`)
})

//Task 3
$btn3.addEventListener('click', () => {
    let num = prompt("Write the number", '')
    let divisors = 'The divisors are '
    for (let i = 1; i <= Math.round(num / 2); i++)
        if (!(num % i)) divisors += i + ', '
    alert(divisors + num)
})

//Task 4
$btn4.addEventListener('click', () => {
    let num = prompt("Write the number", '')
    alert(`The amount of digits is ${num.length}`)
})

//Task 5
$btn5.addEventListener('click', () => {
    let numNull = 0, numNeg = 0, numPos = 0, numEven = 0, numOdd = 0
    for (let i = 0; i < 10; i++) {
        let num = prompt("Write the number", '')
        if (num > 0) numPos++
        else if (num == 0 || num == null) numNull++
        else numNeg++
        if (num % 2) numOdd++
        else numEven++
    }
    alert(`The amount of Positive numbers is ${numPos}. \nThe amount of Zeros is ${numNull}. \nThe amount of Negative numbers is ${numNeg} \n\nThe amount of Even numbers is ${numEven}. \nThe amount of Odd numbers is ${numOdd}.`)
})

//Task 6
$btn6.addEventListener('click', () => {
    let resNum = 0, confNum
    do {
        let num1 = Number(prompt('Write the 1st number', ''))
        let num2 = Number(prompt('Write the 2nd number', ''))
        let symb = prompt('Write the symbol of math operation: + or -, or *, or /', '')
        if (symb === '+') resNum = num1 + num2
        else if (symb === '-') resNum = num1 - num2
        else if (symb === '*') resNum = num1 * num2
        else if (symb === '/') resNum = (num1 / num2).toFixed(2)
        alert(`The result is ${resNum}`)
        confNum = confirm('One more time?')
    } while (confNum)
})

//Task 7
$btn7.addEventListener('click', () => {
    let number = prompt('Write the number', '')
    let offset = prompt('Write the offset', '')
    alert(`The result is ${offsetNum(number, offset)}`)
})

//Task 8
$btn8.addEventListener('click', () => {
    let conf = 0, i = 1
    do {
        let day
        day = alert(`The day of the week is ${weekDay(i)}`)
        i++
        i = i % 7
        conf = confirm('Wanna see the next day?')
    } while (conf)
})

//Task 9
$btn9.addEventListener('click', () => {
    let $div = document.createElement('div')
    $div.style = "height: 80vh; display: flex"
    for (let i = 2; i < 10; i++) {
        let $h2 = document.createElement('h2')
        $h2.style = "font-size: 24px; margin: 20px"
        for (let j = 1; j < 10; j++)
            $h2.innerHTML += `${i} * ${j} = ${i * j}` + '<br />'
        $div.append($h2)
    }
    document.body.append($div)
})

//Task 10
$btn10.addEventListener('click', () => { })


function gcd(m, n) {
    while (n !== 0) n = m % (m = n);
    return m;
}

function offsetNum(num, k) {
    let arr = [],
        tmp = 0,
        length = num.length,
        i = length - 1
    do {
        arr[i] = (num - num % (10 ** i)) / (10 ** i)
        if (i >= k)
            tmp += arr[i] * (10 ** (i - k))
        else if (i < k)
            tmp += arr[i] * (10 ** (length - k + i))
        num = num % (10 ** i)
        i--
    } while (i >= 0)
    return tmp
}

function weekDay(day) {
    let str
    if (day == 1) str = "Monday"
    else if (day == 2) str = "Tuesday"
    else if (day == 3) str = "Wednesday"
    else if (day == 4) str = "Thursday"
    else if (day == 5) str = "Friday"
    else if (day == 6) str = "Saturday"
    else if (day == 0) str = "Sunday"
    return str
}