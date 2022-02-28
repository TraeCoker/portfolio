import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="bg-body text-white font-poppins pb-12">
      <Head>
        <title>Trae Coker Portfolio</title>
        <meta name="description" content="Software engineer portfolio trae coker react node javascript react python next hiring" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    
      <header className="py-6">
          <div className="container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
              <div className="text-lg font-bold">Trae.Coker</div>
              <div className="hidden md:flex space-x-12 items-center">
                  <a href="#" className="text-selected-text">Home</a>
                  <a href="#clients">About me</a>
                  <a href="#work">My work</a>
                  <a href="#hire"><button className="px-6 py-2 bg-theme font-bold">Resume</button></a>
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
                      <a href="#" className="nav-dot selected-circle block w-7 h-7 rounded-full border-4 border-nav bg-body">
                          <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0">Home</span>
                      </a>
                      <a href="#about" className="nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body">
                          <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0">About</span>
                      </a>
                      <a href="#work" className="nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body">
                          <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0">Work</span>
                      </a>
                      <a href="#hire" className="nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body">
                          <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0">Hire</span>
                      </a>
                  </div>
              </nav>

              <div className="flex flex-wrap lg:ml-20 justify-center md:justify-start max-w-xl mt-0 md:my-36 -z-1">
                  <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl text-center md:text-left">Building<br/> the web of tomorrow.</h1>
                  <div className="w-full flex justify-center md:justify-start">
                      <button className="px-8 py-4 bg-theme text-white font-bold mt-12 flex items-center space-x-3">
                          <div>
                              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M14.4375 11C14.4375 11.9117 14.0753 12.786 13.4307 13.4307C12.786 14.0753 11.9117 14.4375 11 14.4375C10.0883 14.4375 9.21398 14.0753 8.56932 13.4307C7.92466 12.786 7.5625 11.9117 7.5625 11C7.5625 10.0883 7.92466 9.21398 8.56932 8.56932C9.21398 7.92466 10.0883 7.5625 11 7.5625C11.9117 7.5625 12.786 7.92466 13.4307 8.56932C14.0753 9.21398 14.4375 10.0883 14.4375 11Z" fill="white"/>
                                  <path d="M0 11C0 11 4.125 3.4375 11 3.4375C17.875 3.4375 22 11 22 11C22 11 17.875 18.5625 11 18.5625C4.125 18.5625 0 11 0 11ZM11 15.8125C12.2764 15.8125 13.5004 15.3055 14.403 14.403C15.3055 13.5004 15.8125 12.2764 15.8125 11C15.8125 9.72365 15.3055 8.49957 14.403 7.59705C13.5004 6.69453 12.2764 6.1875 11 6.1875C9.72365 6.1875 8.49957 6.69453 7.59705 7.59705C6.69453 8.49957 6.1875 9.72365 6.1875 11C6.1875 12.2764 6.69453 13.5004 7.59705 14.403C8.49957 15.3055 9.72365 15.8125 11 15.8125Z" fill="white"/>
                              </svg>								
                          </div>
                          <span>View my work.</span>
                      </button>
                  </div>
              </div>
              <img src="/me4.png" alt="Picture of Trae Coker" className="w-3/4 mt-12 md:absolute -mt-6 md:mt-0 right-0 " />
          </div>
      </div>
      


		<div className="container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
			<section className="w-full">
				<h2 id="work" className="secondary-title">My work</h2>
				<p className="section-paragraph">I’ve had the pleasure of working with multiple Fortune 500 companies, designing and implementing both frontend and backend.</p>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
					<img src="https://images.unsplash.com/photo-1576153192396-180ecef2a715?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" className="w-full bg-nav h-36 lg:h-72 object-cover"/>
					<img src="https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" className="w-full bg-nav h-36 lg:h-72 object-cover"/>
					<img src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80" className="w-full hidden md:block bg-nav h-36 lg:h-72 object-cover"/>
					<img src="https://images.unsplash.com/photo-1558655146-d09347e92766?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80" className="w-full hidden md:block bg-nav h-36 lg:h-72 object-cover"/>
					<img src="https://images.unsplash.com/photo-1547119957-637f8679db1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" className="w-full hidden md:block bg-nav h-36 lg:h-72 object-cover"/>
					<img src="https://images.unsplash.com/photo-1559028012-481c04fa702d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1336&q=80" className="w-full hidden md:block bg-nav h-36 lg:h-72 object-cover"/>
					<img src="https://images.unsplash.com/photo-1603969072881-b0fc7f3d77d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80s" className="w-full hidden md:block bg-nav h-36 lg:h-72 object-cover"/>
					<img src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" className="w-full hidden md:block bg-nav h-36 lg:h-72 object-cover"/>
					<img src="https://images.unsplash.com/photo-1545235617-7a424c1a60cc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80" className="w-full hidden md:block md:col-span-2 lg:col-span-1 bg-nav h-36 lg:h-72 object-cover"/>
				</div>
			</section>
		</div>

    

    </div>
  )
}
