import { motion } from 'framer-motion'
import googleLogo from '../assets/clients/google.png'
import dlfLogo from '../assets/clients/dlf.svg'
import ericssonLogo from '../assets/clients/ericsson.svg'
import jllLogo from '../assets/clients/jll.png'
import brookfieldLogo from '../assets/clients/brookfield.png'
import ambienceLogo from '../assets/clients/ambience-interiors.png'
import intellionLogo from '../assets/clients/intellion-tata-realty.png'

const CLIENTS = [
  { name: 'Google', src: googleLogo },
  { name: 'DLF', src: dlfLogo },
  { name: 'Ericsson', src: ericssonLogo },
  { name: 'JLL', src: jllLogo },
  { name: 'Brookfield', src: brookfieldLogo },
  { name: 'Ambience Interiors', src: ambienceLogo },
  { name: 'Intellion by Tata Realty', src: intellionLogo },
]

export default function ClientsSection() {
  return (
    <section className="relative px-6 py-16">
      <div className="mx-auto max-w-6xl text-center">
        <span className="mb-8 inline-block text-xs font-medium tracking-widest text-sand/40 uppercase">
          Trusted By
        </span>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {CLIENTS.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex h-20 w-40 items-center justify-center rounded-xl bg-white/95 p-5"
            >
              <img src={client.src} alt={client.name} className="max-h-9 max-w-full object-contain" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
