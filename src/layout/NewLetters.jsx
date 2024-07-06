import React from "react";
import EmailInput from "../components/Buttons/EmailInput";
import Try from "../components/Buttons/Try";

export default function NewLetters() {
  return (
    <div className="bg-white flex flex-col items-center justify-end gap-7 py-[55px] px-5 rounded-3xl my-32">
      <h4 className="text-[32px] text-center dela-regular text-[#0A071B] max-w-screen-sm">
        Be the first to know about new features, special offers, and more.
      </h4>
      <div className="flex gap-[10px]">
        <EmailInput />
        <Try>Join waitlist</Try>
      </div>
    </div>
  );
}
