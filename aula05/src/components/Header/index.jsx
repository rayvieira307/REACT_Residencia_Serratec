import React from "react";
import * as styles from "./Header.module.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h2>Empresa XPTO LTDA</h2>
      <div className={styles.menu}>
        <nav>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/empresa">Empresa</Link></li>
          <li><Link to="/contato">Contato</Link></li>
          <li> <Link to="/sobre">Sobre</Link></li>

        </nav>
      </div>
    </header>
  );
}