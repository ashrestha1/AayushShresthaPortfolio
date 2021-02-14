import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { ReactComponent as WorkIcon } from './work.svg';
import { ReactComponent as SchoolIcon } from './school.svg';
import { ReactComponent as ReservedIcon } from './reserved.svg';
import { ReactComponent as USTIcon } from './UST.svg';
import { ReactComponent as MastermindIcon } from './mastermind.svg';
import { ReactComponent as FirstCodeIcon } from './firstCode.svg';
import { ReactComponent as AnchorIcon } from './anchor.svg';
import { ReactComponent as TowerIcon } from './tower.svg';
import { ReactComponent as FYPIcon } from './fyp.svg';
import { ReactComponent as SkymontIcon } from './skymont.svg';
import skymontLogo from '../../assets/img/experience/skymont1.jpg';
import timelineElements from './timelineElements';
import 'react-vertical-timeline-component/style.min.css';
import './projects-timeline.styles.css';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const TimeLine = () => {
  return (
    <div id="experience">
      <h1 className="title">Experience</h1>
      <VerticalTimeline>
        {timelineElements.map((element) => {
          let showAudio = element.icon === 'FYP';
          var icons;
          var iconStyles;
          console.log(element.id);
          switch (element.icon) {
            case 'reserved':
              icons = <ReservedIcon />;
              iconStyles = { background: 'white' };
              break;
            case 'work':
              icons = <WorkIcon />;
              iconStyles = { background: 'white' };
              break;
            case 'school':
              icons = <SchoolIcon />;
              iconStyles = { background: 'white' };
              break;
            case 'HKUST':
              icons = <USTIcon />;
              iconStyles = { background: 'white' };
              break;
            case 'mastermind':
              icons = <MastermindIcon />;
              iconStyles = { background: 'white' };
              break;
            case 'FirstCode':
              icons = <FirstCodeIcon />;
              iconStyles = { background: 'white' };
              break;
            case 'Anchor':
              icons = <AnchorIcon />;
              iconStyles = { background: 'white' };
              break;
            case 'tower':
              icons = <TowerIcon />;
              iconStyles = { background: 'white' };
              break;
            case 'FYP':
              icons = <FYPIcon />;
              iconStyles = { background: 'white' };
              break;
            case 'skymont':
              icons = <SkymontIcon />;
              iconStyles = { background: 'white' };
              break;
            default:
              icons = <SchoolIcon />;
          }

          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName="date"
              iconStyle={iconStyles}
              icon={icons}
            >
              {element.key === 9 && <img src={skymontLogo} alt="skymontLogo" />}

              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>
              <p id="description">{element.description}</p>
              {showAudio && (
                <AudioPlayer
                  autoPlay
                  src="http://example.com/audio.mp3"
                  onPlay={(e) => console.log('onPlay')}
                  // other props here
                />
              )}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
};
export default TimeLine;
