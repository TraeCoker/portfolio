import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo';
import Image from 'next/image'
import bannerPic from '../../public/crypto-top.png'
import fullPic from '../../public/crypto-market-full.png'
import screenShotThree from '../../public/crypto-buy.png'
import screenShotTwo from '../../public/crypto-wallet-top.png'
import screenShotOne from '../../public/crypto-sign.png'
import bottmPic from '../../public/crypto-wallet-top.png'
import stackPic from '../../public/crypto-stack-2.png'
import ProjectCards from '../../components/ProjectCards'
import { Contact } from '../../components/Contact'


export default function Project({ project }) {

    const router = useRouter()
    const { name } = router.query
    return (
        <div>
            <NextSeo
                title="CryptoXChange a Cryptopcurrency Wallet App"
                description="Full stack cryptocurrency exchange web app built with react, ruby on rails, redux, and chart.js. "
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
                </div>
            </header>

            <div className="container mt-6 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full animate-fade-in-up-m">
			    <section className="w-full">
				  <h2 id="project-about" className="secondary-title">CryptoXchange</h2>

				  <p className="section-paragraph">My capstone project for the Flatiron School, cryptoXchange is a mock cryptocurrency exchange featuring a wallet for users, 
                  historical charts showing gains and losses of wallets over time, 
                  and real-time market data display of the top 100 crypto currencies on the market via the 3rd party CoinGecko API. </p>
                </section>
            </div>

            <div className="container mt-6 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full animate-fade-in-up-s">
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

            <div className="px-4 mt-10 sm:mt-0 sm:px-20 sm:py-20 animate-fade-in-up-s ">
                <Image src={bannerPic} priority />
            </div>

            <div className="container mt-20 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-16 w-full animate-fade-in-up-s">
			    <section className="w-full">
				  <h2 id="project-goal" className="secondary-title">Project Purpose and Goal</h2>
				  <p className="section-paragraph">The inspiration for this project came from a challenge I made to myself to build an app that could fetch, parse, calculate, and display large amounts of data that was subject to real-time change.
                  My goal was then to create a simple UI that could allow users to make decisions based on the changes in that data and track their own relationship to said data over time.</p>
                  <p></p>
                  <p className="section-paragraph">Being a student of Web3 technologies, I found the often volatile cryptocurrency market to be the perfect fit.
                  </p>
                </section>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-16 animate-fade-in-up-s">
                <div className="container mt-6 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
                    <Image src={stackPic} priority />
                </div>
                <div className="container mt-24 flex justify-between items-center mx-auto px-4 md:px-8 lg:px-12 w-full">
			        <section className="w-full">
				        <h2 id="project-stack-text" className="secondary-title">Stack and Explanation</h2>
				        <p className="section-paragraph">React was my go-to JavaScript framework for the front-end. The component structure helped easily organize the app logic by separation of concerns.</p>
                        <p className="section-paragraph">For handling the global app state I chose to implement Redux. Setting it up with Thunk middleware allowed me to fetch data and update the global state asynchronously which was a boon for frequently updating market data without disrupting the UX.</p>
                        <p className="section-paragraph">Ruby on Rails provided the MVC architecture for my back-end and gave me a foundation for building a RESTful API.</p>
                        <p className="section-paragraph">PostgreSQL supplied me with all the joins capabilities that my database schema required to create has-many relationships between my tables.</p>
                        <p className="section-paragraph">I went with Chart.js for my data display because it provided much of what I needed feature wise out of the box with easy to implement modifications.</p>
                    </section>
                </div>
            </div>
            

            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-24 animate-fade-in-up-s">
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

            <div className="container mt-24 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full animate-fade-in-up-s">
			    <section className="w-full">
				  <h2 id="project-about" className="secondary-title">Problems and Thought Process</h2>
				  <p className="section-paragraph">{"The most challenging part of this project was finding the optimal way to 'snapshot' my user's wallet data so that it could accurately be calculated against this fluctuating data being pulled in from the CoinGecko market API."}</p>
                  
                </section>
            </div>

            <div className="mt-24 mb-24 sm:mb-0 px-4 sm:px-20 sm:py-20 animate-fade-in-up-s">
                <Image src={bottmPic} priority />
            </div>

            <div className="container mt-18 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full animate-fade-in-up-s">
			    <section className="w-full">
				  <h2 id="project-about" className="secondary-title">Lessons Learned</h2>
				  <p className="section-paragraph">This project taught me many great lessons about working with large data sets being fetched from 3rd parties, as well as manipulating and displaying data with inputs from multiple APIs.</p>
                  <p className="section-paragraph">If I could build this again, then from the start I would plan a more rigorous TDD approach to my data rendering functions because I believe it could have saved me some time I spent debugging.</p>
                  <p className="section-paragraph">Knowing what I know now about responsive UI design, I would have woven responsive elements into my styling from the start instead of rewriting things after the fact.</p>
                </section>
            </div>

            <div className="container mt-40 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full animate-fade-in-up-s">
                <section className="w-full">
                    <h2 id="work" className="secondary-title">Other Projects</h2>

                    <ProjectCards />
                </section>
            </div>

            <Contact />
        </div>
    )
}