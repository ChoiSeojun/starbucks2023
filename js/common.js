// submenu 검색 부분

const searchEl = document.querySelector(".search");
// console.log(searchEl);
const searchInputEl = searchEl.querySelector("input");

searchEl.addEventListener("click", function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener("focus", function () {
  searchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "통합검색");
});

searchInputEl.addEventListener("blur", function () {
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
});

// 230129 FOOTER 올해가 몇년도 인지 자동으로 계산
const thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear(); // 2023