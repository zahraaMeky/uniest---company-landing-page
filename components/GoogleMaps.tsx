'use client';

import React, { useEffect } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

export default function GoogleMaps() {
	const mapRef = React.useRef<HTMLDivElement>(null);

	useEffect(() => {
		const initializeMap = async () => {
			const loader = new Loader({
				apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
				version: 'quartely',
			});

			const { Map } = await loader.importLibrary('maps');

			const locationInMap = {
				lat: 23.55573770180757,
				lng: 58.400536153618056,
			};
			
			// MARKER
			const { Marker } = (await loader.importLibrary(
				'marker'
			)) as google.maps.MarkerLibrary;

			const options: google.maps.MapOptions = {
				center: locationInMap,
				zoom: 15,
				mapId: process.env.NEXT_PUBLIC_MAP_ID,
			};

			const map = new Map(mapRef.current as HTMLDivElement, options);

			// add the marker in the map
			const marker = new Marker({
				map: map,
				position: locationInMap,
			});
		};

		initializeMap();
	}, []);

	return <div className="h-[350px]" ref={mapRef} />;
}