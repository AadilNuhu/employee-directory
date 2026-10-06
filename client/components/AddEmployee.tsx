"use client";
import { useState } from "react";
import { Roles, Departments } from "@/data/mockUsers";
import api from "@/lib/axios";
type employeeFormProps = {
  onClose: () => void
}

const AddEmployee = ({ onClose }: employeeFormProps) => {
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  
  const [form, setForm] = useState({
    name: "",
    role: "",
    department: "",
    email: "",
    phone_number: "",
  })

  const handleChange =(e:React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const {name, value} = e.target

    setForm((pre) => ({
      ...pre,
      [name]:value
    }))
  }
  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    try{
      const res = await api.post("/employee", form)
      if(res.status === 201){
        setSuccess("Employee Added Successfully")
      }
      setTimeout(() => {
        setSuccess("")
        window.location.reload()
      }, 3000);
    } catch (error:any) {
      if (error.response?.status === 400) {
        setError("All fields are required")
      } else if (error.response?.status === 500) {
        setError("Internal Server Error")
      }else if (error.response?.status === 409) {
        setError("Employee Already Exists")
      }else if (error.response?.status === 404) {
        setError("Employee Not Found")
      }
      setTimeout(() => {
        setError("")
      }, 3000);
    }

  }
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-lg rounded-xl bg-white p-6 shadow-xl">
        {error && <div className="text-red-500 p-2 bg-red-200 rounded-md">{error}</div>}
        {success && <div className="text-green-500 p-2 bg-green-200 rounded-md">{success}</div>}

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

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            value={form.name}
            name="name"
            onChange={handleChange}
            placeholder="Full name"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-500"
          />

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-500"
          />

          <div className="flex gap-4">
            <div className="w-full">
              <p className="text-sm ml-2 text-gray-500">Select Role : </p>
              <select className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-500" name="role" value={form.role} onChange={handleChange} id="role">
                {Roles.map((role) => (
                  <option key={role} value={role} className="px-4 py-3">{role}</option>
                ))}
              </select>
            </div>

            <div className="w-full">
              <p className="text-sm ml-2 text-gray-500">Select Department : </p>
              <select className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-500" name="department" onChange={handleChange} value={form.department} id="department">
                {Departments.map((Dept) => (
                  <option key={Dept} value={Dept} className="px-4 py-3">{Dept}</option>
                ))}
              </select>
            </div>

          </div>

          <input
            type="text"
            name="phone_number"
            placeholder="Phone (+233)"
            required
            onChange={handleChange}
            value={form.phone_number}
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