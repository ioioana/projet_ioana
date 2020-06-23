<?php

namespace App\Form;

use App\Entity\Package;
use App\Entity\Service;
use Doctrine\ORM\EntityRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class PackageType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('codePackage')
            ->add('prixPackage')
            ->add('services', EntityType::class, array(
                'class' => Service::class,
//                'label' => "Selectionnez les services correspondants",
                'choice_label' => 'nomService',
                'multiple' => true
            ))
            ->add('enregistrer',SubmitType::class, array(
                'label' => "Enregistrer",
                'attr' => array(
                    'class' => 'input-submit'
                )
            ))
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Package::class,

        ]);
    }
}
