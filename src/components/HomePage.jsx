import React from "react";
import { Link } from "react-router";
import WorkTimeline from "./WorkTimeline";
import { workExperiences } from "../data/WorkExperience";
import Education from "./Education";
import { academicEducation, technicalEducation } from "../data/EducationData";

export default function HomePage() {
  return (
    <section className="container py-5">
      {/* Hero */}
      <div className="row">
        <div className="col-12 col-lg-4 text-center">
          <img
            src="public\img\fotoPerfilCatoNueva.JPG"
            style={{ width: "400px", height: "400px", objectFit: "cover" }}
            alt="Profile"
            className="img-fluid rounded shadow mb-4"
          />
        </div>
        <div className="col-12 col-lg-8">
          <div className="text-center mb-4">
            <h1 className="fw-bold display-5 mb-2">Joaquín Reinante</h1>
            <p className="lead text-muted mb-3">
              Full-Stack Developer · B.S. in Business Administration
            </p>
          </div>
          {/* Intro */}
          <div className="mx-5">
            <p className="fs-5">
              Business-trained, tech-driven. After graduating in Business
              Administration, I shifted my career to software development and
              completed an intensive 700+ hour Full-Stack Bootcamp. I build
              end-to-end web applications and thrive in fast-paced,
              collaborative environments—learning quickly, adapting to change,
              and solving problems with a product mindset.
            </p>
          </div>
          {/* Tech Stack */}
          <div className="d-flex flex-wrap justify-content-center gap-2 my-4">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "TypeScript",
              "React",
              "Node.js",
              "Express",
              "MongoDB",
              "MySQL",
            ].map((t) => (
              <span key={t} className="badge rounded-pill text-bg-light border">
                {t}
              </span>
            ))}
          </div>
          <div className="text-center">
            <a
              className="text-center badge rounded-pill text-bg-light border fs-5 px-4 py-2 mt-3"
              style={{
                textDecoration: "none",
              }}
              href="public/CV Joaquin Reinante ENG. 2025.pdf"
              download
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
      <hr />
      <WorkTimeline workExperiences={workExperiences} />
      <hr />
      <Education
        academicEducation={academicEducation}
        technicalEducation={technicalEducation}
      />

      {/* Footer note */}
      <p className="text-center text-muted mt-5 mb-0">
        Thanks for visiting — open to new challenges and collaborations.
      </p>
    </section>
  );
}
