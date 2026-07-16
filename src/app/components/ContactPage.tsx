import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useForm } from "react-hook-form";
import { Mail, CheckCircle2 } from "lucide-react";

interface ContactFormData {
  fullName: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

const inputClass =
  "w-full px-0 py-3 bg-transparent border-b-2 border-black/20 focus:border-black focus:outline-none text-sm text-gray-800 placeholder-gray-400 transition-colors duration-300";

const labelClass =
  "block mb-1 text-xs uppercase tracking-widest text-gray-500 font-medium";

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>();

  const onSubmit = (_data: ContactFormData) => {
    setTimeout(() => {
      setSubmitted(true);
      reset();
    }, 600);
  };

  if (submitted) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-white px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-md"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.15, type: "spring", stiffness: 220 }}
          >
            <CheckCircle2 className="w-16 h-16 mx-auto mb-6 text-black" strokeWidth={1.5} />
          </motion.div>
          <h2
            className="mb-3"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 5vw, 2.75rem)" }}
          >
            Message <span className="italic">Received</span>
          </h2>
          <div className="w-16 h-px bg-black mx-auto mb-5" />
          <p
            className="text-sm text-gray-600 leading-relaxed mb-8"
            style={{ fontFamily: "'Work Sans', sans-serif" }}
          >
            Thank you for reaching out. We will review your message and respond as soon as possible.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="text-xs uppercase tracking-widest underline underline-offset-4 text-gray-500 hover:text-black transition-colors"
            style={{ fontFamily: "'Work Sans', sans-serif" }}
          >
            Send another message
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Hero */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="py-12 md:py-16 px-4 md:px-6 lg:px-12 bg-gradient-to-b from-gray-100 to-white border-b-2 border-black/10"
      >
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-4"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
            }}
          >
            Get in <span className="italic">Touch</span>
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="w-24 h-0.5 bg-black mx-auto mb-4"
          />
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-sm md:text-base text-gray-600 max-w-xl mx-auto italic"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Correspondence regarding the scholarship, the founders, or general enquiries is welcome.
          </motion.p>
        </div>
      </motion.section>

      {/* Main content */}
      <section className="py-14 md:py-20 px-4 md:px-6 lg:px-12">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-[1fr_2fr] gap-14 md:gap-20 items-start">

            {/* Left — contact details */}
            <motion.aside
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="md:pt-2"
            >
              <h2
                className="mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.6rem" }}
              >
                Correspondence
              </h2>
              <div className="w-8 h-px bg-black mb-8" />

              <div className="space-y-7" style={{ fontFamily: "'Work Sans', sans-serif" }}>
                <div className="flex gap-4 items-start">
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-gray-500" strokeWidth={1.5} />
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Email</p>
                    <p className="text-sm text-gray-800 break-all">chanan.da.chaanan@gmail.com</p>
                  </div>
                </div>

              </div>

              {/* Decorative rule */}
              <div className="hidden md:block mt-14">
                <div className="w-full h-px bg-black/10" />
                <p
                  className="mt-5 text-xs text-gray-400 leading-relaxed italic"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.95rem" }}
                >
                  "Education is the most powerful weapon which you can use to change the world."
                </p>
              </div>
            </motion.aside>

            {/* Right — form */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              {/* Form header */}
              <div className="mb-10">
                <p
                  className="text-xs uppercase tracking-widest text-gray-400 mb-1"
                  style={{ fontFamily: "'Work Sans', sans-serif" }}
                >
                  Enquiry Form
                </p>
                <h3
                  className="text-xl md:text-2xl"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  All fields marked <span className="italic">*</span> are required
                </h3>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-10">

                {/* Full name */}
                <div>
                  <label className={labelClass} htmlFor="fullName">
                    Full Name *
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    placeholder="Your full name"
                    className={inputClass}
                    style={{ fontFamily: "'Work Sans', sans-serif" }}
                    {...register("fullName", { required: "Full name is required" })}
                  />
                  <AnimatePresence>
                    {errors.fullName && (
                      <motion.p
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="mt-1.5 text-xs text-red-600"
                        style={{ fontFamily: "'Work Sans', sans-serif" }}
                      >
                        {errors.fullName.message}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                {/* Phone + Email */}
                <div className="grid sm:grid-cols-2 gap-10">
                  <div>
                    <label className={labelClass} htmlFor="phone">
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="+91 00000 00000"
                      className={inputClass}
                      style={{ fontFamily: "'Work Sans', sans-serif" }}
                      {...register("phone", {
                        required: "Phone number is required",
                        pattern: {
                          value: /^[+\d\s\-()]{7,}$/,
                          message: "Please enter a valid phone number",
                        },
                      })}
                    />
                    <AnimatePresence>
                      {errors.phone && (
                        <motion.p
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className="mt-1.5 text-xs text-red-600"
                          style={{ fontFamily: "'Work Sans', sans-serif" }}
                        >
                          {errors.phone.message}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  <div>
                    <label className={labelClass} htmlFor="email">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      className={inputClass}
                      style={{ fontFamily: "'Work Sans', sans-serif" }}
                      {...register("email", {
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Please enter a valid email address",
                        },
                      })}
                    />
                    <AnimatePresence>
                      {errors.email && (
                        <motion.p
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className="mt-1.5 text-xs text-red-600"
                          style={{ fontFamily: "'Work Sans', sans-serif" }}
                        >
                          {errors.email.message}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className={labelClass} htmlFor="subject">
                    Subject *
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="Nature of your enquiry"
                    className={inputClass}
                    style={{ fontFamily: "'Work Sans', sans-serif" }}
                    {...register("subject", { required: "Please provide a subject" })}
                  />
                  <AnimatePresence>
                    {errors.subject && (
                      <motion.p
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="mt-1.5 text-xs text-red-600"
                        style={{ fontFamily: "'Work Sans', sans-serif" }}
                      >
                        {errors.subject.message}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                {/* Message */}
                <div>
                  <label className={labelClass} htmlFor="message">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    placeholder="Write your message here..."
                    className={`${inputClass} resize-none`}
                    style={{ fontFamily: "'Work Sans', sans-serif" }}
                    {...register("message", {
                      required: "A message is required",
                      minLength: {
                        value: 20,
                        message: "Please write at least 20 characters",
                      },
                    })}
                  />
                  <AnimatePresence>
                    {errors.message && (
                      <motion.p
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="mt-1.5 text-xs text-red-600"
                        style={{ fontFamily: "'Work Sans', sans-serif" }}
                      >
                        {errors.message.message}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                {/* Submit */}
                <div className="pt-2 flex items-center gap-6">
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="px-10 py-4 bg-black text-white text-xs uppercase tracking-widest hover:bg-gray-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ fontFamily: "'Work Sans', sans-serif" }}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </motion.button>
                  <p
                    className="text-xs text-gray-400"
                    style={{ fontFamily: "'Work Sans', sans-serif" }}
                  >
                    We aim to respond within 48 hours.
                  </p>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
