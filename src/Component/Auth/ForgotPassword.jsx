import { Link } from "react-router-dom";

function ForgotPassword() {
  return (
    <div className="flex min-h-screen mt-20 items-center p-4 justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-800">
          Forgot Password?
        </h2>
        <p className="mb-6 text-center text-sm text-gray-600">
          Enter your email below and we'll send you a link to reset your
          password.
        </p>

        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Email Address
            </label>
            <input
              type="email"
              className="mt-1 w-full rounded-lg border border-gray-300 p-3 text-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-200"
              placeholder="Enter your email"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-500 p-3 text-white hover:bg-blue-600"
          >
            Send Reset Link
          </button>

          <p className="mt-4 text-center text-sm text-gray-600">
            Remember your password?{" "}
            <Link to="/" className="text-blue-500 hover:underline">
              Login here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
export default ForgotPassword;
