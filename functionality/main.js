"use strict";

const d = document;
const $btn_box = d.querySelector(".mode-box .btn-box");
const $mode_btn = d.querySelector(".mode-btn");
const $container = d.querySelector(".container");
const $title = d.querySelector("header .title");
const $stats_cards = d.querySelectorAll(".container .stats-card");
const $style2_text = d.querySelectorAll(".container .style2-text");

$btn_box.addEventListener("click", () => {
  $mode_btn.classList.toggle("dark");
  $btn_box.classList.toggle("dark");

  $container.classList.toggle("dark");

  $stats_cards.forEach((card) => {
    card.classList.toggle("dark");
  });

  $style2_text.forEach((text) => {
    text.classList.toggle("dark");
  });
});
