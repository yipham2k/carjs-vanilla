import { html } from "./common/dom.utils";
import Navbar from "./components/Navbar";
import "./css/index.scss";
import PageNotFound from "./pages/PageNotFound";
import ProductPages from "./pages/ProductsPage";

function main() {
  const pathName = window.location.pathname;
  ("/product");
  const app = document.querySelector("#app");
  const mapView = {
    "/products": ProductPages,
  };

  const view = mapView[pathName] || PageNotFound;
  const content = html("<div>", Navbar(), view());
  console.log(content);
  app.append(content);
}

main();
