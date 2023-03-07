function maxSum(arr){
    let a1 = 0
    let a2 = arr[0]
    arr.forEach((i) => {
      a1 = Math.max(i, a1 + i)
      a2 = Math.max(a2, a1)
    })
    return a2
  }