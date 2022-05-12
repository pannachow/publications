import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer
      className="footer"
      style={{ backgroundColor: "#041421", padding: "3rem" }}
    >
      <div className="container">
        <div className="content has-text-centered">
          <div className="mb-1">
            <a href="https://github.com/pannachow">
              <FontAwesomeIcon icon={faCoffee} />
            </a>
          </div>
          <p className="is-size-6">
            <strong>Project</strong> by
            <a href="https://github.com/pannachow"> Panna Chow</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
