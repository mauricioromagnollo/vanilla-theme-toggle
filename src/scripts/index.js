// button-theme-toggle.js
const DARK_THEME_CLASS_NAME = 'dark-theme';

const ButtonThemeToggle = {
  changeTheme() {
    const $bodyElement = document.body;
    const $allBodyElements = Array.from(document.querySelectorAll('body  *'));

    $allBodyElements.push($bodyElement);

    $allBodyElements.forEach(element => {
      element.classList.toggle(DARK_THEME_CLASS_NAME);
    });
  }
}