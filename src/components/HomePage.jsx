import { useTranslation } from "react-i18next";

export default function HomePage() {
  const { t } = useTranslation("common");
  return (
    <div>
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <section id="me" className="mx-4 w-100">
          {/* Hero */}
          <div className="row align-items-center">
            {/* Columna izquierda - foto */}
            <div className="col-12 col-lg-4 text-center">
              <img
                src="img/fotoPerfilCatoNueva.JPG"
                style={{ width: "500px", height: "500px", objectFit: "cover" }}
                alt="Profile"
                className="img-fluid rounded shadow mb-4"
              />
            </div>
            {/* Columna derecha - texto */}
            <div className="col-12 col-lg-8">
              <div className="text-center mb-4">
                <h1 className="fw-bold display-5 mb-2">{t("home.name")}</h1>
                <p className="lead text-muted mb-3">{t("home.role")}</p>
              </div>
              {/* Intro */}
              <div className="mx-5">
                <p className="fs-5">{t("home.intro")}</p>
              </div>
              {/* Tech Stack */}
              <div className="d-flex flex-wrap justify-content-center gap-2 my-4 mb-5 mt-5">
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
                  <span
                    key={t}
                    className="badge rounded-pill bg-body-tertiary text-body border"
                  >
                    {t}
                  </span>
                ))}
              </div>
              {/* Links */}
              <div className="row justify-content-center mb-4">
                <div className="text-center col">
                  <p className="text-center">{t("home.ctaProjectLabel")}</p>
                  <a
                    href="https://studio-nora-ecommerce.vercel.app/"
                    className="text-center badge rounded-pill bg-body-tertiary text-body border fs-5 px-4 py-2"
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    Studio Nora
                  </a>
                </div>
                <div className="text-center col">
                  <p className="text-center">{t("home.ctaCvLabel")}</p>
                  <a
                    className="text-center badge rounded-pill bg-body-tertiary text-body border fs-5 px-4 py-2"
                    style={{ textDecoration: "none" }}
                    href="public/CV Joaquin Reinante FSD ENG.pdf"
                    download
                  >
                    {t("home.ctaCvBtn")}
                  </a>
                </div>
              </div>
              {/* Redes */}
              <div className="text-center d-flex justify-content-center gap-3">
                <a
                  className="btn btn-outline-dark btn-sm rounded-circle d-flex align-items-center justify-content-center"
                  href="https://github.com/CatoReinante"
                  style={{ width: "36px", height: "36px" }}
                >
                  <i className="bi bi-github"></i>
                </a>
                <a
                  className="btn btn-outline-dark btn-sm rounded-circle d-flex align-items-center justify-content-center"
                  href="https://www.linkedin.com/in/joaquin-reinante-818007193/"
                  style={{ width: "36px", height: "36px" }}
                >
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
              <p className="text-center text-muted mt-5 mb-0">
                {t("home.thanks")}
              </p>
            </div>
          </div>
        </section>
      </div>{" "}
    </div>
  );
}
