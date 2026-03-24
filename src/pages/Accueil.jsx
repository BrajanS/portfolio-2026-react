import HeaderComponent from "../components/Header_accueil";
import MainComponent from "../components/Main_accueil";

export default function Accueil() {
  return (
    <div style={{ textAlign: "center" }}>
      <HeaderComponent />
      <MainComponent />
    </div>
  );
}
