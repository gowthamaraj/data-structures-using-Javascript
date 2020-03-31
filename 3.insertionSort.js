let {performance} = require('perf_hooks')
const insertionSort = (list)=>{
    for(let i=1;i<list.length;i++){
        let j=i
        let current = list[i]
       while((j>=1)&&(list[j-1]>current)){
            list[j]=list[j-1]
            j = j-1
           }
           list[j] = current
       }
    return list
}
let t0 = performance.now()
sort = insertionSort([5,6,8,4,1,2,9])
let t1 = performance.now()
console.log(sort,"time :", t1-t0)
// [
//     1, 2, 4, 5,
//     6, 8, 9
//   ] time : 0.18059873580932617