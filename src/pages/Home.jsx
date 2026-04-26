import React from 'react'
import { color, motion } from 'framer-motion'
import "./Home.css"
import '../index.css'
import SocialIcons from '../components/SocialIcons'

// 🖼️ Import Assets
import photo from '../../public/photo.jpg'

export default function Home() {
  const professions = [
    'Full Stack Engineer',
    'React & React Native Specialist',
    'AI & ML Developer',
    'Frontend Architect',
    'Backend Systems Developer'
  ]

  return (
    <section className="home-section">
      {/* Typing Effect Styles */}
      <style>
        {`
          @keyframes typing { from { max-width: 0; } to { max-width: 100%; } }
          @keyframes blink { 50% { border-color: transparent; } }
        `}
      </style>

      {/* Top Section: Photo + Info */}
      <div className="home-top">
        {/* Left: Glowing Photo */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="photo-container"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="photo-ring"
          />
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="photo-frame"
          >
            <motion.img
              src={photo}
              alt="Md Fardeen"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="profile-photo"
            />
          </motion.div>
        </motion.div>

        {/* Right: Info Section */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="home-info"
        >
          <h1 className="home-title">
            Hi, I’m{' '}
            <motion.span
              animate={{ backgroundPositionX: ['0%', '200%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              className="home-name"
            >
              MD FARDEEN
            </motion.span>
          </h1>

          {/* Typing Animated Text */}
          <p className="typing-effect">
            Software Engineer | Full Stack Developer | AI & ML Developer
          </p>

          {/* Profession Tags */}
          <motion.div className="profession-tags">
            {professions.map((role, i) => (
              <motion.div key={i} whileHover={{ scale: 1.04, background: 'linear-gradient(90deg,var(--accent),var(--accent-2))', color: "black" }} transition={{ type: 'spring', stiffness: 200 }} className="profession-tag">
                {role}
              </motion.div>
            ))}
          </motion.div>

          {/* Info Cards */}
          <motion.div className="info-cards">
            {[
              { label: '📍 Location', value: 'Jamshedpur, Jharkhand' },
              { label: '💼 Expertise', value: 'React.js, Web Development' },
              { label: '📧 Contact', value: 'fardeenmd63@gmail.com' },
            ].map((info, i) => (
              <motion.div key={i} whileHover={{ y: -4, scale: 1.05 }} transition={{ type: 'spring', stiffness: 250 }} className="info-card">
                <strong>{info.label}</strong>
                <p>{info.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Quick Links */}
      <motion.div className="quick-links">
        <h2 className="quick-links-title">Connect with me</h2>
        <div className="quick-links-list">
          <SocialIcons />
        </div>
      </motion.div>

    </section>
  )
}
