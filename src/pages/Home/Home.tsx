import AdditionInfo from "./AdditionInfo";
import FeaturedBrands from "./FeaturedBrands";
import FeaturedProducts from "./FeaturedProducts";
import Hero from "./Hero";
import Reviews from "./Reviews";
import Services from "./Services";

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Services></Services>
            <FeaturedProducts></FeaturedProducts>
            <FeaturedBrands></FeaturedBrands>
            <Reviews></Reviews>
            <AdditionInfo></AdditionInfo>
        </div>
    );
};

export default Home;