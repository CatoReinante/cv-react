import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Education({ academicEducation, technicalEducation }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const { t } = useTranslation("common");

  // Textos i18n
  const academicTexts = t("education.academic", { returnObjects: true });
  const institutionsTexts = t("education.technical.institutions", {
    returnObjects: true,
  });

  const openModal = (src, title) => {
    setSelected({ src, title });
    setOpen(true);
  };

  return (
    <section className=" mx-3 mx-md-5 py-5" aria-labelledby="education-title">
      {/* Header */}
      <div className="row">
        <div className="col-6">
          <div className="text-center mb-5">
            <h2 id="education-title" className="fw-bold display-6 mb-3 mt-5">
              {t("education.labels.academicTitle")}
            </h2>
            <p className="text-muted">
              {t("education.labels.academicSubtitle")}
            </p>
          </div>
          {/* Academic list */}

          <div className="row g-4 mb-2">
            {academicEducation.map((edu, index) => (
              <div className="col-12" key={index}>
                <div
                  className="card h-100 border shadow card-hover"
                  role="button"
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    openModal(
                      edu.certificate || edu.img,
                      `${academicTexts?.[index]?.degree} · ${academicTexts?.[index]?.institution}`
                    )
                  }
                >
                  <div className="card-body p-4 d-flex flex-column">
                    <div className="d-flex align-items-center mb-3">
                      {edu.img && (
                        <img
                          src={edu.img}
                          alt={academicTexts?.[index]?.institution}
                          style={{
                            width: 90,
                            height: 90,
                            objectFit: "contain",
                          }}
                          className="me-3"
                        />
                      )}
                      <div>
                        <h3 className="h6 fw-bold mb-1">
                          {academicTexts?.[index]?.degree}
                        </h3>
                        <h6 className="text-muted mb-0">
                          {academicTexts?.[index]?.institution}
                        </h6>
                      </div>
                    </div>
                    <p className="mb-0">
                      {academicTexts?.[index]?.description}
                    </p>
                    <span className="mt-3 small text-primary d-inline-block">
                      {t("education.labels.viewCertificate")}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Technical Education */}
        <div className="col-6">
          <section className="py-5" aria-labelledby="tech-edu-title">
            <div className="text-center mb-5">
              <h2 id="tech-edu-title" className="fw-bold display-6 mb-3">
                {t("education.labels.technicalTitle")}
              </h2>
              <p className="text-muted">
                {t("education.labels.technicalSubtitle")}
              </p>
            </div>
            {technicalEducation.map((academy, index) => (
              <div key={index}>
                <div className="card-body">
                  {/* Header institución */}

                  {/* Programas */}
                  <div className="row g-4">
                    {academy.programs.map((program, i) => (
                      <div className="col-12" key={i}>
                        <div
                          className="border shadow card-hover rounded p-3 h-100"
                          role="button"
                          style={{ cursor: "pointer" }}
                          onClick={() =>
                            openModal(
                              program.certificate || academy.img,
                              `${institutionsTexts?.[index]?.programs?.[i]?.degree} · ${institutionsTexts?.[index]?.name}`
                            )
                          }
                        >
                          <h4 className="h6 fw-semibold mb-1">
                            {academy.img && (
                              <img
                                src={academy.img}
                                alt={institutionsTexts?.[index]?.name}
                                style={{
                                  width: 55,
                                  height: 55,
                                  objectFit: "contain",
                                }}
                                className="me-3"
                              />
                            )}
                            <div className="d-inline-block align-middle">
                              {
                                institutionsTexts?.[index]?.programs?.[i]
                                  ?.degree
                              }
                              {institutionsTexts?.[index]?.programs?.[i]
                                ?.date && (
                                <p className="text-muted small mb-2">
                                  {
                                    institutionsTexts?.[index]?.programs?.[i]
                                      ?.date
                                  }
                                </p>
                              )}
                            </div>
                          </h4>

                          <p className="mb-3">
                            {
                              institutionsTexts?.[index]?.programs?.[i]
                                ?.description
                            }
                          </p>
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
                                          className="badge rounded-pill bg-body-tertiary text-body border"
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
                            {t("education.labels.viewCertificate")}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>

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
                  <p className="text-muted">
                    {t("education.labels.modalNoCert")}
                  </p>
                )}
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  onClick={() => setOpen(false)}
                >
                  {t("education.labels.modalClose")}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
