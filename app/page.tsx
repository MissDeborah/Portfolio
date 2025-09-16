'use client'
import Image from "next/image";
import Footer from "./component/Footer";
import Header from "./component/Header";
import { motion } from "framer-motion";
import { Code, Database, Layers } from "lucide-react";


const skills = [
  { name: "HTML & CSS", level: 90, icon: Code },
  { name: "JavaScript / TypeScript", level: 80, icon: Code },
  { name: "React & Next.js", level: 85, icon: Layers },
  { name: "Node.js", level: 75, icon: Code },
  { name: "Databases (PostgreSQL, MongoDB)", level: 70, icon: Database },
  { name: "Python", level: 60, icon: Code },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col "style={{ backgroundColor: '#FFECC2', color: '#3A0D08'}}>
      <Header />
      <section id='home'>
      <div
        style={{
          backgroundImage: "url('/tea.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "870px",
        }}
        className="w-full flex flex-col"
      > 
      <motion.div
          className="flex mx-40 items-center text-center my-30"
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.2 }}
        >
        <div className="flex flex-col justify-center h-[700px] pl-18 sm:pl-24" style={{ alignItems: 'flex-start' }}>
        
          <h1 className="text-4xl sm:text-5xl font-bold mb-2" style={{ fontFamily: 'Playfair Display, Merriweather, serif' }}>
            Hello, I'm Deborah!
          </h1>
          <p className="mt-2 text-lg sm:text-xl" style={{ fontFamily: 'Playfair Display, Merriweather, serif' }}>
            Welcome to my portfolio website.
          </p>
        </div>
      </motion.div>
      </div>
      </section>
      <section className="flex " style={{ backgroundColor: '#94524a', color: '#ffffff' }} id='about'>
      <motion.div
        className="flex mx-40 items-center text-center my-30"
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
      <Image
        src="/dd.jpg"
        alt="Deborah's photo"
        width={200}
        height={200}
        className="rounded-full border-4 shadow-lg"
        style={{ borderColor: '#3A0D08' }}
      />
        <p className="ml-10" style={{ fontFamily: 'Playfair Display, Merriweather, serif' , fontSize: '1.5rem'}}>
          Hi, I am Deborah, a passionate full stack developer from Ethiopia. I can build dynamic and responsive web applications using the MERN stack. Driven by curiosity and dedication, I like to update myself with the latest technology. I'm eager to contribute to innovative projects and collaborate with like-minded professionals to create impactful digital solutions. 
        </p>
      </motion.div>
      </section>

      {/* Timeline Section */}
      <section className="mt-30 flex flex-col items-center text-center pb-5" id='projects'>
        <div className="relative border-l-4 border-gray-700 ml-4">
          {/* Early 2023 */}
          <div className="mb-10 ml-9">
            <div className="text-xl font-semibold  00">Early 2023</div>
            <p className="mt-2 text-gray-900 max-w-2xl">
              I began my programming journey by building small, foundational projects like email templates using HTML and CSS. This helped me grasp the basics of web development and kickstarted my passion for coding.
            </p>
            <div className="flex gap-4 mt-4">
              <Image src="/email2.png" alt="Project 1" width={350} height={180} className="rounded-xl" />
              <Image src="/email4.png" alt="Project 2" width={300} height={180} className="rounded-xl" />
            </div>
          </div>
        </div>
      </section>
      <section className="mt-20 flex flex-col items-center text-center pb-20">
        <div className="relative border-l-4 border-gray-700 ml-4">
          {/* Early 2023 */}
          <div className="mb-10 ml-9">
            <div className="text-xl font-semibold text-gray-8 00">Early 2024</div>
            <p className="mt-2 text-gray-900 max-w-2xl">
             I then advanced to developing websites for schools and other organizations, where I applied my skills to real-world projects and gained practical experience in building functional and user-friendly applications.
            </p>
            <div className="flex gap-4 mt-4">
              <Image src="/school1.png" alt="Project 1" width={320} height={200} className="rounded-xl" />
              <Image src="/school2.png" alt="Project 2" width={320} height={200} className="rounded-xl" />
            </div>
          </div>

          {/* Late 2023 */}
          <div className="mb-10 ml-6">
            <div className="text-xl font-semibold">Early 2025 – Present</div>
            <p className="mt-2 text-gray-900 max-w-2xl">
              After that, I expanded my skills by developing an inventory management system, which allowed me to deepen my understanding of backend logic, database design, and full-stack development.
            </p>
          </div>
        </div>
      </section>
      <section id='skills'>
      <div className="bg-[#D2B48C] p-8 flex flex-col items-center pb-30">
        <motion.h1
          className="text-4xl font-bold mb-10 text-gray-800 mt-10" 
          style={{ fontFamily: 'Playfair Display, Merriweather, serif', color: '#3A0D08'}}
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}

        >
          My Skills
        </motion.h1>

        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl pt-2 0 ">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className=" bg-[#FFECC2] rounded-2xl shadow-lg p-6 flex flex-col items-center"
            >
              <skill.icon className=" w-12 h-12 text-blue-900 mb-4" />
              <h2 className="text-xl font-semibold text-black mb-2">
                {skill.name}
              </h2>
              <div className="  w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-3 rounded-full "
                  style={{ width: `${skill.level}%` , backgroundColor: '#3A0D08'}}
                ></div>
              </div>
              <p className="mt-2 text-gray-500 ">{skill.level}%</p>
            </motion.div>
          ))}
        </div>
      </div>
      </section>
      <Footer />
    </div>
  );
}
