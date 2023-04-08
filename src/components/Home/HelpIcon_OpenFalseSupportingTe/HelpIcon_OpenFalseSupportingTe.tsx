import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { HelpCircle } from '../HelpCircle/HelpCircle';
import { HelpCircleIcon } from './HelpCircleIcon.js';
import classes from './HelpIcon_OpenFalseSupportingTe.module.css';

interface Props {
  className?: string;
}
/* @figmaId 5497:54296 */
export const HelpIcon_OpenFalseSupportingTe: FC<Props> = memo(function HelpIcon_OpenFalseSupportingTe(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <HelpCircle
        className={classes.helpCircle}
        swap={{
          icon: <HelpCircleIcon className={classes.icon} />,
        }}
      />
    </div>
  );
});
