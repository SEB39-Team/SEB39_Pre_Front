import * as S from './style';

export default function Pagination({ total, limit, page, setPage }) {
  let numPages = Math.ceil(total / limit);

  return (
    <S.Pagination>
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>
        prev
      </button>
      {Array(numPages)
        .fill()
        .map((_, i) => (
          <S.Button
            key={i + 1}
            onClick={() => setPage(i + 1)}
            aria-current={page === i + 1 ? 'page' : null}
          >
            {i + 1}
          </S.Button>
        ))}
      <button onClick={() => setPage(page + 1)} disabled={page === numPages}>
        next
      </button>
    </S.Pagination>
  );
}
