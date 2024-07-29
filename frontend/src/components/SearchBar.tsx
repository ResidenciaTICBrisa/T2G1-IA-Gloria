import { useEffect } from "react";
import { useMap } from "react-leaflet";
import { GeoSearchControl } from "leaflet-geosearch";
import '../../node_modules/leaflet-geosearch/dist/geosearch.css'
import '../styles/SearchBars.css'

// interface SearchBarProps {
//     provider: typeof OpenStreetMapProvider
// }

const SearchBar= props => {
    const map = useMap();  
    const { provider } = props

    useEffect(() => {
        const searchControl = new GeoSearchControl({
            provider: provider,
            showMarker: false,
            showPopup: false,
            retainZoomLevel: false,
            animateZoom: true,
            autoClose: false,
            searchLabel: "Digite a cidade",
            keepResult: true
        });

        map.addControl(searchControl);
        return () => map.removeControl(searchControl);
    }, [props]);

  return null;
};
export default SearchBar;
