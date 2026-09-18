type SearchProps = {
    searchQuery: string,
    setSearchQuery: (value : string) => void
    department: string,
    setDepartment: (value : string) => void,
    role: string,
    setRole: (value : string) => void

}
const Search = ({searchQuery, setSearchQuery, department, setDepartment, role, setRole}:SearchProps) => {
  return (
    <div className="flex items-center gap-2 border border-gray-200 shadow-md p-4 rounded-md">
        <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search employees..." className="p-2 border border-gray-300 focus:outline-none focus:border-gray-400 rounded-md w-full" />
        <select name="department" value={department} onChange={(e) => setDepartment(e.target.value)} id="department" className="p-2 border border-gray-300 rounded-md">
            <option value="all">All Departments</option>
            <option value="Engineering">Engineering</option>
            <option value="Human Resources">Human Resources</option>
            <option value="Marketing">Marketing</option>
            <option value="Design">Design</option>
            <option value="Finance">Finance</option>
            <option value="Sales">Sales</option>
            <option value="Operations">Operations</option>
            <option value="Product">Product</option>
            <option value="IT">IT</option>
        </select>
        <select name="role" id="role" value={role} onChange={(e) => setRole(e.target.value)} className="p-2 border border-gray-300 rounded-md">
            <option value="all">All Roles</option>
            <option value="Frontend Developer">Frontend Developer</option>
            <option value="Backend Developer">Backend Developer</option>
            <option value="HR Manager">HR Manager</option>
            <option value="UI/UX Designer">UI/UX Designer</option>
            <option value="Sales Manager">Sales Manager</option>
            <option value="Product Manager">Product Manager</option>
            <option value="DevOps Engineer">DevOps Engineer</option>
            <option value="Marketing Specialist">Marketing Specialist</option>
            <option value="Accountant">Accountant</option>
        </select>
    </div>
  )
}

export default Search