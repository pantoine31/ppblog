import React from "react";
import "../pages/Pro.css";

const experiences = [
  {
    title: "Military Service – Software Development Role",
    company: "Hellenic Army | KEPYES",
    location: "225 Mesogeion, Cholargos, 15561, ATTICA",
    date: "Nov 2024 – Aug 2025 (9 Months) ",
    description:
      "Completed mandatory military service in the Hellenic Armed Forces, gaining hands-on experience in military communication systems, information systems maintenance, and web development. Developed skills in system reliability, team collaboration, and resolving technical challenges in high-pressure environments. Adapted to structured workflows and discipline while contributing to mission-critical operations."
  },

  {
    title: "Junior Web Developer (Internship/Remote)",
    company: "Anveto Marketers",
    location: "Nea Ionia, Athens",
    date: "Nov 2024 – Feb 2025 (3 Months) ",
    description:
      "Development and maintenance of websites and web applications, optimizing performance, debugging issues, and ensuring a seamless user experience using HTML, CSS, JavaScript, PHP, MySQL, React, Angular, GitHub, and WordPress."
  },
  {
    title: "Junior IT Engineer",
    company: "Digi Solutions",
    location: "Agios Dimitrios, Athens",
    date: "Jul 2024 – Nov 2024 (4 Months)",
    description:
      "Support and maintenance of IT systems, solving technical problems and implementing solutions for the efficient operation of the company's IT infrastructure."
  },
  {
    title: "Contact Center Agent – Chat Customer Support",
    company: "NOVA (ICAP)",
    location: "Kallithea, Athens",
    date: "Sep 2022 – Jul 2024 (1 Year & 10 Months)",
    description:
      "Customer support, dealing with requests, answering questions."
  },
  {
    title: "Contact Center Agent – Phone Customer Support",
    company: "WIND (ICAP)",
    location: "Kallithea, Athens",
    date: "Feb 2022 – Sep 2022 (7 Months)",
    description:
      "Customer support, dealing with requests, answering questions."
  },
  {
    title: "Bachelor's Degree in Computer Science (7.49/10)",
    company: "Dept. Of Digital Systems - University of Piraeus",
    date: "Sep 2020 – Sep 2024 (4 Years)",
    description:"Studied core and advanced topics in computing, including programming languages (Python, Java, C++), probability and statistics, databases, web development (HTML, CSS, JavaScript), cybersecurity fundamentals, network security, software engineering, and artificial intelligence. \n\n Bachelor’s Thesis Title: Smart Cities: Privacy and Security | \n\n Supervisor: Prof. Stefanos Gritzalis Conducted an in-depth study on privacy and security challenges in smart city infrastructures. Focused on data protection mechanisms, secure communication protocols, and privacy-preserving technologies for IoT devices and urban networks. Achieved a perfect grade of 10/10."
  },
  {
    title: "High School Diploma",
    location: "Larissa, Greece",
    date: "Sep 2017 – Jun 2020 (3 Years)",
    description:
      "Grade 18.5/20"
  }
];

const pdfFiles = [
    { name: "Recommendation Letter: ICAP COMPANY", link: "/pdfs/systatiki_epistoli_icap.pdf" },
    { name: "Recommendation Letter: DIGI SOLUTIONS COMPANY", link: "/pdfs/systatiki_epistoli_digiSolutions.pdf" },
    { name: "Recommendation Letter: Professor Mr. Andreas Menychtas", link: "/pdfs/Systatiki-Papakonstantinou.pdf" },
    { name: "Recommendation Letter: Professor Mr. Stefanos Gritzalis", link: "/pdfs/SYSTATIKH_KEPYES_PAPAKONSTANTINOU.pdf" },
    { name: "Bachelor's Thesis", link: "/pdfs/Thesis_papakonstantinou.pdf" }
  ];
  
  const Pro = () => {
    return (
      <div className="pro-container">
        <h1 className="pro-title">Επαγγελματική Πορεία</h1>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-circle"></div>
              <div className="timeline-content">{exp.title}</div>
              <div className="timeline-description">{exp.company}</div>
              <div className="timeline-date">{exp.date}</div>
            </div>
          ))}
        </div>
        
        <div className="pdf-section">
          <h2>Συστατικές Επιστολές & Πτυχιακή Εργασία</h2>
          <div className="pdf-list">
            {pdfFiles.map((file, index) => (
              <div key={index} className="pdf-item">
                <a href={file.link} target="_blank" rel="noopener noreferrer">
                  {file.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Pro;