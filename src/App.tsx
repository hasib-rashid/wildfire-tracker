import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import { default as axios } from 'axios'
import 'leaflet/dist/leaflet.css'
import './App.css';

const markerIcon = L.icon({
	iconUrl: "https://avatars.githubusercontent.com/u/46283609?s=30&v=4"
});


function App() {
	const position: any = [51.505, -0.09]
	return (
		<MapContainer className="Map" center={position} zoom={2} scrollWheelZoom={true}>
			<TileLayer
				attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
				url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
			/>
			<Marker icon={markerIcon} position={position}>
				<Popup>
					A pretty CSS3 popup. <br /> Easily customizable.
				</Popup>
			</Marker>
		</MapContainer>
	);
}

export default App;
