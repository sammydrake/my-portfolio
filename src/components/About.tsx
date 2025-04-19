import { Award, BookOpen, Coffee, Cpu, Globe, UserCheck } from 'lucide-react';
import Container from './layout/Container';

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50 dark:bg-slate-900/50">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Full stack developer with a passion for creating elegant, efficient, and user-friendly web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              My Journey
            </h3>

            <div className="space-y-4 mb-6">
              <p className="text-gray-700 dark:text-gray-300">
                I've been developing web applications for over 5 years, with a focus on creating responsive, accessible, and performant user experiences.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                My background in both front-end and back-end development allows me to understand the full scope of a project, from user interface design to server architecture and database optimization.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                I'm passionate about continuous learning and staying up-to-date with the latest technologies and best practices in web development.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <div className="flex-shrink-0 mr-3">
                  <Globe className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Location</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Adex Cafe, Opposite University of Abuja(Old site), Gwagwalada, Abuja, Nigeria.</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex-shrink-0 mr-3">
                  <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Education</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Law, University of Nigeria, Nsukka, Enugu state, Nigeria</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex-shrink-0 mr-3">
                  <Award className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Experience</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">5+ years</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex-shrink-0 mr-3">
                  <Coffee className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Coffee</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Too much</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="#contact"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
              >
                Let's work together
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="flex flex-col items-center">
              <img
                src="/my-pic.jpg"
                alt="Profile photo"
                className="w-48 h-48 rounded-full object-cover shadow-lg mb-6 border-4 border-blue-500 dark:border-blue-400"
              />

              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 md:p-8 w-full">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  What I Do
                </h3>

                <div className="space-y-6">
                  <div className="flex">
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400">
                        <Cpu size={20} />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                        Front-End Development
                      </h4>
                      <p className="mt-1 text-gray-600 dark:text-gray-400">
                        Creating responsive and interactive user interfaces with modern JavaScript frameworks like React.
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400">
                        <Globe size={20} />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                        Back-End Development
                      </h4>
                      <p className="mt-1 text-gray-600 dark:text-gray-400">
                        Building scalable server-side applications with Node.js, Express, and database integration.
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400">
                        <UserCheck size={20} />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                        UX/UI Design
                      </h4>
                      <p className="mt-1 text-gray-600 dark:text-gray-400">
                        Designing intuitive and aesthetically pleasing user experiences with a focus on usability.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
