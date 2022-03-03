import Link from "next/link"

const ProjectCards = () => {
    
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16 mt-6 animate-fade-in-up-s">
        <div className="mt-6">
          <Link href="/projects/the-source/">
            <a  className="peer">
              <img src="/mock-source-3.png" className="w-full bg-nav h-36 lg:h-80 xl:h-96 object-cover cursor-pointer transition duration-500 hover:scale-95"/>
            </a>
          </Link>
          <h2 className="tertiary-title  mt-6">The Source</h2>
          <p className="mt-6 section-paragraph">An e-commerce application built with React, Node.js and Stripe for a company selling digital products and subscription services</p>
          <Link href="/projects/the-source/" >
            <a href="/projects/the-source/" className="peer-hover:text-selected-text hover:text-selected-text no-smooth">
              <a className="peer mt-6 font-bold">VIEW PROJECT <span>›</span></a>
            </a>
          </Link>
        </div>
        <div className="mt-6 ">
          <Link href="/projects/cryptoxchange" scroll={false}>
            <a className="peer">
              <img src="/new-mock-crypto.png" className="w-full bg-nav h-36 lg:h-80 xl:h-96 object-cover cursor-pointer transition duration-500 hover:scale-95"/>
            </a>
          </Link> 
          <h2 className="tertiary-title  mt-6">CryptoXChange</h2>
          <p className="mt-6 section-paragraph">A mock cryptocurrency exchange built with React, Redux, and Ruby on Rails</p>
          <Link href="/projects/cryptoxchange" scroll={false}>
            <a  className="peer-hover:text-selected-text hover:text-selected-text">
              <a className="mt-6 font-bold">VIEW PROJECT <span>›</span></a>
            </a>
          </Link>
        </div>
        <div className="mt-6 ">
          <Link href="https://alchemical-bytes.medium.com/">
            <a  className="peer">
              <img src="/blog-5.png" className="w-full bg-nav h-36 lg:h-80 xl:h-96 object-cover cursor-pointer transition duration-500 hover:scale-95"/>
            </a>
          </Link>
          <h2 className="tertiary-title  mt-6">Technical Writing Blog</h2>
          <p className="mt-6 section-paragraph">I like to write tutorials and technical blogs on Medium to help other aspiring developers</p>
          <Link href="https://alchemical-bytes.medium.com/">
            <a  className="peer-hover:text-selected-text hover:text-selected-text">
              <a className="peer mt-6 font-bold">VIEW BLOG <span>›</span></a>
            </a>
          </Link>
        </div>
        <div className="mt-6 ">
          <Link href="https://www.youtube.com/watch?v=LBjXfIH-1FI&t">
            <a  className="peer">
              <img src="/sophia-6.png" className="w-full bg-nav h-36 lg:h-80 xl:h-96 object-cover cursor-pointer transition duration-500 hover:scale-95"/>
            </a>
          </Link>
          <h2 className="tertiary-title  mt-6">Sophia</h2>
          <p className="mt-6 section-paragraph">An educational hub for western philosophy built with Object Oriented Javascript and Ruby on Rails</p>
          <Link href="https://www.youtube.com/watch?v=LBjXfIH-1FI&t">
            <a  className="peer-hover:text-selected-text hover:text-selected-text">
              <a className="peer mt-6 font-bold">VIEW DEMO <span>›</span></a>
            </a>
          </Link>
        </div>
    </div>
  )
}

export default ProjectCards

