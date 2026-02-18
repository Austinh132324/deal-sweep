import { useState, useRef, type FormEvent, type KeyboardEvent } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ScanSearch, Mail, Loader2 } from "lucide-react";
import { supabase } from "../lib/supabase";

const CODE_LENGTH = 6;

export default function VerifyEmail() {
  const location = useLocation();
  const navigate = useNavigate();
  const email = (location.state as { email?: string })?.email ?? "";

  const [code, setCode] = useState<string[]>(Array(CODE_LENGTH).fill(""));
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);
  const [resent, setResent] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;
    const next = [...code];
    next[index] = value.slice(-1);
    setCode(next);
    if (value && index < CODE_LENGTH - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, CODE_LENGTH);
    if (!pasted) return;
    const next = [...code];
    for (let i = 0; i < pasted.length; i++) {
      next[i] = pasted[i];
    }
    setCode(next);
    const focusIndex = Math.min(pasted.length, CODE_LENGTH - 1);
    inputRefs.current[focusIndex]?.focus();
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const token = code.join("");
    if (token.length !== CODE_LENGTH) {
      setError("Please enter the full 6-digit code.");
      return;
    }

    setError("");
    setLoading(true);

    const { error: verifyError } = await supabase.auth.verifyOtp({
      email,
      token,
      type: "signup",
    });

    setLoading(false);

    if (verifyError) {
      setError(verifyError.message);
      return;
    }

    navigate("/dashboard", { replace: true });
  };

  const handleResend = async () => {
    setResending(true);
    setResent(false);
    setError("");

    const { error: resendError } = await supabase.auth.resend({
      type: "signup",
      email,
    });

    setResending(false);

    if (resendError) {
      setError(resendError.message);
      return;
    }

    setResent(true);
  };

  if (!email) {
    return (
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gray-50 py-12 px-4">
        <div className="text-center">
          <p className="text-gray-600 mb-4">No email address provided.</p>
          <Link
            to="/signup"
            className="text-primary-600 font-semibold hover:text-primary-700"
          >
            Go to Signup
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-6">
            <ScanSearch className="h-10 w-10 text-primary-600" />
            <span className="text-2xl font-bold text-gray-900 tracking-tight">
              Save<span className="text-primary-600">Sweep</span>
            </span>
          </Link>
          <div className="mx-auto w-14 h-14 rounded-full bg-primary-100 flex items-center justify-center mb-4">
            <Mail className="h-7 w-7 text-primary-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Check your email</h1>
          <p className="mt-2 text-sm text-gray-600">
            We sent a 6-digit verification code to{" "}
            <span className="font-medium text-gray-900">{email}</span>
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 p-5 sm:p-8 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3 text-center">
                Enter verification code
              </label>
              <div className="flex justify-center gap-1.5 sm:gap-2" onPaste={handlePaste}>
                {code.map((digit, i) => (
                  <input
                    key={i}
                    ref={(el) => { inputRefs.current[i] = el; }}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleChange(i, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(i, e)}
                    className="w-10 h-12 sm:w-12 sm:h-14 text-center text-lg sm:text-xl font-semibold rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  />
                ))}
              </div>
            </div>

            {error && (
              <p className="text-sm text-red-600 text-center">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 rounded-lg bg-primary-600 text-white font-semibold text-sm hover:bg-primary-700 transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading && <Loader2 className="h-4 w-4 animate-spin" />}
              {loading ? "Verifying..." : "Verify Email"}
            </button>
          </form>

          <div className="mt-4 text-center">
            <p className="text-sm text-gray-500">
              Didn't receive the code?{" "}
              <button
                type="button"
                onClick={handleResend}
                disabled={resending}
                className="font-semibold text-primary-600 hover:text-primary-700 disabled:opacity-50"
              >
                {resending ? "Sending..." : "Resend"}
              </button>
            </p>
            {resent && (
              <p className="text-sm text-green-600 mt-1">
                A new code has been sent to your email.
              </p>
            )}
          </div>
        </div>

        <p className="mt-6 text-center text-sm text-gray-600">
          Wrong email?{" "}
          <Link
            to="/signup"
            className="font-semibold text-primary-600 hover:text-primary-700"
          >
            Go back to Signup
          </Link>
        </p>
      </div>
    </div>
  );
}
