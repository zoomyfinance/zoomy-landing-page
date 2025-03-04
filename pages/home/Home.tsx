export const runtime = "edge";

import FifthSection from "./FifthSection";
import FirstSection from "./FirstSection";
import FourthSection from "./FourthSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";

const Home = () => {
	return (
		<>
        <title>Zoomy!</title>
			<FirstSection />
			<SecondSection />
			<ThirdSection />
			<FourthSection />
			<FifthSection />
		</>
	);
};

export default Home;
