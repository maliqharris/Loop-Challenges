//--------------------------1-----------------------------------------


for( var x = 0;x <21;x++){
    if(x % 2 ==0){
        console.log()
    }
    else{
        console.log(x)
    }
    }

    //--------------------2------------------------------------//


    for(var x = 100; x > 0;x--){
        if(x % 3 == 0){
            console.log(x)
        }
    }


    //------------------------3-------------------------------------


    for(var x = 4; x > -4; x = x - 1.5){
        console.log(x)
    }

    //--------------------------4----------------------------------

    sum =0
    total =0
    while (sum < 100){
        sum = sum + 1
        total = total + sum
    }
    console.log(total);

    sum = 0 
    for(var x = 0; x < 101; x ++){
        sum = sum + x
    }
    console.log(sum)

    //---------------------------5----------------------------------

    product = 1
    x = 0
    while (x < 12){
        x = x + 1
        product = product * x
    }
    console.log ( product)
