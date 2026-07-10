export default function About() {
  return (
    <section id="about" className="fade" style={styles.section}>
      <h2>About Me</h2>
      <p>
       I’m a Full Stack .NET Developer with 5 years of experience 
       building and improving web applications. My work spans backend development, 
       databases, APIs, and cloud technologies. I enjoy turning ideas into practical
        solutions and continuously exploring better ways to build software.
      </p>
    </section>
  );
}

const styles = {
  section: {
    padding: "60px",
    background: "#111827",
  },
};