import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import bannerPic from '../../public/crypto-top.png'
import fullPic from '../../public/crypto-market-full.png'
import screenShotThree from '../../public/crypto-buy.png'
import screenShotTwo from '../../public/crypto-wallet-top.png'
import screenShotOne from '../../public/crypto-sign.png'
import bottmPic from '../../public/crypto-wallet-top.png'
import stackPic from '../../public/source-stack.png'


export default function Project({ project }) {

    const router = useRouter()
    const { name } = router.query
    return (
        <div>
            <Head>
                <title>CryptoXChange Cryptocurrency Application</title>
            </Head>

            <header className="py-6">
          <div className="container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
              <div className="text-lg font-bold">Trae Coker</div>
          </div>
          </header>

            <div className="container mt-6 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
			    <section className="w-full">
				  <h2 id="project-about" className="secondary-title">cryptoXchange</h2>
				  <p className="section-paragraph">My capstone project for the Flatiron School, cryptoXchange is a mock cryptocurrency exchange featuring a wallet for users, 
                  historical charts showing gains and losses of wallet over time, 
                  and real-time market data display of the top 100 crypto currencies on the market. </p>
                </section>
            </div>

            <div className="container mt-6 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
            <table className="shadow-lg bg-grey">
                <tr>
                    <th className="bg-theme border border-body text-left px-8 py-4">Type</th>
                    <th className="bg-theme border border-body text-left px-8 py-4">Stack</th>
                    <th className="bg-theme border border-body text-left px-8 py-4">Code</th>
                    <th className="bg-theme border border-body text-left px-8 py-4">Demo</th>
                </tr>
                <tr>
                    <td className=" px-8 py-4">Cryptocurrency</td>
                    <td className=" px-8 py-4">React</td>
                    <td className=" px-8 py-4 "><a href="https://github.com/TraeCoker/crypto-wallet-frontend" className="text-selected-text hover:text-white">Front-End Repo</a></td>
                    <td className=" px-8 py-4"><a href="https://www.youtube.com/watch?v=PcPqTjJIAXU" className="text-selected-text hover:text-white">Video Demo</a></td>
                </tr>
                <tr>
                    <td className=" px-8 py-4">Full-Stack</td>
                    <td className=" px-8 py-4">Ruby on Rails</td>
                    <td className=" px-8 py-4 "><a href="https://github.com/TraeCoker/crypto-wallet-backend" className="text-selected-text hover:text-white">Back-End Repo</a></td>
                    <td className=" px-8 py-4"></td>
                </tr>
                <tr>
                    <td className=" px-8 py-4"></td>
                    <td className=" px-8 py-4">Redux</td>
                </tr>
                <tr>
                    <td className=" px-8 py-4"></td>
                    <td className=" px-8 py-4">PostgreSQL</td>
                </tr>
                <tr>
                    <td className=" px-8 py-4"></td>
                    <td className=" px-8 py-4">Chart.js</td>
                </tr>
                </table>
            </div>

            <div className="px-20 py-20 ">
                <Image src={bannerPic} priority />
            </div>

            <div className="container mt-20 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-16 w-full">
			    <section className="w-full">
				  <h2 id="project-goal" className="secondary-title">Project Purpose and Goal</h2>
				  <p className="section-paragraph">This project was inspired by my partner who is training to become a proffesional health coach.
                  This was a mockup I worked up based on her and her colleagues ideas of what they would want in a health oriented learning platform.</p>
                  <p></p>
                  <p className="section-paragraph">My goal was to develop a site that was both visually captivating and easy to manage from an adminstrative perspective.
                  </p>
                </section>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-16">
            <div className="container mt-6 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
                <Image src={stackPic} priority />
            </div>
            <div className="container mt-24 flex justify-between items-center mx-auto px-4 md:px-8 lg:px-12 w-full">
			    <section className="w-full">
				  <h2 id="project-stack-text" className="secondary-title">Stack and Explanation</h2>
				  <p className="section-paragraph">Hi there, my name is Trae. I am a full stack web developer and student of all things computer science.
                    In my diverse past lives I have been a proffesional musician, meditation teacher, music venue manager and community builder. These days I am taking the industriousness and artistry I learned in these domains and channeling them into 
                    developing code and applications that are effective and beautiful inside and out.</p>
                </section>
            </div>
            </div>
            

            <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-24">
            <div className="px-8 py-8 row-span-4">
            <Image src={fullPic} priority />
            </div>
            <div className="px-8 py-8">
            <Image src={screenShotOne}  priority/>
            </div>
            <div className="px-8 py-8">
            <Image src={screenShotTwo} priority/>
            </div>
           <div className="px-8 py-8">
           <Image src={screenShotThree} priority/>
           </div>
            </div>
                
            </div>

            <div className="container mt-24 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
			    <section className="w-full">
				  <h2 id="project-about" className="secondary-title">Problems and Thought Process</h2>
				  <p className="section-paragraph">Hi there, my name is Trae. I am a full stack web developer and student of all things computer science.
                    In my diverse past lives I have been a proffesional musician, meditation teacher, music venue manager and community builder. These days I am taking the industriousness and artistry I learned in these domains and channeling them into 
                    developing code and applications that are effective and beautiful inside and out.</p>
                </section>
            </div>

            <div className="mt-24 px-20 py-20">
                <Image src={bottmPic} priority />
            </div>

            <div className="container mt-18 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
			    <section className="w-full">
				  <h2 id="project-about" className="secondary-title">Lessons Learned</h2>
				  <p className="section-paragraph">Hi there, my name is Trae. I am a full stack web developer and student of all things computer science.
                    In my diverse past lives I have been a proffesional musician, meditation teacher, music venue manager and community builder. These days I am taking the industriousness and artistry I learned in these domains and channeling them into 
                    developing code and applications that are effective and beautiful inside and out.</p>
                </section>
            </div>

            <div className="container mt-40 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
        <section className="w-full">
          <h2 id="work" className="secondary-title">Other Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16 mt-6">
            <div className="mt-6" >
              <a href="/projects/the-source" >
                <img src="/mock-source-3.png" className="peer w-full bg-nav h-36 lg:h-80 xl:h-96 object-cover cursor-pointer transition duration-500 hover:scale-95"/>
              </a>
            <h2 className="tertiary-title  mt-6">The Source</h2>
            <p className="mt-6 section-paragraph">If I built it, they will come and they did and it was tight</p>
            <a href="/projects/the-source" >
              <a className="peer mt-6 cursor-pointer peer-hover:text-selected-text hover:text-selected-text font-bold">VIEW PROJECT <span>›</span></a>
            </a>
            </div>
            <div className="mt-6 ">
              <a href="/projects/cryptoxchange">
                <img src="/new-mock-crypto.png" className="peer w-full bg-nav h-36 lg:h-80 xl:h-96 object-cover cursor-pointer transition duration-500 hover:scale-95"/>
              </a>
            <h2 className="tertiary-title  mt-6">CryptoXChange</h2>
            <p className="mt-6 section-paragraph">If I built it, they will come and they did and it was tight</p>
            <a href="/projects/cryptoxchange" >
              <a className="peer mt-6 cursor-pointer peer-hover:text-selected-text hover:text-selected-text font-bold">VIEW PROJECT <span>›</span></a>
            </a>
            </div>
            <div className="mt-6 ">
              <a href="/projects/the-source">
                <img src="/mock-source-3.png" className="peer w-full bg-nav h-36 lg:h-80 xl:h-96 object-cover cursor-pointer transition duration-500 hover:scale-95"/>
              </a>
            <h2 className="tertiary-title  mt-6">Medium Blog</h2>
            <p className="mt-6 section-paragraph">If I built it, they will come and they did and it was tight</p>
            <a href="/projects/the-source" >
              <a className="peer mt-6 cursor-pointer peer-hover:text-selected-text hover:text-selected-text font-bold">VIEW PROJECT <span>›</span></a>
            </a>
            </div>
            <div className="mt-6 ">
              <a href="/projects/the-source">
                <img src="/mock-source-3.png" className="peer w-full bg-nav h-36 lg:h-80 xl:h-96 object-cover cursor-pointer transition duration-500 hover:scale-95"/>
              </a>
            <h2 className="tertiary-title  mt-6">The Source</h2>
            <p className="mt-6 section-paragraph">If I built it, they will come and they did and it was tight</p>
            <a href="/projects/the-source" >
              <a className="peer mt-6 cursor-pointer peer-hover:text-selected-text hover:text-selected-text font-bold">VIEW PROJECT <span>›</span></a>
            </a>
            </div>
          </div>
        </section>
      </div>

      <div className="container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
			<section className="w-full">
				<h2 id="hire" className="secondary-title">Hire me</h2>
				<p className="section-paragraph">Feel free to to contact me any time, through any method below.</p>

				<div className="w-full grid lg:grid-cols-2 gap-8 lg:gap-32 mt-24">
					<div className="space-y-12">
						<div>
							<label className="text-white block mb-6 text-xl font-bold">Name</label>
							<input className="w-full border border-input-border bg-input px-4 py-4"/>
						</div>
						<div>
							<label className="text-white block mb-6 text-xl font-bold">Email</label>
							<input type="email" className="w-full border border-input-border bg-input px-4 py-4"/>
						</div>
						<div>
							<label className="text-white block mb-6 text-xl font-bold">Message</label>
							<textarea  className="w-full border border-input-border bg-input px-4 py-4 h-56 resize-none"></textarea>
						</div>
						<button className="px-6 py-2 bg-theme text-white font-bold">Send it!</button>
					</div>

					<div className="mt-12">
						<p className="text-secondary">555-555-1234</p>
						<a href="mailto:email@mydomain.com" className="text-secondary underline mt-3 block">email@mydomain.com</a>

						<div className="flex mt-20 space-x-6">
							<a href="#">
								<svg className="w-8 h-8 lg:w-12 lg:h-12" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M43.1494 28.252C43.3496 27.1533 43.457 26.0303 43.457 24.9072C43.457 22.417 42.9688 20 42.0068 17.7295C41.0791 15.5322 39.7461 13.5596 38.0518 11.8652C36.3716 10.1808 34.3799 8.83914 32.1875 7.91504C29.9121 6.95313 27.5 6.46484 25.0098 6.46484C23.8379 6.46484 22.6611 6.57715 21.5186 6.79687C19.9376 5.9591 18.176 5.51995 16.3867 5.51758C13.4717 5.51758 10.7275 6.65527 8.66699 8.71582C7.65021 9.72738 6.84403 10.9305 6.29507 12.2555C5.74611 13.5806 5.46526 15.0013 5.46875 16.4355C5.46875 18.291 5.94727 20.1172 6.84082 21.7285C6.66016 22.7734 6.5625 23.8428 6.5625 24.9072C6.5625 27.3975 7.05078 29.8145 8.0127 32.085C8.94043 34.2822 10.2686 36.2549 11.9629 37.9492C13.6572 39.6436 15.6299 40.9717 17.8272 41.8994C20.1025 42.8613 22.5147 43.3496 25.0049 43.3496C26.0889 43.3496 27.1729 43.252 28.2373 43.0615C29.8731 43.9844 31.7188 44.4775 33.6084 44.4775C36.5234 44.4775 39.2676 43.3447 41.3281 41.2793C43.3936 39.2188 44.5264 36.4746 44.5264 33.5596C44.5313 31.7041 44.0527 29.873 43.1494 28.252ZM25.083 36.2061C18.5303 36.2061 15.6006 32.9834 15.6006 30.5713C15.6006 29.3311 16.5137 28.4668 17.7734 28.4668C20.5762 28.4668 19.8535 32.4951 25.083 32.4951C27.7637 32.4951 29.2432 31.04 29.2432 29.5508C29.2432 28.6572 28.8037 27.6611 27.0361 27.2266L21.2061 25.7715C16.5137 24.5947 15.6592 22.0557 15.6592 19.6729C15.6592 14.7217 20.3223 12.8613 24.7022 12.8613C28.7354 12.8613 33.4912 15.0928 33.4912 18.0615C33.4912 19.3359 32.3877 20.0732 31.1279 20.0732C28.7354 20.0732 29.1748 16.7627 24.3555 16.7627C21.9629 16.7627 20.6397 17.8467 20.6397 19.3945C20.6397 20.9424 22.5293 21.4355 24.1699 21.8115L28.4863 22.7686C33.2129 23.8232 34.4092 26.582 34.4092 29.1797C34.4092 33.1982 31.3184 36.2061 25.083 36.2061Z" fill="white"/></svg>
							</a>
							<a href="#">
								<svg className="w-8 h-8 lg:w-12 lg:h-12" width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 0C9.40313 0 0 9.40313 0 21C0 32.5969 9.40313 42 21 42C32.5969 42 42 32.5969 42 21C42 9.40313 32.5969 0 21 0ZM31.0922 15.8297C31.1062 16.05 31.1062 16.2797 31.1062 16.5047C31.1062 23.3859 25.8656 31.3125 16.2891 31.3125C13.3359 31.3125 10.5984 30.4547 8.29219 28.9781C8.71406 29.025 9.11719 29.0437 9.54844 29.0437C11.9859 29.0437 14.2266 28.2188 16.0125 26.8219C13.725 26.775 11.8031 25.275 11.1469 23.2125C11.9484 23.3297 12.6703 23.3297 13.4953 23.1188C12.3175 22.8795 11.2588 22.2398 10.4991 21.3084C9.73949 20.377 9.32572 19.2113 9.32812 18.0094V17.9437C10.0172 18.3328 10.8281 18.5719 11.6766 18.6047C10.9633 18.1293 10.3784 17.4854 9.97365 16.7298C9.5689 15.9743 9.35683 15.1306 9.35625 14.2734C9.35625 13.3031 9.60938 12.4172 10.0641 11.6484C11.3714 13.2578 13.0028 14.5741 14.8522 15.5117C16.7016 16.4493 18.7275 16.9873 20.7984 17.0906C20.0625 13.5516 22.7063 10.6875 25.8844 10.6875C27.3844 10.6875 28.7344 11.3156 29.6859 12.3281C30.8625 12.1078 31.9875 11.6672 32.9906 11.0766C32.6016 12.2812 31.7859 13.2984 30.7031 13.9406C31.7531 13.8281 32.7656 13.5375 33.7031 13.1297C32.9953 14.1703 32.1094 15.0938 31.0922 15.8297Z" fill="white"/></svg>								
							</a>
						</div>
					</div>
					
				</div>

			</section>
		</div>
        </div>
    )
}