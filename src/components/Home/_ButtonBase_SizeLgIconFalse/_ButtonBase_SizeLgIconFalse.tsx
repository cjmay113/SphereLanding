import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './_ButtonBase_SizeLgIconFalse.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    text?: ReactNode;
  };
}
/* @figmaId 5497:56661 */
export const _ButtonBase_SizeLgIconFalse: FC<Props> = memo(function _ButtonBase_SizeLgIconFalse(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.text?.text != null ? props.text?.text : <div className={classes.text}>Button CTA</div>}
    </div>
  );
});
