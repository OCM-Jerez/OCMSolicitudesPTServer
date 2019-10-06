-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema Control
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `Control` ;

-- -----------------------------------------------------
-- Schema Control
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Control` DEFAULT CHARACTER SET utf8 ;
USE `Control` ;

-- -----------------------------------------------------
-- Table `Control`.`Empleados`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Control`.`Empleados` ;

CREATE TABLE IF NOT EXISTS `Control`.`Empleados` (
  `idEmpleado` INT(11) NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NULL DEFAULT NULL,
  `primerApellido` VARCHAR(45) NULL DEFAULT NULL,
  `segundoApellido` VARCHAR(45) NULL DEFAULT NULL,
  `userName` VARCHAR(45) NULL DEFAULT NULL,
  `password` VARCHAR(12) NULL DEFAULT NULL,
  `rol` VARCHAR(16) NULL DEFAULT NULL,
  `createdAt` DATETIME NULL DEFAULT NULL COMMENT 'created time',
  `updatedAt` DATETIME NULL DEFAULT NULL COMMENT 'updated time',
  PRIMARY KEY (`idEmpleado`),
  UNIQUE INDEX `idUsuarios_UNIQUE` (`idEmpleado` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8;

-- -----------------------------------------------------
-- Table `Control`.`lineasEnvasado`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Control`.`lineasEnvasado` ;

CREATE TABLE IF NOT EXISTS `Control`.`lineasEnvasado` (
  `idLineaEnvasado` INT(11) NOT NULL AUTO_INCREMENT,
  `descripcion` VARCHAR(200) NULL DEFAULT NULL,
  `createdAt` DATETIME NULL DEFAULT NULL COMMENT 'created time',
  `updatedAt` DATETIME NULL DEFAULT NULL COMMENT 'updated time',
  PRIMARY KEY (`idLineaEnvasado`))
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `Control`.`Controles`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Control`.`Controles` ;

CREATE TABLE IF NOT EXISTS `Control`.`Controles` (
  `idControl` INT(11) NOT NULL AUTO_INCREMENT,
  `controlNombre` VARCHAR(200) NULL DEFAULT NULL,
  `idLineaEnvasado` INT(11) NULL DEFAULT NULL,
  `descripcionTarjeta1` VARCHAR(200) NULL DEFAULT NULL,
  `descripcionTarjeta2` VARCHAR(200) NULL DEFAULT NULL,
  `descripcionTarjeta3` VARCHAR(200) NULL DEFAULT NULL,
  `descripcionTarjeta4` VARCHAR(200) NULL DEFAULT NULL,
  `descripcionTarjeta5` VARCHAR(200) NULL DEFAULT NULL,
  `descripcionTarjeta6` VARCHAR(200) NULL DEFAULT NULL,
  `descripcionTarjeta7` VARCHAR(200) NULL DEFAULT NULL,
  `descripcionTarjeta8` VARCHAR(200) NULL DEFAULT NULL,
  `createdAt` DATETIME NULL DEFAULT NULL COMMENT 'created time',
  `updatedAt` DATETIME NULL DEFAULT NULL COMMENT 'updated time',
  PRIMARY KEY (`idControl`),
  UNIQUE INDEX `controlID_UNIQUE` (`idControl` ASC) VISIBLE,
  INDEX `fk_Controles_lineasEnvasado1_idx` (`idLineaEnvasado` ASC) VISIBLE,
  CONSTRAINT `fk_Controles_lineasEnvasado1`
    FOREIGN KEY (`idLineaEnvasado`)
    REFERENCES `Control`.`lineasEnvasado` (`idLineaEnvasado`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8;

-- -----------------------------------------------------
-- Table `Control`.`turno`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Control`.`turno` ;

CREATE TABLE IF NOT EXISTS `Control`.`turno` (
  `idtTurno` INT NOT NULL AUTO_INCREMENT,
  `nombreTurno` VARCHAR(45) NULL,
  `desde` VARCHAR(45) NULL,
  `hasta` VARCHAR(45) NULL,
  `createdAt` DATETIME NULL DEFAULT NULL COMMENT 'created time',
  `updatedAt` DATETIME NULL DEFAULT NULL COMMENT 'updated time',
  PRIMARY KEY (`idtTurno`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Control`.`controlesDiarios`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Control`.`controlesDiarios` ;

CREATE TABLE IF NOT EXISTS `Control`.`controlesDiarios` (
  `idControlDiario` INT(11) NOT NULL AUTO_INCREMENT,
  `idControl` INT(11) NULL DEFAULT NULL,
  `turno` INT(11) NULL DEFAULT NULL,
  `fecha` DATE NULL DEFAULT NULL,
  `idEmpleado` INT(11) NULL DEFAULT NULL,
  `createdAt` DATETIME NULL DEFAULT NULL COMMENT 'created time',
  `updatedAt` DATETIME NULL DEFAULT NULL COMMENT 'updated time',
  `idtTurno` INT NULL,
  PRIMARY KEY (`idControlDiario`),
  INDEX `fk_controlesDiarios_Controles1_idx` (`idControl` ASC) VISIBLE,
  INDEX `fk_controlesDiarios_Empleados1_idx` (`idEmpleado` ASC) VISIBLE,
  INDEX `fk_controlesDiarios_turno1_idx` (`idtTurno` ASC) VISIBLE,
  CONSTRAINT `fk_controlesDiarios_Controles1`
    FOREIGN KEY (`idControl`)
    REFERENCES `Control`.`Controles` (`idControl`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_controlesDiarios_Empleados1`
    FOREIGN KEY (`idEmpleado`)
    REFERENCES `Control`.`Empleados` (`idEmpleado`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_controlesDiarios_turno1`
    FOREIGN KEY (`idtTurno`)
    REFERENCES `Control`.`turno` (`idtTurno`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 17
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `Control`.`tarjetasControles`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Control`.`tarjetasControles` ;

CREATE TABLE IF NOT EXISTS `Control`.`tarjetasControles` (
  `idTarjetaControl` INT(11) NOT NULL AUTO_INCREMENT,
  `descripcion` VARCHAR(200) NULL DEFAULT NULL,
  `horaTarea` VARCHAR(45) NULL DEFAULT NULL,
  `horaDesde` VARCHAR(45) NULL DEFAULT NULL,
  `horaHasta` VARCHAR(45) NULL DEFAULT NULL,
  `hora` INT(11) NULL DEFAULT NULL,
  `resultado` VARCHAR(12) NULL DEFAULT NULL,
  `observaciones` VARCHAR(200) NULL DEFAULT NULL,
  `idControlDiario` INT(11) NULL DEFAULT NULL,
  `enHora` BIT(1) NULL DEFAULT NULL,
  `orden` INT(11) NULL DEFAULT NULL,
  `fechaHoraControl` DATETIME NULL DEFAULT NULL,
  `createdAt` DATETIME NULL DEFAULT NULL COMMENT 'created time',
  `updatedAt` DATETIME NULL DEFAULT NULL COMMENT 'updated time',
  PRIMARY KEY (`idTarjetaControl`),
  INDEX `fk_tarjetasControles_controlesDiarios1_idx` (`idControlDiario` ASC) VISIBLE,
  CONSTRAINT `fk_tarjetasControles_controlesDiarios1`
    FOREIGN KEY (`idControlDiario`)
    REFERENCES `Control`.`controlesDiarios` (`idControlDiario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 25
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;


INSERT INTO `Control`.`Empleados` (`idEmpleado`, `nombre`, `primerApellido`, `userName`, `password`, `rol`) VALUES ('1', 'Juan Manuel', 'Lopez', 'jlopez', '123456', 'ADMINISTRADOR');
INSERT INTO `Control`.`Empleados` (`idEmpleado`, `nombre`, `primerApellido`, `userName`, `password`, `rol`) VALUES ('2', 'Miguel Angel', 'Martinez', 'mam', 'mam0121', 'ADMINISTRADOR');

INSERT INTO `Control`.`turno` (`idtTurno`, `nombreTurno`, `desde`, `hasta`) VALUES ('1', 'Mañana', '7', '15');
INSERT INTO `Control`.`turno` (`idtTurno`, `nombreTurno`, `desde`, `hasta`) VALUES ('2', 'Tarde', '15', '23');
INSERT INTO `Control`.`turno` (`idtTurno`, `nombreTurno`, `desde`, `hasta`) VALUES ('3', 'Noche', '23', '7');