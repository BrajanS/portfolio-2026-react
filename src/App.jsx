import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // To make Routes with React
import Accueil from "./pages/Accueil.jsx";
import Page404 from "./pages/Page404.jsx";
// import { SnackbarProvider } from "notistack"; // Add-on for Notifications

function App() {
  return (
    <div id="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Accueil />}>
            Accueil route
          </Route>
          <Route path="*" element={<Page404 />}>
            404 page non trouvé route
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
