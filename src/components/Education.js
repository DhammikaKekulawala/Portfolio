import React from 'react';

function Education() {
  const education = [
    {
      institution: "Rajarata University of Sri Lanka",
      degree: "Bachelor of Science in Applied Sciences",
      focus: "Computer Sciences, Chemistry & Physics",
      period: "2019-2023",
      description: "Achieved a comprehensive understanding of computer sciences, chemistry, and physics."
    }
  ];

  const certifications = [
    {
      institution: "Stanford University (DeepLearning.AI)",
      courses: [
        "Supervised Machine Learning: Regression and Classification",
        "Advanced Learning Algorithms",
        "Unsupervised Learning, Recommenders, Reinforcement Learning"
      ]
    },
    {
      institution: "The University of Moratuwa",
      courses: [
        "Python for Beginners",
        "Python Programming",
        "Web Design for Beginners"
      ]
    },
    {
      institution: "Centre for Open and Distance Education - SLIIT",
      courses: [
        "AI/ML Engineer - Stage 1",
        "AI/ML Engineer - Stage 2"
      ]
    },
    {
      institution: "Udemy",
      courses: [
        "Python for Data Science: Numpy and Pandas Libraries for Data"
      ]
    },
    {
      institution: "The University of Kelaniya",
      courses: [
        "Certificate Course in Hardware"
      ]
    }
  ];

  return (
    <section id="education" className="education section">
      <div className="container">
        <h2 className="section-title">Education & Certifications</h2>
        
        <div className="education-block">
          <h3>Formal Education</h3>
          <div className="timeline">
            {education.map((edu, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>{edu.degree}</h4>
                  <h5>{edu.institution}</h5>
                  <p className="focus">{edu.focus}</p>
                  <p className="period">{edu.period}</p>
                  <p>{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="certifications-block">
          <h3>Certifications & Additional Training</h3>
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="certification-card">
                <h4>{cert.institution}</h4>
                <ul>
                  {cert.courses.map((course, i) => (
                    <li key={i}>{course}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;