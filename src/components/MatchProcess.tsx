export default function MatchProcess() {
  return (
    <section className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            The Match Process
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Fair, private, and exciting — here&apos;s how matches work.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-surface to-pink-50 rounded-2xl p-8 sm:p-10">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Select Your Matches</h3>
                  <p className="text-gray-600">
                    After the event, you&apos;ll receive a private link to select the people you&apos;d like
                    to connect with. Take your time — there&apos;s no pressure.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Mutual Matches Only</h3>
                  <p className="text-gray-600">
                    Only when <strong>both</strong> participants select each other will contact
                    information be shared. One-sided selections remain completely private.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Privacy Protected</h3>
                  <p className="text-gray-600">
                    Your personal details are never shared with non-matches. We respect your
                    privacy at every step of the process.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-white/80 rounded-xl border border-pink-200">
              <p className="text-sm text-gray-600 text-center">
                <span className="font-semibold text-primary">Note:</span> Match results are
                typically shared within 24-48 hours after the event via email.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
