// /* Finding minimal between two numbers */
// let x, y, z, min;
// x = parseInt(prompt("Введите первое число"));
// y = parseInt(prompt("Введите второе число"));
// z = parseInt(prompt("Введите третее число"));
// min = x;
// if(y<=min){
//     min = y
// }
// if(z<=min){
//         min = z
// }
// alert("minimal is " + min)


//вывести не чет числа от 0 до 10 

    // for (let i = 1; i <= 10; i = i+2)
    // {
    //     console.loge(i);
    // }
    // {
    //     /*найти колличество не чет чисел в последовательности 
    //     последовательности на улавиатуре и заканчивается с вводом 0*/
    //     let count = 0, x;
    //     x = parseInt(prompt("введите число"))
    //     while(x != 0){
    //         if(x % 2 !=0)
    //         {
    //             count++;
    //         }
    //         x =parseInt(prompt("Введите число"))
    //     }
    //     alert('колличество нечет чисел' + count)
    // }

    {
        //найти кол нечет цифр в натуральном числе
        let count = 0, d, x;
        x = parseInt(prompt("Введите натуральное число"))
        while(x != 0){
            d = x % 10;
            if(d % 2 != 0)
            {
                count++;
            }
            x = Math.floor(x / 10);
        }
        alert ("колличество нечет цифр" + count);
    }

