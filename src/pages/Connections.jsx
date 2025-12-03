import React, { useState, useMemo } from "react";
import { useConnections } from "../context/ConnectionContext";
import ConnectionCard from "../components/ConnectionCard";

export default function Connections() {
  const { connections } = useConnections();

  const [searchTerm, setSearchTerm] = useState("");
  const [filterCompany, setFilterCompany] = useState("all");
  const [sortBy, setSortBy] = useState("recent");

  const list = useMemo(() => {
    let filtered = [...connections];

    // Search
    if (searchTerm) {
      filtered = filtered.filter((c) =>
        [c.name, c.title, c.company]
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      );
    }

    // Filter by company
    if (filterCompany !== "all") {
      filtered = filtered.filter(
        (c) => c.company.toLowerCase() === filterCompany.toLowerCase()
      );
    }

    // Sorting
    switch (sortBy) {
      case "name":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "company":
        filtered.sort((a, b) => a.company.localeCompare(b.company));
        break;
      default:
        filtered.sort(
          (a, b) => new Date(b.dateAdded) - new Date(a.dateAdded)
        );
    }

    return filtered;
  }, [connections, searchTerm, filterCompany, sortBy]);

  return (
    <div className="p-6">
      <h3 className="text-xl font-semibold text-white mb-4">Connections</h3>

      {/* Filter Row */}
      <div className="flex flex-wrap gap-3 mb-6">
        {/* Search */}
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search..."
          className="px-4 py-2 rounded bg-gray-800 text-white w-64"
        />

        {/* Filter by Company */}
        <select
          className="px-4 py-2 rounded bg-gray-800 text-white"
          value={filterCompany}
          onChange={(e) => setFilterCompany(e.target.value)}
        >
          <option value="all">All Companies</option>
          <option value="TechCorp">TechCorp</option>
          <option value="DesignHub">DesignHub</option>
          <option value="NepalBiz">NepalBiz</option>
        </select>

        {/* Sort */}
        <select
          className="px-4 py-2 rounded bg-gray-800 text-white"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="recent">Most Recent</option>
          <option value="name">Name (A–Z)</option>
          <option value="company">Company</option>
        </select>
      </div>

      {/* Connection List */}
      <div className="bg-gray-800 rounded-lg text-white border border-gray-700">
        {list.length ? (
          list.map((c) => <ConnectionCard key={c.id} connection={c} />)
        ) : (
          <div className="p-6 text-center text-gray-400">
            No connections found
          </div>
        )}
      </div>
    </div>
  );
}
