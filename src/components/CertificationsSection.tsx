import { motion } from 'framer-motion';
import { Award, FileCheck, ExternalLink, Calendar } from 'lucide-react';

const CertificationsSection = () => {
  const certifications = [
    {
      id: 1,
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2024",
      type: "certification",
      status: "Active",
      credentialId: "AWS-CSA-2024-001",
      skills: ["Cloud Architecture", "AWS Services", "Infrastructure Design"],
      logo: "/aws-logo.png", // Replace with actual logo
      verifyUrl: "https://aws.amazon.com/verification"
    },
    {
      id: 2,
      title: "Google Cloud Professional Data Engineer",
      issuer: "Google Cloud",
      date: "2023",
      type: "certification",
      status: "Active",
      credentialId: "GCP-PDE-2023-015",
      skills: ["BigQuery", "Data Pipeline", "ML Engineering"],
      logo: "/gcp-logo.png", // Replace with actual logo
      verifyUrl: "https://cloud.google.com/certification"
    },
    {
      id: 3,
      title: "Microsoft Azure AI Engineer Associate",
      issuer: "Microsoft",
      date: "2023",
      type: "certification",
      status: "Active",
      credentialId: "MSFT-AI-2023-092",
      skills: ["Azure AI", "Cognitive Services", "Machine Learning"],
      logo: "/azure-logo.png", // Replace with actual logo
      verifyUrl: "https://docs.microsoft.com/en-us/learn/certifications"
    },
    {
      id: 4,
      title: "Best Innovation Award",
      issuer: "TechCorp Solutions",
      date: "2024",
      type: "award",
      status: "Received",
      description: "Recognized for developing an AI-powered customer analytics platform that increased business efficiency by 40%",
      skills: ["Innovation", "AI/ML", "Business Impact"]
    },
    {
      id: 5,
      title: "Certified Kubernetes Administrator (CKA)",
      issuer: "Cloud Native Computing Foundation",
      date: "2023",
      type: "certification",
      status: "Active",
      credentialId: "CKA-2023-150892",
      skills: ["Kubernetes", "Container Orchestration", "DevOps"],
      logo: "/kubernetes-logo.png", // Replace with actual logo
      verifyUrl: "https://www.cncf.io/certification/cka"
    },
    {
      id: 6,
      title: "Excellence in Data Science",
      issuer: "DataFlow Inc",
      date: "2023",
      type: "award",
      status: "Received",
      description: "Outstanding performance in developing real-time data pipelines and predictive analytics solutions",
      skills: ["Data Science", "Analytics", "Performance"]
    }
  ];

  const certificationItems = certifications.filter(item => item.type === 'certification');
  const awards = certifications.filter(item => item.type === 'award');

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

        {/* Combined Compact Grid Layout - Like Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6 max-w-7xl mx-auto">
          {/* Certifications */}
          {certificationItems.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02, y: -3 }}
              transition={{ 
                duration: 0.3, 
                delay: index * 0.1
              }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative h-full glass-enhanced rounded-xl p-4 border border-border/50 hover:border-blue-500/50 backdrop-blur-xl transition-all duration-300 hover:shadow-lg">
                {/* Simple Status Icon */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <FileCheck size={12} className="text-white" />
                </div>

                {/* Compact Icon */}
                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mb-3">
                  <FileCheck size={14} className="text-white" />
                </div>

                {/* Certification Info - Very Compact */}
                <h4 className="text-sm font-semibold text-foreground mb-2 line-clamp-2">
                  {cert.title}
                </h4>
                
                <p className="text-xs text-blue-400 font-medium mb-2">{cert.issuer}</p>
                
                <div className="flex items-center text-xs text-muted-foreground mb-3">
                  <Calendar size={10} className="mr-1" />
                  {cert.date}
                </div>

                {/* Single Key Skill */}
                <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20 mb-3">
                  <div className="text-center">
                    <div className="text-xs font-bold text-blue-400">{cert.skills[0]}</div>
                    <div className="text-xs text-muted-foreground">+{cert.skills.length - 1} more skills</div>
                  </div>
                </div>

                {/* Verify Link */}
                {cert.verifyUrl && (
                  <div className="flex items-center justify-center">
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-xs text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      Verify
                      <ExternalLink size={10} className="ml-1" />
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}

          {/* Awards */}
          {awards.map((award, index) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02, y: -3 }}
              transition={{ 
                duration: 0.3, 
                delay: (certificationItems.length + index) * 0.1
              }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative h-full glass-enhanced rounded-xl p-4 border border-border/50 hover:border-yellow-500/50 backdrop-blur-xl transition-all duration-300 hover:shadow-lg">
                {/* Simple Award Icon */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
                  <Award size={12} className="text-white" />
                </div>

                {/* Compact Icon */}
                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center mb-3">
                  <Award size={14} className="text-white" />
                </div>

                {/* Award Info - Very Compact */}
                <h4 className="text-sm font-semibold text-foreground mb-2 line-clamp-2">
                  {award.title}
                </h4>
                
                <p className="text-xs text-yellow-400 font-medium mb-2">{award.issuer}</p>
                
                <div className="flex items-center text-xs text-muted-foreground mb-3">
                  <Calendar size={10} className="mr-1" />
                  {award.date}
                </div>

                {/* Truncated Description */}
                {award.description && (
                  <p className="text-xs text-foreground/80 mb-3 line-clamp-3">
                    {award.description}
                  </p>
                )}

                {/* Single Key Achievement */}
                <div className="p-2 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                  <div className="text-center">
                    <div className="text-xs font-bold text-yellow-400">{award.skills[0]}</div>
                    <div className="text-xs text-muted-foreground">
                      {award.skills.length > 1 ? `+${award.skills.length - 1} more` : 'Achievement'}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
