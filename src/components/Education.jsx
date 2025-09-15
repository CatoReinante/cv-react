import { useState } from "react";

export default function Education({ academicEducation, technicalEducation }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const openModal = (src, title) => {
    setSelected({ src, title });
    setOpen(true);
  };

  return (
    <section className="mx-5 py-5" aria-labelledby="education-title">
      {/* Header */}
      <div className="text-center mb-5">
        <h2 id="education-title" className="fw-bold display-6 mb-3">
          Academic Education
        </h2>
        <p className="text-muted">My academic background and qualifications.</p>
      </div>

      {/* Academic list */}
      <div className="row row-cols-1 row-cols-md-2 g-4 mb-2">
        {academicEducation.map((edu, index) => (
          <div className="col" key={index}>
            <div
              className="card h-100 border shadow card-hover"
              role="button"
              style={{ cursor: "pointer" }}
              onClick={() =>
                openModal(
                  edu.certificate || edu.img,
                  `${edu.degree} · ${edu.institution}`
                )
              }
            >
              <div className="card-body p-4 d-flex flex-column">
                <div className="d-flex align-items-center mb-3">
                  {edu.img && (
                    <img
                      src={edu.img}
                      alt={edu.institution}
                      style={{ width: 90, height: 90, objectFit: "contain" }}
                      className="me-3"
                    />
                  )}
                  <div>
                    <h3 className="h6 fw-bold mb-1">{edu.degree}</h3>
                    <h6 className="text-muted mb-0">{edu.institution}</h6>
                  </div>
                </div>
                <p className="mb-0">{edu.description}</p>
                <span className="mt-3 small text-primary d-inline-block">
                  View certificate
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Technical Education */}
      <section className="py-5" aria-labelledby="tech-edu-title">
        <div className="text-center mb-5">
          <h2 id="tech-edu-title" className="fw-bold display-6 mb-3">
            Technical Education
          </h2>
          <p className="text-muted">
            Intensive programs and certifications from Hack Academy.
          </p>
        </div>

        {technicalEducation.map((academy, index) => (
          <div key={index} className="card border shadow card-hover mb-4">
            <div className="card-body p-4">
              {/* Header institución */}
              <div className="d-flex align-items-center mb-4">
                {academy.img && (
                  <img
                    src={academy.img}
                    alt={academy.institution}
                    style={{ width: 70, height: 70, objectFit: "contain" }}
                    className="me-3"
                  />
                )}
                <h3 className="fw-bold mb-0">{academy.institution}</h3>
              </div>

              {/* Programas */}
              <div className="row row-cols-1 row-cols-md-2 g-4">
                {academy.programs.map((program, i) => (
                  <div className="col" key={i}>
                    <div
                      className="border shadow card-hover rounded p-3 h-100"
                      role="button"
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        openModal(
                          program.certificate || academy.img,
                          `${program.degree} · ${academy.institution}`
                        )
                      }
                    >
                      <h4 className="h6 fw-semibold mb-1">{program.degree}</h4>
                      {program.date && (
                        <p className="text-muted small mb-2">{program.date}</p>
                      )}
                      <p className="mb-3">{program.description}</p>

                      {/* Skills */}
                      {program.skills && (
                        <div>
                          {Object.entries(program.skills).map(
                            ([category, skills], j) => (
                              <div key={j} className="mb-2">
                                <h6 className="text-uppercase text-muted small mt-3 mb-1">
                                  {category}
                                </h6>
                                <div className="d-flex flex-wrap gap-2">
                                  {skills.map((skill, k) => (
                                    <span
                                      key={k}
                                      className="badge rounded-pill text-bg-light border"
                                    >
                                      {skill}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )
                          )}
                        </div>
                      )}
                      <span className="mt-2 small text-primary d-inline-block">
                        View certificate
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Modal (igual al de WorkTimeline) */}
      {open && selected && (
        <div
          className="modal fade show d-block custom-backdrop"
          tabIndex="-1"
          onClick={() => setOpen(false)}
        >
          <div
            className="modal-dialog modal-xl modal-dialog-centered"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selected.title}</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setOpen(false)}
                />
              </div>
              <div className="modal-body">
                {selected.src ? (
                  <div className="text-center">
                    <img
                      src={selected.src}
                      alt={selected.title}
                      className="img-fluid rounded"
                      style={{ maxHeight: "75vh", objectFit: "contain" }}
                    />
                  </div>
                ) : (
                  <p className="text-muted">No certificate available.</p>
                )}
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  onClick={() => setOpen(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
