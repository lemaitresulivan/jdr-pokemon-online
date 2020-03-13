import { connect } from 'react-redux';

// Du composant qui a besoin de data ou d'actions
import Pokemon from 'src/components/Pokemon';

// Action Creators
import { changeSidebarVisibility } from 'src/actions/sidebar';

// == Data / state
// Notre composant à besoin de données depuis le state ?
// On prépare un objet avec les props attendues par le composant
// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state) => ({
  visible: state.sidebar.isPokemonSidebarVisible,
  pokemon: state.user.pokemon,
  pokemonMaxHealth: state.pokemon.allPokemons[state.user.pokemon.id - 1].vitality,
});

// == Actions / dispatch
// Notre composant à besoin d'agir sur le state ?
// On prépare un objet avec les props attendues par le composant
const mapDispatchToProps = (dispatch) => ({
  changeSidebarVisibility: (sidebarName, visible) => {
    dispatch(changeSidebarVisibility(sidebarName, visible));
  },
});

// création du lien : container
// connect(redux)(react) - connect(ce dont on a besoin)(qui en a besoin)
const PokemonContainer = connect(mapStateToProps, mapDispatchToProps)(Pokemon);

export default PokemonContainer;
