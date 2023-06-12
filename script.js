const sidebar = document.querySelector('.sidebar');
const sidebarOpenBtn = document.querySelector('#sidebar-open');
const sidebarCloseBtn = document.querySelector('#sidebar-close');
const sidebarLockBtn = document.querySelector('#lock-icon');

/*
    Si la largeur de la fenêtre est inférieure à 800px, fermez la barre latérale et supprimez la possibilité de survol et de verrouillage
*/
if (window.innerWidth < 800) {
  sidebar.classList.add('close');
  sidebar.classList.remove('locked');
  sidebar.classList.remove('hoverable');
  console.log('< 800');
}

// Fonctions permettant de basculer l'état de verrouillage de la barre latérale
const toggleLock = () => {
  sidebar.classList.toggle('locked');
  // Gestion de l'icon de verrouillage et de deveouillage de la barre lateral
  if (!sidebar.classList.contains('locked')) {
    sidebar.classList.add('hoverable');
    sidebarLockBtn.classList.replace('bx-lock-alt', 'bx-lock-open-alt');
  } else {
    sidebar.classList.remove('hoverable');
    sidebarLockBtn.classList.replace('bx-lock-open-alt', 'bx-lock-alt');
  }
};

// Fonction pour masquer la barre latérale lorsque la souris quitte
const hideSidebar = () => {
  if (sidebar.classList.contains('hoverable')) {
    sidebar.classList.add('close');
  }
};

// Fonction pour montre la barre latérale lorsque la souris entre
const showSidebar = () => {
  if (sidebar.classList.contains('hoverable')) {
    sidebar.classList.remove('close');
  }
};

// Fonction pour cacher ou montrer la sidebar
const toggleSidebar = () => {
  sidebar.classList.toggle('close');
};

/*  
    Ajout d'eventListener aux boutons et à la barre latérale des actions correspondantes
*/
sidebarLockBtn.addEventListener('click', toggleLock);
sidebar.addEventListener('mouseleave', hideSidebar);
sidebar.addEventListener('mouseenter', showSidebar);
sidebarOpenBtn.addEventListener('click', toggleSidebar);
sidebarCloseBtn.addEventListener('click', toggleSidebar);
