import Cards from "../pages/Cards.jsx";
import App from "../App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "../section/shared/DefaultLayout.jsx";
function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<App />} />
          <Route path="cards" element={<Cards />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
