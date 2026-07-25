import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaJava,
    FaFigma,
} from "react-icons/fa";

function Skills() {
    const skills = [
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "React", icon: <FaReact /> },
        { name: "UI/UX Design", icon: <FaFigma /> },
        { name: "Java", icon: <FaJava /> },
    ];

    return (
        <section className="skills">
            <h2>My Skills</h2>

            <div className="skills-grid">
                {skills.map((skill) => (
                    <div className="skill-card" key={skill.name}>
                        <div className="skill-icon">
                            {skill.icon}
                        </div>

                        <p>{skill.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;