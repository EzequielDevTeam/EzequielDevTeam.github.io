(function () {
  var btnPt = document.getElementById("btn-pt");
  var btnEn = document.getElementById("btn-en");
  var langPt = document.getElementById("lang-pt");
  var langEn = document.getElementById("lang-en");

  function setLang(lang) {
    var isEn = lang === "en";
    langPt.classList.toggle("hidden", isEn);
    langEn.classList.toggle("hidden", !isEn);
    btnPt.classList.toggle("on", !isEn);
    btnEn.classList.toggle("on", isEn);
    document.documentElement.lang = isEn ? "en" : "pt-BR";
    try { localStorage.setItem("edt-lang", lang); } catch (e) {}
    window.scrollTo(0, 0);
  }

  btnPt.addEventListener("click", function () { setLang("pt"); });
  btnEn.addEventListener("click", function () { setLang("en"); });

  var saved = null;
  try { saved = localStorage.getItem("edt-lang"); } catch (e) {}
  if (!saved && navigator.language && navigator.language.toLowerCase().indexOf("pt") !== 0) {
    saved = "en";
  }
  if (saved === "en") setLang("en");

  var year = new Date().getFullYear();
  var els = document.querySelectorAll(".year");
  for (var i = 0; i < els.length; i++) els[i].textContent = year;
})();
