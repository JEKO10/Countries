import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function CountryDetails() {
  const { alpha3Code } = useParams();
  const [country, setCountry] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/alpha/${alpha3Code}`
      );
      const data = await response.json();
      setCountry(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [alpha3Code]);

  return (
    <>
      <section>
        {country.map((c) => {
          console.log(c);
          return (
            <div key={c.ccn3} className="details">
              <div className="flag">
                <Link to="/" id="back">
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    className="bi bi-arrow-left"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.854 4.646a.5.5 0 0 1 0 .708L3.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M2.5 8a.5.5 0 0 1 .5-.5h10.5a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                    />
                  </svg>
                  <span>Back</span>
                </Link>
                <img src={c.flags.svg} alt="IMG" />
              </div>
              <div>
                <h1>AA</h1>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}

export default CountryDetails;
