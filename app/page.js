import Analytics from './Components/Dashboard/Analytics';
import Headers from './Components/Dashboard/Headers'
import HomeCards from './Components/Dashboard/HomeCards';
import Metrics from './Components/Dashboard/Metrics';
export default function Home() {
  return (
    <div >
      <Headers route={"main-dashboard"} title={"Main Dashboard"} />
      <HomeCards/>
      <Metrics title="This Month"/>
      <Analytics/>
</div>
  );
}
