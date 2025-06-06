import Categories from "../../Components/Categories";
import Booksdata from "../../Components/Booksdata";
import hero_image from '../../assets/hero_images.png';
import Footer from '../../Components/Footer';

const Home = () => {
    return (
        <div>
            <section
                id="hero_Section"
                className="bg-teal-100 flex md:flex-row flex-col md:justify-center justify-start items-start md:items-center w-full p-5 gap-10 h-auto"
            >
                <div className="w-full md:w-1/2 text-gray-800">
                    <h2 className="md:text-5xl text-4xl font-semibold font-Poppins mb-2">
                        The Ultimate Library Management Tool
                    </h2>
                </div>
                <img
                    src={hero_image}
                    alt="hero_image"
                    className="w-[300px] md:w-[400px] h-auto object-contain"
                />
            </section>

            <Categories />
            <Booksdata />

        </div>
    );
};

export default Home;
