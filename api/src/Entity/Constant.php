<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiProperty;
use Symfony\Component\HttpFoundation\File\File;
use Vich\UploaderBundle\Mapping\Annotation as Vich;

/**
 * @ApiResource()
 * @ORM\Table(name="customConstant")
 * @ORM\Entity(repositoryClass="App\Repository\ConstantRepository")
 */
class Constant
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @var string key of the constant
     *
     * 
     * @ORM\Column(type="text", name="customKey")
     */
    public $key;

    /**
     * @var string value of the constant
     *
     * @ORM\Column(type="text", nullable=true)
     */
    public $value;

    /**
     * @var string type of the constant
     *
     * @ORM\Column(type="text")
     */
    public $type;

    /**
     * @var MediaObject|null
     *
     * @ORM\ManyToOne(targetEntity=MediaObject::class)
     * @ORM\JoinColumn(nullable=true)
     * @ApiProperty(iri="http://schema.org/image")
     */
    public $file;

    public function getId(): ?int
    {
        return $this->id;
    }
}
