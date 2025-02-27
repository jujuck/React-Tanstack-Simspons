import SideMenu from "../components/SideMenu";
import CountryDetails from "../components/CountryDetails";

function OneCountry() {
  return (
    <main className="container-fluid">
      <div className="row">
        <SideMenu />
        <CountryDetails />
      </div>
    </main>
  );
}

export default OneCountry;
