import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type SearchProps = {
  onChange: (value: string) => void;
};

export default function Search({ onChange }: SearchProps) {
  return (
    <div className="control has-icons-left has-icons-right">
      <input
        className="input is-medium"
        type="email"
        placeholder="Search"
        onChange={(e) => onChange(e.target.value)}
      />
      <span className="icon is-left">
        <FontAwesomeIcon icon={faSearch} />
      </span>
    </div>
  );
}
