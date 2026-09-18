import employees from "@/data/mockUsers"
import { Edit, Trash } from "lucide-react"
type SearchResult = {
    results: {
        id:number,
        name:string,
        email:string,
        role:string,
        department:string,
        phone:string
    }[]
}

const SearchResults = ({results} : SearchResult) => {
    return (
        <div className="mt-4 w-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
            <div className="grid grid-cols-[2fr_1.2fr_1fr_1fr] items-center gap-6 border-b border-gray-200 bg-gray-50 px-6 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
                <p>Employee</p>
                <p>Role</p>
                <p>Phone</p>
                <p className="text-right">Actions</p>
            </div>
            {results.map((employee) => (
                <div
                    key={employee.id}
                    className="grid grid-cols-[2fr_1.2fr_1fr_1fr] items-center gap-6 border-b border-gray-100 px-6 py-4 transition-colors last:border-b-0 hover:bg-gray-50"
                >
                    {/* Employee */}
                    <div className="flex items-center gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-600">
                            {employee.name.charAt(0)}
                        </div>

                        <div className="min-w-0">
                            Name
                            <p className="truncate font-semibold text-gray-900">
                                {employee.name}
                            </p>
                            <p className="truncate text-sm text-gray-500">
                                {employee.email}
                            </p>
                        </div>
                    </div>

                    {/* Role */}
                    <div>
                        <p className="text-sm font-medium text-gray-800">
                            {employee.role}
                        </p>

                        <p className="mt-1 text-xs text-gray-500">
                            {employee.department}
                        </p>
                    </div>

                    {/* Phone */}
                    <div>
                        <p className="text-sm text-gray-600">
                            {employee.phone}
                        </p>
                    </div>

                    {/* Actions */}
                    <div className="flex justify-end gap-2">
                        <button className="rounded-lg px-3 cursor-pointer py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-100 hover:text-gray-900">
                            <Edit />
                        </button>

                        <button className="rounded-lg px-3 cursor-pointer py-2 text-sm font-medium text-red-500 transition hover:bg-red-50 hover:text-red-600">
                            <Trash />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default SearchResults