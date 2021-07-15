// console.log(exponentiation("3", "10000"))
// console.log(subtraction("12313131233543878998463413500001", "12313131233543878998463413500000"))

for(let i=2;i<=1000;i++){
    console.log(`2^${i}=${exponentiation("2",new String(i))}\r\n`)
}

function exponentiation(num, power) {
    let all = num;
    for (i = 0; i < power - 1; i++) {
        all = multiplication(all, num)
    }
    return all
}

function multiplication(num, count) {
    let now = "1"
    let temp = num
    while (now !== count) {
        temp = add(temp, num)
        now = add(now, "1")
    }
    return temp
}

function add(a, b) {
    let length = a.length >= b.length ? a.length : b.length
    let maxLength = length - 1

    if (a.length != length) {
        let difference = length - a.length;
        let arr = new Array(difference).fill("0").join('');
        a = arr + a;
    }

    if (b.length != length) {
        let difference = length - b.length;
        let arr = new Array(difference).fill("0").join('');
        b = arr + b;
    }

    let all = []
    let flag = 0;

    for (let i = maxLength; i >= 0; i--) {
        let num1 = a[i] ? parseInt(a[i]) : 0
        let num2 = b[i] ? parseInt(b[i]) : 0
        let temp = num1 + num2

        if (flag > 0) {
            temp += flag
        }

        if (temp >= 10) {
            flag = parseInt(temp / 10);
            temp -= flag * 10
        } else {
            flag = 0
        }
        all.unshift(new String(temp))
    }

    if (flag > 0) {
        all.unshift(new String(flag))
    }
    // console.log(all.join(''))
    return (all.join(''))
}

function subtraction(a, b) {
    let length = a.length >= b.length ? a.length : b.length
    let maxLength = length - 1

    if (a.length != length) {
        let difference = length - a.length;
        let arr = new Array(difference).fill("0").join('');
        a = arr + a;
    }

    if (b.length != length) {
        let difference = length - b.length;
        let arr = new Array(difference).fill("0").join('');
        b = arr + b;
    }

    let all = []
    let flag = 0;

    for (let i = maxLength; i >= 0; i--) {
        let num1 = a[i] ? parseInt(a[i]) : 0
        let num2 = b[i] ? parseInt(b[i]) : 0
        let temp = num1 - num2

        if (flag < 0) {
            temp += flag
        }

        if (temp < 0) {
            temp = 10 - num2 + num1 + flag
            flag = -1;
        } else {
            flag = 0
        }
        all.unshift(new String(temp))
    }
    return (all.join(''))
}

