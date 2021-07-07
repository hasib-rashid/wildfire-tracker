import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import { default as axios } from 'axios'
import 'leaflet/dist/leaflet.css'
import './App.css';

const markerIcon = L.icon({
	iconUrl: "https://avatars.githubusercontent.com/u/46283609?s=30&v=30"
});

function App() {

	const [event, setEvent] = useState([])

	useEffect(() => {
		const Events = async () => {
			const request = await axios.get("https://eonet.sci.gsfc.nasa.gov/api/v2.1/events")
			const { data } = await request
			const { events } = await data

			console.log(events)

			setEvent(events)
		}

		Events()
	})

	const markerPoints: any = event.map((ev: any) => {
		if (ev.categories[0].id === 8) {
			return <Marker icon={markerIcon} position={[ev.geometries[0].coordinates[1], ev.geometries[0].coordinates[0]]} />
		}
		return null
	})

	return (
		<MapContainer className="Map" center={[51.505, -0.09]} zoom={2} scrollWheelZoom={true}>
			<TileLayer
				attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
				url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
			/>

			{markerPoints}

		</MapContainer>
	)
}
export default App;


