import '../styles/Csir.css';
import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';

import csrImageOne from '../assets/CSR/img_2_1770108909143.jpg';
import csrImageTwo from '../assets/CSR/img_3_1770108916691.jpg';
import csrImageThree from '../assets/CSR/img_5_1770108926677.jpg';

// CSR image gallery used in the right column.
const csrGallery = [
  {
    src: csrImageOne,
    alt: 'CSR drive distributing passout pads to learners',
  },
  {
    src: csrImageTwo,
    alt: 'CSR team handing out school shoes to disadvantaged students',
  },
  {
    src: csrImageThree,
    alt: 'Community partners and learners during the CSR handover',
  },
];

/*
  HOW TO ADD A CSR INITIATIVE (step-by-step):
  1) Add a new object inside the `csrInitiatives` array below.
  2) Provide `title`, `summary`, and `focus`.
  3) Save the file. The new initiative will render automatically.

  Example:
  {
    title: 'Community Safety Workshops',
    summary: 'Partnered with local schools to deliver safety awareness sessions.',
    focus: 'Education & Prevention'
  }
*/
// Current CSR initiatives rendered in the list.
const csrInitiatives = [
  {
    title: 'Menstrual Hygiene & School Shoes Drive',
    summary: 'Providing essential supplies to learners for improved attendance and dignity.',
    focus: 'Youth Support',
  },
  {
    title: 'Community Support Partnerships',
    summary: 'Working with local leaders to identify and respond to urgent community needs.',
    focus: 'Community Care',
  },
];

/*
  HOW TO ADD CSR CALENDAR EVENTS:
  1) Add a new object to the `csrEvents` array below.
  2) Use the date format YYYY-MM-DD (e.g., 2026-04-18).
  3) Provide a short title and a brief description for the event.
  4) The calendar will highlight the date and show the details on click.
*/
const csrEvents = [
  {
    date: '2026-03-12',
    title: 'School Supplies Drive',
    description: 'Delivering stationery packs to learners in need across partner schools.',
  },
  {
    date: '2026-04-06',
    title: 'Community Safety Workshop',
    description: 'Safety awareness sessions with local youth and community leaders.',
  },
  {
    date: '2026-04-24',
    title: 'Winter Warmth Initiative',
    description: 'Donation and distribution of blankets and warm clothing.',
  },
];

const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default function Csir() {
  const today = useMemo(() => new Date(), []);
  const [calendarMonth, setCalendarMonth] = useState(
    new Date(today.getFullYear(), today.getMonth(), 1)
  );
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const eventsByDate = useMemo(() => {
    const map = new Map<string, { title: string; description: string }>();
    csrEvents.forEach((event) => {
      map.set(event.date, { title: event.title, description: event.description });
    });
    return map;
  }, []);

  const monthLabel = calendarMonth.toLocaleDateString('en-ZA', {
    month: 'long',
    year: 'numeric',
  });

  const monthDays = useMemo(() => {
    const year = calendarMonth.getFullYear();
    const month = calendarMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const leadingBlankDays = firstDay.getDay();
    const slots: Array<{ key: string; day: number } | null> = [];

    for (let i = 0; i < leadingBlankDays; i += 1) {
      slots.push(null);
    }

    for (let day = 1; day <= daysInMonth; day += 1) {
      const monthValue = String(month + 1).padStart(2, '0');
      const dayValue = String(day).padStart(2, '0');
      const key = `${year}-${monthValue}-${dayValue}`;
      slots.push({ key, day });
    }

    return slots;
  }, [calendarMonth]);

  const selectedEvent = selectedDate ? eventsByDate.get(selectedDate) : undefined;
  const selectedLabel = selectedDate
    ? new Date(`${selectedDate}T00:00:00`).toLocaleDateString('en-ZA', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    : 'Select a highlighted date';

  const upcomingEvents = useMemo(() => {
    const sorted = [...csrEvents].sort((a, b) => a.date.localeCompare(b.date));
    return sorted;
  }, []);

  const handlePrevMonth = () => {
    setCalendarMonth(
      new Date(calendarMonth.getFullYear(), calendarMonth.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setCalendarMonth(
      new Date(calendarMonth.getFullYear(), calendarMonth.getMonth() + 1, 1)
    );
  };

  return (
    <div className="csir-page">
      {/* Hero intro */}
      <section className="page-hero">
        <motion.div
          className="page-hero__content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <p className="page-hero__eyebrow">CSR</p>
          <h1>Community &amp; Social Responsibility</h1>
          <p className="page-hero__subtext">
            Practical initiatives that uplift communities, strengthen safety, and expand opportunity.
          </p>
          <div className="page-hero__chips">
            <span>Community Impact</span>
            <span>Youth Support</span>
            <span>Long-term Commitment</span>
          </div>
        </motion.div>
      </section>
      {/* Main CSR story + gallery */}
      <section className="csir-content">
        {/* Narrative and initiative highlights */}
        <div className="csir-content__text">
          <h2>Community Support in Action</h2>
          <p>
           Our Corporate Social Responsibility initiative focused on supporting learners in need by addressing essential barriers to their education.
            The programme was designed to remove everyday challenges that prevent young people from thriving academically, while restoring dignity, confidence,
             and hope for learners facing difficult circumstances.
          </p>
          <div className="csir-initiatives">
            <h3>Current CSR Initiatives</h3>
            <ul>
              {csrInitiatives.map((initiative) => (
                <li key={initiative.title}>
                  <strong>{initiative.title}</strong>
                  <p>{initiative.summary}</p>
                  <span>{initiative.focus}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="csir-calendar">
            <div className="csir-calendar__header">
              <div>
                <h3>CSR Calendar</h3>
                <p>
                  Highlighted dates show upcoming CSR projects. Click a date to see the details.
                </p>
              </div>
              <div className="csir-calendar__nav">
                <button
                  type="button"
                  className="csir-calendar__nav-btn"
                  onClick={handlePrevMonth}
                >
                  Prev
                </button>
                <span className="csir-calendar__month">{monthLabel}</span>
                <button
                  type="button"
                  className="csir-calendar__nav-btn"
                  onClick={handleNextMonth}
                >
                  Next
                </button>
              </div>
            </div>
            <div className="csir-calendar__grid">
              {weekDays.map((day) => (
                <div key={day} className="csir-calendar__weekday">
                  {day}
                </div>
              ))}
              {monthDays.map((slot, index) => {
                if (!slot) {
                  return <div key={`empty-${index}`} className="csir-calendar__empty" />;
                }

                const hasEvent = eventsByDate.has(slot.key);
                const isSelected = slot.key === selectedDate;

                return (
                  <button
                    key={slot.key}
                    type="button"
                    className={`csir-calendar__day${hasEvent ? ' has-event' : ''}${
                      isSelected ? ' is-selected' : ''
                    }`}
                    onClick={() => setSelectedDate(slot.key)}
                  >
                    <span className="csir-calendar__day-num">{slot.day}</span>
                    {hasEvent && <span className="csir-calendar__dot" />}
                  </button>
                );
              })}
            </div>
            <div className="csir-calendar__details">
              <span className="csir-calendar__label">Selected date</span>
              <h4>{selectedLabel}</h4>
              <p>
                {selectedEvent
                  ? `${selectedEvent.title}: ${selectedEvent.description}`
                  : 'No CSR event scheduled for this date.'}
              </p>
            </div>
            <div className="csir-calendar__upcoming">
              <span className="csir-calendar__label">Upcoming events</span>
              <ul>
                {upcomingEvents.map((event) => (
                  <li key={event.date}>
                    <strong>{event.title}</strong>
                    <span>{event.date}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p>
            Working alongside community partners, we distributed essential supplies directly to
            disadvantaged schools, ensuring each learner received what they needed to stay prepared,
            coEncouragement and compassionate engagementEncouragement and compassionate engagementmfortable, and ready to learn.
          </p>
          <div className="csir-impact">
            <div>
              <h3>What We Delivered</h3>
              <ul>
                <li><b>Menstrual hygiene</b> products to enable girls to attend school consistently and with confidence.</li>
                <li><b>Durable school footwear</b> to support learners comfortably throughout the academic year.</li>
                <li><b>Encouragement and compassionate engagement</b> through direct community interaction and support.</li>
              </ul>
            </div>
            <div>
              <h3>Our Commitment</h3>
              <p>
                We are committed to long-term community upliftment through targeted support, respectful
                partnerships, and consistent follow-through on the needs of disadvantaged learners.
              </p>
            </div>
          </div>
        </div>
        {/* Photo gallery */}
        <div className="csir-gallery">
          {csrGallery.map((image) => (
            <figure key={image.src} className="csir-gallery__item">
              <img src={image.src} alt={image.alt} loading="lazy" />
              <figcaption>{image.alt}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
}
