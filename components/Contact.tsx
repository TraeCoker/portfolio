
export const Contact = () => {
  return (
    <div className="container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
			<section className="w-full">
				<h2 id="hire" className="secondary-title">Let's build something together!</h2>
				<p className="section-paragraph">Feel free to to contact me through any time if you are looking for a developer, have a question, or would like to connect.</p>

				
					<div className="mt-12 mb-12">
						<a href="mailto:alchemical.bytes@gmail.com" className="text-secondary underline mt-3 block hover:text-selected-text">alchemical.bytes@gmail.com</a>
                        
						<div className="flex mt-20 space-x-6">
							<a href="#" className="text-secondary underline mt-3 block hover:text-selected-text">
								LinkedIn
							</a>
							<a href="#" className="text-secondary underline mt-3 block hover:text-selected-text">
								GitHub
							</a>
							<a href="#" className="text-secondary underline mt-3 block hover:text-selected-text">
								Twitter
							</a>
						</div>
					</div>
					

			</section>
		</div>
  )
}
