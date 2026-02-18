import '../styles/Careers.css';
import { motion } from 'framer-motion';

export default function Careers() {
  /*
    HOW TO ADD A CAREERS POST (step-by-step):
    1) Add a new object inside the `jobs` array below.
    2) Give it a unique `id` (number).
    3) Provide `title`, `location`, and `description`.
    4) Save the file. The new card will render automatically.

    Example:
    {
      id: 5,
      title: 'Control Room Operator',
      location: 'Boitumelo Corporate House, 25 President Brand St, Bloemfontein, Free State, 9301',
      description: 'Monitor alarms, dispatch responses, and log incident reports.'
    }
  */
  // Open role listings rendered as cards.
  const jobs = [
    {
      id: 1,
      title: 'Security Guard',
      description: 'We are hiring experienced security guards for various locations.',
    },
    {
      id: 2,
      title: 'CCTV Technician',
      description: 'Install and maintain CCTV systems across our client locations.',
    },
    {
      id: 3,
      title: 'Security Supervisor',
      description: 'Lead and manage security teams with this supervisory role.',
    },
    {
      id: 4,
      title: 'Operations Manager',
      description: 'Manage day-to-day operations and coordinate with teams.',
    },
  ];

  return (
    <div className="careers">
      {/* Hero intro */}
      <section className="page-hero">
        <motion.div
          className="page-hero__content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <p className="page-hero__eyebrow">Careers</p>
          <h1>Careers at Gubis85 Security Service</h1>
          <p className="page-hero__subtext">
            Join a mission-driven team delivering trusted protection and innovative security solutions.
          </p>
          <div className="page-hero__chips">
            <span>Competitive Pay</span>
            <span>Career Growth</span>
            <span>Great Team</span>
          </div>
        </motion.div>
      </section>

      {/* Benefits overview */}
      <section className="why-join">
        <h2 className="careers-heading">
          Why Join <span className="careers-heading__accent">Our Team?</span>
        </h2>
        <div className="benefits-grid">
          <div className="benefit">
            <div className="benefit__content">
              <h3>Competitive Pay</h3>
              <p>We offer competitive salaries and benefits packages</p>
            </div>
          </div>
          <div className="benefit">
            <div className="benefit__content">
              <h3>Professional Growth</h3>
              <p>Opportunities for training and career advancement</p>
            </div>
          </div>
          <div className="benefit">
            <div className="benefit__content">
              <h3>Great Team</h3>
              <p>Work with dedicated professionals in a supportive environment</p>
            </div>
          </div>
          <div className="benefit">
            <div className="benefit__content">
              <h3>Benefits</h3>
              <p>Health insurance, retirement plans, and more</p>
            </div>
          </div>
        </div>
      </section>

      {/* Current vacancies */}
      <section className="open-positions">
        <h2 className="careers-heading">
          Open <span className="careers-heading__accent">Positions</span>
        </h2>
        <div className="jobs-list">
          {jobs.map((job) => (
            <div key={job.id} className="job-card">
              <div className="job-header">
                <h3>{job.title}</h3>
              </div>
              <p>{job.description}</p>
              <button className="apply-btn">Apply Now</button>
            </div>
          ))}
        </div>
      </section>

      {/* Call to action */}
      <section className="join-us">
        <h2>Interested in Joining Us?</h2>
        <p>Send your resume to careers@gubis85.co.za</p>
      </section>
    </div>
  );
}
