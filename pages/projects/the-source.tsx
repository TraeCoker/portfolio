import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import bannerPic from '../../public/source-laptop-3.png'
import fullPic from '../../public/source-full.png'
import screenShotOne from '../../public/source-stripe-2.png'
import screenShotTwo from '../../public/source-2-full.png'
import screenShotThree from '../../public/source-nav.png'
import screenShotFour from '../../public/source-3-full.png'
import bottmPic from '../../public/source-laptop-4.png'
import stackPic from '../../public/source-stack.png'
import ProjectCards from '../../components/ProjectCards'
import { Contact } from '../../components/Contact'


export default function Project({ project }) {

    const router = useRouter()
    const { name } = router.query
    return (
        <div>
            <Head>
                <title>The Source E-Commerce Application</title>
            </Head>

            <header className="py-6">
          <div className="container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
          <div className="text-lg font-bold"><a href="/" className="hover:text-selected-text">Trae Coker</a></div>
          </div>
          </header>

            <div className="container mt-6 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
			    <section className="w-full">
				  <h2 id="project-about" className="secondary-title">THE SOURCE</h2>
				  <p className="section-paragraph">The Source is an e-commerce storefront I built for a company selling digital products and subscription services.
                  The application is integrated with the Stripe SDK to manage one-time and recurring payments seamlessly.</p>
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
                    <td className=" px-8 py-4">E-Commerce</td>
                    <td className=" px-8 py-4">React (Typescript)</td>
                    <td className=" px-8 py-4 "><a href="https://github.com/TraeCoker/react-stripe-storefront" className="text-selected-text hover:text-white">Front-End Repo</a></td>
                    <td className=" px-8 py-4"><a href="https://the-source.netlify.app/" className="text-selected-text hover:text-white">Visit Site</a></td>
                </tr>
                <tr>
                    <td className=" px-8 py-4">Full-Stack</td>
                    <td className=" px-8 py-4">Node.js (Typescript)</td>
                    <td className=" px-8 py-4 "><a href="https://github.com/TraeCoker/node-stripe-server-demo" className="text-selected-text hover:text-white">Back-End Repo</a></td>
                    <td className=" px-8 py-4"><a href="https://www.youtube.com/watch?v=0sx1P5QMoBY&t=2s" className="text-selected-text hover:text-white">Video Demo</a></td>
                </tr>
                <tr>
                    <td className=" px-8 py-4"></td>
                    <td className=" px-8 py-4">Express</td>
                </tr>
                <tr>
                    <td className=" px-8 py-4"></td>
                    <td className=" px-8 py-4">Firebase</td>
                </tr>
                <tr>
                    <td className=" px-8 py-4"></td>
                    <td className=" px-8 py-4">Stripe</td>
                </tr>
                <tr>
                    <td className=" px-8 py-4"></td>
                    <td className=" px-8 py-4">Sass</td>
                </tr>
                <tr>
                    <td className=" px-8 py-4"></td>
                    <td className=" px-8 py-4">Docker</td>
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
				  <p className="section-paragraph">React was my go-to framework on the front-end, wired up to firebase for easy user authentication with JWT tokens and react-fire.</p>
          <p className="section-paragraph">The Stripe SDK handles a lot of the heavy lifting when it comes to processing payments securely and managing recurring payments. It seemed the best choice for both my clients and their intended users.</p> 
          <p className="section-paragraph">I went with TypeScript on both the client and server for strong data typing and so I could access the Stripe documentaion directly in my IDE as I developed. </p>
          <p className="section-paragraph">I chose Node.js for my back-end and used Express to build my API, knowing it would be lightweight. For production I chose to dockerize my server and deploy the container to the Google Cloud Platform.</p>
          <p className="section-paragraph">Knowing a product like this would be accessed on varying devices, I chose Sass to make my UI responsive and manually wrote my media queries as a learning experience.</p>
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
            <div className="px-8 py-8">
            <Image src={screenShotFour} priority />
            </div>
            </div>
                
            </div>

            <div className="container mt-24 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
			    <section className="w-full">
				  <h2 id="project-about" className="secondary-title">Problems and Thought Process</h2>
				  <p className="section-paragraph">This was my first big project using TypeScript. Starting out I ran into some challenges getting the types for my Stripe Elements to match from the front-end to the back-end.</p>
          <p className="section-paragraph">After I built all the functionality of my Express API,  I discovered a Stripe extension built into the Firebase dashboard that I ended up using to handle the webhooks needed for recurring subscription payments. Getting to automate my subscription database updates without needing to route them through my server helped me achieve the same goal with less code.</p>
                </section>
            </div>

            <div className="mt-24 px-20 py-20">
                <Image src={bottmPic} priority />
            </div>

            <div className="container mt-18 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
			    <section className="w-full">
				  <h2 id="project-about" className="secondary-title">Lessons Learned</h2>
				  <p className="section-paragraph">This project taught me a lot about micro-services and the importance of designing your projects well so that all the moving parts can make harmonious music together.</p>
          <p className="section-paragraph">If I were to build this again I would choose a more modern CSS framework so that I could achieve the same results with less bulk. This project was very image heavy and I would want to implement more responsive image processing to assure the best UX is being delivered to all users at all times. </p>
                </section>
            </div>

            <div className="container mt-40 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
        <section className="w-full">
          <h2 id="work" className="secondary-title">Other Projects</h2>
          <ProjectCards />
        </section>
      </div>

      <Contact />
        </div>
    )
}