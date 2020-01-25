import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {};

const Footer: React.FunctionComponent<Props> = () => (
  <footer>
    <div>
      <FontAwesomeIcon icon={['fab', 'facebook-square']} />
      <FontAwesomeIcon icon={['fab', 'instagram']} />
    </div>
    <h3>Get In Touch</h3>
    <p>Want delicious tacos at your special occasion?</p>
    <p>
      Email: <em>about@chuystacos.com</em>
    </p>
  </footer>
);

export default Footer;
