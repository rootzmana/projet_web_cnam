<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;

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
     * @ORM\Column(type="text")
     */
    public $value;

    public function getId(): ?int
    {
        return $this->id;
    }
}
