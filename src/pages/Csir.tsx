import '../styles/Csir.css';
import { motion } from 'framer-motion';

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

export default function Csir() {
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
