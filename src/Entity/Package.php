<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\ORM\Mapping\JoinTable;
use Doctrine\ORM\Mapping\ManyToMany;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass="App\Repository\PackageRepository")
 */
class Package
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="integer")
     */
    private $codePackage;

    /**
     * @ORM\Column(type="integer")
     */
    private $prixPackage;

    /**
     * @var \Doctrine\Common\Collections\Collection
     * Many Packages have Many Services.
     * @ManyToMany(targetEntity="Service", mappedBy="packages")
     */
    private $services;

    public function __construct() {
        $this->services = new \Doctrine\Common\Collections\ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCodePackage(): ?int
    {
        return $this->codePackage;
    }

    public function setCodePackage(int $codePackage): self
    {
        $this->codePackage = $codePackage;

        return $this;
    }

    public function getPrixPackage(): ?int
    {
        return $this->prixPackage;
    }

    public function setPrixPackage(int $prixPackage): self
    {
        $this->prixPackage = $prixPackage;

        return $this;
    }

//    /**
//     * @return ArrayCollection|Service[]
//     */
    /**
     * @return Collection|Service
     */
    public function getServices()
    {
//        return $this->services;
        return $this->services->getValues();
//        return $this->services->unwrap();
//        return $this->services->unwrap()->toArray();
    }

    public function addService(Service $service): self
    {
        dump($service);
        dump($this->services->getValues());
        dump($this->getServices());
//        dump($this->getServices()->getValues());
//        exit();
        if (!$this->services->contains($service)) {
            $service->addPackage($this);
            $this->services[] = $service;
        }
        dump($this->services);
        dump($this);
//        exit();
        return $this;
    }

    public function removeService(Service $service): self
    {
        if ($this->services->contains($service)) {
            $this->services->removeElement($service);
            $service->removePackage($this);
        }

        return $this;
    }

//    public function getId(): ?int
//    {
//        return $this->id;
//    }
//
//    public function getCodePackage(): ?int
//    {
//        return $this->codePackage;
//    }
//
//    public function setCodePackage(int $codePackage): self
//    {
//        $this->codePackage = $codePackage;
//
//        return $this;
//    }
//
//    public function getPrixPackage(): ?int
//    {
//        return $this->prixPackage;
//    }
//
//    public function setPrixPackage(int $prixPackage): self
//    {
//        $this->prixPackage = $prixPackage;
//
//        return $this;
//    }
//
//    /**
//     * Add services
//     *
//     * @param Service $services
//     *
//     * @return Package
//     */
//    public function addServices(Service $services) {
//        $this->services[] = $services;
//
//        return $this;
//    }
//
//    /**
//     * Remove services
//     *
//     * @param Service $services
//     */
//    public function removeServices(Service $services) {
//        $this->services->removeElement($services);
//    }
//
//    /**
//     * Get services
//     *
//     * @return \Doctrine\Common\Collections\Collection
//     */
//    public function getServices() {
//        return $this->services;
//    }




//    public function getServices(): ArrayCollection
//    {
//        return $this->services;
//    }
//
//    public function setServices(int $services): self
//    {
//        $this->services = $services;
//
//        return $this;
//    }
}
