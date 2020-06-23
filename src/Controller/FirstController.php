<?php

namespace App\Controller;

use App\Repository\ArticleRepository;
use App\Repository\ProduitRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Asset\VersionStrategy\EmptyVersionStrategy;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Asset\PathPackage;


class FirstController extends AbstractController
{
    /**
     * @Route("/", name="first")
     */
    public function index(ArticleRepository $articleRepository, ProduitRepository $produitRepository) :Response
    {

        $pathPackage = new PathPackage('/images', new EmptyVersionStrategy());
//        dump($pathPackage);
        $logo = $pathPackage->getUrl('images/logo.png');
        $articles = $articleRepository->findAll();
        $produits = $produitRepository->findAll();
//        dump($articles);
//        dump($produits);

        return $this->render('first/index.html.twig', [
            'articles' => $articles,
            'produits' => $produits,
            'logo' => $logo
        ]);
    }


}
