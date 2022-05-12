import { useEffect } from "react";
import { Publication } from "../api";

type ModalProps = {
  onClose: () => void;
  publication: Publication;
};

export default function Modal({ onClose, publication }: ModalProps) {
  // close modal with escape key
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  return (
    <div className="modal is-active">
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title is-multiline">{publication.id}</p>
          <button
            className="delete"
            aria-label="close"
            onClick={onClose}
          ></button>
        </header>
        <section className="modal-card-body">
          <h1 className="title">{publication.name}</h1>
          <figure className="image is-4by3 block">
            <img
              src={`https://picsum.photos/320/240?random=${publication.id}`}
              alt="Publication"
            />
          </figure>
          <div className="block">
            <p>
              Identifier: <b>{publication.identifier}</b>
            </p>
            <p>
              Status: <b>{publication.status}</b>
            </p>
            <p>
              Category: <b>{publication.category}</b>
            </p>
            <p>
              Level: <b>{publication.level}</b>
            </p>
            <p>
              Created On: <b>{publication.created_on}</b>
            </p>
            <p>
              Modified On: <b>{publication.modified_on}</b>
            </p>
            <p>Options:</p>
            <pre>{JSON.stringify(publication.options, null, 4)}</pre>
          </div>
        </section>
        <footer className="modal-card-foot">
          <button className="button" onClick={onClose}>
            Close
          </button>
        </footer>
      </div>
    </div>
  );
}
