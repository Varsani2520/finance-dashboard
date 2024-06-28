import Headers from "./Components/Headers";
import HomeCards from "./Components/HomeCards";
export default function Home() {
  return (
    <div>
      <Headers route={"main-dashboard"} title={"Main Dashboard"} />
      <HomeCards />
    </div>
  );
}
