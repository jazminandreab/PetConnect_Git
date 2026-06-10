const setText = (selector, value) => {
  const element = document.querySelector(selector);
  if (element) {
    element.textContent = value;
  }
};

const createChip = (text) => {
  const chip = document.createElement("span");
  chip.className = "chip";
  chip.textContent = text;
  return chip;
};

const renderHero = () => {
  const message = profileData.messages[0];

  setText("#heroEyebrow", profileData.heroEyebrow);
  setText("#heroBadge", profileData.heroBadge);
  setText("#heroTitle", profileData.heroTitle);
  setText("#heroRole", profileData.heroRole);
  setText("#heroSummary", profileData.heroSummary);
  setText("#statusBadge", profileData.statusBadge);
  setText("#statusTitle", profileData.statusTitle);
  setText("#statusText", profileData.statusText);
  setText("#miniCardNumberOne", profileData.miniCards[0].number);
  setText("#miniCardTitleOne", profileData.miniCards[0].title);
  setText("#miniCardNumberTwo", profileData.miniCards[1].number);
  setText("#miniCardTitleTwo", profileData.miniCards[1].title);
  setText("#profileText", profileData.profileText);
  setText("#messageEyebrow", message.eyebrow);
  setText("#dynamicTitle", message.title);
  setText("#dynamicText", message.text);
};

const renderLists = () => {
  const coreSkills = document.querySelector("#coreSkills");
  const remoteSkills = document.querySelector("#remoteSkills");
  const toolsList = document.querySelector("#toolsList");

  profileData.coreSkills.forEach((skill) => coreSkills.appendChild(createChip(skill)));
  profileData.tools.forEach((tool) => toolsList.appendChild(createChip(tool)));

  profileData.remoteSkills.forEach((skill) => {
    const item = document.createElement("li");
    item.textContent = skill;
    remoteSkills.appendChild(item);
  });
};

const renderExperience = () => {
  const experienceList = document.querySelector("#experienceList");

  profileData.experience.forEach((job) => {
    const article = document.createElement("article");
    article.className = "timeline-item";
    article.tabIndex = 0;
    article.innerHTML = `
      <div class="timeline-header">
        <div>
          <strong>${job.role}</strong>
          <span class="timeline-meta">${job.company} | ${job.mode}</span>
        </div>
        <span class="timeline-meta">${job.period}</span>
      </div>
      <div class="timeline-copy">
        <ul>
          ${job.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}
        </ul>
      </div>
    `;
    experienceList.appendChild(article);
  });
};

const renderEducation = () => {
  const educationList = document.querySelector("#educationList");
  const coursesList = document.querySelector("#coursesList");

  profileData.education.forEach((item) => {
    const block = document.createElement("article");
    block.className = "stack-item";
    block.innerHTML = `
      <strong>${item.title}</strong>
      <p>${item.detail}</p>
    `;
    educationList.appendChild(block);
  });

  profileData.courses.forEach((course) => {
    const block = document.createElement("article");
    block.className = "stack-item";
    block.innerHTML = `
      <strong>Curso complementario</strong>
      <p>${course}</p>
    `;
    coursesList.appendChild(block);
  });
};

const renderSocialLinks = () => {
  const socialLinksGrid = document.querySelector("#socialLinksGrid");

  profileData.socialLinks.forEach((link) => {
    const anchor = document.createElement("a");
    anchor.className = `social-link-card ${link.icon}`;
    anchor.href = link.href;
    anchor.dataset.contactValue = link.value;

    if (link.href !== "#") {
      anchor.target = "_blank";
      anchor.rel = "noreferrer";
    }

    anchor.innerHTML = `
      <span class="social-icon-box">${icons[link.icon]}</span>
      <span class="social-copy">
        <strong>${link.label}</strong>
        <span>${link.value}</span>
      </span>
    `;
    socialLinksGrid.appendChild(anchor);
  });
};

const renderProfile = () => {
  renderHero();
  renderLists();
  renderExperience();
  renderEducation();
  renderSocialLinks();
};

document.addEventListener("DOMContentLoaded", renderProfile);
