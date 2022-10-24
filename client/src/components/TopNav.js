import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { MobileDropdownContext } from '../Globals/Context';
import { Turn as Hamburger } from 'hamburger-react';
import { DIV_FULL as full, DIV_MAXWIDTH as max } from './_baseStyles';

const DIV_FULL = styled(full)`
  position: fixed;
  height: 72px;
  z-index: 90;
  background: var(--white);
  padding: 0 20px 0 32px;
`;

const DIV_MAXWIDTH = styled(max)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: #eed2cc;
`;

const DIV_NAME = styled.div`
  a {
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    margin: 0 8px 0 0;
  }
  span:nth-child(2) {
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    display: none;

    @media (min-width: 440px) {
      font-size: 14px;
      line-height: 16px;
    }
  }
`;

const DIV_NAV = styled.div`
  justify-content: center;
  display: flex;
  a {
    display: none;
    font-size: 14px;
    line-height: 24px;
    width: 100%;
    text-align: center;
    transition: color 300ms ease;
    padding: 24px;

    &:hover {
      color: var(--red);
    }
  }

  .hamburger-react {
    display: block;
  }

  @media (min-width: 800px) {
    a {
      display: block;
    }
    .hamburger-react {
      display: none;
    }
  }
`;

export default function Menu() {
  const handleClick = (context) => {
    return function toggle() {
      if (context.menuExpanded) {
        context.setMenuExpanded(false);
        document.querySelector('body').classList.remove('frozen');
      } else {
        document.querySelector('body').classList.add('frozen');
        context.setMenuExpanded(true);
      }
    };
  };
  return (
    <DIV_FULL>
      <DIV_MAXWIDTH>
        <DIV_NAME>
          <Link to='/'>Dr. Doyle Pruitt</Link>
          {/* <span>Ph.D., LCSW-R</span> */}
        </DIV_NAME>
        <DIV_NAV>
          <MobileDropdownContext.Consumer>
            {(context) => {
              let nav = context.routes.map((e) => {
                return (
                  <Link key={e.path} to={e.path}>
                    {e.name}
                  </Link>
                );
              });
              return (
                <>
                  {nav}
                  <Hamburger
                    toggled={context.menuExpanded}
                    toggle={handleClick(context)}
                    size={24}
                    rounded
                    color='#1a1423'
                  />
                </>
              );
            }}
          </MobileDropdownContext.Consumer>
        </DIV_NAV>
      </DIV_MAXWIDTH>
    </DIV_FULL>
  );
}

/**
 * @prop {boolean} onHomepage | true, if on the homepage
 */
// export default class Menu extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isScrolling: false,
//     };
//   }

//   handleClick = (e) => {
//     const { menuExpanded, setMenuExpanded } = this.context;
//     if (menuExpanded) {
//       setMenuExpanded(false);
//       document.querySelector('body').classList.remove('frozen');
//     } else {
//       document.querySelector('body').classList.add('frozen');
//       setMenuExpanded(true);
//     }
//   };

//   render() {
//     return (
//       <>
//         <DIV_FULL>
//           <DIV_MAXWIDTH>
//             <DIV_NAME>
//               <span>Dr. Doyle Pruitt</span>
//               <span>Ph.D., LCSW-R</span>
//             </DIV_NAME>
//             <DIV_NAV>
//               {this.context.routes.map((e) => {
//                 return (
//                   <Link key={e.path} to={e.path}>
//                     {e.name}
//                   </Link>
//                 );
//               })}
//               <Hamburger onClick={this.handleClick} size={20} />
//               {/* <button onClick={this.handleClick}>click</button> */}
//             </DIV_NAV>
//           </DIV_MAXWIDTH>
//         </DIV_FULL>
//       </>
//     );
//   }
// }
// Menu.contextType = MobileDropdownContext;
