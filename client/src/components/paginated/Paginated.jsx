import styles from "./paginated.module.css";

const Paginated = ({
  countryPerPage,
  countries,
  setCurrentPage,
  currentPage,
  setCountryPerPage,
}) => {
  let pageNumbers = [];

  for (let i = 1; i <= Math.ceil(countries / countryPerPage); i++) {
    pageNumbers.push(i);
  }

  if (currentPage !== 1) {
    setCountryPerPage(10);
  }
  if (currentPage === 1) {
    setCountryPerPage(9);
  }

  return (
    <div className={styles.background}>
      <div className={styles.paginated_container}>
        {pageNumbers.map((number, index) => {
          return (
            <button
              key={index}
              onClick={() => setCurrentPage(number)}
              className={number === currentPage ? styles.active : ""}
            >
              {number}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Paginated;
