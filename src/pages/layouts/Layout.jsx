// import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { useRef } from "react";
import "./styles.css";

export default function Layout() {
  const location = useLocation();

  const nodeRef = useRef(null);
  return (
    <div>
      <Navbar />
      <SwitchTransition>
        <CSSTransition
          timeout={200}
          classNames="fade"
          key={location.pathname}
          nodeRef={nodeRef}
        >
          <div className="max-w-6xl mx-auto p-3" ref={nodeRef}>
            <Outlet />
          </div>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
}
