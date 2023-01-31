const p1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(1);
  }, 5000);
});

const p2 = Promise.resolve(2);

const p3 = new Promise((resolve, reject) => {
  resolve(3);
});

Promise.all([p1, p2, p3]).then((values) => console.log(values));

// [1, 2, 3] -> depois de 5 segundos
