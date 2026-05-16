import upcomingEvents from "../../data/upcomingEvents";

export default function UpcomingEvents() {
  return (
    <section className="px-6 md:px-14 py-10 mt-6">

      <h2 className="text-4xl font-bold text-blue-900 mb-12">
        Upcoming Events
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {upcomingEvents.map((event) => (
          <div
            key={event.id}
            className="bg-[#c9d7f7] p-5 rounded-2xl shadow-md"
          >

            {/* IMAGE ZOOM WRAPPER */}
            <div className="overflow-hidden rounded-xl group">

              <img
                src={event.image}
                alt={event.title}
                className="w-full h-[360px] object-cover transition-transform duration-500 group-hover:scale-110"
              />

            </div>

            {/* TITLE */}
            <h3 className="text-[20px] font-bold text-center mt-5 text-[#1d2b6b] min-h-[90px]">
              {event.title}
            </h3>

            {/* BUTTONS */}
            <div className="flex justify-between mt-6">

              <button className="bg-blue-800 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
                {event.button1}
              </button>

              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
                {event.button2}
              </button>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}