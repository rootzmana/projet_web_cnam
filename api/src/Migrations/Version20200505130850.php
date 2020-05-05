<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200505130850 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE media_object (id INT AUTO_INCREMENT NOT NULL, file_path VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE customConstant ADD file_id INT DEFAULT NULL, CHANGE value value LONGTEXT DEFAULT NULL');
        $this->addSql('ALTER TABLE customConstant ADD CONSTRAINT FK_410D3F3E93CB796C FOREIGN KEY (file_id) REFERENCES media_object (id)');
        $this->addSql('CREATE INDEX IDX_410D3F3E93CB796C ON customConstant (file_id)');
        $this->addSql('ALTER TABLE skill ADD image_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE skill ADD CONSTRAINT FK_5E3DE4773DA5256D FOREIGN KEY (image_id) REFERENCES media_object (id)');
        $this->addSql('CREATE INDEX IDX_5E3DE4773DA5256D ON skill (image_id)');
        $this->addSql('ALTER TABLE project ADD image_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE project ADD CONSTRAINT FK_2FB3D0EE3DA5256D FOREIGN KEY (image_id) REFERENCES media_object (id)');
        $this->addSql('CREATE INDEX IDX_2FB3D0EE3DA5256D ON project (image_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE customConstant DROP FOREIGN KEY FK_410D3F3E93CB796C');
        $this->addSql('ALTER TABLE skill DROP FOREIGN KEY FK_5E3DE4773DA5256D');
        $this->addSql('ALTER TABLE project DROP FOREIGN KEY FK_2FB3D0EE3DA5256D');
        $this->addSql('DROP TABLE media_object');
        $this->addSql('DROP INDEX IDX_410D3F3E93CB796C ON customConstant');
        $this->addSql('ALTER TABLE customConstant DROP file_id, CHANGE value value LONGTEXT CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('DROP INDEX IDX_2FB3D0EE3DA5256D ON project');
        $this->addSql('ALTER TABLE project DROP image_id');
        $this->addSql('DROP INDEX IDX_5E3DE4773DA5256D ON skill');
        $this->addSql('ALTER TABLE skill DROP image_id');
    }
}
