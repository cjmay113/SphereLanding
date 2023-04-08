import { memo, SVGProps } from 'react';

const MailIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 18 14' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M17.3333 2C17.3333 1.08333 16.5833 0.333333 15.6667 0.333333H2.33333C1.41667 0.333333 0.666667 1.08333 0.666667 2M17.3333 2V12C17.3333 12.9167 16.5833 13.6667 15.6667 13.6667H2.33333C1.41667 13.6667 0.666667 12.9167 0.666667 12V2M17.3333 2L9 7.83333L0.666667 2'
      stroke='#848484'
      strokeWidth={1.66667}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(MailIcon);
export { Memo as MailIcon };
