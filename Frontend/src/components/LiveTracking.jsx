import React, { useEffect, useRef } from "react";

const LiveTracking = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!window.L) {
      console.error(
        "Leaflet (L) is not loaded. Make sure CDN script is present in index.html",
      );
      return;
    }

    const L = window.L;
    const map = L.map(mapRef.current, { zoomControl: true }).setView(
      [6.5244, 3.3792],
      13,
    );

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);

    return () => {
      map.remove();
    };
  }, []);

  return <div ref={mapRef} style={{ height: "100vh", width: "100%" }} />;
};

export default LiveTracking;
