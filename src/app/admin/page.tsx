"use client";

import { useEffect, useState } from "react";

interface Registration {
  id: string;
  fullName: string;
  age: number;
  gender: string;
  profession: string;
  phone: string;
  email: string;
  city: string;
  interests: string;
  instagram?: string;
  relationshipStatus: string;
  registeredAt: string;
}

export default function AdminPage() {
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/register")
      .then((res) => res.json())
      .then((data) => {
        setRegistrations(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const exportCSV = () => {
    if (registrations.length === 0) return;

    const headers = ["ID", "Name", "Age", "Gender", "Profession", "Phone", "Email", "City", "Interests", "Instagram", "Status", "Registered At"];
    const rows = registrations.map((r) => [
      r.id, r.fullName, r.age, r.gender, r.profession, r.phone, r.email, r.city, r.interests, r.instagram || "", r.relationshipStatus, r.registeredAt,
    ]);

    const csv = [headers, ...rows].map((row) => row.map((cell) => `"${cell}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `registrations-${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-gray-600 mt-1">
              {registrations.length} registration{registrations.length !== 1 ? "s" : ""}
            </p>
          </div>
          <button
            onClick={exportCSV}
            className="px-4 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors"
          >
            Export CSV
          </button>
        </div>

        {loading ? (
          <div className="text-center py-20 text-gray-500">Loading...</div>
        ) : registrations.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-xl shadow-sm">
            <p className="text-gray-500">No registrations yet.</p>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="px-4 py-3 text-left font-medium text-gray-600">Name</th>
                    <th className="px-4 py-3 text-left font-medium text-gray-600">Age</th>
                    <th className="px-4 py-3 text-left font-medium text-gray-600">Gender</th>
                    <th className="px-4 py-3 text-left font-medium text-gray-600">Profession</th>
                    <th className="px-4 py-3 text-left font-medium text-gray-600">Phone</th>
                    <th className="px-4 py-3 text-left font-medium text-gray-600">Email</th>
                    <th className="px-4 py-3 text-left font-medium text-gray-600">City</th>
                    <th className="px-4 py-3 text-left font-medium text-gray-600">Instagram</th>
                    <th className="px-4 py-3 text-left font-medium text-gray-600">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {registrations.map((r) => (
                    <tr key={r.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900">{r.fullName}</td>
                      <td className="px-4 py-3 text-gray-700">{r.age}</td>
                      <td className="px-4 py-3 text-gray-700 capitalize">{r.gender}</td>
                      <td className="px-4 py-3 text-gray-700">{r.profession}</td>
                      <td className="px-4 py-3 text-gray-700">{r.phone}</td>
                      <td className="px-4 py-3 text-gray-700">{r.email}</td>
                      <td className="px-4 py-3 text-gray-700">{r.city}</td>
                      <td className="px-4 py-3 text-gray-700">{r.instagram || "—"}</td>
                      <td className="px-4 py-3 text-gray-500">
                        {new Date(r.registeredAt).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
