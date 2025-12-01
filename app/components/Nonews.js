"use client";
import React from "react";
import { FiAlertCircle } from "react-icons/fi";
import Button from "./ui/Button";

function Nonews() {
  return (
    <div
      className=" min-[1024px]:mt-[8.1rem] mt-[7.5rem] max-[640px]:mt-[5.6rem] flex flex-col items-center justify-center h-[70vh] text-center px-4"
      style={{ color: "var(--color-text)" }}
    >
      <div
        className="p-6 rounded-2xl shadow-md max-w-md w-full"
        style={{
          background: "var(--color-bg-light)",
          border: "1px solid var(--color-border)",
        }}
      >
        <FiAlertCircle size={60} color="var(--color-primary)" />

        <h2
          className="text-2xl font-bold mt-4"
          style={{ color: "var(--color-primary)" }}
        >
          No News Found
        </h2>

        <p
          className="mt-2 text-base"
          style={{ color: "var(--color-text-light)" }}
        >
          We couldn’t find any news for this category or search query.
        </p>

        {/* Buttons Container */}
        <div className="flex gap-3 justify-center mt-6">
          <Button
            theme="dark"
            onClick={() => window.location.reload()}
          >
            Refresh
          </Button>
          <Button
            theme="dark"
            onClick={() => (window.location.href = "/")}
          >
            Go Home
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Nonews;
