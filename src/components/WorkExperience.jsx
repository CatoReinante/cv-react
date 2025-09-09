export default function WorkExperience() {
  const workExperiences = [
    {
      title: "Administrative Analyst - BPO Services",
      company: "Tata Consultancy Services - Microsoft",
      date: "Jun 2023 to Jan 2024",
      description: {
        summary:
          "I carried out the administrative and legal tracking of Microsoft commercial contracts through the ECIF (Enterprise Contract Information Form) platform, ensuring compliance and accuracy throughout the process.",
        responsibilities: [
          "Review and validation of contractual and financial information.",
          "Updating and maintenance of records in internal systems.",
          "Providing support to global teams in various administrative, compliance, and documentation tasks.",
        ],
        skills: ["Attention to detail.", "International environment."],
      },
    },
    {
      title: "Comercial Department",
      company: "España Judiciales",
      date: "Feb 2022 to Jun 2023",
      description: {
        summary:
          "I was responsible for the preparation of quotations and commercial proposals, as well as the prospecting and acquisition of new clients to expand the business portfolio.",
        responsibilities: [
          "Account tracking and collection management.",
          "Ensuring timely payments and strong client relationships.",
          "Preparation and delivery of administrative and technical documentation.",
        ],
        skills: [
          "Attention to detail.",
          "Strong communication.",
          "Interpersonal skills.",
          "Negotiation skills.",
        ],
      },
    },
    {
      title: "General Assistant and Laborer",
      company: "Various",
      date: "Feb 2020 to Dec 2021",
      description: {
        summary:
          "While I lived in Australia I gained hands-on experience in different service and maintenance areas, including the cleaning, kitchen hand, construction and gardening sectors.",

        responsibilities: [
          "Cleaning of 5 stars hotels",
          "Kitchen assistance and food preparation",
          "Construction and renovation support",
          "Gardening and outdoor maintenance",
        ],
        skills: [
          "Adaptability to different work environments",
          "Teamwork and communication skills",
          "Physical endurance and attention to detail",
        ],
      },
    },
    {
      title: "Administrative Assistant",
      company: "Julius Baer",
      date: "Jun 2017 to Dec 2018",
      description: {
        summary:
          "I was responsible for the administrative support of the Wealth Management area, assisting financial advisors in managing client portfolios and ensuring smooth daily operations.",
        responsibilities: [
          "Managing calendars and scheduling appointments.",
          "Coordinating meetings and preparing necessary materials.",
          "Assisting in the preparation of client reports and presentations.",
        ],
        skills: [
          "Strong organizational and multitasking abilities.",
          "Excellent written and verbal communication skills.",
          "Proficiency in office software and tools.",
        ],
      },
    },
  ];
  return (
    <section className="mx-5 py-5" aria-labelledby="work-exp-title">
      <div className="text-center mb-5">
        <h2 id="work-exp-title" className="fw-bold display-6 mb-3">
          Work Experience
        </h2>
        <p className="text-muted">
          Roles, impact and tools I mastered along the way.
        </p>
      </div>

      <div className="row row-cols-1 row-cols-md-2 g-4">
        {workExperiences.map((xp, index) => (
          <div className="col" key={index}>
            <div className="card h-100 border shadow card-hover">
              <div className="card-body p-4 d-flex flex-column">
                <div className="mb-3">
                  <h3 className="h5 fw-bold mb-1">{xp.title}</h3>
                  <h6 className="text-muted mb-2">
                    {xp.company} · <span>{xp.date}</span>
                  </h6>
                </div>

                <p className="mb-4">{xp.description.summary}</p>

                <div className="row g-4 mt-auto">
                  <div className="col-12 col-lg-7">
                    <h5 className="h6 text-uppercase text-muted mb-3">
                      Responsibilities
                    </h5>
                    <ul className="list-unstyled ps-2">
                      {xp.description.responsibilities.map((resp, i) => (
                        <li key={i} className="mb-2 d-flex align-items-start">
                          <span className="me-2 text-primary">▹</span>
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="col-12 col-lg-5">
                    <h5 className="h6 text-uppercase text-muted mb-3">
                      Skills
                    </h5>
                    <div className="d-flex flex-wrap gap-2">
                      {xp.description.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="badge rounded-pill text-bg-light border"
                          style={{ fontSize: "0.875em" }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
