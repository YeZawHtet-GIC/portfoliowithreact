import React, { useState, useEffect } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import "./css/styleSwitcher.css";
import Aside from "./components/Aside";

function App() {
  const [isStyleSwitcherOpen, setIsStyleSwitcherOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const [activeStyle, setActiveStyle] = useState("color1");

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    const alternateStyles = document.querySelectorAll(".alternate-style");
    alternateStyles.forEach((style) => {
      const title = style.getAttribute("title");
      if (title === activeStyle) {
        style.removeAttribute("disabled");
      } else {
        style.setAttribute("disabled", "true");
      }
    });

    // Set the root variable here based on activeStyle
    document.documentElement.style.setProperty(
      "--skin-color",
      getSkinColor(activeStyle)
    );
  }, [activeStyle]);

  const getSkinColor = (style) => {
    switch (style) {
      case "color1":
        return "#37b182";
      case "color2":
        return "#ff5733";
      case "color3":
        return "#007bff";
      case "color4":
        return "#ffc107";
      case "color5":
        return "#8e44ad";
      default:
        return "#37b182";
    }
  };

  const toggleStyleSwitcher = () => {
    setIsStyleSwitcherOpen(!isStyleSwitcherOpen);
  };

  const hideStyleSwitcherOnScroll = () => {
    if (isStyleSwitcherOpen) {
      setIsStyleSwitcherOpen(false);
    }
  };

  const handleSetActiveStyle = (color) => {
    setActiveStyle(color);
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="main-container" onScroll={hideStyleSwitcherOnScroll}>
      <Aside />
      <div className="main-content">
        <Outlet />
      </div>
      <div className={`style-switcher ${isStyleSwitcherOpen ? "open" : ""}`}>
        <div
          className="style-switcher-toggler s-icon"
          onClick={toggleStyleSwitcher}
        >
          <i className="fas fa-cog fa-spin"></i>
        </div>
        <div className="day-night s-icon" onClick={toggleTheme}>
          <i className={`fas ${theme === "dark" ? "fa-sun" : "fa-moon"}`}></i>
        </div>
        <h4>Theme Colors</h4>
        <div className="colors">
          <span
            className="color-1"
            onClick={() => handleSetActiveStyle("color1")}
          ></span>
          <span
            className="color-2"
            onClick={() => handleSetActiveStyle("color2")}
          ></span>
          <span
            className="color-3"
            onClick={() => handleSetActiveStyle("color3")}
          ></span>
          <span
            className="color-4"
            onClick={() => handleSetActiveStyle("color4")}
          ></span>
          <span
            className="color-5"
            onClick={() => handleSetActiveStyle("color5")}
          ></span>
        </div>
      </div>
    </div>
  );
}

export default App;
