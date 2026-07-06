// app/careers/page.jsx
"use client";
import { useState } from "react";
import Link from "next/link";
import {
  Briefcase,
  MapPin,
  Clock,
  Award,
  Users,
  Mail,
  FileText,
  CheckCircle,
  ChevronRight,
  Building,
  Coffee,
  TrendingUp,
  Send,
} from "lucide-react";

const CareersPage = () => {
  const [selectedRole, setSelectedRole] = useState(null);

  const jobOpenings = [
    {
      id: "content-manager",
      title: "Content Manager",
      department: "Marketing & Communications",
      location: "Remote / Hybrid",
      type: "Full-time",
      experience: "3-5 years",
      posted: "2 days ago",
      icon: FileText,
      description:
        "Lead our content strategy and create engaging content that drives user engagement and brand awareness across all platforms.",
      responsibilities: [
        "Develop and execute content strategy aligned with business goals",
        "Create high-quality content for website, blog, social media, and email campaigns",
        "Manage content calendar and ensure consistent brand messaging",
        "Collaborate with design and marketing teams to produce visual content",
        "Analyze content performance and optimize for engagement",
        "Stay updated with industry trends and content marketing best practices",
      ],
      requirements: [
        "3-5 years of experience in content management or related field",
        "Excellent writing and editing skills with attention to detail",
        "Experience with SEO best practices and content optimization",
        "Proficiency in CMS platforms and content management tools",
        "Strong project management and organizational skills",
        "Bachelor's degree in Marketing, Communications, or equivalent experience",
      ],
      benefits: [
        "Competitive salary and performance bonuses",
        "Flexible working hours and remote work options",
        //   "Health insurance and wellness programs",
        "Professional development opportunities",
        "Collaborative and innovative work environment",
      ],
    },
    {
      id: "web-administrator",
      title: "Web Administrator",
      department: "IT & Technology",
      location: "Remote / Hybrid",
      type: "Full-time",
      experience: "2-4 years",
      posted: "3 days ago",
      icon: Building,
      description:
        "Manage and maintain our web infrastructure, ensuring optimal performance, security, and user experience across all digital platforms.",
      responsibilities: [
        "Manage and maintain web servers and hosting environments",
        "Monitor website performance and implement optimizations",
        "Ensure website security and implement security best practices",
        "Manage domain names, SSL certificates, and DNS settings",
        "Troubleshoot technical issues and provide timely solutions",
        "Collaborate with development team on website improvements",
        "Manage database backups and disaster recovery procedures",
      ],
      requirements: [
        "2-4 years of experience in web administration or similar role",
        "Strong knowledge of web servers (Apache, Nginx)",
        "Experience with cloud platforms (AWS, Azure, or Google Cloud)",
        "Familiarity with Linux/Unix operating systems",
        "Understanding of web security principles and best practices",
        "Experience with database management (MySQL, PostgreSQL)",
      ],
      benefits: [
        "Competitive salary and performance bonuses",
        "Flexible working hours and remote work options",
        //   "Health insurance and wellness programs",
        "Professional development budget",
        "Latest tools and technology access",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-[#26C165] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Join Our Team
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Help us revolutionize the way people move and connect. We're
              looking for passionate individuals to join our growing family.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white/20 rounded-full px-6 py-3">
                <Users className="h-5 w-5" />
                <span>Growing Team</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 rounded-full px-6 py-3">
                <Award className="h-5 w-5" />
                <span>Great Culture</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 rounded-full px-6 py-3">
                <TrendingUp className="h-5 w-5" />
                <span>Fast Growth</span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10">
          <Briefcase className="h-96 w-96 text-white" />
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Join <span className="text-[#26C165]">Cabs & More</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Coffee,
                title: "Great Culture",
                description:
                  "Work in a collaborative, inclusive environment where your ideas are valued.",
              },
              {
                icon: TrendingUp,
                title: "Growth Opportunities",
                description:
                  "Continuous learning and advancement opportunities to help you grow professionally.",
              },
              {
                icon: Users,
                title: "Talented Team",
                description:
                  "Work alongside passionate, talented individuals who are driven to make a difference.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#26C165] group"
              >
                <div className="w-14 h-14 bg-[#26C165]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#26C165] transition-colors">
                  <item.icon className="h-7 w-7 text-[#26C165] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Current Openings
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Find the perfect role that matches your skills and career
            aspirations.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {jobOpenings.map((job) => (
              <div
                key={job.id}
                className={`bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border-2 ${
                  selectedRole === job.id
                    ? "border-[#26C165]"
                    : "border-transparent hover:border-[#26C165]/30"
                }`}
              >
                <div className="p-6 cursor-pointer">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-[#26C165]/10 rounded-xl flex items-center justify-center">
                        <job.icon className="h-6 w-6 text-[#26C165]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{job.title}</h3>
                        <p className="text-sm text-gray-500">
                          {job.department}
                        </p>
                      </div>
                    </div>
                    <span className="bg-[#26C165]/10 text-[#26C165] text-xs font-semibold px-3 py-1 rounded-full">
                      {job.posted}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {job.type}
                    </div>
                    <div className="flex items-center gap-1">
                      <Award className="h-4 w-4" />
                      {job.experience}
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">{job.description}</p>

                  <button
                    className="text-[#26C165] font-semibold flex items-center gap-1 hover:gap-2 transition-all"
                    onClick={() =>
                      setSelectedRole(selectedRole === job.id ? null : job.id)
                    }
                  >
                    {selectedRole === job.id ? "Show less" : "View details"}
                    <ChevronRight
                      className={`h-4 w-4 transition-transform ${
                        selectedRole === job.id ? "rotate-90" : ""
                      }`}
                    />
                  </button>
                </div>

                {/* Expanded Details */}
                {selectedRole === job.id && (
                  <div className="border-t border-gray-100 p-6 bg-gray-50/50">
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                          <Briefcase className="h-5 w-5 text-[#26C165]" />
                          Responsibilities
                        </h4>
                        <ul className="space-y-2">
                          {job.responsibilities.map((item, index) => (
                            <li
                              key={index}
                              className="flex items-start gap-2 text-gray-600"
                            >
                              <CheckCircle className="h-5 w-5 text-[#26C165] flex-shrink-0 mt-0.5" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                          <FileText className="h-5 w-5 text-[#26C165]" />
                          Requirements
                        </h4>
                        <ul className="space-y-2">
                          {job.requirements.map((item, index) => (
                            <li
                              key={index}
                              className="flex items-start gap-2 text-gray-600"
                            >
                              <CheckCircle className="h-5 w-5 text-[#26C165] flex-shrink-0 mt-0.5" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                          <Award className="h-5 w-5 text-[#26C165]" />
                          What We Offer
                        </h4>
                        <ul className="space-y-2">
                          {job.benefits.map((item, index) => (
                            <li
                              key={index}
                              className="flex items-start gap-2 text-gray-600"
                            >
                              <CheckCircle className="h-5 w-5 text-[#26C165] flex-shrink-0 mt-0.5" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Apply Button - Opens Email with Subject */}
                      <a
                        href={`mailto:careers@cabsandmore.com?subject=Job%20Application%3A%20${encodeURIComponent(
                          job.title,
                        )}`}
                        className="w-full bg-[#26C165] text-white py-3 rounded-xl font-semibold hover:bg-[#1fa855] transition-colors flex items-center justify-center gap-2"
                      >
                        <Send className="h-5 w-5" />
                        Apply via Email
                      </a>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Apply Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 text-center">
            <div className="w-20 h-20 bg-[#26C165]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Mail className="h-10 w-10 text-[#26C165]" />
            </div>
            <h2 className="text-3xl font-bold mb-4">How to Apply</h2>
            <p className="text-gray-600 text-lg mb-6">
              To apply for any of the positions above, please send your resume
              and cover letter to:
            </p>

            <a
              href="mailto:careers@cabsandmore.com"
              className="inline-block bg-[#26C165] text-white text-xl px-8 py-4 rounded-2xl font-semibold hover:bg-[#1fa855] transition-colors mb-6"
            >
              careers@cabsandmore.com
            </a>

            <div className="bg-gray-50 rounded-xl p-6 text-left">
              <h3 className="font-semibold mb-3">Please include:</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#26C165] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Subject line:</strong> Job Application: [Position
                    Name] - [Your Name]
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#26C165] flex-shrink-0 mt-0.5" />
                  <span>Your updated CV/Resume (PDF format preferred)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#26C165] flex-shrink-0 mt-0.5" />
                  <span>
                    A brief cover letter explaining why you're a good fit
                  </span>
                </li>
              </ul>
            </div>

            <p className="text-sm text-gray-500 mt-6">
              We'll review your application and get back to you within 3-5
              business days.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
