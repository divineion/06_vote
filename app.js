fetch("data.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    for (const i in data) {
      const results = document.createElement("div");
      console.log(results);
      results.classList.add(data[i].category);
      const icon = document.createElement("img");
      icon.src = data[i].icon;
      results.appendChild(icon);
      const textContainer = document.createElement("div");
      results.appendChild(textContainer);
      const p1 = document.createElement("p");
      textContainer.appendChild(p1);
      p1.textContent = data[i].category;
      const detailReport = document.querySelector("#detailReport");
      detailReport.appendChild(results);
      const p2 = document.createElement("p");
      p2.textContent = " /100";
      textContainer.appendChild(p2);
      const span = document.createElement("span");
      p2.insertAdjacentElement("afterbegin", span);
      span.textContent = data[i].score;
      let scores = new Array();
    }

  });
