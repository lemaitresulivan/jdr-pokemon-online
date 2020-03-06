import { connect } from 'react-redux';

// Du composant qui a besoin de data ou d'actions
import Nav from 'src/components/Nav';

// Action Creators
import { changeNavSidebarVisibility } from 'src/actions/nav';

// == Data / state
// Notre composant à besoin de données depuis le state ?
// On prépare un objet avec les props attendues par le composant
// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state) => ({
  visible: state.nav.isNavSiderbarVisible,
});

// == Actions / dispatch
// Notre composant à besoin d'agir sur le state ?
// On prépare un objet avec les props attendues par le composant
const mapDispatchToProps = (dispatch) => ({
  changeNavSidebarVisibility: () => {
    dispatch(changeNavSidebarVisibility());
  }
});

// création du lien : container
// connect(redux)(react) - connect(ce dont on a besoin)(qui en a besoin)
const NavContainer = connect(mapStateToProps, mapDispatchToProps)(Nav);

export default NavContainer;
