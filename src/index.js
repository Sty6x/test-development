import './style.css'

function sumOf(n){
  if(n == 1){
    return 1
  } else{
    return n + sumOf(n-1)
  }
}

function pow(e,n){
  if(n == 1){
    return e 
  } else{
    return e * pow(e,n-1)
  }
}


function fact(n){
  if(n == 1){
    return n 
  } else{
    return n * fact(n-1)
  }

}
// console.log(fact(5))

function all(ar,cb){
  let num = 0;
  for(let i = 0; i < ar.length;i++){
    num = ar[i];
    cb(num)
  }
}
let a = all([4,3,2], (num)=>{
  return num < 6 
})
// wrong


var nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: 'foo2'
                    }
                }
            }
        }
    }
}
function contains(obj,val){
  if (Object.values(obj) == val){
    return true
  }else{
    for(let v of Object.values(obj)){
contains(Object.values(v),val)
    }
  }
}

// [[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]

function totalInt(m){
  for(let arr of m){
    if(Array.isArray(arr)){
      totalInt(arr)
    }else {
      // newArr.push(arr)
      // console.log(newArr)
      console.log(arr.length)
      return arr.length
    }
  }
}
  totalInt([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]])
