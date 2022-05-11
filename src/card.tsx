/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/img-redundant-alt */
export default function Card({ publication }: any) {
  return (
    <div className="card" style={{ width: "300px" }}>
      <div className="card-image">
        <figure className="image is-4by3">
          <img
            src="https://picsum.photos/seed/picsum/200/300?random=1"
            alt="Placeholder image"
          />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img
                src="https://picsum.photos/200/300?random=2"
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">{publication.name}</p>
            <p className="subtitle is-6">Status: {publication.status}</p>
          </div>
        </div>

        <div className="content">
          <time dateTime="2016-1-1">Created On: {publication.created_on}</time>
        </div>
      </div>
    </div>
  );
}
