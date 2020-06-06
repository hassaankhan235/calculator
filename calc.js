var screen = document.querySelector(".txt")
var number = document.querySelector('.numbers')
var operator = document.querySelector('.operators',ops)
var equal = document.querySelector('.equal')
var controls = document.querySelector('.controls')
screen.value = " "
screen.disabled= true
var ON = false

usrInp = {
    num1 : undefined,
    op   : undefined
}

function OnOff(e) {
    if(e.target.value == 'ON') {
    console.log("ON")
    screen.value = '0'
    usrInp.op = undefined
    usrInp.num1 = undefined
    screen.disabled = false
    ON = true
    }
    else if(e.target.value == "OFF") {
        screen.disabled = true
        screen.value = ''
        ON = false
    }
}

function Num(e) {
    if (ON == true)
    {
    if(screen.value == 0 || op_flag == true){
        op_flag = false
        screen.value = e.target.value
    }    
    else {
        screen.value += e.target.value
    }
}
}

function ops(e) {
    if (ON == true)
    {
    if(usrInp.num1 == undefined || usrInp.op == '=') {
        usrInp.num1 = screen.value
        usrInp.op = e.target.value
        console.log("Op is undefined now")
    }
else {
    switch(usrInp.op) {
        case '+':
            screen.value = Number(screen.value) + Number(usrInp.num1)
            usrInp.num1 = screen.value
            usrInp.op = e.target.value
            break;
        case '-':
            screen.value = Number(usrInp.num1) - Number(screen.value)
            usrInp.num1 = screen.value
            usrInp.op = e.target.value 
            break;
        case '/':
            screen.value = Number(usrInp.num1) / Number(screen.value)
            usrInp.num1 = screen.value
            usrInp.op = e.target.value 
            break;
        case '*':
            screen.value = Number(screen.value) * Number(usrInp.num1)
            usrInp.num1 = screen.value
            usrInp.op = e.target.value 
            break;

    } 
}
    op_flag = true
    console.log("operator pressed")
}
}


equal.addEventListener('click',ops)
number.addEventListener('click',Num)
operator.addEventListener('click',ops)
controls.addEventListener('click',OnOff)