"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

interface FormData {
  fullName: string;
  age: number;
  gender: string;
  profession: string;
  phone: string;
  email: string;
  city: string;
  interests: string;
  instagram: string;
  lookingFor: string;
  firstDate: string;
  threeWords: string;
  loveAtFirstSight: string;
  relationshipGoal: string;
  consent: boolean;
}

export default function RegistrationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setSubmitted(true);
      }
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <section id="register" className="py-20 sm:py-24 bg-gradient-to-br from-primary-dark to-primary">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="bg-white rounded-2xl p-10 shadow-xl">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Registration Successful!</h3>
            <p className="text-gray-600">
              Thank you for registering! You&apos;ll receive a confirmation email shortly with
              payment details and event information.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="register" className="py-20 sm:py-24 bg-gradient-to-br from-primary-dark to-primary">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Register Now
          </h2>
          <p className="text-pink-200 text-lg">
            Secure your spot at the next Momentum Amore event.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white rounded-2xl p-6 sm:p-10 shadow-xl space-y-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                {...register("fullName", { required: "Full name is required" })}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                placeholder="Your full name"
              />
              {errors.fullName && (
                <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Age *
              </label>
              <input
                type="number"
                {...register("age", {
                  required: "Age is required",
                  min: { value: 21, message: "Must be at least 21" },
                  max: { value: 55, message: "Must be 55 or under" },
                })}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                placeholder="Your age"
              />
              {errors.age && (
                <p className="text-red-500 text-xs mt-1">{errors.age.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Gender *
              </label>
              <select
                {...register("gender", { required: "Please select your gender" })}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              {errors.gender && (
                <p className="text-red-500 text-xs mt-1">{errors.gender.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Profession *
              </label>
              <input
                type="text"
                {...register("profession", { required: "Profession is required" })}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                placeholder="e.g. Software Engineer"
              />
              {errors.profession && (
                <p className="text-red-500 text-xs mt-1">{errors.profession.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: { value: /^[6-9]\d{9}$/, message: "Enter a valid 10-digit number" },
                })}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                placeholder="10-digit number"
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: { value: /^\S+@\S+\.\S+$/, message: "Enter a valid email" },
                })}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                placeholder="you@email.com"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                City *
              </label>
              <input
                type="text"
                {...register("city", { required: "City is required" })}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                placeholder="Your city"
              />
              {errors.city && (
                <p className="text-red-500 text-xs mt-1">{errors.city.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Instagram (optional)
              </label>
              <input
                type="text"
                {...register("instagram")}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                placeholder="@yourhandle"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Interests / Hobbies *
            </label>
            <textarea
              {...register("interests", { required: "Please share some interests" })}
              rows={3}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition resize-none"
              placeholder="Tell us about your hobbies and what you enjoy..."
            />
            {errors.interests && (
              <p className="text-red-500 text-xs mt-1">{errors.interests.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              What are you looking for in a match? *
            </label>
            <textarea
              {...register("lookingFor", { required: "This field is required" })}
              rows={3}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition resize-none"
              placeholder="Tell us what you're looking for..."
            />
            {errors.lookingFor && (
              <p className="text-red-500 text-xs mt-1">{errors.lookingFor.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Describe your favorite 1st date *
            </label>
            <textarea
              {...register("firstDate", { required: "This field is required" })}
              rows={3}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition resize-none"
              placeholder="Paint us a picture..."
            />
            {errors.firstDate && (
              <p className="text-red-500 text-xs mt-1">{errors.firstDate.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Describe yourself in 3 words *
            </label>
            <input
              type="text"
              {...register("threeWords", { required: "This field is required" })}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
              placeholder="e.g. Adventurous, Caring, Funny"
            />
            {errors.threeWords && (
              <p className="text-red-500 text-xs mt-1">{errors.threeWords.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Do you believe in love at first sight? *
            </label>
            <select
              {...register("loveAtFirstSight", { required: "Please select an option" })}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
            >
              <option value="">Select...</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            {errors.loveAtFirstSight && (
              <p className="text-red-500 text-xs mt-1">{errors.loveAtFirstSight.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Are you looking for a serious relationship or casual dating? *
            </label>
            <select
              {...register("relationshipGoal", { required: "Please select an option" })}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
            >
              <option value="">Select...</option>
              <option value="serious">Serious relationship</option>
              <option value="casual">Casual dating</option>
              <option value="open">Open to either</option>
            </select>
            {errors.relationshipGoal && (
              <p className="text-red-500 text-xs mt-1">{errors.relationshipGoal.message}</p>
            )}
          </div>

          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="consent"
              {...register("consent", { required: "You must agree to proceed" })}
              className="mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
            />
            <label htmlFor="consent" className="text-sm text-gray-600">
              I agree to the event rules, code of conduct, and privacy policy. I confirm that I am
              single and of legal age to attend this event. *
            </label>
          </div>
          {errors.consent && (
            <p className="text-red-500 text-xs">{errors.consent.message}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-primary text-white rounded-lg font-semibold text-lg hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Submitting..." : "Register & Proceed to Payment"}
          </button>

          <p className="text-xs text-gray-500 text-center">
            You&apos;ll be redirected to our secure payment page after registration.
          </p>
        </form>
      </div>
    </section>
  );
}
