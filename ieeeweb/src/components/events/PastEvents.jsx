import pastEvents from "../../data/pastEvents";

export default function PastEvents() {
  return (
    <section className="px-6 md:px-14 py-10">
      
      <h2 className="text-4xl font-bold text-blue-900 mb-12">
        Past Events
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {pastEvents.map((event) => (
          <div
            key={event.id}
            className="bg-[#c9d7f7] p-5 rounded-2xl shadow-md group"
          >

            {/* IMAGE WITH ZOOM EFFECT */}
            <div className="overflow-hidden rounded-xl">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-[360px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* TITLE */}
            <h3 className="text-[20px] font-bold text-center mt-5 text-[#1d2b6b] min-h-[60px]">
              {event.title}
            </h3>

            {/* SINGLE CENTER BUTTON */}
            <div className="flex justify-center mt-6">

              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:scale-105 transition">
                Gallery
              </button>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}