import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <>
      <section>
        <header className="header">
          <span className="header__logo">
            Данила
          </span>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon"></span>
          </label>
          <ul className="menu">
            <li>
              <a href="#advantages">Преимущества</a> {/* Обновите эту ссылку */}
            </li>
            <li>
              <a href="#services">Перечень услуг</a> {/* Обновите эту ссылку */}
            </li>
            <li>
              <a href="#reviews">Отзовы</a> {/* Обновите эту ссылку */}
            </li>
            <li>
              <a href="#contacts">Контакты</a> {/* Обновите эту ссылку */}
            </li>
          </ul>
        </header>
      </section>
    </>
  );
};

export default Header;
