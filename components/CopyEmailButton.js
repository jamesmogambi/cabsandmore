"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

const CopyEmailButton = ({ email = "support@cabsandmore.com" }) => {
  const [copied, setCopied] = useState(false);

  const markCopied = () => {
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      markCopied();
    } catch {
      const input = document.createElement("input");
      input.value = email;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
      markCopied();
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2.5 text-[14px] font-semibold text-[#374151] transition-colors hover:border-[#26C165] hover:text-[#1b7f45]"
    >
      {copied ? (
        <Check className="h-4 w-4 text-[#1b7f45]" aria-hidden="true" />
      ) : (
        <Copy className="h-4 w-4" aria-hidden="true" />
      )}
      {copied ? "Copied!" : "Copy support email"}
    </button>
  );
};

export default CopyEmailButton;