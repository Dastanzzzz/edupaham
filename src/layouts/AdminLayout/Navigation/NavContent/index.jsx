import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

// react-bootstrap
import { Card, ListGroup } from 'react-bootstrap';

// project imports
import NavGroup from './NavGroup';
import { ConfigContext } from 'contexts/ConfigContext';

// third party
import SimpleBar from 'simplebar-react';

// assets
import logo from 'assets/images/edupaham.png';

// -----------------------|| NAV CONTENT ||-----------------------//

export default function NavContent({ navigation, activeNav }) {
  const configContext = useContext(ConfigContext);

  const { collapseLayout } = configContext.state;

  const navItems = navigation.map((item) => {
    let navItem = <></>;
    switch (item.type) {
      case 'group':
        if (activeNav) {
          navItem = (
            <div key={`nav-group-${item.id}`}>
              <NavGroup group={item} />
            </div>
          );
        } else {
          navItem = <NavGroup group={item} key={`nav-group-${item.id}`} />;
        }
        return navItem;
      default:
        return false;
    }
  });

  let navContentNode = (
    <SimpleBar style={{ height: 'calc(100vh - 70px)' }}>
      <ListGroup variant="flush" as="ul" bsPrefix=" " className="pc-navbar">
        {navItems}
      </ListGroup>
  
    </SimpleBar>
  );

  if (collapseLayout) {
    navContentNode = (
      <ListGroup variant="flush" as="ul" bsPrefix=" " className="pc-navbar">
        {navItems}
      </ListGroup>
    );
  }

  const mHeader = (
    <div className="m-header">
      <Link to="/" className="b-brand">
        <img src={logo} alt="" className="logo logo-sm" />
      </Link>
    </div>
  );

  let mainContent;

  mainContent = (
    <>
      {mHeader}

      <div className="navbar-content next-scroll">{navContentNode}</div>
    </>
  );

  return <>{mainContent}</>;
}

NavContent.propTypes = { navigation: PropTypes.any, activeNav: PropTypes.any };
