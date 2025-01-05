// Sélection des éléments nécessaires
const toggleDarkMode = document.createElement('button');
toggleDarkMode.id = 'dark-mode-toggle';
toggleDarkMode.textContent = 'Mode sombre';
document.body.appendChild(toggleDarkMode);

// Fonction pour activer le mode sombre
function enableDarkMode() {
  document.body.classList.add('dark-mode');
  localStorage.setItem('darkMode', 'enabled');
}

// Fonction pour désactiver le mode sombre
function disableDarkMode() {
  document.body.classList.remove('dark-mode');
  localStorage.setItem('darkMode', 'disabled');
}

// Vérifier la préférence de l'utilisateur
if (localStorage.getItem('darkMode') === 'enabled') {
  enableDarkMode();
}

// Ajouter un écouteur d'événement au bouton
toggleDarkMode.addEventListener('click', () => {
  if (document.body.classList.contains('dark-mode')) {
    disableDarkMode();
  } else {
    enableDarkMode();
  }
});
