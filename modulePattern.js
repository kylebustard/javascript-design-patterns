const myMod = () => {
  let greet = 'hello world';

  const privateGreeter = () => {
    console.log(greet);
  }

  return {
    publicGreeter: () => {
      privateGreeter();
    }
  }
};

console.log(myMod());