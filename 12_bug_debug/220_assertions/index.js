function iterarArray(arr) {
  if (arr.length === 0) {
    throw new Error('O array precisa ter elementos');
  } else {
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i]);
    }
  }
}

let array1 = [1, 2, 3];
let array2 = [];

iterarArray(array1); // 1 2 3
iterarArray(array2); // Error: O array precisa ter elementos
