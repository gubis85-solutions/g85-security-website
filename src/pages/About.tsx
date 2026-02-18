import { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/About.css';
import marketStatsImg from '../assets/Market presence/Market-share-Stats.png';
import absaLogo from '../assets/associate card pics/ABSA.png';
import affinityHealthLogo from '../assets/associate card pics/AFFINITY-HEALTH.png';
import africanBankLogo from '../assets/associate card pics/AFRICAN-BANK.png';
import bidvestLogo from '../assets/associate card pics/bidvest.png';
import boschUniformLogo from '../assets/associate card pics/BOSCH-UNIFORM-SUPPLIES.png';
import esPrintingLogo from '../assets/associate card pics/ES-PRinting.png';
import fnbLogo from '../assets/associate card pics/FNB.png';
import haloTechLogo from '../assets/associate card pics/HALO-TECHNOLOGIES.png';
import instacomLogo from '../assets/associate card pics/INSTACOM.png';
import itechLogo from '../assets/associate card pics/ITECH.png';
import outsuranceLogo from '../assets/associate card pics/OUTSURANCE.png';
import toyotaLogo from '../assets/associate card pics/Picture-1-1.png';
import psiraLogo from '../assets/associate card pics/PSIRA.png';
import psspfLogo from '../assets/associate card pics/psspf-300x164.png';
import sapsLogo from '../assets/associate card pics/saps.png';
import satlecLogo from '../assets/associate card pics/satlec.png';
import talismanLogo from '../assets/associate card pics/talisman.png';
import g85Map from '../assets/compay-map/g85-map.png';
import ivolineLogo from '../assets/logos transparent/ivoline.png';
import liyanaLogo from '../assets/logos transparent/liyana.png';
import mbathaLogo from '../assets/logos transparent/mbatha.png';
import sothiLogo from '../assets/logos transparent/sothi.png';

export default function About() {
  // Tracks which map pin and office details are active.
  const [activeLocationId, setActiveLocationId] = useState('gauteng');

  // Map pin data used for positioning on the SVG map.
  const locations = [
    {
      id: 'gauteng',
      name: 'Boitumelo Corporate House (main office)',
      address: '25 President Brand St, Bloemfontein, Free State, 9301',
      left: '60%',
      top: 'calc(40% - 10px)',
      color: '#F48020',
    },
    {
      id: 'limpopo',
      name: 'Limpopo Office',
      address: '12 Thabo Mbeki St, Polokwane, Limpopo, 0700',
      left: '60%',
      top: 'calc(40% - 65px)',
      color: '#8B5E34',
    },
    {
      id: 'free-state',
      name: 'FS Operations Office',
      address: '63-67 Kellner Street, Westdene, Bloemfontein, 9301',
      left: 'calc(62% - 40px)',
      top: 'calc(46% - 10px + 45px)',
      color: '#1B234E',
    },
    {
      id: 'kwa-zulu-natal',
      name: 'Kwa-Zulu Natal office',
      address: 'Liberty Life Building, 21 Aurora Drive, Umhlanga, 4301',
      left: 'calc(62% - 40px + 80px)',
      top: 'calc(46% - 10px + 45px + 15px)',
      color: '#7ED957',
    },
    {
      id: 'mpumalanga',
      name: 'Mpumalanga office',
      address: 'Nedbank centre, 6 OR Tambo Street, Office No2D, Middelburg, 1040',
      left: 'calc(60% + 60px)',
      top: 'calc(40% - 10px - 20px)',
      color: '#1B5E20',
    },
    {
      id: 'north-west',
      name: 'North West offices',
      address: '44 Scutte Avenue, Brits, 9250',
      left: 'calc(60% - 80px)',
      top: 'calc(40% - 30px)',
      color: '#7bb6ff',
    },
    {
      id: 'northern-cape',
      name: 'Northern Cape office',
      address: 'Office No. 28-30, Market Square, Kimberly, 8351',
      left: 'calc(62% - 40px - 120px)',
      top: 'calc(46% - 10px + 45px - 10px)',
      color: '#f4d03f',
    },
    {
      id: 'western-cape',
      name: 'Western Cape office',
      address: 'Unit 6, Pope House, 4 Chenoweth Street, Durbanville',
      left: 'calc(62% - 40px - 120px - 50px)',
      top: 'calc(46% - 10px + 45px - 10px + 75px)',
      color: '#9467bd',
    },
    {
      id: 'eastern-cape',
      name: 'Eastern Cape office',
      address: '8 Winkley Street, Berea, East London',
      left: 'calc(62% - 40px)',
      top: 'calc(46% - 10px + 45px + 50px)',
      color: '#d62728',
    },
  ];

  // Office list used in the details pane.
  const officeList = [
    {
      id: 'gauteng',
      name: 'Boitumelo Corporate House (main office)',
      address: '25 President Brand St, Bloemfontein, Free State, 9301',
      color: '#F48020',
    },
    {
      id: 'limpopo',
      name: 'Limpopo Office',
      address: '12 Thabo Mbeki St, Polokwane, Limpopo, 0700',
      color: '#8B5E34',
      titleClassName: 'about-map__title--brown',
    },
    {
      id: 'free-state',
      name: 'Free State Operations Office',
      address: '63-67 Kellner Street, Westdene, Bloemfontein, 9301',
      color: '#1B234E',
      titleClassName: 'about-map__title--blue',
    },
    {
      id: 'north-west',
      name: 'North West office',
      address: '44 Scutte Avenue, Brits, 9250',
      color: '#7bb6ff',
      titleClassName: 'about-map__title--light-blue',
    },
    {
      id: 'northern-cape',
      name: 'Northern Cape office',
      address: 'Office No. 28-30, Market Square, Kimberly, 8351',
      color: '#f4d03f',
      titleClassName: 'about-map__title--yellow',
    },
    {
      id: 'eastern-cape',
      name: 'Eastern Cape office',
      address: '8 Winkley Street, Berea, East London',
      color: '#d62728',
      titleClassName: 'about-map__title--red',
    },
    {
      id: 'western-cape',
      name: 'Western Cape office',
      address: 'Unit 6, Pope House, 4 Chenoweth Street, Durbanville',
      color: '#9467bd',
      titleClassName: 'about-map__title--purple',
    },
    {
      id: 'mpumalanga',
      name: 'Mpumalanga office',
      address: 'Nedbank centre, 6 OR Tambo Street, Office No2D, Middelburg, 1040',
      color: '#1B5E20',
      titleClassName: 'about-map__title--green',
    },
    {
      id: 'kwa-zulu-natal',
      name: 'Kwa-Zulu Natal office',
      address: 'Liberty Life Building, 21 Aurora Drive, Umhlanga, 4301',
      color: '#7ED957',
      titleClassName: 'about-map__title--light-green',
    },
  ];

  // Partner brands shown in the collage.
  const partners = [
    { name: 'PSIRA', logo: psiraLogo, url: 'https://www.psira.co.za/' },
    { name: 'OUTsurance', logo: outsuranceLogo, url: 'https://www.outsurance.co.za/' },
    { name: 'Instacom', logo: instacomLogo, url: 'https://www.instacom.co.za/' },
    { name: 'Halo Technologies', logo: haloTechLogo, url: 'https://www.halotechnology.co.za/' },
    { name: 'FNB', logo: fnbLogo, url: 'https://www.fnb.co.za' },
    { name: 'Bosch Uniform Supplies', logo: boschUniformLogo, url: 'https://boschuniforms.co.za/' },
    { name: 'African Bank', logo: africanBankLogo, url: 'https://www.africanbank.co.za/en/home/' },
    { name: 'Affinity Health', logo: affinityHealthLogo, url: 'https://www.affinityhealth.co.za/' },
    { name: 'ABSA', logo: absaLogo, url: 'https://www.absa.co.za/personal/' },
    { name: 'Talisman', logo: talismanLogo, url: 'https://www.talisman.co.za/' },
    { name: 'Satlec', logo: satlecLogo, url: '#' },
    { name: 'SAPS', logo: sapsLogo, url: 'https://www.saps.gov.za/' },
    { name: 'PSSPF', logo: psspfLogo, url: 'https://www.psspfund.co.za/' },
    { name: 'Toyota', logo: toyotaLogo, url: 'https://www.toyota.co.za' },
    { name: 'iTech', logo: itechLogo, url: 'https://itecgroup.co.za/' },
    { name: 'ES Printing & Projects', logo: esPrintingLogo, url: '#' },
    { name: 'Bidvest Steiner', logo: bidvestLogo, url: 'https://steiner.co.za/' },
  ];

  // Sister companies shown in the network strip.
  const sisterCompanies = [
    { name: 'Ivoline', logo: ivolineLogo },
    { name: 'Liyana', logo: liyanaLogo },
    { name: 'Mbatha', logo: mbathaLogo },
    { name: 'Sothi', logo: sothiLogo },
  ];

  // Staggered entrance animation for sections.
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  // Shared animation for individual cards.
  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <div className="about">
      {/* Hero intro */}
      <section className="about-hero">
        <motion.div
          className="about-hero__content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <p className="about-hero__eyebrow">About Us</p>
          <h1>Specialised superior security and protection solutions.</h1>
          <p className="about-hero__subtext">
            Gubis85 Solutions (Pty) Ltd delivers trusted physical and digital security in a dynamic
            safety climate across South Africa and beyond.
          </p>
          <div className="about-hero__chips">
            <span>BBBEE Accredited</span>
            <span>100% Black Owned</span>
            <span>Established 2013</span>
          </div>
        </motion.div>
      </section>

      {/* Main content blocks */}
      <motion.section
        className="about-body"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
              {/* Video Player Section */}
        <motion.div 
          className="about-card about-video-section" 
          variants={itemVariants}
        >
          <p className="about-card__eyebrow about-card__eyebrow--accent">
            More About Gubis85
          </p>

          <div className="video-player-container">
          <iframe
            src="https://www.youtube.com/embed/Ha056AWrcdw?autoplay=1&mute=1&rel=0&modestbranding=1&loop=1&playlist=Ha056AWrcdw"
            className="video-player"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="Gubis85 Solutions Overview"
            style={{ border: "none" }}
          />
</div>
        </motion.div>


        {/* Vision and mission */}
        <motion.div className="about-grid" variants={itemVariants}>
          <div className="about-panel">
            <p className="about-panel__title">Vision</p>
            <p>
              To become a leading security service company in Southern Africa and beyond by offering
              a global physical and digital security systems network.
            </p>
          </div>
          <div className="about-panel">
            <p className="about-panel__title">Mission</p>
            <p>
              To provide our clientele with superior service that meets dynamic needs through
              specialised solutions and cost-effective approaches.
            </p>
          </div>
        </motion.div>

        <motion.div className="about-card about-card--market" variants={itemVariants}>
          <div className="about-market__frame">
            <img
              className="about-market__image"
              src={marketStatsImg}
              alt="Market share statistics"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* Strategic focus list */}
        <motion.div className="about-card" variants={itemVariants}>
          <h2>Our Strategic <span className="about-h2__accent">Focus Areas</span></h2>
          <ul className="about-list">
            <li>Offering superior quality services at competitive prices.</li>
            <li>Improving economic benefits of targeted beneficiaries.</li>
            <li>Effective cooperation with emerging and established businesses sharing our vision.</li>
            <li>Financial capacitation across all structures.</li>
            <li>Holistic business development and growth sustenance.</li>
            <li>Building capacity through research, consultation, and partnerships across sectors.</li>
          </ul>
        </motion.div>

        {/* Interactive office map and details */}
        <motion.div className="about-card about-map" variants={itemVariants}>
          <h2>South Africa Footprint <br/> <span className="about-h2__accent">Office Locations</span></h2>
          <div className="about-map__layout">
            <div className="about-map__canvas" role="img" aria-label="Map of South Africa with office locations">
              <img
                className="about-map__svg"
                src={g85Map}
                alt="South Africa map"
                loading="lazy"
                decoding="async"
              />
              {/* Pinpoints temporarily hidden */}
              {locations.map((location) => (
                <button
                  key={location.id}
                  type="button"
                  className={`about-map__pin${activeLocationId === location.id ? ' is-active' : ''}`}
                  onClick={() => setActiveLocationId(location.id)}
                  aria-label={`${location.name} office`}
                  aria-pressed={activeLocationId === location.id}
                  style={{
                    left: location.left,
                    top: location.top,
                    ['--pin-color' as string]: location.color,
                  }}
                />
              ))}
            </div>
            <div className="about-map__details">
              <p className="about-map__label about-map__label--blue">Selected office</p>
              <div className="about-map__list">
                {officeList.map((location) => {
                  const isActive = activeLocationId === location.id;
                  return (
                    <div key={location.id} className={`about-map__item${isActive ? ' is-active' : ''}`}>
                      <button
                        type="button"
                        className={`about-map__title${location.titleClassName ? ` ${location.titleClassName}` : ''}`}
                        onClick={() => setActiveLocationId(location.id)}
                        aria-expanded={isActive}
                      >
                        {location.name}
                      </button>
                      {isActive && <p>{location.address}</p>}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Partner collage */}
        <motion.div className="about-card about-card--partners" variants={itemVariants}>
          <h2>Trusted <span className="about-h2__accent">Partners</span></h2>
          <p className="about-card__eyebrow">Aligned with industry leaders and institutions</p>
          <div className="partner-collage">
            {partners.map((partner) => {
              const Card = (
                <article className="partner-card">
                  <div className="partner-card__logo">
                    <img src={partner.logo} alt={`${partner.name} logo`} loading="lazy" />
                  </div>
                  <h3>{partner.name}</h3>
                </article>
              );

              if (partner.url) {
                return (
                  <a
                    key={partner.name}
                    href={partner.url}
                    className="partner-link"
                    target={partner.url === '#' ? undefined : '_blank'}
                    rel={partner.url === '#' ? undefined : 'noopener noreferrer'}
                  >
                    {Card}
                  </a>
                );
              }

              return (
                <div key={partner.name} className="partner-link">
                  {Card}
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Sister companies strip */}
        <motion.div className="about-card about-card--network" variants={itemVariants}>
          <h2>Our broader <span className="about-h2__accent">business network</span></h2>
          <p className="about-card__eyebrow">Trusted sister companies, one shared standard</p>
          <p>
            We work in close alignment with our sister companies to extend operational reach, share
            specialist capability, and deliver a seamless client experience across regions.
          </p>
          <div className="about-network__logos">
            {sisterCompanies.map((company) => (
              <div key={company.name} className="about-network__logo">
                <img src={company.logo} alt={`${company.name} logo`} loading="lazy" />
              </div>
            ))}
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
}
