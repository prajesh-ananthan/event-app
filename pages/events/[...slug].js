import {useRouter} from "next/router";
import {getFilteredEvents} from "../../dummy-data";
import EventList from "../../components/events/event-list";

function FilteredEventsPage() {
  const router = useRouter();
  const filterData = router.query.slug;


  if (!filterData) {
    return <p className='center'>Loading....</p>
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  // Convert into number
  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (Number.isNaN(numYear) || isNaN(numMonth) ||
    2021 < numYear > 2030 || 1 < numYear > 12) {
    return <p>Invalid filter. Please adjust your values</p>
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth
  })

  if (!filteredEvents || filteredEvents.length === 0) {
    return <p>No events found</p>
  }

  return (
    <div>
      <EventList items={filteredEvents}/>
    </div>
  );
}

export default FilteredEventsPage;