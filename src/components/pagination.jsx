import _ from "lodash";
const Pagination = ({ pagesLenght, setPage, activePage }) => {
  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage < 1) {
        prevPage = pagesLenght;
      }

      return prevPage;
    });
  };

  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage > pagesLenght) {
        nextPage = 1;
      }

      return nextPage;
    });
  };

  return (
    <nav>
      <ul className="pagination d-flex justify-content-center mt-5" dir="rtl">
        <li className="page-item" onClick={prevPage}>
          <a className="page-link" href="#">
            قبلی
          </a>
        </li>
        {_.times(pagesLenght, (index) => {
          return (
            <li
              key={"pagination" + index}
              className={`page-item ${
                index + 1 === activePage ? "active" : ""
              }`}
              onClick={() => setPage(index + 1)}
            >
              <a href="#" className="page-link">
                {index + 1}
              </a>
            </li>
          );
        })}
        <li className="page-item" onClick={nextPage}>
          <a className="page-link" href="#">
            بعدی
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
