"use client"

import SectionHeader from "../events/SectionHeader"
import { motion } from "framer-motion"
import { fadeIn } from "@/variants"
import AlbumSlider from "./AlbumSlider"

const Albums = () => {
  return (
    <section className="section" id="tours">
      <div className="container mx-auto">
        <SectionHeader pretitle="Discography" title="Popular Albums" />
        <motion.div variants={fadeIn("up", 0.4)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.3 }}>
          <AlbumSlider />
        </motion.div>
      </div>
    </section>
  )
}

export default Albums
