const ContactPage = ({ section }) => {
  const { title, subtitle } = section;
    return (
      <section id={title}>
        <div className="content">
          <h1>{title}</h1>
          <p>{subtitle}</p>
          <p>Contact info stufd</p>
        </div>
      </section>
    );
  }

export default ContactPage;
