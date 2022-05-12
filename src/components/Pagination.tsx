type PaginationProps = {
  count: number;
  page: number;
  total: number;
  onClick: (page: number) => void;
};

/* eslint-disable jsx-a11y/anchor-is-valid */
export default function Pagination({
  count,
  page,
  total,
  onClick,
}: PaginationProps) {
  // Ref: https://bulma.io/documentation/components/pagination/
  const pages = Math.ceil(total / count);

  return (
    <nav className="pagination" role="navigation" aria-label="pagination">
      <ul className="pagination-list">
        {pages > 5 && page > 2 && (
          <li>
            <a
              className="pagination-link has-text-light"
              aria-label="Goto page 1"
              onClick={() => onClick(1)}
            >
              1
            </a>
          </li>
        )}
        {pages > 5 && page > 3 && (
          <li>
            <span className="pagination-ellipsis">&hellip;</span>
          </li>
        )}
        {page > 1 && (
          <li>
            <a
              className="pagination-link has-text-light"
              aria-label={`Goto page ${page - 1}`}
              onClick={() => onClick(page - 1)}
            >
              {page - 1}
            </a>
          </li>
        )}

        <li>
          <a
            className="pagination-link is-current"
            aria-label={`Page ${page}`}
            aria-current="page"
          >
            {page}
          </a>
        </li>
        {page < pages && (
          <li>
            <a
              className="pagination-link has-text-light"
              aria-label={`Goto page ${page + 1}`}
              onClick={() => onClick(page + 1)}
            >
              {page + 1}
            </a>
          </li>
        )}
        {pages > 5 && page < pages - 2 && (
          <li>
            <span className="pagination-ellipsis">&hellip;</span>
          </li>
        )}
        {pages > 5 && page < pages - 1 && (
          <li>
            <a
              className="pagination-link has-text-light"
              aria-label={`Goto page ${pages}`}
              onClick={() => onClick(pages)}
            >
              {pages}
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
}
