import { useReveal } from '@/hooks/useReveal';

export default function About() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
        <span className="eyebrow text-flame-400">About</span>
        <div className="mt-8 grid gap-12 md:grid-cols-[1fr_2fr]">
          <h2 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
            Building the cloud backbone of modern enterprises.
          </h2>
          <div>
            <p className="text-base leading-relaxed text-gray-400 sm:text-lg">
              Azure Cloud Engineer with 2 years of hands-on experience designing, implementing, and
              supporting enterprise Azure infrastructure. Skilled in networking, security, identity,
              monitoring, and backup/DR, with strong client consulting experience.
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray-400 sm:text-lg">
              AZ-104 certified, currently preparing AZ-305, and expanding into Infrastructure-as-Code,
              CI/CD, Docker, and AKS.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {['Azure', 'Networking', 'Security', 'IaC', 'CI/CD', 'Containers'].map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-white/8 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
