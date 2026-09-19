let generator = document.querySelector(".generator");
generator.addEventListener("click",() => {
    let quote = "";
    let url = 'https://dummyjson.com/quotes/random';
    fetch(url)
    .then(response => response.json())
    .then((data) => {
      console.log(`${data.quote} — ${data.author}`);
    });

})