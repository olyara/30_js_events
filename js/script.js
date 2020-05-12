// 1. Создать HTML-страницу для отображения/редактирования текста.
// При открытии страницы текст отображается с помощью тега div. При нажатии Ctrl + E, вместо div появляется textarea с тем же текстом,
//  который теперь можно редактировать. При нажатии Ctrl + , вместо textarea появляется div с уже измененным текстом.
//  Не забудьте выключить поведение по умолчанию для этих сочетаний клавиш.
document.addEventListener("keydown", function (event) {
  if (event.ctrlKey && event.code == "KeyE") {
    event.preventDefault();
    document.getElementById("div1").style.display = "none";
    document.getElementById("area1").style.display = "block";
    document.getElementById("area1").innerText = document.getElementById("div1").innerText;
  }

  if (event.ctrlKey && event.code == "Comma") {
    event.preventDefault();
    document.getElementById("area1").style.display = "none";
    document.getElementById("div1").style.display = "block";
  }
});

document.getElementById("area1").addEventListener("change", function (event) {
  document.getElementById("div1").innerText = document.getElementById("area1").value;
})

