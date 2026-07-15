import './App.css';

import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {

    const skills = [
        "HTML",
        "CSS",
        "JavaScript",
        "React"
    ];

    return (
        <div className="app">

            <Header name="Vishva Patel" />

            <About />

            <Skills skillList={skills} />

            <Footer email="vishvapatel1907@gmail.com" />

        </div>
    );
}

export default App;