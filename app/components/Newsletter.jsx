"use client"

import { motion } from "framer-motion"
import { fadeIn } from "@/variants"
import SectionHeader from "./events/SectionHeader"

const Newsletter = () => {
  return (
    <section className="bg-newsletter bg-fixed h-[480px] section bg-cover w-full bg-center bg-no-repeat" id="contact">
      <div className="container mx-auto h-full">
        <div className="flex flex-col h-full items-center justify-center">
          <SectionHeader pretitle="Get in touch" title="Sign up to our Newsletter" />
          <motion.div variants={fadeIn("up", 0.4)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.3 }} className="relative flex items-center w-full max-w-xl">
            <input type="text" placeholder="Email address" className="w-full h-[64px] outline-none rounded-full bg-primary/60 backdrop-blur-[15px] px-8" />
            <button className="bg-accent absolute right-2 h-[46px] rounded-full text-[15px] hover:bg-accent-hover transition-all px-6" type="submit">
              Subscribe
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
