function* chunks(arr, n = 10) {
  for (let i = 0; i < arr.length; i += n) {
    yield (arr.slice(i, i + n));
  }
}

export default chunks;
