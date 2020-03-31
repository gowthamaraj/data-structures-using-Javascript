let {performance} = require('perf_hooks')
const quickSort = (list,start,end)=>{
    len = list.length
    if(end<start){
        return list
    }
    let pivot = partition(list,start,end)
    quickSort(list,start,pivot-1)
    quickSort(list,pivot+1,end)
    return list
}
function partition(list,start,end){
    let pivot = list[end]
    pivotIndex = end
    for(let i=start;i<end;i++){
        if(list[i]>pivot){
            let temp = list[i]
            for(let j=i+1;j<=end;j++){
                list[j-1]=list[j]
                pivotIndex--
            }
            list[end] = temp
        }
    }
    return pivotIndex
}
let t0 = performance.now()
sort = quickSort([5,6,8,4,1,2,9],0,6)
let t1 = performance.now()
console.log(sort,"time :", t1-t0)
// [
//     1, 2, 4, 5,
//     6, 8, 9
//   ] time : 0.6866006851196289