<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ProduitRepository")
 */
class Produit
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $nomProduit;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $photoProduit;

    /**
     * @ORM\Column(type="integer")
     */
    private $prixProduit;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNomProduit(): ?string
    {
        return $this->nomProduit;
    }

    public function setNomProduit(string $nomProduit): self
    {
        $this->nomProduit = $nomProduit;

        return $this;
    }

    public function getPhotoProduit()
    {
        return $this->photoProduit;
    }

    public function setPhotoProduit($photoProduit): self
    {
        $this->photoProduit = $photoProduit;

        return $this;
    }

    public function getPrixProduit(): ?int
    {
        return $this->prixProduit;
    }

    public function setPrixProduit(int $prixProduit): self
    {
        $this->prixProduit = $prixProduit;

        return $this;
    }
}
