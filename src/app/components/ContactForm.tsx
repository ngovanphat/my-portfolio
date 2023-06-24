"use client";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactForm() {
  const [subject, setSubject] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    setIsSending(true);

    fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ subject, phoneNumber, message }),
    })
      .then((response) => {
        if (response.ok) {
          toast.success("Email sent successfully!");
        } else {
          toast.error("Error sending email. Please try again later.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error("Error sending email. Please try again later.");
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block mb-1">
            Phone number
          </label>
          <input
            type="number"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-full border border-gray-300 rounded-md py-2 px-3"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="subject" className="block mb-1">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full border border-gray-300 rounded-md py-2 px-3"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-1">
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full border border-gray-300 rounded-md py-2 px-3"
            rows={4}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-[#E8582A] text-white font-bold py-2 px-4 rounded"
        >
          {isSending ? "Sending..." : "Submit"}
        </button>
      </form>
      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
  );
}
