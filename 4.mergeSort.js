let {performance} = require('perf_hooks')
const mergeSort = (list)=>{
    let len = list.length
    if(len<2){
        return list
    }
    let left = parseInt(len/2)
    let leftArray = list.slice(0,left)
    let rightArray = list.slice(left,len)
    mergeSort(leftArray)
    mergeSort(rightArray)
    merge(list,leftArray,rightArray)
    return list
}
function merge(result,left,right){
    let i_left=j_right=k_result = 0
    while((i_left<left.length)&&(j_right<right.length)){
        if (left[i_left]<right[j_right]) {
            result[k_result]=left[i_left]
            k_result = k_result+1
            i_left = i_left+1
        } else {
            result[k_result]=right[j_right]
            k_result = k_result+1
            j_right = j_right+1
        }
    }
    while(i_left<left.length){
        result[k_result]=left[i_left]
        k_result = k_result+1
        i_left = i_left+1
    }
    while(j_right<right.length){
        result[k_result]=right[j_right]
            k_result = k_result+1
            j_right = j_right+1
    }
    return result
}
let t0 = performance.now()
sort = mergeSort([5,6,8,4,1,2,9])
let t1 = performance.now()
console.log(sort,"time :", t1-t0)
// [
//     1, 2, 4, 5,
//     6, 8, 9
//   ] time : 0.4731001853942871