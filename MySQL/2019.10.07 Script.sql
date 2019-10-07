-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema solicitudes
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `solicitudes` ;

-- -----------------------------------------------------
-- Schema solicitudes
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `solicitudes` DEFAULT CHARACTER SET utf8 ;
USE `solicitudes` ;

-- -----------------------------------------------------
-- Table `solicitudes`.`rol`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `solicitudes`.`rol` ;

CREATE TABLE IF NOT EXISTS `solicitudes`.`rol` (
  `idRol` INT NOT NULL,
  `descripcion` VARCHAR(15) NULL,
  `observaciones` VARCHAR(45) NULL,
  `create_time` TIMESTAMP NULL,
  `update_time` TIMESTAMP NULL,
  `create_idUser` INT NULL,
  `update_idUser` INT NULL,
  `user_idUser` INT NOT NULL,
  `user_idUser1` INT NOT NULL,
  PRIMARY KEY (`idRol`),
  CONSTRAINT `fk_rol_user1`
    FOREIGN KEY (`user_idUser`)
    REFERENCES `solicitudes`.`user` (`idUser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_rol_user2`
    FOREIGN KEY (`user_idUser1`)
    REFERENCES `solicitudes`.`user` (`idUser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE INDEX `fk_rol_user1_idx` ON `solicitudes`.`rol` (`user_idUser` ASC) VISIBLE;

CREATE INDEX `fk_rol_user2_idx` ON `solicitudes`.`rol` (`user_idUser1` ASC) VISIBLE;


-- -----------------------------------------------------
-- Table `solicitudes`.`user_rol`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `solicitudes`.`user_rol` ;

CREATE TABLE IF NOT EXISTS `solicitudes`.`user_rol` (
  `idUserRol` INT NOT NULL AUTO_INCREMENT,
  `idUser` INT NOT NULL,
  `idRol` INT NOT NULL,
  `create_time` TIMESTAMP NULL,
  `update_time` TIMESTAMP NULL,
  `create_idUser` INT NULL,
  `update_idUser` INT NULL,
  PRIMARY KEY (`idUserRol`),
  CONSTRAINT `fk_usuario_rol_usuario1`
    FOREIGN KEY (`idUser`)
    REFERENCES `solicitudes`.`user` (`idUser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_usuario_rol_rol1`
    FOREIGN KEY (`idRol`)
    REFERENCES `solicitudes`.`rol` (`idRol`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE INDEX `fk_usuario_rol_usuario1_idx` ON `solicitudes`.`user_rol` (`idUser` ASC) VISIBLE;

CREATE INDEX `fk_usuario_rol_rol1_idx` ON `solicitudes`.`user_rol` (`idRol` ASC) VISIBLE;


-- -----------------------------------------------------
-- Table `solicitudes`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `solicitudes`.`user` ;

CREATE TABLE IF NOT EXISTS `solicitudes`.`user` (
  `idUser` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NULL,
  `apellido1` VARCHAR(45) NULL,
  `apellido2` VARCHAR(45) NULL,
  `email` VARCHAR(45) NULL,
  `user_name` VARCHAR(12) NOT NULL,
  `password` VARCHAR(12) NOT NULL,
  `avatar` BLOB NULL,
  `observaciones` VARCHAR(45) NULL,
  `create_time` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `create_idUser` INT NULL,
  `update_idUser` INT NULL,
  `user_idUser` INT NOT NULL,
  `user_idUser1` INT NOT NULL,
  `user_rol_idUserRol` INT NOT NULL,
  PRIMARY KEY (`idUser`),
   CONSTRAINT `fk_user_user1`
    FOREIGN KEY (`user_idUser1`)
    REFERENCES `solicitudes`.`user` (`idUser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_user_rol1`
    FOREIGN KEY (`user_rol_idUserRol`)
    REFERENCES `solicitudes`.`user_rol` (`idUserRol`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE UNIQUE INDEX `userName_UNIQUE` ON `solicitudes`.`user` (`user_name` ASC) VISIBLE;

CREATE INDEX `fk_user_user1_idx` ON `solicitudes`.`user` (`user_idUser1` ASC) VISIBLE;

CREATE INDEX `fk_user_user_rol1_idx` ON `solicitudes`.`user` (`user_rol_idUserRol` ASC) VISIBLE;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
