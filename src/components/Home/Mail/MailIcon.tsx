import { memo, SVGProps } from 'react';

const MailIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 20 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M20 2C20 0.9 19.1 0 18 0H2C0.9 0 0 0.9 0 2M20 2V14C20 15.1 19.1 16 18 16H2C0.9 16 0 15.1 0 14V2M20 2L10 9L0 2'
      stroke='#0F0F0F'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(MailIcon);
export { Memo as MailIcon };
