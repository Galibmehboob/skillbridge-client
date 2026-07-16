"use client";

import { motion } from "framer-motion";
import { Button } from "@heroui/react";

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="bg-gradient-to-r from-[#1E3A8A] to-[#14B8A6] bg-clip-text text-5xl font-extrabold text-transparent sm:text-6xl">
          Contact Us
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-lg text-default-500">
          We,d love to hear from you. Send us a message and we,ll get back to you
          as soon as possible.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto mt-14 max-w-2xl rounded-3xl border border-default-200 bg-white p-8 shadow-lg dark:bg-neutral-900"
      >
        <form
          onSubmit={(e) => e.preventDefault()}
          className="space-y-5"
        >
          <div>
            <label className="mb-2 block font-medium">
              Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              className="w-full rounded-xl border border-gray-300 bg-transparent px-4 py-3 outline-none transition focus:border-[#1E3A8A]"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-xl border border-gray-300 bg-transparent px-4 py-3 outline-none transition focus:border-[#1E3A8A]"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Subject
            </label>

            <input
              type="text"
              placeholder="Subject"
              className="w-full rounded-xl border border-gray-300 bg-transparent px-4 py-3 outline-none transition focus:border-[#1E3A8A]"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Message
            </label>

            <textarea
              rows={6}
              placeholder="Write your message..."
              className="w-full resize-none rounded-xl border border-gray-300 bg-transparent px-4 py-3 outline-none transition focus:border-[#1E3A8A]"
            />
          </div>

          <Button
            type="submit"
            variant="primary"
            className="w-full bg-gradient-to-r from-[#1E3A8A] to-[#14B8A6] text-white"
          >
            Send Message
          </Button>
        </form>
      </motion.div>
    </section>
  );
}