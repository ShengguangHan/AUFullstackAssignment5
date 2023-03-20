const list = [374, [435, ['a', 343, 23,], "Raymond"],7854, 98, 98, 98]
console.log(list);

// 扁平化数组
const flattened = list.flat(Infinity);

// 过滤其中的字符串元素 使用typeof方法来判断类型
const filtered = flattened.filter(element => typeof element !== 'string');

// 删除重复的元素
const unique = [...new Set(filtered)];

// 从小到大排序
const sorted = unique.sort((a, b) => a - b);

console.log(sorted); 

// console.log("===============");
// const uniqueArray = [];  
// list.forEach(function(element) {  
//      if(uniqueArray.indexOf(element) < 0) {  
//          uniqueArray.push(element);  
//      }  
// });  
// console.log(uniqueArray);//删除重复元素



// console.log('======================');
// const arrayA = [435, ['a', 343, 23,], "Raymond"]
// const filteredA = arrayA.filter(function(x){
//   return x !== "Raymond"
// })
// console.log(filteredA);//删除Raymond

// console.log('=================');
// const arrayB = ['a', 343, 23,]
// const filteredB = arrayB.filter(function(x){
//   return x !== "a"
// })
// console.log(filteredB);//删除A

// console.log('===============');
// const finalArray = []
// finalArray.splice(uniqueArray,filteredA,filteredB)
// console.log(finalArray);


