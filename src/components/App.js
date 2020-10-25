import React from "react";

import { useSelector } from "react-redux";

import { Header } from "./structure/Header.component";
import { Aside } from "./structure/Aside.component";
import { Footer } from "./structure/footer/Footer.component";

import { Loading } from "./common/Loading.component";
import { SearchModal } from "./widgets/SearchModal.component";
import { Toast } from "./widgets/Toast.component";
import { FlickrSimilarImages } from "./widgets/FlickrSimilarImages.component";

const imageStyles = (aspectRatio, zoom) => {
	const styles = {};
	const ratio = window.innerWidth / window.innerHeight;
	const percent = zoom;
	styles[aspectRatio > ratio ? "width" : "height"] = `${percent}%`;
	return styles;
}

export const App = () => {

	const mainImage = useSelector(state => state.mainImage);
	const { modalState } = useSelector(state => state.flickr);
	const { zoom } = useSelector(state => state.zoom);
	
	return (
		<>
			<Header />

			<Aside />

			<main>
				{mainImage.src
					? (
						<img src={mainImage.src} alt={mainImage.alt} style={imageStyles(mainImage.aspectRatio, zoom)} />
					)
					: (
						<div className="default-text">
							<span>Select an image to show it here</span>
						</div>
					)}
				<Loading state={mainImage.loading} />
			</main>

			<Footer />

			<SearchModal />

			<Toast />

			{modalState && (<FlickrSimilarImages />)}
		</>
	);
}
