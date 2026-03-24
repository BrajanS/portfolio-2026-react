import { Link } from "react-router-dom";

function HeaderComponent() {
  return (
    <header id="accueil-Header">
      <span>Site Portefolio</span>
      <nav>
        <Link to={"/"}>ACCUEIL</Link>
        <Link to={"/portfolio"}>PORTFOLIO</Link>
      </nav>
    </header>
  );
}

export default HeaderComponent;
