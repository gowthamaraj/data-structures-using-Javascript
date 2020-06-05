function fibonacci(n){
    if(n<=2){
        return 1
    }
    //base case
    return fibonacci(n-2) + fibonacci(n-1)
}

for(let i=1;i<20;i++){
    console.log(fibonacci(i))
}