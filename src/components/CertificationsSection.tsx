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
    <section id="certifications" className="py-20 bg-gradient-to-b from-card/30 to-background">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-section-heading text-gradient mb-4">
            Certifications & Awards
          </h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and recognition for excellence in technology
          </p>
        </motion.div>

        {/* Certifications */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-foreground mb-8 flex items-center"
          >
            <FileCheck className="mr-3 text-blue-500" size={28} />
            Professional Certifications
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificationItems.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="h-full p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-1 animate-pulse"></div>
                      {cert.status}
                    </span>
                  </div>

                  {/* Logo Placeholder */}
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <FileCheck size={28} className="text-white" />
                  </div>

                  {/* Certification Info */}
                  <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-blue-400 transition-colors duration-300">
                    {cert.title}
                  </h4>
                  
                  <p className="text-blue-400 font-medium mb-2">{cert.issuer}</p>
                  
                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <Calendar size={14} className="mr-2" />
                    {cert.date}
                  </div>

                  {cert.credentialId && (
                    <p className="text-xs text-muted-foreground mb-4 font-mono">
                      ID: {cert.credentialId}
                    </p>
                  )}

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.skills.map((skill, i) => (
                      <span key={i} className="px-2 py-1 bg-blue-500/10 border border-blue-500/20 rounded-md text-xs text-blue-400">
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Verify Link */}
                  {cert.verifyUrl && (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-blue-400 hover:text-blue-300 transition-colors duration-300"
                    >
                      Verify Credential
                      <ExternalLink size={14} className="ml-1" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Awards */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-foreground mb-8 flex items-center"
          >
            <Award className="mr-3 text-yellow-500" size={28} />
            Awards & Recognition
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {awards.map((award, index) => (
              <motion.div
                key={award.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="h-full p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/10">
                  {/* Award Icon */}
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Award size={28} className="text-white" />
                  </div>

                  {/* Award Info */}
                  <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                    {award.title}
                  </h4>
                  
                  <p className="text-yellow-400 font-medium mb-2">{award.issuer}</p>
                  
                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <Calendar size={14} className="mr-2" />
                    {award.date}
                  </div>

                  {award.description && (
                    <p className="text-foreground/80 mb-4 leading-relaxed">
                      {award.description}
                    </p>
                  )}

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {award.skills.map((skill, i) => (
                      <span key={i} className="px-2 py-1 bg-yellow-500/10 border border-yellow-500/20 rounded-md text-xs text-yellow-400">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
