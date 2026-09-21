import { admin } from "@/data/mockUsers";

const page = () => {
  return (
    <div className="min-h-screen bg-white p-6 md:p-10">
      <div className="mx-auto max-w-2xl">
        {/* Header */}
        <div className="mb-8">
          <p className="mb-2 text-sm font-medium text-green-600">
            Dashboard
          </p>
          <h3 className="text-3xl font-bold text-black">Admin</h3>
          <p className="mt-2 text-gray-500">
            Manage your administrator profile and account details.
          </p>
        </div>

        {/* Admin Card */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
          {/* Profile Header */}
          <div className="flex items-center gap-4 border-b border-gray-100 pb-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-xl font-bold text-white">
              {admin.name.charAt(0).toUpperCase()}
            </div>

            <div>
              <h5 className="text-xl font-semibold text-black">
                {admin.name}
              </h5>
              <p className="text-sm text-gray-500">{admin.email}</p>
            </div>
          </div>

          {/* Admin Details */}
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <div>
              <p className="text-sm text-gray-500">Role</p>
              <p className="mt-1 font-medium text-black">{admin.role}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Status</p>
              <span className="mt-1 inline-flex rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                {admin.status}
              </span>
            </div>

            <div>
              <p className="text-sm text-gray-500">Joined</p>
              <p className="mt-1 font-medium text-black">{admin.joined}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;