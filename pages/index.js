import {getFeaturedEvents} from "../dummy-data";
import EventList from "../components/events/event-list";

function Home() {

  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      {/*Render EventList component*/}
      <EventList items={featuredEvents}/>
    </div>
  )
}

export default Home;