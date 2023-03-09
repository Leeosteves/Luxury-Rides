import "~/components/Header/styles.sass";
import Diamond from "~/assets/images/DIAMOND.png";

export const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <a href="/">
          <img src={Diamond} />
          Luxury Rides
        </a>
      </div>
      <nav className="header-nav">
        <ul>
          <a href="#home">Home</a>
          <a href="#cars">Cars</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>
          <a href="#cart">Shopping Cart</a>
        </ul>
      </nav>
      <form className="header-form">
        <input type="text" placeholder="Search cars" />
        <button type="submit">Search</button>
      </form>
      <button className="header-button">Login/Register</button>
    </div>
  );
};
