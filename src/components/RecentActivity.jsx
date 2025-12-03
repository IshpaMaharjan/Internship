import React from "react";

const recentActivities = [
  { id: 1, icon: "🔵", text: "You added a new connection: Sujita Lama", time: "2 hours ago" },
  { id: 2, icon: "🟣", text: "You received a message from Pramesh Shrestha", time: "10 minutes ago" },
  { id: 3, icon: "🟢", text: "Your profile was viewed by 3 users", time: "Today" },
  { id: 4, icon: "🔶", text: "You updated your bio information", time: "Yesterday" },
  { id: 5, icon: "🔵", text: "Connection request accepted by Bikash Tamang", time: "3 days ago" },
];

export default function RecentActivity() {
  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg mb-10">
      <h2 className="text-2xl font-semibold text-white mb-4">Recent Activity</h2>

      <div className="max-h-64 overflow-y-auto pr-2 space-y-4">
        {recentActivities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-start gap-3 p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition"
          >
            <span className="text-2xl">{activity.icon}</span>
            <div>
              <p className="text-white text-sm">{activity.text}</p>
              <p className="text-gray-400 text-xs mt-1">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
