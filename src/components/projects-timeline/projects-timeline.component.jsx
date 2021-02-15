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
import anchorLogo from '../../assets/img/experience/anchor.jpg';
import wisLogo from '../../assets/img/experience/wislogo.png';
import hkustLogo from '../../assets/img/experience/hkust.png';
import firstCodeLogo from '../../assets/img/experience/firstCode.png';
import timelineElements from './timelineElements';
import barackVoice from '../../assets/sound/barack_1.flac';
import barackVoice2 from '../../assets/sound/barack_2.flac';
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
              <div className="timelineInside">
                {element.key === 1 && (
                  <img
                    src={wisLogo}
                    alt="wisLogo"
                    style={{
                      width: '40%',
                    }}
                  />
                )}
                {element.key === 3 && (
                  <img
                    src={hkustLogo}
                    alt="hkustLogo"
                    style={{
                      width: '100%',
                    }}
                  />
                )}
                {element.key === 4 && (
                  <img
                    src={firstCodeLogo}
                    alt="firstCodeLogo"
                    style={{
                      width: '100%',
                    }}
                  />
                )}
                {element.key === 5 && (
                  <img
                    src={anchorLogo}
                    alt="anchorLogo"
                    style={{
                      width: '40%',
                    }}
                  />
                )}
                {element.key === 8 && (
                  <img src={skymontLogo} alt="skymontLogo" style={{}} />
                )}

                <h3 className="vertical-timeline-element-title elementTitle">
                  {element.title}
                </h3>
                <h5 className="vertical-timeline-element-subtitle">
                  {element.location}
                </h5>
                <p id="description">{element.description}</p>

                {showAudio && (
                  <p style={{ fontSize: 11 }}>
                    60 seconds of Barack Obama's voice trained for 10 minutes
                  </p>
                )}
                {showAudio && (
                  <AudioPlayer
                    src={barackVoice}
                    onPlay={(e) => console.log('onPlay')}
                    showJumpControls
                    // other props here
                  />
                )}
                {showAudio && (
                  <p style={{ fontSize: 11, marginTop: '10%' }}>
                    50 seconds of Barack Obama's voice trained for 8 minutes
                  </p>
                )}
                {showAudio && (
                  <AudioPlayer
                    src={barackVoice2}
                    onPlay={(e) => console.log('onPlay')}
                    showJumpControls
                    // other props here
                  />
                )}
              </div>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
};
export default TimeLine;
