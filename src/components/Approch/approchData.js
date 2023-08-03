import { FaDraftingCompass, FaHardHat, FaPencilRuler } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';
import thumb1 from '../../assets/img/approch1.jpg';
import thumb2 from '../../assets/img/approch2.jpg';
import thumb3 from '../../assets/img/approch3.jpg';

const approchData = [
    {
        id: uuidv4(),
        thumb: thumb1,
        icon: <FaDraftingCompass />,
        heading: 'Our Vision',
        text: 'Grow as a Competitive and Reliable figure, becoming a leading company in installations of automation and control systems, consolidating our name as a reference in the sector, incorporating state-of-the-art technology and a professional team trained and committed to provide innovative and sustainable solutions.',
        btnText: 'Read More',
        pageLink: '/project-details',
    },

    {
        id: uuidv4(),
        thumb: thumb2,
        icon: <FaPencilRuler />,
        heading: 'Our Mission',
        text: 'To offer installation services of electrical and automation systems of high quality, safety, and efficiency adapting to the needs of each of our customers, thus improving their productivity in each process.',
        btnText: 'Read More',
        pageLink: '/project-details',
    },

    {
        id: uuidv4(),
        thumb: thumb3,
        icon: <FaHardHat />,
        heading: 'Our Approch',
        text: 'Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod',
        btnText: 'Read More',
        pageLink: '/project-details',
    },
];

export default approchData;
