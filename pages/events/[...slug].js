import {useRouter} from "next/router";
import {getFilteredEvents} from "../../dummy-data";

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

  if (isNaN(numYear) || isNaN(numMonth) ||
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
      <h1>The FilteredEventsPage page</h1>
    </div>
  );
}

export default FilteredEventsPage;