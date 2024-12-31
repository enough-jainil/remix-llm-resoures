import { FaGithub, FaTwitter } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="mt-16 max-w-3xl mx-auto p-6 bg-bg-secondary rounded-3xl border border-border-primary">
      <h2 className="text-3xl font-semibold text-text-primary text-center mb-6">
        Want to showcase your open-source project or app? <br />
        Or would you like to add or update a resource?
      </h2>
      <p className="text-text-secondary text-center text-lg mb-4">
        For project submissions or issues, please create a GitHub issue or DM us
        on Twitter/X. <br /> {/* Join our Discord for details and feedback. */}
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        {/* Discord link */}
        {/* <a
          href="https://discord.gg/your-discord-link"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-doreturn-gold/10 text-doreturn-gold 
            rounded-3xl border border-doreturn-gold/30 hover:border-doreturn-gold/50 
            transition-all duration-300"
        >
          <FaDiscord className="w-5 h-5" />
          <span>Discord</span>
        </a> */}

        {/* GitHub link */}
        <a
          href="https://github.com/enough-jainil/remix-llm-resoures/issues/new"
          className="flex items-center gap-2 px-6 py-3 bg-doreturn-gold/10 text-doreturn-gold 
            rounded-3xl border border-doreturn-gold/30 hover:border-doreturn-gold/50 
            transition-all duration-300"
        >
          <FaGithub className="w-5 h-5" />
          <span>GitHub</span>
        </a>

        {/* Twitter/X link */}
        <a
          href="https://twitter.com/doreturn_in"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-doreturn-gold/10 text-doreturn-gold 
            rounded-3xl border border-doreturn-gold/30 hover:border-doreturn-gold/50 
            transition-all duration-300"
        >
          <FaTwitter className="w-5 h-5" />
          <span>Twitter/X</span>
        </a>
      </div>
    </section>
  );
}
