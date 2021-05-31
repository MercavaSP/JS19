{
//     let num = 266219;
   
    

    
    console.log(num);
    console.log(num**3);
    console.log((num**3).toString().substring(0, 2));

// Вторая задание - решение 1 (подсмотрено и не совсем понятно как работает. )
//     let result = 1;
//     while(num) {
//         result *= (num % 10);
//         num = Math.floor(num/10);
//     }
//     console.log(result);
      
}

 const num = 266219;


 // Вторая задача N2 - решение 2 (идея пришла во время работы. не мог выложить до трансляции...)

    let arr = num.toString().split('');

    let ans = 1;

    for (let i=0; i<arr.length; i++){
        ans *= arr[i];
    }

    console.log(ans);
    console.log(ans**3);
    console.log((ans**3).toString().substring(0, 2));
