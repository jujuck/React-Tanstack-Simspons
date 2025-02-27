import { Link } from "react-router-dom";
import type { Country } from "../services/country";

type props = {
  country: Country;
};

function CountryCard({ country }: props) {
  return (
    <article className="col-2 p-1">
      <Link
        className="card m-1 h-100 bg-lightgray"
        to={`/country/${country.ccn3}`}
      >
        <h2 className="text-center">{country.name.common}</h2>
        <img
          src={country.flags.png}
          alt={country.flags.alt}
          className="w-50 m-auto"
        />
      </Link>
    </article>
  );
}

export default CountryCard;
