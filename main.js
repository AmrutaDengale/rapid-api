function searchBooks() {
  let month = document.getElementById("month").value;
  let year = document.getElementById("year").value;

  if (month < 0 || month > 12) {
    alert("Invalid Month");
    return false;
  }

  if (year.length != 4) {
    alert("Invalid year");
    return false;
  }

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "56a5de2929msh4e7cd49c0b3cba0p1976ccjsn8289e7379164",
      "X-RapidAPI-Host": "hapi-books.p.rapidapi.com",
    },
  };

  fetch(`https://hapi-books.p.rapidapi.com/month/${year}/${month}`, options)
    .then((response) => response.json())
    .then((response) => {
      let htmlString = ``;
      response.forEach(book => {
        htmlString += `
                <div class="col-4 mb-3 mt-5">
                <div class="card shadow  w-100 h-100">
                <img src="${book.cover} " class="img-fluid" alt="">
                <div class="card-body">
                <p class="display-6 fw-bold">${book.name}</p>
                <button class="btn btn-warning"><span><i class="fa-solid fa-star"></i></span>${book.rating}</button>
                <a href="${book.url}"><button class="btn btn-secondary m-3" >More</button></a>
              </div>
            </div>
            </div>
                `
      });

      document.getElementById("books").innerHTML = htmlString;
    })
    .catch((err) => console.error(err));
}
