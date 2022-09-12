const DARK_THEME_CLASS_NAME = 'dark-theme';

const ButtonThemeToggle = {
  changeTheme() {
    const body = document.body;
    const elements = document.querySelectorAll('body  *');
    
    body.classList.toggle(DARK_THEME_CLASS_NAME);
    elements.forEach(element => {
      element.classList.toggle(DARK_THEME_CLASS_NAME);
    });
  }
}

module.exports = ButtonThemeToggle;