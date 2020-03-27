let {performance} = require('perf_hooks')
const bubbleSort = (list)=>{
    for(let i=1;i<list.length;i++){
        for(let j=0;j<list.length-i;j++){
            if(list[j]>list[j+1]){
                // [list[j-1], list[j]] = [list[j], list[j-1]] this swapping effects the perfomance by 0.1ms
                let temp = list[j]
                list[j]=list[j+1]
                list[j+1]=temp
                //swap
            }
        }
    }
    return list
}
let t0 = performance.now()
sort = bubbleSort([5,6,8,4,1,2,9])
let t1 = performance.now()
console.log(sort,"time :", t1-t0)