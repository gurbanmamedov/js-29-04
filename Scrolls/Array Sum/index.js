function sumOnScroll(num) {
  const scrollHandler = _.throttle(() => {
    const sum = _.sum(numbers) + 1;
    console.log(sum);
  }, 300);

  window.addEventListener("scroll", scrollHandler);
  window.addEventListener("beforeunload", () => {
    window.removeEventListener("scroll", scrollHandler);
  });
}

const numbers = [1, 2, 3, 4, 5];
sumOnScroll(numbers);
