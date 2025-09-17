import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function WorkTimeline({ workExperiences = [] }) {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const selected = workExperiences?.[selectedIdx] ?? null;
  const { t } = useTranslation("common");

  // Textos i18n
  const workTexts = t("work.experiences", { returnObjects: true });
  const selectedText = workTexts?.[selectedIdx];

  useEffect(() => {
    if (!selected && workExperiences.length) setSelectedIdx(0);
  }, [workExperiences]); // eslint-disable-line

  return (
    <section className="container my-5 py-4" aria-labelledby="career-title">
      <div className="row g-4" style={{ marginTop: "30px" }}>
        {/* IZQUIERDA: línea vertical + ítems */}
        <div className="col-12 col-lg-5">
          <div className="position-relative ps-4">
            {/* Línea vertical dependiente del theme */}
            <div
              className="position-absolute top-0 bottom-0"
              style={{
                left: 10,
                width: 2,
                background: "var(--bs-border-color)",
              }}
              aria-hidden="true"
            />
            <div className="d-flex flex-column">
              {workExperiences.map((xp, i) => {
                const active = i === selectedIdx;
                const txt = workTexts?.[i] || {};
                return (
                  <button
                    key={`${txt.title || "xp"}-${i}`}
                    type="button"
                    onClick={() => setSelectedIdx(i)}
                    aria-current={active ? "true" : undefined}
                    className={`btn text-start w-100 py-3 px-3 mb-2 d-flex align-items-start gap-3 rounded-3 border shadow-sm ${
                      active
                        ? "bg-primary-subtle border-primary"
                        : "bg-body-tertiary border-secondary-subtle"
                    }`}
                  >
                    {/* Punto de la línea */}
                    <span
                      className="flex-shrink-0 rounded-circle border border-0"
                      style={{
                        width: 14,
                        height: 14,
                        marginLeft: -26,
                        marginTop: 4,
                        boxShadow: "0 0 0 2px var(--bs-border-color)",
                        background: active
                          ? "var(--bs-primary)"
                          : "var(--bs-secondary)",
                      }}
                      aria-hidden="true"
                    />
                    <div className="flex-grow-1">
                      <div className="fw-semibold">{txt.title}</div>
                      <div className="text-body-secondary small">
                        {txt.company}
                      </div>
                      <span className="badge bg-secondary-subtle text-secondary-emphasis border border-secondary-subtle mt-2">
                        {txt.date}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* DERECHA: detalle */}
        <div className="col-12 col-lg-7">
          <h2 id="career-title" className="fw-bold display-6 mb-4">
            {t("work.labels.title")}
          </h2>
          <h4 className="text-body-secondary mb-4">
            {t("work.labels.subtitle")}
          </h4>
          {selected ? (
            <div className="card shadow-sm bg-body border">
              <div className="card-body">
                <h5 className="card-title mb-1">
                  {selectedText?.title} · {selectedText?.company}
                </h5>
                <div className="text-body-secondary mb-3">
                  {selectedText?.date}
                </div>

                {selectedText?.description?.summary && (
                  <p className="mb-4">{selectedText.description.summary}</p>
                )}

                <div className="row g-4">
                  {Array.isArray(
                    selectedText?.description?.responsibilities
                  ) && (
                    <div className="col-md-7">
                      <h6 className="mb-2">
                        {t("work.labels.responsibilities")}
                      </h6>
                      <ul className="mb-0">
                        {selectedText.description.responsibilities.map(
                          (r, idx) => (
                            <li key={idx}>{r}</li>
                          )
                        )}
                      </ul>
                    </div>
                  )}

                  {Array.isArray(selectedText?.description?.skills) && (
                    <div className="col-md-5">
                      <h6 className="mb-2">{t("work.labels.skills")}</h6>
                      <div className="d-flex flex-wrap gap-2">
                        {selectedText.description.skills.map((s, idx) => (
                          <span
                            key={idx}
                            className="badge rounded-pill bg-body-tertiary text-body border"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="text-body-secondary">{t("work.labels.empty")}</div>
          )}
        </div>
      </div>
    </section>
  );
}
