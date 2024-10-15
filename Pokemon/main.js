//https://raw.githubusercontent.com/GaLaiLapTrinh/pokemon/main/img/1.png
const container = document.querySelector("#container");

let baseUrl =
  "https://raw.githubusercontent.com/GaLaiLapTrinh/pokemon/main/img/";

for (let i = 1; i <= 151; i++) {
  const img = document.createElement("img");
  img.src = `${baseUrl}${i}.png`;
  img.style.objectFit = "contain";
  const spanName = document.createElement("span");
  spanName.innerText = `#${i}`;
  const divName = document.createElement("div");
  divName.append(img);
  divName.style.display = "flex";
  divName.style.flexDirection = "column-reverse";
  divName.style.justifyContent = "center";
  divName.style.alignItems = "center";
  divName.style.width = "100px";
  divName.style.width = "100px";
  divName.style.margin = "2px";
  divName.style.borderRadius = "10px";
  divName.style.backgroundColor = "#53b7b7";
  divName.prepend(spanName);
  container.append(divName);
}
