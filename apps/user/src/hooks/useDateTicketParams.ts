import { useSearchParams } from "react-router-dom";

interface Params {
  [key: string]: string;
}

const useDateTicketParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const univName = searchParams.get("univName") as string;
  const univId = searchParams.get("univId") as string;
  const eventId = searchParams.get("eventId") as string;

  const setParams = (newParams: Params) => {
    for (const key in newParams) {
      searchParams.set(key, newParams[key]);
    }
    setSearchParams(searchParams);
  };

  const setTicketParams = (eventId: string, showId: number) => {
    setParams({
      univName,
      univId,
      eventId,
      showId: showId.toString(),
    });
  };

  return {
    univName,
    univId,
    eventId,
    setTicketParams,
  };
};

export default useDateTicketParams;
