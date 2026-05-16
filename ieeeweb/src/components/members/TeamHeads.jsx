import teamHeads from "../../data/teamHeads";

export default function TeamHeads() {
  return (
    <section className="bg-[#e6f0fa] w-full p-6 md:p-12">

      <h2 className="text-2xl md:text-3xl font-bold text-[#1d3b8a] mb-10">
        IEEE Team Heads
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">

        {teamHeads.map((member) => (
          <div
            key={member.id}
            className="bg-[#f1f6fc]/80 border border-white/40 rounded-2xl p-5 w-full max-w-[270px] shadow-sm flex flex-col hover:shadow-md transition"
          >

            {/* IMAGE (ZOOM ADDED HERE) */}
            <div className="w-full aspect-square overflow-hidden rounded-xl bg-gray-200 border border-gray-100">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
              />
            </div>

            {/* INFO */}
            <div className="mt-4 text-left">
              <h4 className="text-lg font-bold text-[#1d3b8a]">
                {member.name}
              </h4>
              <p className="text-xs font-semibold text-gray-600 mt-0.5">
                {member.role}
              </p>
              <p className="text-[11px] text-gray-400 mt-1">
                Membership No - {member.membershipNo}
              </p>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}