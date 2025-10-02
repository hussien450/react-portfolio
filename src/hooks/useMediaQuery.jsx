import { useState, useEffect } from "react";

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);

    // Set initial state
    setMatches(media.matches);

    // Create listener function
    const listener = (e) => setMatches(e.matches);

    // Add event listener for changes
    media.addEventListener("change", listener);

    // Cleanup
    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
};
export default useMediaQuery;
