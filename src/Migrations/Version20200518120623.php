<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200518120623 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE service_package (service_id INT NOT NULL, package_id INT NOT NULL, INDEX IDX_11EC3509ED5CA9E6 (service_id), INDEX IDX_11EC3509F44CABFF (package_id), PRIMARY KEY(service_id, package_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE service_package ADD CONSTRAINT FK_11EC3509ED5CA9E6 FOREIGN KEY (service_id) REFERENCES service (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE service_package ADD CONSTRAINT FK_11EC3509F44CABFF FOREIGN KEY (package_id) REFERENCES package (id) ON DELETE CASCADE');
        $this->addSql('DROP TABLE services_packages');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE services_packages (service_id INT NOT NULL, package_id INT NOT NULL, INDEX IDX_B8855CD3F44CABFF (package_id), INDEX IDX_B8855CD3ED5CA9E6 (service_id), PRIMARY KEY(service_id, package_id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE services_packages ADD CONSTRAINT FK_B8855CD3ED5CA9E6 FOREIGN KEY (service_id) REFERENCES service (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE services_packages ADD CONSTRAINT FK_B8855CD3F44CABFF FOREIGN KEY (package_id) REFERENCES package (id) ON DELETE CASCADE');
        $this->addSql('DROP TABLE service_package');
    }
}
