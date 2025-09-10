import React, { useState } from "react";

export default function WorkTimeline({ workExperiences }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const onSelect = (xp) => {
    setSelected(xp);
    setOpen(true);
  };

  return (
    <section className="my-5">
      <h2 className="fw-bold text-center mb-4">Work Timeline</h2>
      <h5 className="text-center text-muted mb-4">
        (Click on a job to see details)
      </h5>

      <div className="row justify-content-center gap-3">
        {workExperiences.map((xp, i) => (
          <div
            key={i}
            className="col-2 text-center"
            onClick={() => onSelect(xp)}
            style={{ cursor: "pointer", minWidth: "300px" }}
          >
            <div
              className="mt-3 shadow rounded card-hover p-4 d-flex flex-column justify-content-center"
              style={{ height: "200px" }}
            >
              <h5>{xp.title}</h5>
              <div className="text-muted">{xp.company}</div>
              <div className="badge text-bg-light border mt-1">{xp.date}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
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
                <h5 className="modal-title">
                  {selected.title} · {selected.company} · {selected.date}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setOpen(false)}
                />
              </div>
              <div className="modal-body">
                <p>{selected.description.summary}</p>

                <div className="row g-4">
                  <div className="col-md-7">
                    <h6>Responsibilities</h6>
                    <ul>
                      {selected.description.responsibilities.map((r, i) => (
                        <li key={i}>{r}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="col-md-5">
                    <h6>Skills</h6>
                    <div className="d-flex flex-wrap gap-2">
                      {selected.description.skills.map((s, i) => (
                        <span
                          key={i}
                          className="badge rounded-pill text-bg-light border"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
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
