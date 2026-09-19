import { admin } from "@/data/mockUsers"

const page = () => {
  return (
    <div className="flex items-center justify-center p-9">
        <h3>Admin</h3>
        <div>
            <h5>{admin.name}</h5>
            <p>{admin.email}</p>
            <p>{admin.role}</p>
            <p>{admin.status}</p>
            <p>{admin.joined}</p>
        </div>
    </div>
  )
}

export default page