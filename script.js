// ================= CERTIFICATES =================
const certificates = [
  { title: "Front End Web Developer Certification", issuer: "Infosys Springboard", year: "2026", file: "assets/certificates/frontend.pdf" },
  { title: "HTML5 - The Language", issuer: "Infosys Springboard", year: "2026", file: "assets/certificates/html.pdf" },
  { title: "CSS3", issuer: "Infosys Springboard", year: "2026", file: "assets/certificates/css3.pdf" },
  { title: "JavaScript", issuer: "Infosys Springboard", year: "2026", file: "assets/certificates/javascript.pdf" },
  { title: "Node JS: Advanced Concepts", issuer: "Udemy", year: "2026", file: "assets/certificates/nodejs.pdf" },
  { title: "The Complete Git Guide", issuer: "Udemy", year: "2026", file: "assets/certificates/git-github.pdf" },
  { title: "Digital Engineering (Gold)", issuer: "NASSCOM", year: "2025", file: "assets/certificates/digital-engineering.pdf" },
  { title: "Learn AI and Gen AI Basics", issuer: "Microsoft Learn", year: "2025", file: "assets/certificates/ai-genai.pdf" },
  { title: "Get Started with Microsoft Copilot", issuer: "Microsoft Learn", year: "2025", file: "assets/certificates/copilot.pdf" },
  { title: "Cybersecurity Concepts", issuer: "Microsoft Learn", year: "2025", file: "assets/certificates/cybersecurity.pdf" },
  { title: "Self-Presentation", issuer: "Wadhwani Foundation", year: "2025", file: "assets/certificates/self-presentation.pdf" }
];

function loadCertificates() {
  const container = document.getElementById("certContainer");
  if (!container) return;

  certificates.forEach(cert => {
    const card = document.createElement("div");
    card.classList.add("cert-card");
    card.innerHTML = `
      <h3>${cert.title}</h3>
      <p>${cert.issuer} — ${cert.year}</p>
      <button class="btn" onclick="openModal('${cert.file}')">View PDF</button>
    `;
    container.appendChild(card);
  });
}

function openModal(file) {
  document.getElementById("modal").style.display = "flex";
  document.getElementById("pdfViewer").src = file;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
  document.getElementById("pdfViewer").src = "";
}


// ================= SUPABASE =================
const supabaseUrl = "https://kxqlazkoqpnxhkixkrka.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt4cWxhemtvcXBueGhraXhrcmthIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE5OTA0NzAsImV4cCI6MjA4NzU2NjQ3MH0.pazNZf0EZosx7duxSabesLHISGKzqgvVuX-OJXPKR6g"; // Replace with your real anon key
const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);


// ================= FEEDBACK (STORE ONLY) =================
document.addEventListener("DOMContentLoaded", () => {

  loadCertificates();

  const feedbackForm = document.getElementById("feedbackForm");
  if (!feedbackForm) return;

  feedbackForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("fbName").value.trim();
    const email = document.getElementById("fbEmail").value.trim();
    const message = document.getElementById("fbMessage").value.trim();

    const { error } = await supabaseClient
      .from("feedback")
      .insert([{ name, email, message }]);

    if (error) {
      alert("❌ Error submitting feedback");
      console.error(error);
    } else {
      alert("✅ Feedback submitted successfully!");
      feedbackForm.reset();
    }
  });

});
