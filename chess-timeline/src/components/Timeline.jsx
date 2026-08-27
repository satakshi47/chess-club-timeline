import timelineData from '../data/timelineData';
import TimelineEvent from './TimelineEvent';
import './Timeline.css';

function Timeline() {
  return (
    <section className="journey" aria-label="En Passant club journey">
      <div className="journey-heading">
        <span>THE JOURNEY</span>
        <h2>From the first move to the biggest moments.</h2>
      </div>
      <div className="timeline-container">
        {timelineData.map((event) => (
          <TimelineEvent key={event.id} event={event} />
        ))}
      </div>
    </section>
  );
}

export default Timeline;
