function getMinMax(str) {
  const arr = str
    .split(" ")
    .map((str) => parseFloat(str))
    .filter((num) => !isNaN(num));

  return {
    max: Math.max(...arr),
    min: Math.min(...arr),
  };
}
