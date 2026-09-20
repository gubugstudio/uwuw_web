addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const adsTxtContent = `google.com, pub-8602992623714384, DIRECT, f08c47fec0942fa0`; 

  return new Response(adsTxtContent, {
    headers: { 
      'content-type': 'text/plain; charset=utf-8',
      'access-control-allow-origin': '*'
    },
  })
}


const WEBMASTER_EMAIL = "uwuw@rekalaya.my.id";

document.getElementById("year").textContent = new Date().getFullYear();

const desktopMediaQuery = window.matchMedia("(min-width: 1024px)");

function updateDeviceLayout(event) {
  document.body.classList.toggle("is-desktop", event.matches);
}

updateDeviceLayout(desktopMediaQuery);
desktopMediaQuery.addEventListener("change", updateDeviceLayout);

const form = document.getElementById("webmaster-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const subject = encodeURIComponent(`Pesan dari ${name} — Uwuw Pets`);
  const body = encodeURIComponent(
    `Nama: ${name}\nEmail: ${email}\n\nPesan:\n${message}`
  );

  status.textContent = "Membuka aplikasi email Anda…";
  window.location.href = `mailto:${WEBMASTER_EMAIL}?subject=${subject}&body=${body}`;
});
