function fizzString(str) {
  if (str[0] == "f" && str[str.length - 1] == "b") {
    return "FizzBuzz";
  } else if (str[0] == "f") {
    return "Fizz";
  } else if (str[str.length - 1] == "b") {
    return "Buzz";
  } else {
    return str;
  }
}
