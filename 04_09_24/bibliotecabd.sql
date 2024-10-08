-- MySQL Script generated by MySQL Workbench
-- Wed Sep  4 08:04:56 2024
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema bibliotecabd
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `bibliotecabd` ;

-- -----------------------------------------------------
-- Schema bibliotecabd
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `bibliotecabd` DEFAULT CHARACTER SET utf8 ;
USE `bibliotecabd` ;

-- -----------------------------------------------------
-- Table `bibliotecabd`.`Autor`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bibliotecabd`.`Autor` ;

CREATE TABLE IF NOT EXISTS `bibliotecabd`.`Autor` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `nacionalidade` VARCHAR(45) NULL,
  `nascimento` DATE NULL,
  `bio` TEXT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bibliotecabd`.`Livro`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bibliotecabd`.`Livro` ;

CREATE TABLE IF NOT EXISTS `bibliotecabd`.`Livro` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(100) NOT NULL,
  `isbn` VARCHAR(13) NULL,
  `publicacao` YEAR NULL,
  `editora` VARCHAR(50) NULL,
  `genero` VARCHAR(50) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bibliotecabd`.`AutorEscreveLivro`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bibliotecabd`.`AutorEscreveLivro` ;

CREATE TABLE IF NOT EXISTS `bibliotecabd`.`AutorEscreveLivro` (
  `Autor_id` INT UNSIGNED NOT NULL,
  `Livro_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`Autor_id`, `Livro_id`),
  INDEX `fk_Autor_has_Livro_Livro1_idx` (`Livro_id` ASC) VISIBLE,
  INDEX `fk_Autor_has_Livro_Autor_idx` (`Autor_id` ASC) VISIBLE,
  CONSTRAINT `fk_Autor_has_Livro_Autor`
    FOREIGN KEY (`Autor_id`)
    REFERENCES `bibliotecabd`.`Autor` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Autor_has_Livro_Livro1`
    FOREIGN KEY (`Livro_id`)
    REFERENCES `bibliotecabd`.`Livro` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
