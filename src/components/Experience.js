import React from 'react';

function Experience() {
  const experiences = [
    {
      title: "Associate Software Engineer",
      company: "Open University of Sri Lanka",
      period: "Dec 2023 - Present",
      description: [
        "Developed an automatic certification identification system using OpenCV, EasyOCR, TensorFlow, Scikit-learn, Flask, and React.",
        "Created data science projects for student data analysis with Flask, React, and SQL, improving efficiency by 100%.",
        "Gained experience in Neo4j database integration with Flask applications.",
        "Fine-tuned the DeepSeek-R1-Distill-Llama-8B model using the LoRA method for helpdesk applications.",
        "Developing a Retrieval-Augmented Generation (RAG) system for OUSL students using LangChain, ChromaDB, and FastAPI."
      ]
    },
    {
      title: "Web Developer (Freelancer)",
      company: "Vishrawa Digital Solutions",
      period: "Oct 2023 - Dec 2023",
      description: [
        "Improved POS systems using Flask Framework (Python), HTML, CSS, and JavaScript."
      ]
    },
    {
      title: "Trainee Web Developer",
      company: "Vishrawa Digital Solutions",
      period: "Aug 2023 - Oct 2023",
      description: [
        "Developed Clinical Management System and Inventory Management System using Flask, HTML, CSS, and JavaScript.",
        "Worked on the Kandurata Wrist Bands project using WordPress."
      ]
    }
  ];

  return (
    <section id="experience" className="experience section">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>{exp.title}</h3>
                <h4>{exp.company}</h4>
                <p className="period">{exp.period}</p>
                <ul className="responsibilities">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;