import React from 'react';

function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "Java", "C Programming", "HTML", "JavaScript", "CSS", "React.js"]
    },
    {
      title: "Frameworks",
      skills: ["Flask", "FastAPI", "Spring Boot", "LangChain"]
    },
    {
      title: "Frontend Technologies",
      skills: ["HTML", "JavaScript", "CSS", "React.js", "Streamlit"]
    },
    {
      title: "Databases",
      skills: ["MySQL", "SQL", "Neo4j", "FAISS", "Chroma"]
    },
    {
      title: "Machine Learning",
      skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn", "TensorFlow", "OpenCV"]
    },
    {
      title: "Other Technologies",
      skills: ["REST API", "Git", "Bitbucket", "GitLab", "AWS (Basic)", "OOP Concepts"]
    }
  ];

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-content">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;