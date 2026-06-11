export default function ResetPassword() {
  return (
    <div className="min-h-screen sm:w-[60%] mx-auto flex items-center justify-center flex-col px-4">
      <h1 className="flex flex-col items-center text-xl font-bold tracking-tight">
        Set New Password
      </h1>
      <form action="">
        <label htmlFor="password" className="text-sm font-medium">
          New Password
        </label>
        <input
          type="password"
          id="password"
          className="input bg-transparent w-full rounded-md border border-gray-300 mt-1 mb-3 focus-visible:ring-1 focus-visible:ring-(--primary-red) "
        />
        <label htmlFor="confirm-password" className="text-sm font-medium">
          Confirm Password
        </label>
        <input
          type="password"
          id="confirm-password"
          className="input bg-transparent w-full rounded-md border border-gray-300 mt-1 mb-3 focus-visible:ring-1 focus-visible:ring-(--primary-red) "
        />
        <button
          type="submit"
          className="btn w-full bg-(--primary-red) hover:bg-(--primary-red)/90 border-none shadow-none rounded-md text-sm font-medium mb-3"
        >
          Reset Password
        </button>
      </form>
    </div>
  );
}
