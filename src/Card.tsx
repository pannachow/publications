import { Publication } from "./api";

type CardProps = {
  publication: Publication;
};

export default function Card({ publication }: CardProps) {
  return (
    <div className="card" style={{ width: "320px" }}>
      <div className="card-image">
        <figure className="image is-4by3">
          <img
            src={`https://picsum.photos/320/240?random=${publication.id}`}
            alt="Publication"
          />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img src={`https://picsum.photos/200/200?random=${publication.id}`} alt="Author" />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">{publication.name}</p>
            <p className="subtitle is-6">Status: {publication.status}</p>
          </div>
        </div>

        <div className="content">
          <time dateTime={publication.created_on}>Created On: {publication.created_on}</time>
        </div>
      </div>
    </div>
  );
}
