"use client"
import { useMemo, useState } from "react";
import Search from "@/components/Search";
import SearchResults from "@/components/SearchResults"
import employees from "@/data/mockUsers";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("")
  const [department, setDepartment] = useState("all");
  const [role, setRole] = useState("all");

  const filteredResults = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return employees.filter((employee) => {
      const matchesQuery =
        !query ||
        [employee.name, employee.email, employee.role, employee.department]
          .join(" ")
          .toLowerCase()
          .includes(query);

      const matchesDepartment =
        department === "all" ||
        employee.department.toLowerCase() === department.toLowerCase();

      const matchesRole =
        role === "all" || employee.role.toLowerCase() === role.toLowerCase();

      return matchesQuery && matchesDepartment && matchesRole;
    });
  }, [searchQuery, department, role]);
  return (
    <div className="py-10 px-6">
      <Search
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        department={department}
        setDepartment={setDepartment}
        role={role}
        setRole={setRole}
      />
      <SearchResults results={filteredResults} />
    </div>
  );
}
