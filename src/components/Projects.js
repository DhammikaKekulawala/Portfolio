import React, { useState } from 'react';

function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');

  const projectCategories = ['all', 'ai-ml', 'web-development', 'llm', 'other'];

  const projects = [
    {
      title: "Retrieval-Augmented Generation (RAG) System",
      category: "llm",
      technologies: ["LangChain", "ChromaDB", "FastAPI", "LLM"],
      description: "Developing a RAG system designed to assist OUSL students by leveraging a Large Language Model (LLM). Enhances information retrieval and provides AI-driven responses to improve student learning and support.",
      image: "rag-system.jpg",
      demoLink: "",
      codeLink: ""
    },
    {
      title: "Automatic Certification Identification System",
      category: "ai-ml",
      technologies: ["OpenCV", "EasyOCR", "TensorFlow", "Flask", "React"],
      description: "Developed a system that automatically identifies eligible courses for certification using computer vision and OCR technologies. Streamlined internal processes, significantly enhancing efficiency for students.",
      image: "cert-system.jpg",
      demoLink: "",
      codeLink: ""
    },
    {
      title: "Restaurant Idea Generator",
      category: "llm",
      technologies: ["OpenAI API", "LangChain", "Streamlit"],
      description: "Created an AI-powered application that generates restaurant concepts and ideas using the OpenAI API and LangChain framework with a user-friendly Streamlit interface.",
      image: "restaurant-generator.jpg",
      demoLink: "",
      codeLink: ""
    },
    {
      title: "Finance Domain Generative AI",
      category: "llm",
      technologies: ["LangChain", "OpenAI", "FAISS", "Streamlit"],
      description: "Developed a Generative AI project in the finance domain for answering queries, integrated with FAISS for vector database management, with an interactive Streamlit frontend.",
      image: "finance-ai.jpg",
      demoLink: "",
      codeLink: ""
    },
    {
      title: "AI Web Agent",
      category: "llm",
      technologies: ["SerpAPI", "LLM-Math", "Python"],
      description: "Created an AI agent that combines real-time web data retrieval via SerpAPI with advanced language model computations using the LLM-Math tool.",
      image: "ai-agent.jpg",
      demoLink: "",
      codeLink: ""
    },
    {
      title: "Clinical Management System",
      category: "web-development",
      technologies: ["Flask", "HTML", "CSS", "JavaScript", "SQL"],
      description: "Developed a comprehensive system for clinical management including patient records, appointment scheduling, and inventory tracking.",
      image: "cms.jpg",
      demoLink: "",
      codeLink: ""
    },
    {
      title: "Automatic Arduino Code Generator",
      category: "other",
      technologies: ["Python", "YOLOv8", "Tkinter"],
      description: "Created software that automatically generates Arduino code based on visual input, using the YOLOv8 algorithm and RGB value detection.",
      image: "arduino-gen.jpg",
      demoLink: "",
      codeLink: ""
    },
    {
      title: "Intelligent Chatbot",
      category: "ai-ml",
      technologies: ["Python", "TensorFlow", "NLTK"],
      description: "Developed a conversational AI chatbot using Python, TensorFlow libraries, and Natural Language Toolkit for intelligent responses and interactions.",
      image: "chatbot.jpg",
      demoLink: "",
      codeLink: ""
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="project-filters">
          {projectCategories.map(category => (
            <button 
              key={category} 
              className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' & ')}
            </button>
          ))}
        </div>
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                {/* You can add an actual image here */}
                <div className="placeholder-image">{project.title.charAt(0)}</div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <div className="project-tech">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <p>{project.description}</p>
                <div className="project-links">
                  {project.demoLink && (
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="project-link">Demo</a>
                  )}
                  {project.codeLink && (
                    <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="project-link">Code</a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;