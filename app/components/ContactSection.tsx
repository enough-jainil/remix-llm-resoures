import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section className="mt-16 max-w-3xl mx-auto p-6 bg-bg-secondary rounded-3xl border border-border-primary">
      <h2 className="text-3xl font-semibold text-text-primary text-center mb-6">
        Want to List Your Open Source Project?
      </h2>
      <p className="text-text-secondary text-center text-lg mb-4">
        Send a DM on Twitter/X or Email us, <br /> we will review and list your
        project here.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <motion.a
          href="mailto:harsha.gadekar@proton.me"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-6 py-3 bg-doreturn-gold/10 text-doreturn-gold 
            rounded-3xl border border-doreturn-gold/30 hover:border-doreturn-gold/50 
            transition-all duration-300"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
          <span>Email Us</span>
        </motion.a>

        <motion.a
          href="https://twitter.com/HarshaGadekar"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-6 py-3 bg-doreturn-gold/10 text-doreturn-gold 
            rounded-3xl border border-doreturn-gold/30 hover:border-doreturn-gold/50 
            transition-all duration-300"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          <span>Twitter/X</span>
        </motion.a>
      </div>
    </section>
  );
}
