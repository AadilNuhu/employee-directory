"use client";
type employeeFormProps = {
  onClose: () => void
}

const AddEmployee = ({ onClose }: employeeFormProps) => {
  const Roles = [
    "All Departments",
    "Engineering",
    "Human Resources",
    "Marketing",
    "Design",
    "Finance",
    "Sales",
    "Operations",
    "Product",
    "IT",
  ]

  const Departments = [
    "all",
    "Frontend Developer",
    "Backend Developer",
    "HR Manager",
    "UI/UX Designer",
    "Sales Manager",
    "Product Manager",
    "DevOps Engineer",
    "Marketing Specialist",
    "Accountant",
  ]
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-lg rounded-xl bg-white p-6 shadow-xl">

        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">
            Add Employee
          </h2>

          <button
            onClick={onClose}
            className="font-md cursor-pointer text-red-700 hover:text-red-500"
          >
            ✕
          </button>
        </div>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full name"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-500"
          />

          <input
            type="email"
            placeholder="Email"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-500"
          />

          <div className="flex gap-4">
            <div className="w-full">
              <p className="text-sm ml-2 text-gray-500">Select Role : </p>
              <select className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-500" name="roles" id="roles">
                {Roles.map((role) => (
                  <option value={role} className="px-4 py-3">{role}</option>
                ))}
              </select>
            </div>
            <div className="w-full">
              <p className="text-sm ml-2 text-gray-500">Select Department : </p>
              <select className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-500" name="roles" id="roles">
                {Departments.map((Dept) => (
                  <option value={Dept} className="px-4 py-3">{Dept}</option>
                ))}
              </select>

            </div>



          </div>

          <input
            type="text"
            placeholder="Phone (+233)"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-500"
          />

          <button
            type="submit"
            className="w-full rounded-lg cursor-pointer bg-green-600 px-4 py-3 font-medium text-white hover:bg-green-700"
          >
            Add Employee
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;