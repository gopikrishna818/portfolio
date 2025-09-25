import { motion } from 'framer-motion';
import { Award, FileCheck, ExternalLink, Calendar, Star } from 'lucide-react';

const CertificationsSection = () => {
  // Screenshot-style data (replace with your real data as needed)
  const certifications = [
    {
      id: 1,
      title: "Python for Data Science Certification",
      issuer: "NPTEL IIT Madras",
      date: "2024",
      rating: 4.7,
      tags: ["Python", "Data Science", "NPTEL", "IIT Madras"],
      score: "73%",
      verified: true,
      color: "from-blue-500 to-cyan-500",
  viewUrl: "https://drive.google.com/file/d/1OU9nMXGrZNgj96H0vhI9zko3UW3CWp29/view?usp=sharing",
    },
    {
      id: 2,
      title: "Java Full Stack Course Completion Certificate",
      issuer: "Wipro",
      date: "2024",
      rating: 4.6,
      tags: ["Java", "Full Stack", "Wipro"],
      level: "Intermediate",
      verified: true,
      color: "from-green-500 to-emerald-500",
  viewUrl: "https://drive.google.com/file/d/1uq2d-DiwDjT8iprVuUSvIYUNrkfQBdHs/view?usp=sharing",
    },
    {
      id: 3,
      title: "Java Full Stack Development (MERN) Course + Project Certification",
      issuer: "Pregrad",
      date: "2024",
      rating: 4.5,
      tags: ["Java", "Full Stack", "MERN", "Project"],
      level: "Intermediate",
      verified: true,
      color: "from-purple-500 to-pink-500",
  viewUrl: "#",
    },
    {
      id: 4,
      title: "Codekaze Naukri Engineers Week",
      issuer: "Naukri.com",
      date: "2025",
      rating: 5.0,
      tags: ["Competitive Programming", "All India Rank", "Coding Contest"],
      rank: "992/1.05M",
      verified: true,
      color: "from-yellow-500 to-orange-500",
  viewUrl: "https://drive.google.com/file/d/1KiTjA__xHuyBm_NMaltfkUcStqItvIb4/view?usp=sharing",
    },
    {
      id: 5,
      title: "Ethical Hacking Workshop Certification",
      issuer: "Remark Skill / Elan & Nvision IIT Hyderabad",
      date: "2023",
      rating: 4.8,
      tags: ["Ethical Hacking", "Workshop", "IIT Hyderabad"],
      level: "Beginner",
      verified: true,
      color: "from-red-500 to-yellow-500",
  viewUrl: "https://drive.google.com/file/d/1MHmlGtFXCKjFLMIaaZaijJQRxehDIa-V/view?usp=sharing"
    }
  ];



  return (
    <section id="certifications" className="py-8 md:py-12 bg-gradient-to-b from-card/30 to-background relative z-10 clear-both">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gradient mb-3">
            Certifications & Awards
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and recognition for excellence in technology
          </p>
        </motion.div>

        {/* Screenshot-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03, y: -4 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative h-full rounded-2xl p-5 bg-gradient-to-br from-black/60 to-card/80 border border-border/60 shadow-lg hover:shadow-xl transition-all duration-300">
                {/* Verified Badge */}
                {cert.verified && (
                  <span className="absolute top-3 right-3 bg-green-900/80 text-green-300 text-xs px-3 py-1 rounded-full font-semibold flex items-center gap-1 border border-green-500/30">
                    <FileCheck size={14} className="inline-block mr-1 text-green-400" /> Verified
                  </span>
                )}

                {/* Icon */}
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${cert.color} flex items-center justify-center mb-3 shadow-md`}>
                  <Award size={22} className="text-white" />
                </div>

                {/* Title & Issuer */}
                <h4 className="text-base font-semibold text-blue-100 mb-1 leading-tight">
                  {cert.title}
                </h4>
                <a href="#" className="text-sm font-medium text-blue-400 hover:underline mb-2 block">{cert.issuer}</a>

                {/* Year & Rating */}
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Calendar size={13} className="mr-1" />
                    {cert.date}
                  </div>
                  <div className="flex items-center gap-1 text-yellow-400 font-bold">
                    <Star size={14} className="inline-block" />
                    <span className="text-xs">{cert.rating}</span>
                  </div>
                </div>

                {/* Description (optional) */}
                {/* <p className="text-xs text-muted-foreground mb-2">{cert.description}</p> */}

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-2">
                  {cert.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 bg-black/30 text-purple-200 rounded text-xs font-medium border border-purple-700/30">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Score, Level, or Rank */}
                {(cert.score || cert.level || cert.rank) && (
                  <div className="bg-black/40 border border-border/30 rounded-lg px-3 py-2 text-xs text-gray-300 font-mono mb-3">
                    {cert.score && (<span>Score: <span className="font-semibold">{cert.score}</span></span>)}
                    {cert.level && (<span>Level: <span className="font-semibold">{cert.level}</span></span>)}
                    {cert.rank && (<span>Rank: <span className="font-semibold">{cert.rank}</span></span>)}
                  </div>
                )}

                {/* View Certificate Button */}
                <a
                  href={cert.viewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block mt-1 px-4 py-2 rounded-lg bg-purple-600/80 text-white font-semibold text-sm text-center hover:bg-purple-700/90 transition-all"
                >
                  <ExternalLink size={15} className="inline-block mr-1 mb-0.5" /> View Certificate
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
