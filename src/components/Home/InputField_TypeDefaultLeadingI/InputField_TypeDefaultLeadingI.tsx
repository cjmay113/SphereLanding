import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { _InputFieldBase_TypeDefaultDes } from '../_InputFieldBase_TypeDefaultDes/_InputFieldBase_TypeDefaultDes';
import classes from './InputField_TypeDefaultLeadingI.module.css';

interface Props {
  className?: string;
  classes?: {
    input?: string;
    root?: string;
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
/* @figmaId 5497:55951 */
export const InputField_TypeDefaultLeadingI: FC<Props> = memo(function InputField_TypeDefaultLeadingI(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <_InputFieldBase_TypeDefaultDes
        className={classes._InputFieldBase}
        classes={{ input: props.classes?.input || '' }}
        hide={{
          label: true,
          helpIcon: true,
          hintText: true,
          mail: props.hide?.mail,
        }}
        text={{
          text: props.text?.text,
        }}
      />
    </div>
  );
});
