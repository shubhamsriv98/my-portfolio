import BackgroundMarquee from './BackgroundMarquee';

function HorizontalCards({ id, title, marqueeText, items, renderContent }) {
  return (
    <section className="scroll-section" id={id}>
      <BackgroundMarquee text={marqueeText} />

      <h2 className="section-title">{title}</h2>

      <div className="horizontal-scroll-container">
        {items.map((item, index) => (
          <div className="card-item" key={`${item.institute || item.company || item.title}-${index}`}>
            <div className="card-image-container">
              <img src={item.img} alt="" className="card-image" />
              <div className="card-overlay" />
            </div>
            <div className="card-content">{renderContent(item)}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HorizontalCards;
