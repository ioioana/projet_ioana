<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\ORM\Mapping\JoinTable;
use Doctrine\ORM\Mapping\ManyToMany;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ServiceRepository")
 */
class Service
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
    private $nomService;

    /**
     * @ORM\Column(type="integer")
     */
    private $prixService;

    /**
//     * @var \Doctrine\Common\Collections\Collection
     * Many Services have Many Packages.
     * @ManyToMany(targetEntity="Package", inversedBy="services")
     * @JoinTable(name="service_package")
     */
    private $packages;

    public function __construct() {
        $this->packages = new \Doctrine\Common\Collections\ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNomService(): ?string
    {
        return $this->nomService;
    }

    public function setNomService(string $nomService): self
    {
        $this->nomService = $nomService;

        return $this;
    }

    public function getPrixService(): ?int
    {
        return $this->prixService;
    }

    public function setPrixService(int $prixService): self
    {
        $this->prixService = $prixService;

        return $this;
    }

//    /**
//     * @return ArrayCollection|Package[]
//     */
    /**
     * @return Collection|Package
     */
    public function getPackages()
    {
//        return $this->packages;
        return $this->packages->getValues();
    }

    public function addPackage(Package $package): self
    {

        dump($package);
        dump($this->packages->getValues());
        dump($this->getPackages());
//        exit();
        if (!$this->packages->contains($package)) {
            $this->packages[] = $package;
//            $package->addService($this);
        }
        dump($this->packages);
        dump($this);
//        exit();
        return $this;
    }

    public function removePackage(Package $package): self
    {
        if ($this->packages->contains($package)) {
            $this->packages->removeElement($package);
            $package->removeService($this);
        }

        return $this;
    }

//    public function getId(): ?int
//    {
//        return $this->id;
//    }
//
//    public function getNomService(): ?string
//    {
//        return $this->nomService;
//    }
//
//    public function setNomService(string $nomService): self
//    {
//        $this->nomService = $nomService;
//
//        return $this;
//    }
//
//    public function getPrixService(): ?int
//    {
//        return $this->prixService;
//    }
//
//    public function setPrixService(int $prixService): self
//    {
//        $this->prixService = $prixService;
//
//        return $this;
//    }
}
