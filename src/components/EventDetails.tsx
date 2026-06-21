const details = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Venue",
    content: "Grimaldi's North Domain, 11700 Domain Blvd #148, Austin, TX 78758",
    sub: "",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "Date & Time",
    content: "Sunday, August 2, 2026 — 6:00 PM to 9:00 PM",
    sub: "",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Parking",
    content: "Purple garage @ Domain",
    sub: "",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
      </svg>
    ),
    title: "Dress Code",
    content: "Look your best!",
    sub: "",
  },
];

const schedule = [
  { time: "6:00 PM", event: "Doors Open" },
  { time: "7:00 PM", event: "Speed Dating Rounds Begin" },
  { time: "8:00 PM", event: "Food Served" },
  { time: "8:30 PM", event: "Final Connections" },
  { time: "9:00 PM", event: "Event Ends" },
];

const ageGroups = [
  { range: "18–29", label: "Open to all singles aged 18–29" },
];

export default function EventDetails() {
  return (
    <section id="details" className="py-20 sm:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Event Details
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about the upcoming event.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {details.map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                {item.icon}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{item.title}</h3>
                <p className="text-gray-700">{item.content}</p>
                {item.sub && <p className="text-sm text-gray-500 mt-1">{item.sub}</p>}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Event Schedule</h3>
            <div className="space-y-4">
              {schedule.map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-20 text-sm font-semibold text-primary">
                    {item.time}
                  </div>
                  <div className="flex-1 bg-white rounded-lg px-4 py-3 shadow-sm">
                    <span className="text-gray-800">{item.event}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Age Categories</h3>
            <div className="space-y-4">
              {ageGroups.map((group) => (
                <div
                  key={group.range}
                  className="bg-white rounded-xl p-5 shadow-sm flex items-center gap-4"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-pink-400 flex items-center justify-center text-white font-bold text-sm">
                    {group.range}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{group.label}</p>
                    <p className="text-sm text-gray-500">Ages {group.range}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-white rounded-xl p-6 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-2">Ticket Price</h4>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-primary">$25</span>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                Includes welcome drinks, snacks, and all event activities
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
