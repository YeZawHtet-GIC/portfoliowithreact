import "./App.css";
import { Outlet } from "react-router-dom";
import "./css/color1.css";
import "./css/color2.css";
import "./css/color3.css";
import "./css/color4.css";
import "./css/color5.css";
import Aside from "./components/Aside";

function App() {
  return (
    <div className="main-container">
      <Aside />
      <Outlet />
      {/* <!-- === Style Switcher Start === --> */}
      <div class="style-switcher">
        <div class="style-switcher-toggler s-icon">
          <i class="fas fa-cog fa-spin"></i>
        </div>
        <div class="day-night s-icon">
          <i class="fas"></i>
        </div>
        <h4>Theme Colors</h4>
        <div class="colors">
          <span class="color-1" onclick="setActiveStyle('color-1')"></span>
          <span class="color-2" onclick="setActiveStyle('color-2')"></span>
          <span class="color-3" onclick="setActiveStyle('color-3')"></span>
          <span class="color-4" onclick="setActiveStyle('color-4')"></span>
          <span class="color-5" onclick="setActiveStyle('color-5')"></span>
        </div>
      </div>
      {/* <!-- === Style Switcher End === --> */}
    </div>
  );
}

export default App;
