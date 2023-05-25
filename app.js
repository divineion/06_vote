fetch("data.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    for (const i in data) {
      const results = document.createElement("div");
      const detailReport = document.querySelector("#detailReport");
      const icon = document.createElement("img");
      const textContainer = document.createElement("div");
      const p1 = document.createElement("p");
      var p2 = document.createElement("p");
      const span = document.createElement("span");
      var scores =
        data[1].score + data[2].score + data[0].score + data[3].score;

      console.log(results);
      results.classList.add(data[i].category);
      icon.src = data[i].icon;
      results.appendChild(icon);
      results.appendChild(textContainer);
      textContainer.appendChild(p1);
      p1.textContent = data[i].category;
      detailReport.appendChild(results);
      p2.textContent = " /100";
      p2.classList.add("greyparagraph");
      textContainer.appendChild(p2);
      p2.insertAdjacentElement("afterbegin", span);
      span.textContent = data[i].score;
    }
    const pastille = document.querySelector("#pastille");
    const p3 = document.createElement("p");
    pastille.appendChild(p3);
    p3.textContent = parseInt(scores / 4);
    const p4 = document.createElement("p");
    pastille.appendChild(p4);
    p4.textContent = "of 100";
  });
