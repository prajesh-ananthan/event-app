import {useRouter} from "next/router";
import {Fragment} from "react";
import ResultsTitle from "../../components/events/results-title";
import {getFilteredEvents} from "../../dummy-data";
import EventList from "../../components/events/event-list";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/events/error-alert";

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
    return (
      <Fragment>
        <ErrorAlert>
          <p>Invalid filter. Please adjust your values</p>
        </ErrorAlert>
        <div className="center">
          <Button link={"/events"}>Show all events</Button>
        </div>
      </Fragment>
    )
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth
  })

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>No events found for the chosen filter</p>
        </ErrorAlert>
        <div className="center">
          <Button link={"/events"}>Show all events</Button>
        </div>
      </Fragment>
    )
  }

  // The month starts from 0
  const date = new Date(numYear, numMonth - 1);

  return (
    <div>
      <ResultsTitle date={date}/>
      <EventList items={filteredEvents}/>
    </div>
  );
}

export default FilteredEventsPage;