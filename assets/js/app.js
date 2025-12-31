// assets/js/app.js (UNCHANGED)
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
if (toggle && nav) toggle.addEventListener('click', () => nav.classList.toggle('show'));

const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* Helper: build a Google Maps search link */
const mapsLink = (query) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

const WEEKLY_SESSIONS = [
  {
    day: "Tuesday",
    time: "7:00 PM",
    title: "Group Training Session (Agility / Footwork)",
    location: "Ignite Sports – 214 Harmony Road",
    map: mapsLink("Ignite Sports 214 Harmony Road")
  },
  {
    day: "Wednesday",
    time: "7:00 PM",
    title: "Running Back Session",
    location: "Ignite Sports – 214 Harmony Road",
    map: mapsLink("Ignite Sports 214 Harmony Road")
  },
  {
    day: "Saturday",
    time: "1:00 PM",
    title: "Hill Training",
    location: "Cheesequake Park",
    map: mapsLink("Cheesequake Park")
  },
  {
    day: "Sunday",
    time: "2:00 PM",
    title: "Group Training Session",
    location: "Ignite Sports – 214 Harmony Road",
    map: mapsLink("Ignite Sports 214 Harmony Road")
  },
];

const weeklyEl = document.getElementById("weekly-sessions");
if (weeklyEl) {
  weeklyEl.innerHTML = WEEKLY_SESSIONS.map(s => `
    <div class="weekly-card">
      <div class="weekly-top">
        <div class="weekly-day">${s.day}</div>
        <div class="weekly-time">${s.time}</div>
      </div>
      <div class="weekly-title">${s.title}</div>

      <a class="weekly-loc weekly-loc-link"
         href="${s.map}"
         target="_blank"
         rel="noreferrer">
        ${s.location}
      </a>
    </div>
  `).join("");
}

const cForm = document.getElementById('contact-form');
if (cForm) {
  cForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(cForm).entries());

    const subject = encodeURIComponent(`22 Fitness: Message from ${data.name || 'Visitor'}`);
    const body = encodeURIComponent(
      `Name: ${data.name || ''}\nEmail: ${data.email || ''}\n\nMessage:\n${data.message || ''}`
    );

    window.location.href = `mailto:colinpbomarketing@gmail.com?subject=${subject}&body=${body}`;

    const note = document.getElementById("contact-note");
    if (note) note.textContent = "Opening your email app...";
  });
}
