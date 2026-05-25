import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Clock3 } from "lucide-react";
import { BLOG_ROUTES } from "../constants/routes";

const blogs = [
  {
    title:
      "How AI Helps Doctors Reduce Clinical Documentation Time",
    description:
      "Discover how AI-powered healthcare tools reduce administrative workload, automate clinical documentation, and improve consultation efficiency for doctors.",
    readTime: "6 min read",
    category: "AI Healthcare",
    link: BLOG_ROUTES.aiClinicalDocs,
  },
  {
    title:
      "Best EMR Software for Doctors in India (2026)",
    description:
      "Explore the top EMR software platforms in India and learn how AI-powered systems are transforming clinic workflows and patient management.",
    readTime: "8 min read",
    category: "EMR Software",
    link: BLOG_ROUTES.emrIndia,
  },
  {
    title:
      "How to Choose the Right Clinic Management Software",
    description:
      "Learn the key factors clinics should consider when selecting modern clinic management software for workflow efficiency and scalability.",
    readTime: "7 min read",
    category: "Clinic Management",
    link: BLOG_ROUTES.clinicManagement,
  },
];

const BlogPreview = () => {
  return (
    <section id="blog" className="w-full py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Latest{" "}
            <span className="text-blue-600">
              Healthcare Insights
            </span>
          </h2>

          <p className="mt-5 text-lg text-gray-500 max-w-2xl mx-auto">
            Explore AI-powered healthcare trends,
            EMR systems, and clinic workflow
            innovations.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="group relative bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Gradient Top */}
              <div className="h-2 bg-gradient-to-r from-blue-600 to-cyan-400" />

              <div className="p-8 flex flex-col h-full">
                
                {/* Category */}
                <div className="mb-5">
                  <span className="px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold">
                    {blog.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 leading-snug group-hover:text-blue-600 transition-colors duration-300">
                  {blog.title}
                </h3>

                {/* Description */}
                <p className="mt-5 text-gray-600 leading-7 text-base">
                  {blog.description}
                </p>

                {/* Footer */}
                <div className="mt-auto pt-8 flex items-center justify-between">
                  
                  {/* Read Time */}
                  <div className="flex items-center gap-2 text-gray-500">
                    <Clock3 className="w-4 h-4" />

                    <span className="text-sm">
                      {blog.readTime}
                    </span>
                  </div>

                  {/* Read More */}
                  <Link
                    to={blog.link}
                    className="flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all duration-300"
                  >
                    Read More

                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-3xl border border-blue-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;