import { Route, Routes } from "react-router-dom";
import Header from "../blocks/header/header";
import Catalog from "../pages/catalog/catalog";
import Footer from "../blocks/footer/footer";
import MainPage from "../pages/main/main-page";
import { AppRoute } from "../../const";
import Form from "../pages/form/form";

export default function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path={AppRoute.Root} element={<MainPage />} />
      <Route path={AppRoute.Catalog} element={<Catalog />} />
      <Route path={AppRoute.Form} element={<Form />} />
    </Routes>
    <Footer />
  </>
  )
}
