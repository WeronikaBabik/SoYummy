import css from "./Background.module.css";
// import leaveslefttablet from "../../../images/backgrounds/footer-leaves-left-tablet.png";
// import leaveslefttablet2x from "../../../images/backgrounds/footer-leaves-left-tablet@2x.png";
// import leavesleftDesktop from "../../../images/backgrounds/footer-leaves-left-desktop.png";
// import leavesleftDesktop2 from "../../../images/backgrounds/footer-leaves-left-desktop@2x.png";

// import leavesRighttablet from "../../../images/backgrounds/footer-leaves-right-tablet.png";
// import leavesRighttablet2x from "../../../images/backgrounds/footer-leaves-right-tablet@2x.png";
// import leavesRightDesktop from "../../../images/backgrounds/footer-leaves-right-desktop.png";
// import leavesRightDesktop2 from "../../../images/backgrounds/footer-leaves-right-desktop@2x.png";

export const BackgroundTop = () => {
  return <div className={css.top}></div>;
};

// export const BackgroundBottom = () => {
//   // return <div className={css.bottom}></div>;
//   return (
//     <div className={css.leaves}>
//       <picture className={css.leftLeaves}>
//         <source
//           srcSet={`${leaveslefttablet}, ${leaveslefttablet2x} 2x`}
//           media="(max-width:767px)"
//           sizes="(min-width:250px) 250px, 100vw"
//         />
//         <source
//           srcSet={`${leavesleftDesktop}, ${leavesleftDesktop2} 2x`}
//           media="(mi-width:768px)"
//           sizes="(min-width:500px) 500px, 100vw"
//         />
//         <img
//           src={leavesleftDesktop2}
//           alt="Background leaves left"
//           height="852px"
//           width="558px"
//         />
//       </picture>
//       <picture className={css.rightLeaves}>
//         <source
//           srcSet={`${leavesRighttablet}, ${leavesRighttablet2x} 2x`}
//           media="(max-width:767px)"
//           sizes="(min-width:250px) 250px, 100vw"
//         />
//         <source
//           srcSet={`${leavesRightDesktop}, ${leavesRightDesktop2} 2x`}
//           media="(mi-width:768px)"
//           sizes="(min-width:500px) 500px, 100vw"
//         />
//         <img
//           src={leavesRightDesktop2}
//           alt="Background leaves left"
//           height="474px"
//           width="438px"
//         />
//       </picture>
//     </div>
//   );
// };
