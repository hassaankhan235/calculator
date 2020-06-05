screen = document.querySelector(".txt")
screen.value = "0"
number = document.querySelector('.numbers')
operator = document.querySelector('.operators',ops)
equal = document.querySelector('.equal')
equal.addEventListener('click',ops)
number.addEventListener('click',Num)
operator.addEventListener('click',ops)
usrInp = {
    num1 : undefined,
    num2 : undefined,
    op   : undefined
}

function Num(e) {
    if(screen.value == 0 || op_flag == true){
        op_flag = false
        screen.value = e.target.value
    }    
    else {
        screen.value += e.target.value
    }
}

function ops(e) {
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