import ReactGA from "react-ga4";

export const initGA = (measurement_id: string) => {
  ReactGA.initialize(measurement_id); // Replace with your Measurement ID
};

export const logPageView = () => {
  ReactGA.send({ hitType: "pageview", page: "/" });
};
