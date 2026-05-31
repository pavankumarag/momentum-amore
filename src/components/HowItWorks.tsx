const steps = [
  {
    number: "01",
    title: "Register Online",
    description: "Fill out the registration form and complete payment to secure your spot.",
  },
  {
    number: "02",
    title: "Show Up & Mingle",
    description: "Arrive at the venue, enjoy welcome drinks, and get comfortable with ice breakers.",
  },
  {
    number: "03",
    title: "Speed Date",
    description: "Meet participants in timed rounds of 5-7 minutes each. Have fun, be yourself!",
  },
  {
    number: "04",
    title: "Select Your Matches",
    description: "After the event, submit your match preferences through our private portal.",
  },
  {
    number: "05",
    title: "Get Connected",
    description: "Only mutual matches receive each other's contact info. Your privacy is protected!",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Simple, fun, and respectful — here&apos;s how your evening unfolds.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-pink-200 -translate-x-1/2" />

          <div className="space-y-12 lg:space-y-16">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`flex flex-col lg:flex-row items-center gap-6 lg:gap-12 ${
                  i % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={`flex-1 ${i % 2 === 1 ? "lg:text-left" : "lg:text-right"}`}>
                  <div className={`bg-surface rounded-2xl p-6 sm:p-8 inline-block max-w-md ${i % 2 === 1 ? "" : "lg:ml-auto"}`}>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>

                <div className="relative z-10 flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-pink-400 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {step.number}
                  </div>
                </div>

                <div className="flex-1 hidden lg:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
