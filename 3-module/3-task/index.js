function camelize(str) {
  return str
    .split("")
    .map((n, i, arr) => (arr[i - 1] == "-" ? n.toUpperCase() : n))
    .filter((n) => n != "-")
    .join("");
}
