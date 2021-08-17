function check(e) {
  e.preventDefault();

  // converting given value to array
  const S = form.elements["array"].value
    .split("")
    .filter((item, index, self) => index === self.findIndex((t) => t === item));
  let modified = [...S];

  // finding letters that occur in both lowercase and uppercase in S
  S.forEach((char) => {
    if (
      S.indexOf(char.toUpperCase()) < 0 ||
      S.indexOf(char.toLowerCase()) < 0
    ) {
      modified.splice(modified.indexOf(char), 1);
    }
  });

  // showing largest letter
  document.getElementById("message").innerHTML =
    modified.length > 0 ? modified.sort().reverse()[0].toUpperCase() : "NO";
}

const form = document.getElementById("form");
form.addEventListener("submit", check);
