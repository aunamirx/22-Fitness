// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
if (toggle) toggle.addEventListener('click', () => nav.classList.toggle('show'));

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Appointment form → open email with prefilled details
const form = document.getElementById('appt-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    const subject = encodeURIComponent(`22 Fitness: Appointment Request from ${data.name || 'Athlete'}`);
    const body = encodeURIComponent(
      `Name: ${data.name || ''}\nEmail: ${data.email || ''}\nPhone: ${data.phone || ''}\nSport/Focus: ${data.focus || ''}\n` +
      `Session Frequency: ${data.frequency || ''}\nPreferred Times: ${data.time || ''}\n\nGoals/Notes:\n${data.message || ''}`
    );
    window.location.href = `mailto:colinpbomarketing@gmail.com?subject=${subject}&body=${body}`;
  });
}
