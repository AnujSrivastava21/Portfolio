import React from 'react'
import { FaUser, FaBriefcase, FaCode, FaGraduationCap, FaEnvelope, FaSearch, FaLinkedin, FaLink } from 'react-icons/fa'
import { MdWork, MdSchool, MdContactPhone, MdLocationOn } from 'react-icons/md'
import { BsGithub, BsGlobe } from 'react-icons/bs'

const Home = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 min-h-screen p-4 lg:p-10'>
        {/* Summary Card */}
        <div className='bg-gradient-to-br from-slate-500 via-slate-600 to-slate-700 min-h-[50px] shadow-2xl rounded-3xl p-4 lg:p-8 text-white transform transition-all duration-500 hover:scale-105 hover:shadow-slate-500/25 hover:-translate-y-2 hover:rotate-1'>
          <div className="flex items-center mb-6">
            <div className="bg-white/20 p-3 rounded-full mr-4 shadow-lg transition-all duration-300 hover:bg-white/30 hover:scale-110 hover:rotate-12">
              <FaUser className="text-3xl" />
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold font-serif text-white">Summary</h2>
          </div>
          
          <div className="mb-6 text-center">
            <h1 className="text-3xl lg:text-5xl font-bold font-serif text-amber-300 mb-2 tracking-wide">
              Anuj Srivastava
            </h1>
            <p className="text-lg lg:text-xl text-gray-200 font-medium">
              Full-Stack Developer
            </p>
          </div>
          
          <p className="leading-relaxed text-gray-200 text-lg font-light">
            2024 graduate with <span className="font-semibold text-amber-300">5 months</span> of experience building modern web applications. 
            Passionate about creating <span className="font-semibold ">user-friendly interfaces</span> and scalable backend solutions. 
            Proficient in <span className="font-semibold text-amber-300">React</span>, <span className="font-semibold text-amber-300">Node.js</span>, <span className="font-semibold text-amber-300">Next.js</span>, and <span className="font-semibold text-amber-300">TypeScript</span>.
          </p>
          
          <div className="mt-6 text-center">
            <a 
              href="https://drive.google.com/file/d/1whpgSFyW7KBxV6jgsLCgcF3vNUssY-xw/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center px-6 py-3 bg-amber-300 text-gray-900 font-bold rounded-xl shadow-lg hover:bg-amber-400 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-1"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0014.414 6L12 3.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
              </svg>
              Download Resume
            </a>
          </div>
        </div>
        
        {/* Experience Card */}
        <div className='bg-gradient-to-br from-gray-600 via-gray-700 to-gray-800 min-h-[50px] shadow-2xl rounded-3xl p-4 lg:p-8 text-white lg:col-span-2 transform transition-all duration-500 hover:scale-105 hover:shadow-gray-500/25 hover:-translate-y-2 hover:rotate-1'>
          <div className="flex items-center mb-6">
            <div className="bg-white/20 p-3 rounded-full mr-4 shadow-lg transition-all duration-300 hover:bg-white/30 hover:scale-110 hover:rotate-12">
              <FaBriefcase className="text-3xl" />
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold font-serif text-white">Experience</h2>
          </div>
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 shadow-xl hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:border-amber-300/30">
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-xl font-mono text-white">React Developer Intern</h3>
                <a href="https://drive.google.com/file/d/1IPZ7h1HcsaD2RGrb8JJ_7hLFCx-aNqNo/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-white hover:text-amber-300 transition-colors duration-300 hover:scale-110">
                  <FaLink className="text-lg" />
                </a>
              </div>
              <p className="text-amber-300 text-base font-medium">Vyom Os • Jan 2025 - Feb 2025</p>
              <p className="text-gray-200 mt-3 text-lg leading-relaxed">Developed React-based applications and components, collaborated with development team, and gained hands-on experience with modern frontend technologies.</p>
              <p className="text-gray-300 text-sm mt-3"><span className="text-amber-300 font-medium">Skills used:</span> React, Context API</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 shadow-xl hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:border-amber-300/30">
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-xl font-mono text-white">Data Analyst Intern</h3>
                <a href="https://drive.google.com/file/d/1q_qK9a8_n4m0pif4I3kAgcSF0BvZOHN6/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-white hover:text-amber-300 transition-colors duration-300 hover:scale-110">
                  <FaLink className="text-lg" />
                </a>
              </div>
              <p className="text-amber-300 text-base font-medium">Redseer Strategy Consulting • June 2024 - Sep 2024</p>
              <p className="text-gray-200 mt-3 text-lg leading-relaxed">Analyzed market data, created reports and visualizations, and supported strategic consulting projects with data-driven insights.</p>
              <p className="text-gray-300 text-sm mt-3"><span className="text-amber-300 font-medium">Skills used:</span> Python, MySQL, Excel</p>
            </div>
          </div>
        </div>
        
        {/* Projects Card */}
        <div className='bg-gradient-to-br from-zinc-600 via-zinc-700 to-zinc-800 min-h-[50px] shadow-2xl rounded-3xl p-4 lg:p-8 text-white transform transition-all duration-500 hover:scale-105 hover:shadow-zinc-500/25 hover:-translate-y-2 hover:rotate-1'>
          <div className="flex items-center mb-6">
            <div className="bg-white/20 p-3 rounded-full mr-4 shadow-lg transition-all duration-300 hover:bg-white/30 hover:scale-110 hover:rotate-12">
              <FaCode className="text-3xl" />
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold font-serif text-white">Projects</h2>
          </div>
          <div className="space-y-4">

          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20 shadow-lg hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:-translate-y-1 hover:shadow-xl hover:border-amber-300/30 hover:translate-x-2">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-lg font-mono text-white">Pathocare</h3>
                  <p className="text-amber-300 text-sm font-medium">React, Tailwind CSS</p>
                  <p className="text-gray-300 text-xs">Comprehensive pathology lab management and patient portal system</p>
                </div>
                <div className="flex space-x-2">
                  <a href="https://github.com/AnujSrivastava21/Pathology_Pathocare" target="_blank" rel="noopener noreferrer" className="text-white hover:text-amber-300 transition-colors duration-300">
                    <BsGithub className="text-xl" />
                  </a>
                  <a href="https://pathology-pathocare.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-amber-300 transition-colors duration-300">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 22.525H0l12-21.05 12 21.05zM5.736 12.843l4.264 7.682 4.264-7.682-4.264-7.682-4.264 7.682z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20 shadow-lg hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:-translate-y-1 hover:shadow-xl hover:border-amber-300/30 hover:translate-x-2">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-lg font-mono text-white">Call Analyzer</h3>
                  <p className="text-amber-300 text-sm font-medium">Next.js, Assembly AI</p>
                  <p className="text-gray-300 text-xs">AI-powered call analysis tool for transcription and sentiment analysis</p>
                </div>
                <div className="flex space-x-2">
                  <a href="https://github.com/AnujSrivastava21/call_feedback" target="_blank" rel="noopener noreferrer" className="text-white hover:text-amber-300 transition-colors duration-300">
                    <BsGithub className="text-xl" />
                  </a>
                  <a href="https://call-feedbackai.vercel.app" target="_blank" rel="noopener noreferrer" className="text-white hover:text-amber-300 transition-colors duration-300">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 22.525H0l12-21.05 12 21.05zM5.736 12.843l4.264 7.682 4.264-7.682-4.264-7.682-4.264 7.682z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20 shadow-lg hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:-translate-y-1 hover:shadow-xl hover:border-amber-300/30 hover:translate-x-2">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-lg font-mono text-white">Be Healthy - Be Fit</h3>
                  <p className="text-amber-300 text-sm font-medium">Gym Website</p>
                  <p className="text-gray-300 text-xs">Frontend-only gym website with responsive design and modern UI</p>
                </div>
                <div className="flex space-x-2">
                  <a href="https://github.com/AnujSrivastava21/GYM_Website" target="_blank" rel="noopener noreferrer" className="text-white hover:text-amber-300 transition-colors duration-300">
                    <BsGithub className="text-xl" />
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="text-white hover:text-amber-300 transition-colors duration-300">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 22.525H0l12-21.05 12 21.05zM5.736 12.843l4.264 7.682 4.264-7.682-4.264-7.682-4.264 7.682z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Skills Card */}
        <div className='bg-gradient-to-br from-neutral-600 via-neutral-700 to-neutral-800 min-h-[50px] shadow-2xl rounded-3xl p-4 lg:p-8 text-white transform transition-all duration-500 hover:scale-105 hover:shadow-neutral-500/25 hover:-translate-y-2 hover:rotate-1'>
          <div className="flex items-center mb-6">
            <div className="bg-white/20 p-3 rounded-full mr-4 shadow-lg transition-all duration-300 hover:bg-white/30 hover:scale-110 hover:rotate-12">
              <FaCode className="text-3xl" />
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold font-serif text-white">Skills</h2>
          </div>
          <div className="space-y-4">
            <div>
              <span className="text-lg font-medium text-white font-mono">Frontend</span>
              <div className="flex flex-wrap gap-3 mt-2">
                <span className="bg-white/20 text-white px-3 py-2 rounded-xl text-sm font-semibold shadow-lg hover:bg-white/30 transition-all duration-300 hover:scale-110 hover:rotate-3 hover:shadow-xl hover:bg-amber-300/20">
                  React
                </span>
                <span className="bg-white/20 text-white px-3 py-2 rounded-xl text-sm font-semibold shadow-lg hover:bg-white/30 transition-all duration-300 hover:scale-110 hover:-rotate-3 hover:shadow-xl hover:bg-amber-300/20">
                  Next.js
                </span>
                <span className="bg-white/20 text-white px-3 py-2 rounded-xl text-sm font-semibold shadow-lg hover:bg-white/30 transition-all duration-300 hover:scale-110 hover:rotate-3 hover:shadow-xl hover:bg-amber-300/20">
                  TypeScript
                </span>
                
              </div>
            </div>
            <div>
              <span className="text-lg font-medium text-white font-mono">Backend</span>
              <div className="flex flex-wrap gap-3 mt-2">
                <span className="bg-white/20 text-white px-3 py-2 rounded-xl text-sm font-semibold shadow-lg hover:bg-white/30 transition-all duration-300 hover:scale-110 hover:-rotate-3 hover:shadow-xl hover:bg-amber-300/20">
                  Node.js
                </span>
                <span className="bg-white/20 text-white px-3 py-2 rounded-xl text-sm font-semibold shadow-lg hover:bg-white/30 transition-all duration-300 hover:scale-110 hover:rotate-3 hover:shadow-xl hover:bg-amber-300/20">
                  Fast API
                </span>
                <span className="bg-white/20 text-white px-3 py-2 rounded-xl text-sm font-semibold shadow-lg hover:bg-white/30 transition-all duration-300 hover:scale-110 hover:-rotate-3 hover:shadow-xl hover:bg-amber-300/20">
                  Express
                </span>
              </div>
            </div>
            <div>
              <span className="text-lg font-medium text-white font-mono">Database</span>
              <div className="flex flex-wrap gap-3 mt-2">
                <span className="bg-white/20 text-white px-3 py-2 rounded-xl text-sm font-semibold shadow-lg hover:bg-white/30 transition-all duration-300 hover:scale-110 hover:rotate-3 hover:shadow-xl hover:bg-amber-300/20">
                  MySQL
                </span>
                <span className="bg-white/20 text-white px-3 py-2 rounded-xl text-sm font-semibold shadow-lg hover:bg-white/30 transition-all duration-300 hover:scale-110 hover:-rotate-3 hover:shadow-xl hover:bg-amber-300/20">
                  MongoDB
                </span>
              </div>
            </div>
            <div>
              <span className="text-lg font-medium text-white font-mono">Tools</span>
              <div className="flex flex-wrap gap-3 mt-2">
                <span className="bg-white/20 text-white px-3 py-2 rounded-xl text-sm font-semibold shadow-lg hover:bg-white/30 transition-all duration-300 hover:scale-110 hover:rotate-3 hover:shadow-xl hover:bg-amber-300/20">
                  Git
                </span>
                <span className="bg-white/20 text-white px-3 py-2 rounded-xl text-sm font-semibold shadow-lg hover:bg-white/30 transition-all duration-300 hover:scale-110 hover:-rotate-3 hover:shadow-xl hover:bg-amber-300/20">
                  GitHub
                </span>
                <span className="bg-white/20 text-white px-3 py-2 rounded-xl text-sm font-semibold shadow-lg hover:bg-white/30 transition-all duration-300 hover:scale-110 hover:-rotate-3 hover:shadow-xl hover:bg-amber-300/20">
                  Docker
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Education Card */}
        <div className='bg-gradient-to-br from-stone-600 via-stone-700 to-stone-800 min-h-[50px] shadow-2xl rounded-3xl p-4 lg:p-8 text-white transform transition-all duration-500 hover:scale-105 hover:shadow-stone-500/25 hover:-translate-y-2 hover:rotate-1'>
          <div className="flex items-center mb-6">
            <div className="bg-white/20 p-3 rounded-full mr-4 shadow-lg transition-all duration-300 hover:bg-white/30 hover:scale-110 hover:rotate-12">
              <FaGraduationCap className="text-3xl" />
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold font-serif text-white">Education</h2>
          </div>
          <div className="space-y-4">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20 shadow-lg hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-xl hover:border-amber-300/30">
              <h3 className="font-bold text-lg font-mono text-white">Bachelor of Computer Science</h3>
              <p className="text-amber-300 text-sm font-medium">DIT University, Dehradun, Uttarakhand</p>
              <p className="text-gray-200 text-sm font-medium">CGPA: 8.11</p>
              <p className="text-amber-300 text-sm font-medium mt-1">Specialization: Artificial Intelligence & Machine Learning</p>
            </div>
          </div>
        </div>
        
        {/* Contact Card */}
        <div className='bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 min-h-[50px] shadow-2xl rounded-3xl p-4 lg:p-8 text-white transform transition-all duration-500 hover:scale-105 hover:shadow-slate-500/25 hover:-translate-y-2 hover:rotate-1'>
          <div className="flex items-center mb-6">
            <div className="bg-white/20 p-3 rounded-full mr-4 shadow-lg transition-all duration-300 hover:bg-white/30 hover:scale-110 hover:rotate-12">
              <FaEnvelope className="text-3xl" />
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold font-serif text-white">Contact</h2>
          </div>
                      <div className="space-y-4">
              <a href="mailto:anujsrivastava743@gmail.com" className="flex items-center space-x-3 bg-white/10 p-3 rounded-xl hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:translate-x-3 hover:shadow-xl hover:border-l-4 hover:border-l-amber-300 cursor-pointer">
                <FaEnvelope className="text-amber-300 text-xl" />
                <span className="text-gray-200 font-medium">anujsrivastava743@gmail.com</span>
              </a>
              <div className="flex items-center space-x-3 bg-white/10 p-3 rounded-xl hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:translate-x-3 hover:shadow-xl hover:border-l-4 hover:border-l-amber-300">
                <MdContactPhone className="text-amber-300 text-xl" />
                <span className="text-gray-200 font-medium">+91 7052145589</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/10 p-3 rounded-xl hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:translate-x-3 hover:shadow-xl hover:border-l-4 hover:border-l-amber-300">
                <MdLocationOn className="text-amber-300 text-xl" />
                <span className="text-gray-200 font-medium">Noida ,UP</span>
              </div>
              <a href="https://www.linkedin.com/in/anuj-srivastava-/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 bg-white/10 p-3 rounded-xl hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:translate-x-3 hover:shadow-xl hover:border-l-4 hover:border-l-amber-300 cursor-pointer">
                <FaLinkedin className="text-amber-300 text-xl" />
                <span className="text-gray-200 font-medium">Anuj Srivastava</span>
              </a>
              <a href="https://github.com/AnujSrivastava21" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 bg-white/10 p-3 rounded-xl hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:translate-x-3 hover:shadow-xl hover:border-l-4 hover:border-l-amber-300 cursor-pointer">
                <BsGithub className="text-amber-300 text-xl" />
                <span className="text-gray-200 font-medium">Anuj Srivastava</span>
              </a>
            </div>
        </div>
        
        {/* Looking For Card */}
        <div className='bg-gradient-to-br from-gray-800 via-gray-900 to-black min-h-[50px] shadow-2xl rounded-3xl p-4 lg:p-8 text-white lg:col-span-2 transform transition-all duration-500 hover:scale-105 hover:shadow-gray-500/25 hover:-translate-y-2 hover:rotate-1'>
          <div className="flex items-center mb-6">
            <div className="bg-white/20 p-3 rounded-full mr-4 shadow-lg transition-all duration-300 hover:bg-white/30 hover:scale-110 hover:rotate-12">
              <FaSearch className="text-3xl" />
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold font-serif text-white">Looking For</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 shadow-xl hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:-translate-y-3 hover:shadow-2xl hover:border-amber-300/30 hover:rotate-1">
              <div className="flex items-center mb-3">
                <div className="bg-white/20 p-2 rounded-full mr-3 transition-all duration-300 hover:bg-amber-300/30 hover:scale-110">
                  <MdWork className="text-2xl text-amber-300" />
                </div>
                <h3 className="font-bold text-xl font-mono text-white">Full-Stack Opportunities</h3>
              </div>
              <p className="text-gray-200 text-lg leading-relaxed">Seeking roles where I can contribute to both frontend and backend development.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 shadow-xl hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:-translate-y-3 hover:shadow-2xl hover:border-amber-300/30 hover:rotate-1">
              <div className="flex items-center mb-3">
                <div className="bg-white/20 p-2 rounded-full mr-3 transition-all duration-300 hover:bg-amber-300/30 hover:scale-110">
                  <BsGlobe className="text-2xl text-amber-300" />
                </div>
                <h3 className="font-bold text-xl font-mono text-white">Work from Office</h3>
              </div>
              <p className="text-gray-200 text-lg leading-relaxed">Prefer office  or hybrid work arrangements for better work-life balance.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 shadow-xl hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:-translate-y-3 hover:shadow-2xl hover:border-amber-300/30 hover:rotate-1">
              <div className="flex items-center mb-3">
                <div className="bg-white/20 p-2 rounded-full mr-3 transition-all duration-300 hover:bg-amber-300/30 hover:scale-110">
                  <MdSchool className="text-2xl text-amber-300" />
                </div>
                <h3 className="font-bold text-xl font-mono text-white">Growth & Learning</h3>
              </div>
              <p className="text-gray-200 text-lg leading-relaxed">Looking for opportunities to learn new technologies and grow professionally.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home 