import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AuthPage = () => {
  const [mode, setMode] = useState("login"); // login | register | forgot
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    code: "",
  });
  const [generatedCode, setGeneratedCode] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (mode === "login") {
      alert(`Welcome back, ${formData.username || "User"}!`);
    } else if (mode === "register") {
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      alert(`Account created for ${formData.username}!`);
      setMode("login");
    } else if (mode === "forgot") {
      if (step === 1) {
        if (!formData.email) {
          alert("Please enter your registered Gmail ID!");
          return;
        }
        const code = Math.floor(100000 + Math.random() * 900000).toString();
        setGeneratedCode(code);
        alert(`A reset code has been sent to ${formData.email} (simulated): ${code}`);
        setStep(2);
      } else if (step === 2) {
        if (formData.code !== generatedCode) {
          alert("Incorrect code!");
          return;
        }
        alert("Code verified successfully!");
        setStep(3);
      } else if (step === 3) {
        if (formData.password !== formData.confirmPassword) {
          alert("Passwords do not match!");
          return;
        }
        alert("Password reset successful! You can now login.");
        setStep(1);
        setMode("login");
      }
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat p-6 relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      {/* Overlay for transparency */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

      {/* Auth Card */}
      <div className="relative w-full max-w-lg bg-white/20 backdrop-blur-2xl border border-white/30 rounded-2xl shadow-2xl overflow-hidden">
        <div className="p-8">
          <h2 className="text-3xl font-bold text-white text-center mb-6 drop-shadow-lg">
            {mode === "login"
              ? "Welcome Back!"
              : mode === "register"
              ? "Create Account"
              : "Forgot Password"}
          </h2>

          <AnimatePresence mode="wait">
            {/* LOGIN */}
            {mode === "login" && (
              <motion.form
                key="login"
                onSubmit={handleSubmit}
                initial={{ x: 80, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -80, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-5 text-white"
              >
                <div>
                  <label htmlFor="username" className="block text-sm font-medium text-gray-200 text-left">
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Enter your username"
                    required
                    className="mt-2 w-full px-4 py-2 bg-white/10 text-white border border-white/30 rounded-lg focus:ring-2 focus:ring-[#ebfeee] focus:outline-none placeholder-gray-300"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-200 text-left">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    required
                    className="mt-2 w-full px-4 py-2 bg-white/10 text-white border border-white/30 rounded-lg focus:ring-2 focus:ring-[#ebfeee] focus:outline-none placeholder-gray-300"
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={() => {
                      setMode("forgot");
                      setStep(1);
                    }}
                    className="text-sm text-[#ebfeee] hover:underline"
                  >
                    Forgot Password?
                  </button>
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-lg text-gray-900 text-lg font-semibold bg-[#d4fbdc] hover:bg-[#ebfeee] shadow-md transition-all duration-300"
                >
                  Login
                </button>
              </motion.form>
            )}

            {/* REGISTER */}
            {mode === "register" && (
              <motion.form
                key="register"
                onSubmit={handleSubmit}
                initial={{ x: -80, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 80, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-5 text-white text-left"
              >
                {["username", "email", "phone", "password", "confirmPassword"].map((id, i) => (
                  <div key={i}>
                    <label
                      htmlFor={id}
                      className="block text-sm font-medium text-gray-200 capitalize"
                    >
                      {id === "confirmPassword"
                        ? "Confirm Password"
                        : id === "email"
                        ? "Gmail"
                        : id === "phone"
                        ? "Phone Number"
                        : id.charAt(0).toUpperCase() + id.slice(1)}
                    </label>
                    <input
                      type={id.includes("password") ? "password" : id === "email" ? "email" : "text"}
                      id={id}
                      value={formData[id]}
                      onChange={handleChange}
                      placeholder={`Enter your ${
                        id === "confirmPassword"
                          ? "confirmation password"
                          : id === "phone"
                          ? "phone number"
                          : id
                      }`}
                      required
                      className="mt-2 w-full px-4 py-2 bg-white/10 text-white border border-white/30 rounded-lg focus:ring-2 focus:ring-[#ebfeee] focus:outline-none placeholder-gray-300"
                    />
                  </div>
                ))}

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-lg text-gray-900 text-lg font-semibold bg-[#d4fbdc] hover:bg-[#ebfeee] shadow-md transition-all duration-300"
                >
                  Register
                </button>
              </motion.form>
            )}

            {/* FORGOT PASSWORD */}
            {mode === "forgot" && (
              <motion.form
                key="forgot"
                onSubmit={handleSubmit}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-5 text-white text-left"
              >
                {step === 1 && (
                  <>
                    <p className="text-gray-200 text-sm text-center mb-4">
                      Enter your Gmail to receive a reset code.
                    </p>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your Gmail"
                      required
                      className="w-full px-4 py-2 bg-white/10 text-white border border-white/30 rounded-lg focus:ring-2 focus:ring-[#ebfeee] focus:outline-none placeholder-gray-300"
                    />
                    <button
                      type="submit"
                      className="w-full py-2.5 rounded-lg text-gray-900 text-lg font-semibold bg-[#d4fbdc] hover:bg-[#ebfeee] shadow-md transition-all duration-300"
                    >
                      Send Code
                    </button>
                  </>
                )}
                {step === 2 && (
                  <>
                    <p className="text-gray-200 text-sm text-center mb-4">
                      Enter the code sent to your Gmail.
                    </p>
                    <input
                      type="text"
                      id="code"
                      value={formData.code}
                      onChange={handleChange}
                      placeholder="Enter verification code"
                      required
                      className="w-full px-4 py-2 bg-white/10 text-white border border-white/30 rounded-lg focus:ring-2 focus:ring-[#ebfeee] focus:outline-none placeholder-gray-300"
                    />
                    <button
                      type="submit"
                      className="w-full py-2.5 rounded-lg text-gray-900 text-lg font-semibold bg-[#ebfeee] hover:bg-[#d4fbdc] shadow-md transition-all duration-300"
                    >
                      Verify Code
                    </button>
                  </>
                )}
                {step === 3 && (
                  <>
                    <p className="text-gray-200 text-sm text-center mb-4">
                      Enter your new password.
                    </p>
                    <input
                      type="password"
                      id="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="New password"
                      required
                      className="w-full px-4 py-2 bg-white/10 text-white border border-white/30 rounded-lg focus:ring-2 focus:ring-[#ebfeee] focus:outline-none placeholder-gray-300"
                    />
                    <input
                      type="password"
                      id="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="Confirm password"
                      required
                      className="w-full px-4 py-2 bg-white/10 text-white border border-white/30 rounded-lg focus:ring-2 focus:ring-[#ebfeee] focus:outline-none placeholder-gray-300"
                    />
                    <button
                      type="submit"
                      className="w-full py-2.5 rounded-lg text-gray-900 text-lg font-semibold bg-[#ebfeee] hover:bg-[#d4fbdc] shadow-md transition-all duration-300"
                    >
                      Reset Password
                    </button>
                  </>
                )}

                <div className="text-center mt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setMode("login");
                      setStep(1);
                    }}
                    className="text-[#ebfeee] hover:underline text-sm font-medium"
                  >
                    Back to Login
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>

          {/* Switch Login/Register */}
          {mode !== "forgot" && (
            <p className="text-sm text-gray-200 text-left mt-6">
              {mode === "login" ? (
                <>
                  Don’t have an account?{" "}
                  <button
                    onClick={() => setMode("register")}
                    className="text-[#ebfeee] hover:underline font-medium"
                  >
                    Register
                  </button>
                </>
              ) : (
                <>
                  Already have an account?{" "}
                  <button
                    onClick={() => setMode("login")}
                    className="text-[#ebfeee] hover:underline font-medium"
                  >
                    Login
                  </button>
                </>
              )}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
