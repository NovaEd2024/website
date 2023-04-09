import styles from '../css/Resources.module.css';
import ResourcesButton from './ResourcesButton';
import { useState } from 'react';

import starthere from './resources-content/starthere';
import git from './resources-content/git';
import github from './resources-content/github';
import htmlcssjavascript from './resources-content/htmlcssjavascript';
import frontend from './resources-content/frontend';
import backend from './resources-content/backend';
import fullstack from './resources-content/fullstack';
import datascience from './resources-content/datascience';
import awscomputing from './resources-content/awscomputing';
import design from './resources-content/design';

export default function Resources() {
    const [resource, setResource] = useState("Start Here");
    const resources = {
        "Start Here": starthere,
        "Git": git,
        "GitHub": github,
        "HTML, CSS, JavaScript": htmlcssjavascript,
        "Frontend (React)": frontend,
        "Backend (Node)": backend,
        "Full Stack (Django)": fullstack,
        "Data Science": datascience,
        "AWS Computing": awscomputing,
        "Design": design
    }
 
    return (
        <div className={styles.container}>
        <div className={styles.sidebar}>
            <ResourcesButton button="Start Here" content={[]} state={setResource} />
            <ResourcesButton button="Git/GitHub" content={["Git", "GitHub"]} state={setResource} />
            <ResourcesButton button="Web Dev" content={["HTML, CSS, JavaScript", "Frontend (React)", "Backend (Node)", "Full Stack (Django)"]} state={setResource} />
            <ResourcesButton button="Data Science" content={["Data Science", "AWS Computing"]} state={setResource} />
            <ResourcesButton button="Design" content={[]} state={setResource} />
        </div>
        <div className={styles.mainContent}>
            {resources[resource]}
        </div>
        </div>
    );
}