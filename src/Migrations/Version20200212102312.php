<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200212102312 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE package (id INT AUTO_INCREMENT NOT NULL, code_package INT NOT NULL, prix_package INT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE produit (id INT AUTO_INCREMENT NOT NULL, nom_produit VARCHAR(255) NOT NULL, photo_produit LONGBLOB DEFAULT NULL, prix_produit INT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE service (id INT AUTO_INCREMENT NOT NULL, nom_service VARCHAR(255) NOT NULL, prix_service INT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE services_packages (service_id INT NOT NULL, package_id INT NOT NULL, INDEX IDX_B8855CD3ED5CA9E6 (service_id), INDEX IDX_B8855CD3F44CABFF (package_id), PRIMARY KEY(service_id, package_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL, nom_user VARCHAR(255) NOT NULL, pass_user VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE article (id INT AUTO_INCREMENT NOT NULL, titre_article VARCHAR(255) NOT NULL, contenu_article VARCHAR(5000) NOT NULL, photo_article LONGBLOB DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE services_packages ADD CONSTRAINT FK_B8855CD3ED5CA9E6 FOREIGN KEY (service_id) REFERENCES service (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE services_packages ADD CONSTRAINT FK_B8855CD3F44CABFF FOREIGN KEY (package_id) REFERENCES package (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE services_packages DROP FOREIGN KEY FK_B8855CD3F44CABFF');
        $this->addSql('ALTER TABLE services_packages DROP FOREIGN KEY FK_B8855CD3ED5CA9E6');
        $this->addSql('DROP TABLE package');
        $this->addSql('DROP TABLE produit');
        $this->addSql('DROP TABLE service');
        $this->addSql('DROP TABLE services_packages');
        $this->addSql('DROP TABLE user');
        $this->addSql('DROP TABLE article');
    }
}
