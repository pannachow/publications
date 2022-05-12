import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PublicationStatus } from "../api";

type FilterProps = {
  onChange: (filter: "all" | PublicationStatus) => void;
};

export default function Filter({ onChange }: FilterProps) {
  return (
    <div className="control has-icons-left">
      <div className="select">
        <select
          placeholder="Status"
          defaultValue="all"
          onChange={(e) =>
            onChange(e.target.value as "all" | PublicationStatus)
          }
        >
          <option value="all">All</option>
          <option value="draft">Draft</option>
          <option value="offline">Offline</option>
          <option value="published">Published</option>
        </select>
      </div>
      <div className="icon is-left">
        <FontAwesomeIcon icon={faFilter} />
      </div>
    </div>
  );
}
