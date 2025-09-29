const ProjectsPage = ({ section }) => {
  const { title, subtitle } = section;
    return (
      <section id={title}>
        <div className="content">
          <h1>{title}</h1>
          <p>{subtitle}</p>
          <p>list my projects n stuff</p>
        </div>
      </section>
    );
  }

export default ProjectsPage;
