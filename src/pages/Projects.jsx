import React from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

const PROJECTS = [
  {
    title: 'Hotel Management System DBMS',
    desc: 'A full-stack hotel booking and database management application for handling customer reservations, billing, and staff operations efficiently.',
    ss: 'https://placehold.co/600x400/1e293b/38bdf8?text=Hotel+Management',
    tech: ['MySQL', 'HTML', 'CSS', 'JavaScript'],
    live: 'https://github.com/MdFardeen22/Hotel_Management_System_DBMS',
    code: 'https://github.com/MdFardeen22/Hotel_Management_System_DBMS'
  },
  {
    title: 'Climate Change Modelling',
    desc: 'A data science project analyzing global temperature trends and using predictive modeling to forecast future climate change scenarios.',
    ss: 'https://placehold.co/600x400/1e293b/10b981?text=Climate+Modelling',
    tech: ['Python', 'Pandas', 'Scikit-Learn', 'Matplotlib'],
    live: 'https://github.com/MdFardeen22/Climate_Change_Modelling',
    code: 'https://github.com/MdFardeen22/Climate_Change_Modelling'
  },
  {
    title: 'SmartFit',
    desc: 'A fitness application designed to track workouts, monitor progress, and provide personalized health recommendations to users.',
    ss: 'https://placehold.co/600x400/1e293b/f43f5e?text=SmartFit',
    tech: ['React.js', 'JavaScript', 'CSS'],
    live: 'https://github.com/MdFardeen22/SmartFit',
    code: 'https://github.com/MdFardeen22/SmartFit'
  },
  {
    title: 'Heart Disease Diagnostic Analysis',
    desc: 'Machine learning model built to predict the likelihood of heart disease in patients based on clinical parameters and medical history.',
    ss: 'https://placehold.co/600x400/1e293b/ef4444?text=Heart+Disease+Analysis',
    tech: ['Python', 'Jupyter', 'Machine Learning', 'Data Analysis'],
    live: 'https://github.com/MdFardeen22/Heart-Disease_Diagnostic_Analysis',
    code: 'https://github.com/MdFardeen22/Heart-Disease_Diagnostic_Analysis'
  },
  {
    title: 'Drugs: Side Effects & Substitutes',
    desc: 'A comprehensive medical dataset analysis tool for exploring 250k+ medicines, their uses, side effects, and available substitutes.',
    ss: 'https://placehold.co/600x400/1e293b/8b5cf6?text=Drugs+Analysis',
    tech: ['Python', 'Data Science', 'Pandas', 'Seaborn'],
    live: 'https://github.com/MdFardeen22/250k_Medicines_Usage-_Side_Effects_and_Substitutes_Comprehensive_collection_of_medical_drugs',
    code: 'https://github.com/MdFardeen22/250k_Medicines_Usage-_Side_Effects_and_Substitutes_Comprehensive_collection_of_medical_drugs'
  }
];

export default function Projects() {
  return (
    <motion.section
      className="container projects-page"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      id="projects"
    >
      <div className="card projects-card" style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 30 }}>
        <motion.h2
          className="text-4xl font-semibold text-cyan-400 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          🚀 Projects
        </motion.h2>
        <p className="text-gray-400 mb-10">
          A collection of my major works — blending research, AI innovation.
        </p>

        <div className="projects-grid" style={{ display: 'grid', gap: 24, gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          {PROJECTS.map((p, idx) => (
            <motion.div
              key={idx}
              className="project-card"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              style={{
                background: 'linear-gradient(145deg, rgba(20,20,20,0.9), rgba(10,10,10,0.9))',
                border: '1px solid rgba(0,255,255,0.1)',
                borderRadius: 16,
                padding: 16,
                overflow: 'hidden',
                boxShadow: '0 0 20px rgba(0,255,255,0.08)'
              }}
            >
              <motion.div className="ss" whileHover={{ scale: 1.05 }} style={{ borderRadius: 12, overflow: 'hidden' }}>
                <img
                  src={p.ss}
                  alt={p.title}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: 12
                  }}
                />
              </motion.div>

              <div style={{ marginTop: 12 }}>
                <h3 style={{ fontSize: 18, color: '#0ea5e9', marginBottom: 6 }}>{p.title}</h3>
                <p style={{ fontSize: 14, color: '#bbb', marginBottom: 8, lineHeight: 1.6 }}>{p.desc}</p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 10 }}>
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        background: 'rgba(0,255,255,0.05)',
                        border: '1px solid rgba(0,255,255,0.1)',
                        padding: '3px 8px',
                        borderRadius: 6,
                        fontSize: 12,
                        color: '#aaf'
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10 }}>
                  <motion.a
                    href={p.code}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                    whileHover={{ scale: 1.08 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 5,
                      background: 'rgba(255,255,255,0.05)',
                      color: '#0ea5e9',
                      padding: '6px 12px',
                      borderRadius: 8,
                      fontSize: 13,
                      border: '1px solid rgba(0,255,255,0.1)',
                      textDecoration: 'none'
                    }}
                  >
                    <Github size={14} /> Code
                  </motion.a>
                  <motion.a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                    whileHover={{ scale: 1.08 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 5,
                      background: 'linear-gradient(90deg, #06b6d4, #0891b2)',
                      color: '#fff',
                      padding: '6px 12px',
                      borderRadius: 8,
                      fontSize: 13,
                      textDecoration: 'none'
                    }}
                  >
                    <ExternalLink size={14} /> Live
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
