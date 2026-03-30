import data from "../data/data_cv.json";

function MainComponent() {
  return (
    <main id="accueil-Main">
      <div>
        <section id="cv-main">
          {/* FORMATIONS */}
          <div>
            <p>FORMATION</p>
            <ul>
              {data.formation.map((formationData, index) => (
                <li key={index}>
                  <p>{formationData.titre}</p>
                  <span>{formationData.date}</span>
                  <span>{formationData.lieu}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* PARCOURS PRO */}
          <div>
            <p>PARCOURS PROFESSIONNEL</p>
            <ul></ul>
          </div>
        </section>
        <section id="cv-info">
          {/* INFO PER */}
          <div>{data.moi.identite}</div>
          {/* PERMI */}
          <div>
            <p>PERMIS</p>
            <span>Permis B: {data.permis["Permi B"]}</span>
          </div>
          {/* PERSONALITÉ */}
          <div></div>
          {/* COMPETENCES */}
          <div></div>
          {/* LANGUES */}
          <div></div>
        </section>
      </div>
    </main>
  );
}

export default MainComponent;
