import { Contact } from '../components/Contact'
import Image from 'next/image';
import ProjectCards from '../components/ProjectCards'
import { useScrollHandler } from '../utilities/useScrollHandler'
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import headerPic from  '../public/me4.png'



export default function Home() {
  const scrollPosition = useScrollHandler();

  const selectedStyle = {
          background: '#3F3FFF',
          border: '#3F3FFF',
  }

  return (
    <div className="bg-body text-white font-poppins pb-12">

      <NextSeo
        title="Trae Coker - Intelligent Automation Engineer"
        description="Trae Coker, intelligent automation engineer, full-stack developer, rpa developer, devops enigineer in Austin Texas."
        additionalLinkTags={
          [
            {rel: "icon",
            href: "/favicon.ico"}
          ]
        }
       />

    
      <header className="py-6">
          <div className="container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full animate-fade-in-down">
              <div className="text-lg font-bold"><a href="/" className="hover:text-selected-text">Trae Coker</a></div>
              <div className="hidden md:flex space-x-12 items-center">
                  <Link href="#about">
                    <a  className="hover:text-selected-text">About me</a>
                  </Link>
                  <Link href="#work">
                    <a  className="hover:text-selected-text">My work</a>
                  </Link>
                  <Link href="https://github.com/TraeCoker">
                    <a  className="hover:text-selected-text" >GitHub</a>
                  </Link>
                  <Link href="https://linkedin.com/in/traecoker">
                    <a  className="hover:text-selected-text">LinkedIn</a>
                  </Link>
                  <Link href="https://docs.google.com/document/d/1x6BSoMy3sXurjqhYVUJXpUtI0fd-7PpSQLIOzexseJM/edit?usp=sharing">
                    <a><button className="px-6 py-2 bg-theme font-bold">Resume</button></a>
                  </Link>
              </div>
              <div className="md:hidden">
                  <svg width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 17.5H0.25V14.6667H13V17.5ZM25.75 10.4167H0.25V7.58333H25.75V10.4167ZM25.75 3.33333H13V0.5H25.75V3.33333Z" fill="white"/></svg>
              </div>
          </div>
      </header>
        
      <div className="container mt-16 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
          <div className="flex flex-wrap md:flex-nowrap">

              <nav className="inline-block lg:mr-24 lg:w-4 fixed left-percentage hidden xl:block">
                  <div className="absolute left-25 transform -translate-x-1/2 space-y-6 mt-36">
                    <Link href="#">
                        <a  style={(scrollPosition < 600 ? selectedStyle : null )} className="nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body">
                          <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0">Home</span>
                        </a>
                    </Link>
                    <Link href="#about">
                        <a  style={(scrollPosition >= 600 && scrollPosition < 1000 ? selectedStyle : null)} className="nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body">
                          <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0">About</span>
                        </a>
                    </Link>  
                    <Link href="#skills">
                        <a  style={(scrollPosition >= 1000 && scrollPosition < 1500 ? selectedStyle : null )} className="nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body">
                          <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0">Skills</span>
                        </a>
                    </Link> 
                    <Link href="#work">
                        <a style={(scrollPosition >= 1500 && scrollPosition < 3000 ? selectedStyle : null )} className="nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body">
                          <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0">Work</span>
                        </a>
                    </Link>
                    <Link href="#hire">
                        <a  style={(scrollPosition >= 3000 ? selectedStyle : null)} className="nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body">
                          <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0">Hire</span>
                        </a>
                    </Link>
                  </div>
              </nav>

              <div className="flex flex-wrap lg:ml-20 justify-center md:justify-start max-w-xl mt-0 md:my-36 -z-1 ">
                  <h1 className=" font-bold text-5xl md:text-6xl lg:text-7xl text-center md:text-left animate-fade-in-up-m ">Automating<br/> the web of tomorrow.</h1>
                  <div className="w-full flex justify-center md:justify-start">
                    <Link href="#work">
                      <a  className="px-8 py-4 bg-theme text-white font-bold mt-12 flex items-center space-x-3 animate-fade-in-up-s">
                          <div>
                              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M14.4375 11C14.4375 11.9117 14.0753 12.786 13.4307 13.4307C12.786 14.0753 11.9117 14.4375 11 14.4375C10.0883 14.4375 9.21398 14.0753 8.56932 13.4307C7.92466 12.786 7.5625 11.9117 7.5625 11C7.5625 10.0883 7.92466 9.21398 8.56932 8.56932C9.21398 7.92466 10.0883 7.5625 11 7.5625C11.9117 7.5625 12.786 7.92466 13.4307 8.56932C14.0753 9.21398 14.4375 10.0883 14.4375 11Z" fill="white"/>
                                  <path d="M0 11C0 11 4.125 3.4375 11 3.4375C17.875 3.4375 22 11 22 11C22 11 17.875 18.5625 11 18.5625C4.125 18.5625 0 11 0 11ZM11 15.8125C12.2764 15.8125 13.5004 15.3055 14.403 14.403C15.3055 13.5004 15.8125 12.2764 15.8125 11C15.8125 9.72365 15.3055 8.49957 14.403 7.59705C13.5004 6.69453 12.2764 6.1875 11 6.1875C9.72365 6.1875 8.49957 6.69453 7.59705 7.59705C6.69453 8.49957 6.1875 9.72365 6.1875 11C6.1875 12.2764 6.69453 13.5004 7.59705 14.403C8.49957 15.3055 9.72365 15.8125 11 15.8125Z" fill="white"/>
                              </svg>								
                          </div>
                          <span >View my work.</span>
                      </a>
                    </Link>
                  </div>
              </div>
              <div  className="w-3/4 mt-12 md:absolute sm:mt-6 md:mt-0 right-0 animate-fade-in-up-s" >
                <Image src={headerPic} alt="Picture of Trae Coker" priority />
              </div>
          </div>
      </div>
      
      <div className="container mt-60 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full animate-fade-in-up-s">
			    <section className="w-full">
				  <h2 id="about" className="secondary-title">About me</h2>
          <p className="section-paragraph">Hello there, my name is Trae Coker. I am a Musician, Writer, Community Builder, Flatiron School Alumni and Full Stack Software Engineer.</p>
          <p className="section-paragraph">My highest aim is to take the industrious programmatic skills I am cultivating every day and do my part to produce regenerative technologies that help solve the problems we currently face, and to do so whilst building products and experiences that are beautiful inside and out.</p>
          <p className="section-paragraph">As I have grown as a developer I have been honored to meet engineers and mentors who have helped teach me and raise the bar on what is expected of a developer. </p>
        </section>
      </div>

      <div className="container mt-40 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full animate-fade-in-up-s">
			    <section className="w-full">
				  <h2 id="skills" className="secondary-title">My skills</h2>
				  <p className="section-paragraph">Through my studies, I have gained a solid understanding of computer science and software development concepts, and have dedicated much of my free time to apply these concepts to real-world scenarios and applications. </p>
          <div className="grid grid-rows-2 grid-flow-col gap-4">
            <p><span>○</span> JavaScript ES6</p>
            <p><span>○</span> Ruby on Rails</p>
            <p><span>○</span> React</p>
            <p><span>○</span> {"Blockchain development & smart contracts"}</p>
            <p><span>○</span> Node.js</p>
            <p><span>○</span> {"HTML5, CSS, and responsive UI design"}</p>
            <p><span>○</span>{"SQL & NOSQL"}</p>
            <p><span>○</span> RESTful API development</p>
          </div>
        </section>
      </div>


      <div className="container mt-40 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full animate-fade-in-up-s">
        <section className="w-full">
          <h2 id="work" className="secondary-title">{"What I've been working on"}</h2>
          <p className="section-paragraph">I keep busy and am always working on some sort of project. Have a look at some of the applications and technical writing I have been a part of. </p>
          <ProjectCards />
        </section>
      </div>
  
      <Contact />

  </div>
  )
}
