import React from 'react';
import styles from './pagination.module.scss';

const Pagination = ({ page, pages, changePage }) => {
  let middlePagination;
  if (pages <= 5) {
    middlePagination = [...Array(pages)].map((_, idx) => (
      <button
        key={idx + 1}
        onClick={() => changePage(idx + 1)}
        disabled={page === idx + 1}
      >
        {idx + 1}
      </button>
    ));
  } else {
    const startValue = Math.floor((page - 1) / 5) * 5;
    middlePagination = (
      <>
        {[...Array(5)].map((_, idx) => (
          <button
            key={startValue + idx + 1}
            disabled={page === startValue + idx + 1}
            onClick={() => changePage(startValue + idx + 1)}
          >
            {startValue + idx + 1}
          </button>
        ))}
        <button>...</button>
        <button onClick={() => changePage(pages)}>{pages}</button>
      </>
    );
    if (page > 5) {
      if (pages - page >= 5) {
        middlePagination = (
          <>
            <button onClick={() => changePage(1)}>1</button>
            <button>...</button>
            <button onClick={() => changePage(startValue)}>{startValue}</button>
            {[...Array(5)].map((_, idx) => (
              <button
                key={startValue + idx + 1}
                disabled={page === startValue + idx + 1}
                onClick={() => changePage(startValue + idx + 1)}
              >
                {startValue + idx + 1}
              </button>
            ))}
            <button>...</button>
            <button onClick={() => changePage(pages)}>{pages}</button>
          </>
        );
      } else {
        let amountLeft = pages - page + 5;
        middlePagination = (
          <>
            <button onClick={() => changePage(1)}>1</button>
            <button>...</button>
            <button onClick={() => changePage(startValue)}>{startValue}</button>
            {[...Array(amountLeft)].map((_, idx) => (
              <button
                style={
                  pages < startValue + idx + 1 ? { display: 'none' } : null
                }
                key={startValue + idx + 1}
                disabled={page === startValue + idx + 1}
                onClick={() => changePage(startValue + idx + 1)}
              >
                {startValue + idx + 1}
              </button>
            ))}
          </>
        );
      }
    }
  }
  return (
    pages > 1 && (
      <div className={styles.container}>
        <button
          className={styles.container__prevBtn}
          onClick={() => changePage((page) => page - 1)}
          disabled={page === 1}
        >
          &#171;
        </button>
        {middlePagination}
        <button
          className={styles.container__nextBtn}
          onClick={() => changePage(page + 1)}
          disabled={page === pages}
        >
          &#187;
        </button>
      </div>
    )
  );
};

export default Pagination;
