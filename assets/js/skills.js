const skillsList = [
  { skill: "HTML", score: 10 },
  { skill: "CSS", score: 10 },
  { skill: "Sass", score: 10 },
  { skill: "Javascript", score: 9 },
  { skill: "Git/GitHub", score: 9 },
  { skill: "React", score: 9 },
  { skill: "JQuery", score: 7 },
  { skill: "Python", score: 8 },
  { skill: "AutoCAD", score: 10 },
  { skill: "SketchUp", score: 10 },
  { skill: "VBA", score: 6 },
  { skill: "WordPress", score: 6 }
];

const skillsListDOM = document.getElementById("skills-list");
let skillsListHTML = "";

function createSkill(skill, score) {
  let skillHTML = `<div class="skill">
        <span class="skill-name">${skill}</span>
        <div class="points"\n>`;
  for (let i = 1; i <= score; i++) {
    skillHTML += `<div class="point has-point"></div>\n`;
  }
  for (let i = 1; i <= 10 - score; i++) {
    skillHTML += `<div class="point"></div>\n`;
  }
  skillHTML += `</div>
    </div>`;
  return skillHTML;
}
skillsList.forEach(item => {
  skillsListHTML += createSkill(item.skill, item.score);
});

skillsListDOM.innerHTML = `<h2>No que me destaco</h2>\n ${skillsListHTML}`;
