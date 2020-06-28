import HomePage from "../pages/home.jsx";
import MenuPage from "../pages/menu";
import QrReaderPage from "../pages/qrReader";
import SettingPage from "../pages/setting";
import MapPage from "../pages/mapPage";

var routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/qrReader/",
    component: QrReaderPage,
  },
  {
    path: "/menu/:id",
    component: MenuPage,
  },
  {
    path: "/setting/",
    component: SettingPage,
  },
  {
    path: "/map/",
    component: MapPage,
  },
];

export default routes;
