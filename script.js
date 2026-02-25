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
const supabaseKey = "YOUR_ANON_KEY";
const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);

// ================= FEEDBACK =================
document.addEventListener("DOMContentLoaded", () => {

  loadCertificates();
  loadFeedback();

  const feedbackForm = document.getElementById("feedbackForm");

  feedbackForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("fbName").value.trim();
    const email = document.getElementById("fbEmail").value.trim();
    const message = document.getElementById("fbMessage").value.trim();

    const { error } = await supabaseClient
      .from("feedback")
      .insert([{ name, email, message }]);

    if (error) {
      alert("Error submitting feedback");
      console.error(error);
    } else {
      alert("Feedback submitted successfully!");
      feedbackForm.reset();
      loadFeedback();
    }
  });
});

async function loadFeedback() {
  const feedbackList = document.getElementById("feedbackList");

  const { data } = await supabaseClient
    .from("feedback")
    .select("*")
    .order("created_at", { ascending: false });

  feedbackList.innerHTML = "";

  data?.forEach(item => {
    const div = document.createElement("div");
    div.classList.add("feedback-card");
    div.innerHTML = `
      <strong>${item.name}</strong>
      <small style="color:#94a3b8;"> (${item.email})</small>
      <p>${item.message}</p>
    `;
    feedbackList.appendChild(div);
  });
}
