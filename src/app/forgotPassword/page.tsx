import Link from "next/link";

export default function ForgotPassword() {
  return (
    <div className="min-h-screen sm:w-[60%] mx-auto flex items-center justify-center flex-col px-4">
      <h1 className="flex flex-col items-center text-xl font-bold tracking-tight">
        Reset Password
      </h1>
      <form action="">
        <label htmlFor="password" className="text-sm font-medium">
          Email
        </label>
        <input
          type="email"
          id="password"
          className="input bg-transparent w-full rounded-md border border-gray-300 mt-1 mb-3 focus-visible:ring-1 focus-visible:ring-(--primary-red) "
        />
        <button
          type="submit"
          className="btn w-full bg-(--primary-red) hover:bg-(--primary-red)/90 border-none shadow-none rounded-md text-sm font-medium mb-3"
        >
          Send Reset Link
        </button>
      </form>
      <Link href="/signin" className="text-(--primary-red) text-sm font-medium">
        Back to login
      </Link>
    </div>
  );
}
