import React from 'react';
import CardifyLanding from '../images/CardifyHomePage.png';
import ParkingBuddyLanding from '../images/ParkingBuddyHPScreenShot.png';
import KaraokeDokieLanding from '../images/KaraokeDokieHomeSearch.png';

export default function Project() {
    const projects = [
        {
            title: 'Karaoke-Dokie',
            link: 'https://charles-ram.github.io/karaoke-dokie-project/',
            image: KaraokeDokieLanding,
            description: 'TBD',
        },
        {
            title: 'ParkingBuddy',
            link: 'https://github.com/SMU-CodingBootcamp-Project2/ParkingBuddy',
            image: ParkingBuddyLanding,
            description: 'TBD',
        },
        {
            title: 'Cardify',
            link: 'https://github.com/SMU-CodingBootcamp-Project2/ParkingBuddy',
            image: CardifyLanding,
            description: 'TBD',
        },

    ];


return (
    <div className="container">
          {/* <h1>Projects:</h1> */}
          <ul className="project-group">
            {projects.map((project) => (
              <li className="project-group-item" key={project.title}>
                {`${project.title} ${project.image} (${project.link}) (${project.description})`}
              </li>
            ))}
          </ul>
        </div>
 );
}
