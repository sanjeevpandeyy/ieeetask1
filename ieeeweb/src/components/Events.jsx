import UpcomingEvents from "./events/UpcomingEvents";
import PastEvents from "./events/PastEvents";

export default function Events() {
  return (
    <div className="bg-[#dfe4f3] min-h-screen py-10 ">
      <UpcomingEvents />
      <PastEvents />
    </div>
  );
}