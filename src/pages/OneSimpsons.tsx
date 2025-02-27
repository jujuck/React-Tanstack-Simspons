import SideMenu from "../components/SideMenu";
import SimpsonsDetails from "../components/SimpsonsDetails";

function OneSimpsons() {
  return (
    <main className="container-fluid">
      <div className="row">
        <SideMenu />
        <SimpsonsDetails />
      </div>
    </main>
  );
}

export default OneSimpsons;
