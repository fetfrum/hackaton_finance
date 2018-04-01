// import React, { Component } from 'react';
// import icon28 from '../../icons/icon-28.svg';
// import icon29 from '../../icons/icon-29.svg';
// import icon30 from '../../icons/icon-30.svg';
// import icon31 from '../../icons/icon-31.svg';
// import icon35 from '../../icons/icon-35.svg';
// import icon34 from '../../icons/icon-34.svg';
// import icon23 from '../../icons/icon-23.svg';
// import icon32 from '../../icons/icon-32.svg';
// import icon36 from '../../icons/icon-36.svg';
// import icon37 from '../../icons/icon-37.svg';
// import icon38 from '../../icons/icon-38.svg';
// import styles from './styles.css';

// class ExpencesItems extends Component {
//     render() {
//         const icons = ["icon-28", "icon-29", "icon-30", "icon-31", "icon-35", "icon-34", "icon-23", "icon-32", "icon-36", "icon-37", "icon-38"];
        
//         const names = ["Здоровье", "Еда", "Гигиена", "Жилье", "Одежда", "Спорт", "Отдых", "Связь", "Транспорт", "Питомцы", "Подарки"];
        
//         const images = icons.map((image, index) => {
//            return (
//                 <div className="ExpencesItem">
//                     <img key={image} src={require(`../../icons/${image}.svg`)} className="ExpencesItem__icon" alt="" />
//                     <p className="ExpencesItem__name">{ names[index] }</p>
//                 </div>
//            );
//         });
//         return (
//             <div className="ExpencesItems">
//                 {images}
//             </div>
//         );
//     }
// }

// export default ExpencesItems;