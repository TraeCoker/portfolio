
const ProjectCards = () => {
    
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16 mt-6">
        <div className="mt-6">
          <a href="/projects/the-source">
            <img src="/mock-source-3.png" className="peer w-full bg-nav h-36 lg:h-80 xl:h-96 object-cover cursor-pointer transition duration-500 hover:scale-95"/>
          </a>
        <h2 className="tertiary-title  mt-6">The Source</h2>
        <p className="mt-6 section-paragraph">An e-commerce application built with React, Node.js and Stripe for a company selling digital products and subscription services</p>
        <a href="/projects/the-source" >
          <a className="peer mt-6 cursor-pointer peer-hover:text-selected-text hover:text-selected-text font-bold">VIEW PROJECT <span>›</span></a>
        </a>
        </div>
        <div className="mt-6 ">
          <a href="/projects/cryptoxchange">
            <img src="/new-mock-crypto.png" className="peer w-full bg-nav h-36 lg:h-80 xl:h-96 object-cover cursor-pointer transition duration-500 hover:scale-95"/>
          </a>
        <h2 className="tertiary-title  mt-6">CryptoXChange</h2>
        <p className="mt-6 section-paragraph">A mock cryptocurrency exchange built with React, Redux, and Ruby on Rails</p>
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
  )
}

export default ProjectCards

