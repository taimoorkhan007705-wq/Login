import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("User");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password, role });
    alert("Login clicked (frontend only)");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        
        {/* Logo */}
        <div className="flex items-center justify-center mb-6">
          <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center text-white font-bold">
            ✔
          </div>
          <span className="ml-2 text-2xl font-bold text-gray-800">Verity</span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-teal-600">
          Welcome Back
        </h2>
        <p className="text-center text-gray-500 text-sm mt-1">
          Sign in to your account
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-xl border bg-gray-50 focus:ring-2 focus:ring-teal-400 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-xl border bg-gray-50 focus:ring-2 focus:ring-teal-400 outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {/* Role */}
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border bg-gray-50 focus:ring-2 focus:ring-teal-400 outline-none"
          >
            <option>User</option>
            <option>Reviewer</option>
            <option>Business</option>
            <option>Admin</option>
          </select>

          <button
            type="submit"
            className="w-full py-3 bg-teal-500 text-white font-semibold rounded-xl hover:bg-teal-600 transition"
          >
            Sign In
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 border-t"></div>
          <span className="px-3 text-sm text-gray-400">or</span>
          <div className="flex-1 border-t"></div>
        </div>

        {/* Social */}
        <div className="grid grid-cols-2 gap-3">
          <button className="border py-2 rounded-xl hover:bg-gray-50">
            Google
          </button>
          <button className="border py-2 rounded-xl hover:bg-gray-50">
            Facebook
          </button>
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Don’t have an account?{" "}
          <span className="text-teal-600 font-semibold cursor-pointer">
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
