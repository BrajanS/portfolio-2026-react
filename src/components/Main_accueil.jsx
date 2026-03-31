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
            <ul>
              {data["parcous-pro"].map((parcoursData, index) => (
                <li key={index}>
                  <span>{parcoursData.position}</span>
                  <span>{parcoursData.date}</span>
                  <p>{parcoursData.lieu}</p>
                  <ul>
                    {parcoursData.taches.map((tache, tIndex) => (
                      <li key={tIndex}>{tache}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
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
          <div>
            <p>PROFIL PROFESSIONNEL</p>
            <span>{data["profil-pro"]}</span>
          </div>
          {/* COMPETENCES */}
          <div>
            <p>COMPETENCES</p>
            <ul>
              {data.competences.map((competence, index) => (
                <li key={index}>{competence}</li>
              ))}
            </ul>
          </div>
          {/* LANGUES */}
          <div>
            <p>LANGUES</p>
            <ul>
              {data.langues.map((langObj, index) => (
                <li key={index}>{langObj.langue}</li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}

export default MainComponent;
