import React from 'react';
import Slider from 'react-slick';

class PrevNavButton extends React.Component {
  render() {
    return <button {...this.props}><i className="glyphicon glyphicon-menu-left" /></button>  
  }
}
class NextNavButton extends React.Component {
  render() {
    return <button {...this.props}><i className="glyphicon glyphicon-menu-right" /></button>  
  }
}


export default () => {

	let sliderSettings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 1,
		responsive: [{ breakpoint: 992, settings: { slidesToShow: 1 } }],
		nextArrow: NextNavButton,
		prevArrow: PrevNavButton
	}

	return (
		<div className="page">
			<Slider {...sliderSettings}>
			  <div><img src="assets/1.jpg"/></div>
			  <div><img src="assets/2.jpg"/></div>
			  <div><img src="assets/3.jpg"/></div>
			  <div><img src="assets/4.jpg"/></div>
			</Slider>
			<div className="content">
				<div className="row">
					<div className="col-md-4">
						<h2>Research Interests</h2>
					</div>
					<div className="col-md-8">
						<p>My lab focuses on understanding the mechanisms repair and regeneration of the white matter of the brain after stroke, using models of optic nerve stroke (nonarteritic anterior ischemic optic neuropathy, or NAION). NAION affects approximately 1 in 700 individuals worldwide.</p>
						<p>White matter strokes correspond to approximately 40% of all strokes in the US, yet have been difficult to study in vivo. The optic nerve is actually an isolated CNS-white matter tract, and thus is excellent for studying questions of white matter stroke.</p>
						<p>My lab has generated the first clinically relevant models for optic nerve stroke (nonarteritic anterior ischemic optic neuropathy, NAION) in rodents and primates.</p>
						<p>The NAION models are the first in vivo stroke models that specifically targets white matter, and are relevant for one of the most common strokes affecting individuals. We use these models in a variety of species: to evaluate neuroprotective approaches to early stroke treatment, genetic response to white matter stroke, and primate-specific responses.</p>
						<p>My research is also dedicated to optic nerve repair and regeneration, both by modifying the destructive inflammatory response pathways that are activated after stroke, and  utilizing unique stem cells derived from the optic nerve itself. Our working hypothesis is that activation of these cells can enhance repair and remyelination after stroke, by working in tandem with immunomodulation.</p>
					</div>
				</div>
			</div>
		</div>
	)
}