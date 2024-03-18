// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";


// Получите высоту первой секции
const section1 = document.querySelector('.hero');
const heightSection1 = section1.offsetHeight;

// Создайте переменные для каждой секции
document.body.style.cssText = `--scrollTopSection1: 0; --scrollTopSection2: 0;`;

window.addEventListener('scroll', function() {
    // Устанавливайте значения переменных в зависимости от прокрутки для каждой секции
    document.body.style.cssText = `--scrollTopSection1: ${Math.max(0, window.scrollY)}px; 
	 --scrollTopSection2: ${Math.max(0, window.scrollY - heightSection1)}px;`;
});

// Ленис: Smooth scroll============================================
import Lenis from '@studio-freight/lenis'

const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)