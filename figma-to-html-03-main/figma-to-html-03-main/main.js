// let elm = document.querySelector(".hero__content");
// console.log(elm.parentElement);
// elm.parentElement.style.backgroundColor = "red";
// // Con
// console.log(elm.children);
// console.log(elm.children[0]);
// console.log(elm.children[0].nextElementSibling);
// console.log(elm.children[1].previousElementSibling);

const newImg = document.createElement("img");
newImg.setAttribute("src", "./assets/img/doc1.png");
newImg.style.width = "100vw";
console.log(newImg);
document.body.append(newImg);
