import "./style.css";
import img from '../../assets/img/logo.svg';

function Header() {
  return (
    <>
      <header>
        <div className="dsmeta-logo-container">
          <img src={img} alt="DSMeta" />
          <h1>DSMeta</h1>
          <p>
            Desenvolvido por
            <a href="https://www.instagram.com/thallyscezar" target="_blank">
              @thallyscezar.ig
            </a>
          </p>
        </div>
      </header>
    </>
  );
}

export default Header;
