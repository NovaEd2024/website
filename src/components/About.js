import styles from "../css/About.module.css";
import blueCurve from "../images/about/blue_new_line.png";
import pwicon from "../images/pwicon.png";
import linkedinicon from "../images/linkedinicon.png";
import inclusiveCommunity from "../images/about/inclusiveCommunity.png";
import chooseYourOwnPath from "../images/about/chooseYourOwnPath.png";
import buildAndLearnTogether from "../images/about/buildAndLearnTogether.png";
import challengeYourLimits from "../images/about/challengeYourLimits.png";

import teamCover from "../images/about/nova_about_page.png";

// active members
import rohan from "../images/about/rohan.jpeg";
import siddharth from "../images/about/siddharth.jpeg"
import pratush from "../images/about/pratush_sexy.jpg"


export default function About() {
  const team = [
    {
      name: "Siddharth Marathe",
      link: "https://www.linkedin.com/in/siddharth-marathe-82126a1a4/",
      title: "CEO",
      image: siddharth,
    },
    {
      name: "Rohan Rattan",
      link: "https://www.linkedin.com/in/rohan-rattan/",
      title: "CFO",
      image: rohan,
    },
    {
      name: "Pratush Saravanan",
      link: "https://www.linkedin.com/in/pratushs/",
      title: "COO",
      image: pratush,
    }
  ];

  const alumni = [
    // {
    //   name: "Ethan Ikegami",
    //   link: "https://ethanikegami.com/",
    //   title: "Co-Founder",
    //   image: ethan,
    // },
    // {
    //   name: "Nick Litvinov",
    //   link: "https://www.linkedin.com/in/nick-litvinov-ab04981b5/",
    //   title: "Co-Founder",
    //   image: nick,
    // },
    // {
    //   name: "Colin FitzGerald",
    //   link: "https://www.linkedin.com/in/colinfitzgerald328/",
    //   title: "Co-Founder",
    //   image: colin,
    // },
    // {
    //   name: "Zee Babar",
    //   link: "https://www.linkedin.com/in/moebabar",
    //   title: "Project Lead",
    //   image: zee,
    // },
  ];

  return (
    <div>
      <img
        src={teamCover}
        className={`${styles.gridImage} limitWidth`}
        alt="NovaEd"
      />
      <div className={`${styles.aboutTopHalf} limitWidth`}>
        <div className={styles.marginFromScreen}>
          <div className={styles.aboutUs}>
            <h1>About Us</h1>
            <h3>
              We’re building NovaEd, an AI-guided, 
              personalized question-generation platform that aids instructors in generating supplemental 
              material for their courses. We do this with a highly intelligent AI model that requires 
              only a simple drag-and-drop of course-specific lecture files. From our collective 
              experience as Teaching Assistants, we realized that exam and question generation 
              is a huge burden on Professors. With NovaEd, we hope to address this unmet need 
              and revolutionize education with EDTech.
            </h3>
          </div>
          {/* <div className={styles.ourValues} id="values">
            <h1>Our Values</h1>
            <div className={styles.values}>
              <div className={styles.value}>
                <img src={inclusiveCommunity} alt="Inclusive Community" />
                <h2>Inclusive Community</h2>
                <h3>
                  We value individual differences and strive to build a
                  welcoming environment for everyone passionate about the tech
                  space and creating meaningful projects.
                </h3>
              </div>
              <div className={styles.value}>
                <img src={chooseYourOwnPath} alt="Choose Your Own Path" />
                <h2>Choose Your Own Path</h2>
                <h3>
                  We believe it is crucial that students are able to facilitate
                  and operate their own development teams, ensuring an outlet
                  for creative independence.
                </h3>
              </div>
              <div className={styles.value}>
                <img
                  src={buildAndLearnTogether}
                  alt="Build and Learn Together"
                />
                <h2>Build and Learn Together</h2>
                <h3>
                  We aim to maintain a curious space for everyone to collaborate
                  with and learn from one another by allowing every individual
                  to have pivotal roles in their respective development teams.
                </h3>
              </div>
              <div className={styles.value}>
                <img src={challengeYourLimits} alt="Challenge Your Limits" />
                <h2>Challenge Your Limits</h2>
                <h3>
                  We always encourage our peers to reach beyond their comfort
                  zones and explore areas they are unfamiliar with as we believe
                  it is essential to their personal development.
                </h3>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <img src={blueCurve} className={styles.blueCurve} alt="" />
      <div className={`${styles.aboutBottomHalf} limitWidth`} id="team">
        <div className={styles.aboutPics}>
          <h1>Meet the Team</h1>
          <div className={styles.people}>
            {team.map((person) => (
              <div className={styles.person}>
                <img
                  className={styles.gridImage}
                  src={person.image}
                  alt={person.name}
                />
                <div className={styles.name}>
                  <h3>{person.name}</h3>
                  {person.link && (
                    <a
                      href={person.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={
                          person.link.includes("linkedin")
                            ? linkedinicon
                            : pwicon
                        }
                        className={styles.icon}
                        alt=""
                      />
                    </a>
                  )}
                </div>
                <p className={styles.title}>{person.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
