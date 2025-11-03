import React, { useState, useEffect } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (responseMsg) {
      const timer = setTimeout(() => {
        setResponseMsg("");
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [responseMsg]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMsg("");

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setIsSuccess(true);
        setResponseMsg("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // clear form
      } else {
        setIsSuccess(false);
        setResponseMsg(data.error || "Something went wrong.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setIsSuccess(false);
      setResponseMsg("Server not reachable. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#FFF8E1] text-[#004D40] flex items-center justify-center py-16 px-4">
      <div className="max-w-5xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold flex justify-center items-center gap-3 mb-3">
            <svg
              className="w-8 h-8 text-[#FFB300]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            >
              <path d="M4 4h16v12H4z" />
              <path d="M22 6l-10 7L2 6" />
            </svg>
            Contact Us
          </h1>
          <p className="text-[#004D40]/80 text-lg max-w-2xl mx-auto">
            Reach out to our team for inquiries, partnerships, or membership assistance.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-10 justify-center items-start">
          <div className="flex-1 bg-white p-8 rounded-xl border-4 border-[#004D40] shadow-[0_8px_24px_rgba(0,77,64,0.2)] hover:border-[#FFB300] hover:shadow-[0_20px_60px_rgba(255,179,0,0.25)] transition">
            <h2 className="text-2xl font-extrabold mb-4 flex items-center gap-2">
              <svg
                className="w-6 h-6 text-[#FFB300]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <path d="M22 2H2v20l4-4h16z" />
              </svg>
              Get in Touch
            </h2>
            <p className="text-[#004D40]/80 mb-4">
              Whether you have a question about our programs or want to collaborate, we’d love to hear from you.
            </p>

            <div className="space-y-3 text-sm text-[#004D40]/90">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#FFB300]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M22 6l-10 7L2 6" />
                </svg>
                <span>hello@gurukulcoop.com</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#FFB300]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M22 2H2v20l4-4h16z" />
                </svg>
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#FFB300]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M12 2C8 2 2 4 2 10c0 6 10 12 10 12s10-6 10-12c0-6-6-8-10-8z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>GurukulCoop HQ, Jaipur, India</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="flex-1 bg-white p-8 rounded-xl border-4 border-[#004D40] shadow-[0_8px_24px_rgba(0,77,64,0.2)] hover:border-[#FFB300] hover:shadow-[0_20px_60px_rgba(255,179,0,0.25)] transition space-y-5"
          >
            <h2 className="text-2xl font-extrabold mb-4 flex items-center gap-2">
              <svg
                className="w-6 h-6 text-[#FFB300]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <path d="M12 2l9 5-9 5-9-5 9-5z" />
                <path d="M3 10v8a2 2 0 002 2h14" />
              </svg>
              Send a Message
            </h2>

            <div>
              <label className="block text-sm font-semibold mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border-2 border-[#004D40] rounded-md p-2 focus:ring-2 focus:ring-[#FFB300] outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border-2 border-[#004D40] rounded-md p-2 focus:ring-2 focus:ring-[#FFB300] outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full border-2 border-[#004D40] rounded-md p-2 focus:ring-2 focus:ring-[#FFB300] outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full mt-3 px-6 py-3 rounded-full font-semibold text-white transition 
              ${loading ? "bg-[#BDBDBD]" : "bg-[#004D40] hover:bg-[#3a5e53] hover:shadow-[0_16px_60px_rgba(0,77,64,0.25)]"}`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {/* Message alert box */}
            {responseMsg && (
              <div
                className={`mt-4 text-center py-2 px-3 rounded-md font-semibold transition-all duration-500 ${
                  isSuccess
                    ? "bg-green-100 text-green-700 border border-green-400"
                    : "bg-red-100 text-red-700 border border-red-400"
                }`}
              >
                {responseMsg}
              </div>
            )}
          </form>
        </div>
      </div>
    </main>
  );
}
