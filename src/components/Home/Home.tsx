import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { _ButtonBase_SizeLgIconFalse } from './_ButtonBase_SizeLgIconFalse/_ButtonBase_SizeLgIconFalse';
import { GroupIcon2 } from './GroupIcon2.js';
import { GroupIcon3 } from './GroupIcon3.js';
import { GroupIcon } from './GroupIcon.js';
import classes from './Home.module.css';
import { InputField_TypeDefaultLeadingI } from './InputField_TypeDefaultLeadingI/InputField_TypeDefaultLeadingI';
import { SocialIcon_PlatformFacebookCol } from './SocialIcon_PlatformFacebookCol/SocialIcon_PlatformFacebookCol';
import { SocialIcon_PlatformInstagramCo } from './SocialIcon_PlatformInstagramCo/SocialIcon_PlatformInstagramCo';
import { SocialIcon_PlatformLinkedInCol } from './SocialIcon_PlatformLinkedInCol/SocialIcon_PlatformLinkedInCol';
import { SocialIcon_PlatformTwitterColo } from './SocialIcon_PlatformTwitterColo/SocialIcon_PlatformTwitterColo';
import { VectorIcon2 } from './VectorIcon2.js';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
  hide?: {
    label?: boolean;
    mail?: boolean;
    helpIcon?: boolean;
    hintText?: boolean;
  };
}
/* @figmaId 5639:62689 */
export const Home: FC<Props> = memo(function Home(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.rectangle20992}></div>
      <div className={classes.group3}>
        <GroupIcon className={classes.icon5} />
      </div>
      <div className={classes.frame1171274932}>
        <div className={classes.cONTACT}>CONTACT</div>
        <div className={classes.about}>About</div>
        <div className={classes.lOGIN}>LOG IN</div>
      </div>
      <div className={classes._2023SPHERETradingCO}>2023 © SPHERE Trading CO.</div>
      <div className={classes.rectangle20981}></div>
      <div className={classes.download4}></div>
      <div className={classes.download42}></div>
      <div className={classes.download43}></div>
      <div className={classes.download44}></div>
      <div className={classes.download45}></div>
      <div className={classes.download46}></div>
      <div className={classes.download47}></div>
      <div className={classes.download48}></div>
      <div className={classes.download49}></div>
      <div className={classes.download410}></div>
      <div className={classes.download411}></div>
      <div className={classes.rectangle20991}></div>
      <div className={classes.rectangle20993}></div>
      <div className={classes.rectangle20982}></div>
      <div className={classes.rectangle20983}></div>
      <div className={classes.rectangle20984}></div>
      <div className={classes.rectangle20985}></div>
      <div className={classes.frame1171274937}>
        <div className={classes.frame1171274933}>
          <SocialIcon_PlatformFacebookCol
            className={classes.socialIcon}
            swap={{
              vector: <VectorIcon className={classes.icon} />,
            }}
          />
        </div>
        <div className={classes.frame1171274934}>
          <SocialIcon_PlatformTwitterColo
            className={classes.socialIcon2}
            swap={{
              vector: <VectorIcon2 className={classes.icon2} />,
            }}
          />
        </div>
        <div className={classes.frame1171274935}>
          <SocialIcon_PlatformLinkedInCol
            className={classes.socialIcon3}
            classes={{ group: classes.group }}
            swap={{
              group: (
                <div className={classes.group}>
                  <GroupIcon2 className={classes.icon3} />
                </div>
              ),
            }}
          />
        </div>
        <div className={classes.frame1171274936}>
          <SocialIcon_PlatformInstagramCo
            className={classes.socialIcon4}
            classes={{ group: classes.group2 }}
            swap={{
              group: (
                <div className={classes.group2}>
                  <GroupIcon3 className={classes.icon4} />
                </div>
              ),
            }}
          />
        </div>
      </div>
      <div className={classes.frame1171274930}>
        <div className={classes.poweringExceptionalCustomerExp}>Powering exceptional customer experiences.</div>
        <div className={classes.highTouch3PLDesignedForTheMode}>
          High-touch 3PL designed for the modern beverage brand.
        </div>
      </div>
      <InputField_TypeDefaultLeadingI
        className={classes.inputField}
        classes={{ input: classes.input }}
        hide={{
          mail: true,
        }}
        text={{
          text: <div className={classes.text}>Enter your email address</div>,
        }}
      />
      <button className={classes.button}>
        <_ButtonBase_SizeLgIconFalse
          className={classes._ButtonBase}
          text={{
            text: <div className={classes.text2}>Join Waitlist</div>,
          }}
        />
      </button>
      <div className={classes.newPage}></div>
    </div>
  );
});
