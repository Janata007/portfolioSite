const Page = ({ section }) => {
  const { title, subtitle } = section;
  return (
    <div className="mainView" id={title}>
      <section id={title}>
        <div className="content">
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
      </section>
    </div>
  );
};

export default Page;
