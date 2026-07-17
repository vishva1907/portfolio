import Header from "../components/Header";
import About from "../components/About";
import Skills from "../components/Skills";
import Footer from "../components/Footer";

function Home() {
    const skills = [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "UI/UX Design",
        "Java"
    ];

    return (
        <>
            <Header name="Vishva Patel" />
            <About />
            <Skills skillList={skills} />
            <Footer email="vishvapatel1907@gmail.com" />
        </>
    );
}

export default Home;