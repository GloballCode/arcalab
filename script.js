function startMission() {
  alert("🚀 Missão iniciada! Prepare seus materiais e mãos à obra!");
}

/* animação na scroll */
const cards = document.querySelectorAll('.card');

window.addEventListener('scroll', () => {
  cards.forEach(card => {
    const top = card.getBoundingClientRect().top;
    if (top < window.innerHeight - 50) {
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    }
  });
});

const checks = document.querySelectorAll('.step-check');
const button = document.getElementById('finishBtn');

checks.forEach(check => {
  check.addEventListener('change', () => {

    const allChecked = Array.from(checks).every(c => c.checked);

    button.disabled = !allChecked;

  });
});

// tentativa falha de tsParticles. aceitando modificações!!

// tsParticles.load("tsparticles", {
// fullScreen: {
//    enable: true
//  },
//  background: {
//   color: "transparent"
//  },
//particles: {
//number: { value: 40 },
//    color: { value: "#ffffff" },
//   opacity: { value: 0.3 },
// size: { value: 2 },
//    move: { enable: true, speed: 1 },
//    links: {
//      enable: true,
//      distance: 120,
//      color: "#ffffff",
//      opacity: 0.2,
//      width: 1
//    }
//  }
//}); 
