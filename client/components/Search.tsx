
const Search = () => {
  return (
    <div className="flex items-center gap-2 border border-gray-200 shadow-md p-4 rounded-md">
        <input type="text" placeholder="Search employees..." className="p-2 border border-gray-300 focus:outline-none focus:border-gray-400 rounded-md w-full" />
        <select name="department" id="department" className="p-2 border border-gray-300 rounded-md">
            <option value="">All Departments</option>
            <option value="engineering">Engineering</option>
            <option value="sales">Sales</option>
            <option value="marketing">Marketing</option>
        </select>
        <select name="role" id="role" className="p-2 border border-gray-300 rounded-md">
            <option value="">All Roles</option>
            <option value="manager">Manager</option>
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
        </select>
    </div>
  )
}

export default Search