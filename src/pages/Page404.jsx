import { Link } from "react-router-dom";

export default function Page404() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ color: "red", fontSize: "40px" }}>
        Erreur 404: Page inéxistante
      </h1>
      <Link style={{ fontSize: "32px", fontWeight: "bold" }} to="/">
        Accueil
      </Link>
    </div>
  );
}
