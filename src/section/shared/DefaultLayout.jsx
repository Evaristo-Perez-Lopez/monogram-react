import Footer from "./Footer";
import Header from "./Header";
import NavTab from "./NavTab";
import { Outlet } from "react-router-dom";

function DefaultLayout() {
  return (
    <>
      <Header>
        <NavTab to={`/`}>home</NavTab>
        <NavTab to={`cards`}>cards</NavTab>
        <NavTab to={`/`}>about</NavTab>
      </Header>
      <main style={{ display: "block" }}>
        {" "}
        <Outlet />{" "}
      </main>
      <Footer />
    </>
  );
}
export default DefaultLayout;
