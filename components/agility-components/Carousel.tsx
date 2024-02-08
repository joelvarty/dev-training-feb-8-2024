import React from "react"

import {Module} from "@agility/nextjs"

interface ICarousel {
	heading: string
}

const Carousel: Module<ICarousel> = ({module}) => {
	const {fields} = module
	return (
		<div className="relative px-8 bg-red-200">
			MY CAROUSEL COMPONENT :)
			<div className="max-w-screen-xl mx-auto my-12 md:mt-18 lg:mt-20">
				<h1 className="font-display text-secondary-500 text-4xl font-black tracking-wide">{fields.heading}</h1>
			</div>
		</div>
	)
}

export default Carousel
