import React, {useState} from 'react';
import styles from '../css/Apply.module.css';
import faqPlus from "../images/faqPlus.png";
import orangeCurve from "../images/orangecurve.png";

import homeStyles from "../css/HomePage.module.css";
import applyCurveBlue from '../images/applyCurveBlue.png';
import timeline from "../images/timeline.png";

const faqList = [
  [
    `What sets this club apart from other tech clubs?`,
  
    `This club is unique in that it serves as a true medium for passionate creators to work on projects that are most meaningful to them. Members have the ability to suggest ideas for projects and then rank and choose the projects they want to work on each semester, rather than working on predefined projects. 
    
Unlike other clubs that may rely on rigorous selection processes, we believe that every student with a technical background should have the opportunity to learn, grow and contribute. Our approach allows for a highly personalized and fulfilling experience for all members.`
  ],

  [
  `How are projects going to work?`,

  `When completing the application form, applicants are encouraged to contribute project ideas. These projects can range from anything in the CS field such as data science or web development. The only requirement to keep in mind when contributing ideas is to make sure that they are possible to complete in the span of one semester. 

After the application deadline, a second form (Project Interest Form) will be sent out that will have these project ideas listed. Applicants can choose any project that they are interested in working on or being the project lead for. Based on the results of this form, groups will be assigned for projects that received enough votes to form teams.
  
Throughout the semester, our officers will be available to meet with you and answer any questions you may have about the projects. In addition, roughly three check-in meetings with project leads and officers will be scheduled for project leads to share updates on the state of their projects, receive valuable feedback and guidance, and make any necessary adjustments to ensure the successful completion of the project.`  
  ],

  [
  `Who can join?`,
  
  `If you are passionate about creating meaningful projects and working in a team environment, then this club is perfect for you! We are dedicated to redefining the culture of tech clubs at UC Berkeley, and welcome individuals of all backgrounds, from beginners to advanced developers.
  
While we welcome individuals of all backgrounds, to be able to fully participate and contribute, we expect members to have completed or be currently enrolled in CS 61A (or equivalent) or have previous coding experience. This technical background will allow members to engage fully in the projects of the club.`
  ],

  [
  `Is there a social aspect to this club?`,

  `Yes, getting close to your club members is one of our main focuses! You will be placed on a team to work on a project and are expected to meet frequently and collaborate with your team members. Socials beyond general project team meetings will vary by team, but there will be multiple club wide socials throughout the semester so you have the chance to meet everyone in the club!`
  ],


  [
  `How are teams decided?`,

  `Creating teams is a vital aspect of our club and we take great care in ensuring that members are placed in teams that align with their interests and capabilities. We consider a variety of factors including previous experiences, project interests and written prompts when forming teams. A matching algorithm is used to group members, which takes into account the preferences of each member and attempts to place them in teams where they will thrive and be able to make a meaningful contribution.`
  ],

  [
  `What is the time commitment?`,

  `As a member of this club, you can expect to invest 4-8 hours per week in working on your project, collaborating with your team members, and attending team and club socials. However, it's important to note that the level of commitment may vary depending on the project team and the stage of the project. We understand that members have different schedules and priorities, so we aim to be flexible and accommodate members' needs while still ensuring that projects are completed successfully.`
  ],

  [
  `Can I be a project lead?`,

  `On the project interest form, we have a dedicated section for individuals interested in leading a project. We welcome applicants with previous leadership and technical experience, as this experience can be beneficial for leading a successful project. However, even if you don't have that experience, don't let that discourage you from applying. Our main focus is to find individuals who are passionate about the project they want to lead and willing to learn and grow as a leader. 

Being a project lead entails guiding the project to completion on a timely basis, delegating tasks among team members, and communicating with the officer team on a regular basis. Our club's success relies heavily on the engagement of its members, and we encourage everyone to step up and take on leadership roles.`
  ],

  [
  `I have no previous coding experience. What should I do?`,

  `To be able to fully engage and contribute to the projects of the club, we expect members to have completed or be currently enrolled in CS 61A (or equivalent) or have previous coding experience. If you don't have these qualifications, we recommend either enrolling in CS 61A/CS 88 or following tutorials and building a personal project to gain familiarity and proficiency with coding. This will help ensure that members can fully participate and benefit from the club.`
  ],

  [
  `Are there any club dues?`,

  `To help support the club's activities and ensure its sustainability, there is a $15 fee due at the start of each semester. This fee is used to cover expenses such as club socials, necessary supplies, and other costs associated with running the club. This small investment is essential to the club's success and allows us to provide a wide range of opportunities for members to learn, grow, and create meaningful projects.`
  ]
];

export default function Apply() {

  const [revealedAnswers, setRevealedAnswers] = useState(Array(faqList.length).fill(false));

  const changeReveal = (index) => {
    let copy = revealedAnswers.slice();
    copy[index] = !copy[index];
    setRevealedAnswers(copy);
  };

  const renderFaqBox = (index) => {
    let faqElement = [];

    faqElement.push(
      <div className={styles.faqHeader} key={`faq-header-${index}`}>
          <div className={styles.faqQuestionContainer}>
              <p className={styles.faqQuestion}>{faqList[index][0]}</p>
          </div>
          <div className={styles.faqImageContainer}>
              <img 
                  className={styles.faqPlus} 
                  src={faqPlus} 
                  alt="faqPlus" 
              >
              </img>
          </div>
      </div>
    );

    if (revealedAnswers[index]) {
        faqElement.push(
            <div key={`faq-answer-${index}`} className={styles.faqAnswerContainer}>
                <p className={styles.faqAnswer}>{faqList[index][1]}</p>
            </div>
        );
    }

    return (
        <div key={`faq-box-${index}`} className={styles.faqBox} 
          onClick = { () => changeReveal(index)}
        >
            {faqElement}
        </div>
    );  
  } 

  const renderAllFaqs = () => {
    let allFaqs = [];
    
    for (let index in faqList) {
      let brKey = `faq-br-${index}`;

      allFaqs.push(renderFaqBox(index));
      allFaqs.push(<br key={brKey}></br>);
    }

    return (
        <div className={`${styles.allFaqs} limitWidth`} id="faqs">
          <h1 className={styles.faqTitle}>FAQs</h1>
          {allFaqs}
          <br></br>
        </div>
    );
  }

  return (
    <div>
      <div className={styles.applyWrapper}>
        <div className={styles.applyHeader}>
          <div className="limitWidth">
            <h1>Join us!</h1>
            <div className={styles.headerBlock}>
              <p>Application deadline for Spring 2023 is <b>Wednesday, February 1st at 11:59 pm</b>. Click the button to get started!</p>
              <a href="https://forms.gle/SZQhNzfmCLEPz9tx9" target="_blank" rel="noopener noreferrer"><button className={`${homeStyles.getInvolvedButton} ${styles.applyButton}`}>Apply Now</button></a>
            </div>
          </div>
        </div>
        <img src={applyCurveBlue} className={styles.blueCurve} />
        <div className={styles.timeline}>
          <div className={`${styles.timelineWidth} "limitWidth"`} id="timeline">
            <h1>Recruitment Timeline</h1>
            <img src={timeline} className={styles.timelineImg} />
            <a href="https://forms.gle/SZQhNzfmCLEPz9tx9" target="_blank" rel="noopener noreferrer"><button className={`${homeStyles.getInvolvedButton} ${styles.applyButton}`}>Apply Now</button></a>
          </div>
        </div>
      </div>
      <img 
        src={orangeCurve} 
        className={styles.orangeCurve}
        alt="orangeCurve"  
      ></img>
      {renderAllFaqs()}
    </div>
  );
}