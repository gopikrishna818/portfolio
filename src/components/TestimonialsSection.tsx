import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ExternalLink } from 'lucide-react';

const TestimonialsSection = () => {
  // Screenshot-style testimonials (replace with your real data as needed)
  const testimonials = [
    {
      id: 1,
      name: "Dr. CH. Subbalakshmi",
      role: "HOD & Professor & Project Guide",
      company: "Guru Nanak Institutions",
      initials: "SL",
      rating: 5,
      text: "As Gopikrishna's project guide, I was impressed by his initiative and problem-solving skills. He consistently delivered high-quality work and was always eager to learn new technologies.",
      main: true,
      contacts: [
        { type: 'linkedin', url: 'https://www.linkedin.com/in/gopikrishna818/' },
        { type: 'email', url: 'mailto:gopikrishna818@gmail.com' }
      ]
    },
    {
      id: 2,
      name: "Raj Balabantaray",
      role: "Team lead, Internship",
      company: "KreativeTimebox",
      initials: "RB",
      text: "Gopikrishna was a quick learner and a reliable team member during our internship. He contributed to our document intelligence project and was proactive in team discussions."
    },
    {
      id: 3,
      name: "Utkarsh Upadhyay",
      role: "Senior Data Analyst",
      company: "IBM Skill Build",
      initials: "UU",
      text: "During the IBM internship, Gopikrishna showed strong analytical skills and a great attitude towards feedback. He delivered a clean and insightful sales dashboard."
    },
    {
      id: 4,
      name: "Dr. Er. Vinay Chopra",
      role: "Peer & Coding Club President",
      company: "Guru Nanak Institutions",
      initials: "VC",
      text: "Gopikrishna is always ready to help peers and share knowledge. His enthusiasm for coding and learning is inspiring to everyone in our club."
    }
  ];



  // Carousel state
  const mainIndex = testimonials.findIndex(t => t.main) || 0;
  const [active, setActive] = React.useState(mainIndex);

  return (
    <section id="testimonials" className="py-12 md:py-16 bg-gradient-to-br from-background via-card/10 to-background relative overflow-hidden">
      <div className="container-width relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            What People Say <span className="text-gradient">About Me</span>
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Testimonials from professors, mentors, and colleagues who have worked with me during my academic journey and early career experiences.
          </p>
        </motion.div>

        {/* Main Carousel Card */}
        <div className="w-full flex justify-center mb-8">
          <div className="w-full max-w-3xl">
            <div className="rounded-2xl bg-black/40 border border-border/40 p-8 md:p-10 flex flex-col items-center relative shadow-lg">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-2 shadow-lg">
                  <Quote size={36} className="text-white" />
                </div>
              </div>
              <div className="mt-10 text-center">
                <p className="text-xl md:text-2xl italic font-medium text-white mb-6">
                  "{testimonials[active].text}"
                </p>
                <div className="flex justify-center mb-3">
                  {[...Array(testimonials[active].rating || 5)].map((_, i) => (
                    <Star key={i} size={22} className="text-yellow-400 fill-current mr-1" />
                  ))}
                </div>
                <div className="flex items-center justify-center gap-4 mb-2">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-lg font-bold text-white">
                    {testimonials[active].initials}
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-blue-200 text-lg leading-tight">
                      {testimonials[active].name}
                    </div>
                    <div className="text-sm text-purple-300 font-medium">
                      {testimonials[active].role}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {testimonials[active].company}
                    </div>
                  </div>
                </div>
                {/* Contact icons (if any) */}
                {testimonials[active].contacts && (
                  <div className="flex justify-center gap-3 mt-2">
                    {testimonials[active].contacts.map((c, i) => (
                      <a key={i} href={c.url} className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-black/30 border border-border/30 text-purple-200 hover:bg-purple-700/40 transition-all">
                        {c.type === 'linkedin' ? <ExternalLink size={18} /> : null}
                        {c.type === 'email' ? <span className="text-lg font-bold">@</span> : null}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
            {/* Carousel Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((t, i) => (
                <button
                  key={i}
                  className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${i === active ? 'border-purple-400 bg-purple-700/40' : 'border-border/30 bg-black/20 hover:bg-purple-700/20'}`}
                  onClick={() => setActive(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                >
                  <span className="text-white font-bold text-lg">{i + 1}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Compact Cards Row */}
        <div className="flex flex-wrap justify-center gap-4 mt-2">
          {testimonials.slice(1).map((t, i) => (
            <div key={t.id} className="bg-black/30 border border-border/30 rounded-xl p-4 w-72 flex flex-col gap-2">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-base font-bold text-white">
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-blue-200 text-base leading-tight">{t.name}</div>
                  <div className="text-xs text-purple-300 font-medium">{t.role}</div>
                </div>
              </div>
              <div className="text-xs text-muted-foreground mb-1">{t.company}</div>
              <div className="text-sm text-white/90 italic line-clamp-2">"{t.text}"</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
