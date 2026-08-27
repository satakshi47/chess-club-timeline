import { useEffect, useRef, useState } from 'react';

function TimelineEvent({ event }) {
  const { date, title, description, image, size } = event;
  const eventRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = eventRef.current;
    if (!element) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.16 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <article ref={eventRef} className={`timeline-event ${size === 'small' ? 'timeline-event-small' : ''} ${visible ? 'is-visible' : ''}`}>
      <span className="timeline-node" aria-hidden="true" />
      {size === 'big' ? (
        <div className="timeline-card">
          <div className="timeline-image-wrap">
            <img src={image} alt={title} className="timeline-image" />
          </div>
          <div className="timeline-card-body">
            <time>{date}</time>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </div>
      ) : (
        <div className="timeline-mini">
          <time>{date}</time>
          <h3>{title}</h3>
        </div>
      )}
    </article>
  );
}

export default TimelineEvent;
