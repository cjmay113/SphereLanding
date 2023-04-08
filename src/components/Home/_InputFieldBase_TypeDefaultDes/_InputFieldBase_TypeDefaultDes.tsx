import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { HelpIcon_OpenFalseSupportingTe } from '../HelpIcon_OpenFalseSupportingTe/HelpIcon_OpenFalseSupportingTe';
import { Mail } from '../Mail/Mail';
import classes from './_InputFieldBase_TypeDefaultDes.module.css';
import { MailIcon } from './MailIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
    input?: string;
  };
  hide?: {
    label?: boolean;
    helpIcon?: boolean;
    hintText?: boolean;
    mail?: boolean;
  };
  text?: {
    text?: ReactNode;
  };
}
/* @figmaId 5497:55832 */
export const _InputFieldBase_TypeDefaultDes: FC<Props> = memo(function _InputFieldBase_TypeDefaultDes(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.inputWithLabel}>
        {!props.hide?.label && <div className={classes.label}>Email</div>}
        <div className={`${props.classes?.input || ''} ${classes.input}`}>
          <div className={classes.content}>
            {!props.hide?.mail && (
              <Mail
                className={classes.mail}
                swap={{
                  icon: <MailIcon className={classes.icon} />,
                }}
              />
            )}
            {props.text?.text != null ? props.text?.text : <div className={classes.text}>olivia@untitledui.com</div>}
          </div>
          {!props.hide?.helpIcon && <HelpIcon_OpenFalseSupportingTe />}
        </div>
      </div>
      {!props.hide?.hintText && <div className={classes.hintText}>This is a hint text to help user.</div>}
    </div>
  );
});
