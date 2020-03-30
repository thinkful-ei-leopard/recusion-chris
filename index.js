const countingSheep = function(input) {
  if (input === 0) {
    return console.log('All sheep jumped over the fence');
  }

  console.log(`${input}: Another sheep jumps over the fence`);
  countingSheep(input - 1);
};

countingSheep(3);