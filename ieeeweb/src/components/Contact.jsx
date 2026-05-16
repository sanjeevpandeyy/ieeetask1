export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#e6f0fa] min-h-screen flex flex-col items-center justify-center p-6 md:p-10 pt-10"
    >
      <div className="max-w-6xl w-full mx-auto flex flex-col items-center">

        {/* TITLE */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1d3b8a] mb-3">
            Reach Out To Us
          </h2>

          <div className="flex items-center justify-center mt-[16px]">

        

<img
  src="https://ieeergpv.in/devider.png"
  alt="divider"
  className="w-[200px] h-20 mx-[14px] -mt-4"
/>

</div>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 w-full items-center">

          {/* LEFT INFO */}
          <div className="lg:col-span-5 flex flex-col gap-8">

            {/* Location */}
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow border">
                📍
              </div>

              <div>
                <h4 className="text-lg font-bold text-[#1d3b8a]">
                  Our Location
                </h4>
                <p className="text-sm text-gray-600">
                  UIT RGPV Bhopal, M.P. 462033, India
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 bg-[#fffbeb] rounded-2xl flex items-center justify-center shadow border">
                ✉️
              </div>

              <div>
                <h4 className="text-lg font-bold text-[#1d3b8a]">
                  Email
                </h4>
                <p className="text-sm text-gray-600">
                  ieeestb1146@gmail.com
                </p>
              </div>
            </div>

          </div>

          {/* RIGHT FORM */}
          <div className="lg:col-span-7 w-full">
            <div className="bg-[#f0f6fc]/70 backdrop-blur-md border border-white/40 rounded-3xl p-6 md:p-10 shadow-sm">

              <form
                className="space-y-4"
                onSubmit={(e) => e.preventDefault()}
              >

                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-3 rounded-xl bg-white text-gray-700 outline-none focus:ring-2 focus:ring-blue-400"
                />

                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-xl bg-white text-gray-700 outline-none focus:ring-2 focus:ring-blue-400"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 rounded-xl bg-white text-gray-700 outline-none focus:ring-2 focus:ring-blue-400"
                />

                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 rounded-xl bg-white text-gray-700 outline-none focus:ring-2 focus:ring-blue-400"
                />

                <textarea
                  rows="4"
                  placeholder="Message"
                  className="w-full px-4 py-3 rounded-xl bg-white text-gray-700 outline-none resize-none focus:ring-2 focus:ring-blue-400"
                />

                <button
                  type="submit"
                  className="w-full bg-[#1e3a8a] hover:bg-[#162a65] text-white font-medium py-3 rounded-xl transition"
                >
                  Send Message
                </button>

              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
