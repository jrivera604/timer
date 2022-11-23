
const input = process.argv.slice(2);

const timer = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr.length !== 0 && arr[i] >= 0) {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, arr[i] * 1000);

    }

  }
};

timer(input);