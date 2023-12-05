import { useEffect, useState } from "react";
import Card from "./components/card";
import usePaginatedFetch from "./hooks/usePaginatedFetch";
import Pagination from "./components/pagination";

const url =
  "https://react-mini-projects-api.classbon.com/Programmer/programmers";
function App() {
  const [data, isLoading] = usePaginatedFetch(url, 2);
  const [page, setPage] = useState(1);
  const [programmers, setProgrammers] = useState([]);

  useEffect(() => {
    if (isLoading) return;
    setProgrammers(data[page - 1]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading, page]);

  return (
    <>
      <div className="container mt-5">
        {isLoading && (
          <div className="w-100 d-flex justify-content-center align-items.center">
            <div className="spinner-border">
              <span className="sr-only"></span>
            </div>
          </div>
        )}
        <div className="row">
          {!isLoading &&
            programmers.map(({ id, ...programmer }) => {
              return (
                <div className="col-3" key={id}>
                  <Card {...programmer} />
                </div>
              );
            })}
        </div>

        <div className="row">
          <Pagination
            pagesLenght={data.length}
            setPage={setPage}
            activePage={page}
          />
        </div>
      </div>
    </>
  );
}

export default App;
