function generate() {
  let name = document.getElementById("name").value;
  let role = document.getElementById("role").value;
  let skills = document.getElementById("skills").value;
  let exp = document.getElementById("experience").value;

  // Resume generation
  let resume = `
    <h3>${name}</h3>
    <p><b>Role:</b> ${role}</p>
    <p><b>Skills:</b> ${skills}</p>
    <p><b>Experience:</b> ${exp}</p>
  `;

  // Cover letter generation (template-based)
  let coverLetter = `
    <p>Dear Hiring Manager,</p>
    <p>I am excited to apply for the position of ${role}. 
    I have experience in ${skills} and have worked on ${exp}.</p>
    <p>I am confident I can contribute effectively to your team.</p>
    <p>Sincerely,<br>${name}</p>
  `;

  document.getElementById("resume").innerHTML = resume;
  document.getElementById("coverLetter").innerHTML = coverLetter;
}