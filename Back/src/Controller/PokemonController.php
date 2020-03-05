<?php

namespace App\Controller;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;

/**
 * @Route("/pokemon")
 * @IsGranted("ROLE_USER")
 */
class PokemonController extends AbstractController
{

    /**
     * @Route("/list", name="list_pokemon")
     */
    public function pokemonList()
    {

        return $this->render('pokemon/pokemonlist.html.twig');
    }

    /**
     * @Route("/{id}", name="detail_pokemon")
     */
    public function pokemonById()
    {

        return $this->render('pokemon/detailpokemon.html.twig');
    }
}
