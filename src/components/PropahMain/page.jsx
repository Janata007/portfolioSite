const Page = ({ section }) => {
  const { title, subtitle } = section;

  if (title == 'art') {
    return (<section id={title}>
      <div className="content">
        <h1>MY ART</h1>
        <p>This is my art</p>
      </div>
    </section>)
  } else {
    return (
      <section id={title}>
        <div className="content">
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
      </section>
    );
  }
};

export default Page;
