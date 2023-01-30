const imprimirNumeros = (...nums) => {
  for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
  }
};

imprimirNumeros(1); // 1
imprimirNumeros(1, 2, 3, 4, 5);
/*
1
2
3
4
5
*/
