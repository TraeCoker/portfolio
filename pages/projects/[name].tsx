import { useRouter } from 'next/router'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'

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
              <div className="text-lg font-bold">Trae Coker</div>
          </div>
          </header>

            <div className="container mt-6 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
			    <section className="w-full">
				  <h2 id="project-about" className="secondary-title">The Source</h2>
				  <p className="section-paragraph">Hi there, my name is Trae. I am a full stack web developer and student of all things computer science.
                    In my diverse past lives I have been a proffesional musician, meditation teacher, music venue manager and community builder. These days I am taking the industriousness and artistry I learned in these domains and channeling them into 
                    developing code and applications that are effective and beautiful inside and out.</p>
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
                    <td className=" px-8 py-4">Repository</td>
                    <td className=" px-8 py-4">Visit Site</td>
                </tr>
                <tr>
                    <td className=" px-8 py-4"></td>
                    <td className=" px-8 py-4">Node.js (Typescript)</td>
                    <td className=" px-8 py-4"></td>
                    <td className=" px-8 py-4">Video Demo</td>
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
                    <td className=" px-8 py-4">Docker</td>
                </tr>
                </table>
            </div>

            <div>
                <img src="../source-laptop-3.PNG" className="px-8 py-8"></img>
            </div>

            <div className="container mt-6 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
			    <section className="w-full">
				  <h2 id="project-about" className="secondary-title">Project Purpose and Goal</h2>
				  <p className="section-paragraph">Hi there, my name is Trae. I am a full stack web developer and student of all things computer science.
                    In my diverse past lives I have been a proffesional musician, meditation teacher, music venue manager and community builder. These days I am taking the industriousness and artistry I learned in these domains and channeling them into 
                    developing code and applications that are effective and beautiful inside and out.</p>
                </section>
            </div>

            <div className="container mt-6 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
			    <section className="w-full">
				  <h2 id="project-about" className="secondary-title">Stack and Explanation</h2>
				  <p className="section-paragraph">Hi there, my name is Trae. I am a full stack web developer and student of all things computer science.
                    In my diverse past lives I have been a proffesional musician, meditation teacher, music venue manager and community builder. These days I am taking the industriousness and artistry I learned in these domains and channeling them into 
                    developing code and applications that are effective and beautiful inside and out.</p>
                </section>
            </div>

            <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-6">

            <img src="../source-full.png" className="px-8 py-8 row-span-4"></img>
            <img src="../source-stripe-2.PNG" className="px-8 py-8"></img>
            <img src="../source-2-full.png" className="px-8 py-8"></img>
            <img src="../source-nav.PNG" className="px-8 py-8"></img>
            <img src="../source-3-full.png" className="px-8 py-8"></img>
            </div>
                
            </div>

            
        </div>
    )
}