// components/homepage/ContactSection.tsx
"use client";
import { useState, FormEvent } from "react";
import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaYoutube,
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
  FaGlobe,
} from "react-icons/fa";
import { Send, CheckCircle, XCircle, AlertTriangle } from "lucide-react";
import { sendContactEmail } from "@/app/actions";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/asifreyad",
    icon: FaGithub,
    label: "GitHub Profile",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/asifreyad",
    icon: FaLinkedin,
    label: "LinkedIn Profile",
  },
  {
    name: "Facebook",
    href: "https://facebook.com/asifreyad",
    icon: FaFacebook,
    label: "Facebook Profile",
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@asifreyad",
    icon: FaYoutube,
    label: "YouTube Channel",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/01704340860",
    icon: FaWhatsapp,
    label: "WhatsApp",
  },
  {
    name: "Portfolio",
    href: "https://sofolit.vercel.app",
    icon: FaGlobe,
    label: "Portfolio Website",
  },
];

const email = "asifreyad1@gmail.com";
const phone = "01704340860";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [emailForm, setEmailForm] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [responseMessage, setResponseMessage] = useState("");

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setResponseMessage("");
    if (!name || !emailForm || !message) {
      setStatus("error");
      setResponseMessage("Please fill in all fields.");
      return;
    }
    if (!emailForm.includes("@") || !emailForm.includes(".")) {
      setStatus("error");
      setResponseMessage("Please enter a valid email address.");
      return;
    }
    try {
      const result = await sendContactEmail({ name, email: emailForm, message });
      if (result.success) {
        setStatus("success");
        setResponseMessage(result.message);
        setName("");
        setEmailForm("");
        setMessage("");
      } else {
        setStatus("error");
        setResponseMessage(result.message || "Failed to send message. Please try again.");
      }
    } catch {
      setStatus("error");
      setResponseMessage("An unexpected error occurred. Please try again later.");
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-teal-50 via-white to-teal-100 text-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
          {/* Left: Contact Info & Socials */}
          <div className="md:w-1/2 bg-gradient-to-br from-teal-500 to-teal-400 text-white flex flex-col justify-between p-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
              <p className="mb-6 text-teal-100">
                I’m happy to chat about new projects, collaborations, or just say hello!
              </p>
              <div className="flex items-center mb-4">
                <FaEnvelope className="mr-3 text-white/80" size={18} />
                <Link
                  href={`mailto:${email}`}
                  className="underline hover:text-teal-200 transition"
                >
                  {email}
                </Link>
              </div>
              <div className="flex items-center mb-6">
                <FaPhone className="mr-3 text-white/80" size={18} />
                <Link
                  href={`tel:${phone}`}
                  className="underline hover:text-teal-200 transition"
                >
                  {phone}
                </Link>
              </div>
              <div className="flex flex-wrap gap-3 mt-4">
                {socialLinks.map((link) => (
                  <Link
                    href={link.href}
                    key={link.name}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="bg-white/10 hover:bg-white/20 p-1.5 rounded-full transition-colors duration-300"
                  >
                    <link.icon size={20} />
                  </Link>
                ))}
              </div>
            </div>
            <div className="mt-8 text-xs text-teal-100/80">
              I reply to most messages within 24 hours.
            </div>
          </div>
          {/* Right: Contact Form */}
          <form
            onSubmit={handleFormSubmit}
            className="md:w-1/2 p-8 flex flex-col justify-center bg-white"
          >
            <h4 className="text-xl font-semibold text-teal-600 mb-6">Send a Message</h4>
            <div className="mb-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border border-teal-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 text-gray-900 bg-teal-50"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email-form"
                placeholder="Your Email"
                autoComplete="email"
                value={emailForm}
                onChange={(e) => setEmailForm(e.target.value)}
                className="w-full px-4 py-2 border border-teal-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 text-gray-900 bg-teal-50"
                required
              />
            </div>
            <div className="mb-4">
              <textarea
                name="message"
                rows={4}
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-2 border border-teal-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 text-gray-900 bg-teal-50"
                required
              ></textarea>
            </div>
            {status !== "idle" && responseMessage && (
              <div
                className={`flex items-center justify-center p-3 rounded-md text-sm font-medium mb-4 ${
                  status === "success"
                    ? "bg-green-500 text-white"
                    : status === "error"
                    ? "bg-red-500 text-white"
                    : "bg-blue-500 text-white"
                }`}
              >
                {status === "success" && <CheckCircle className="w-5 h-5 mr-2" />}
                {status === "error" && <XCircle className="w-5 h-5 mr-2" />}
                {status === "loading" && <AlertTriangle className="w-5 h-5 mr-2 animate-pulse" />}
                {responseMessage}
              </div>
            )}
            <button
              type="submit"
              className="w-full flex justify-center items-center py-2 px-4 rounded-lg text-lg font-semibold text-white bg-teal-500 hover:bg-teal-600 transition duration-300 shadow focus:outline-none focus:ring-2 focus:ring-teal-400"
              disabled={status === "loading"}
            >
              {status === "loading" ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" /> Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
