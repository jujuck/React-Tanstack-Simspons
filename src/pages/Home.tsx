import { useLoaderData } from "react-router-dom";
import CountryCard from "../components/CountryCard";
import { Country } from "../services/country";

function Home() {
  const countries = useLoaderData();
  console.log(countries);
  return (
    <main className="container">
      <section>
        <h3 className="text-center">Gallerie de pays</h3>
        <h5 className="text-center">
          Cliquez sur une carte pour plus de détails
        </h5>
      </section>
      <section className="row">
        {countries.map((country: Country) => (
          <CountryCard country={country} key={country.name.common} />
        ))}
      </section>
    </main>
  );
}

export default Home;
