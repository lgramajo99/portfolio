// export function getIcons() {
//     const iconsNames = ['Bag-Suitcase-1', 'Graduation-Cap', 'Home-3',
//         'Send-Email', 'Star-1', 'Store-1', 'User-Identifier-Card'];

//     const icons = {};

//     iconNames.forEach(iconName => {
//         const formattedName = iconName.toLowerCase().replace(/-/g, '').replace(/\d+/g, '');
//         const iconPath = require(`./dark/${iconName}.svg`).default;
//         icons[formattedName] = iconPath;
//     });

//     return icons;
// }

export { default as bagsuitcase } from './dark/Bag-Suitcase-1.svg';
export { default as graduationcap } from './dark/Graduation-Cap.svg';
export { default as home } from './dark/Home-3.svg';
export { default as sendemail } from './dark/Send-Email.svg';
export { default as star } from './dark/Star-1.svg';
export { default as store } from './dark/Store-1.svg';
export { default as useridcard } from './dark/User-Identifier-Card.svg';


