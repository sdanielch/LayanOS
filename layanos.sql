-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 15-02-2015 a las 21:33:45
-- Versión del servidor: 5.5.41-0ubuntu0.14.04.1
-- Versión de PHP: 5.5.9-1ubuntu4.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `layanos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `location`
--

CREATE TABLE IF NOT EXISTS `location` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `point` point DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pref_usuarios`
--

CREATE TABLE IF NOT EXISTS `pref_usuarios` (
  `usuario` varchar(100) CHARACTER SET utf8 NOT NULL,
  `pos_panel` varchar(100) CHARACTER SET utf8 NOT NULL,
  `lang` varchar(20) CHARACTER SET utf8 NOT NULL,
  `colorpicker` varchar(16) CHARACTER SET utf8 NOT NULL,
  UNIQUE KEY `usuario` (`usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `pref_usuarios`
--

INSERT INTO `pref_usuarios` (`usuario`, `pos_panel`, `lang`, `colorpicker`) VALUES
('', 'c', 'a', '0,0,0,0.38'),
('admin', 'a', 'a', '0,0,0,0.59'),
('siro_diaz', 'a', 'a', ''),
('Sulfur', 'a', 'a', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE IF NOT EXISTS `usuarios` (
  `usuario_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `usuario_nombre` varchar(15) NOT NULL DEFAULT '',
  `usuario_clave` char(32) NOT NULL DEFAULT '',
  `usuario_email` varchar(50) NOT NULL,
  `usuario_freg` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`usuario_id`),
  UNIQUE KEY `usuario_email` (`usuario_email`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=8 ;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`usuario_id`, `usuario_nombre`, `usuario_clave`, `usuario_email`, `usuario_freg`) VALUES
(2, 'admin', '633bffc6e06c7d809ca8bbd5ae8fe1d2', 'sergiocalvo91@gmail.com', '2015-02-02 21:32:40'),
(3, 'layan911', '633bffc6e06c7d809ca8bbd5ae8fe1d2', 'xD@xD.com', '2015-02-02 21:42:58'),
(4, 'siro_diaz', '25f9e794323b453885f5181f1b624d0b', 'siro_diaz@yahoo.com', '2015-02-02 22:52:00'),
(5, 'josepees', '2ae8ea0a9d134e8804cd243b26fe0498', 'japescrihuela@gmail.com', '2015-02-04 14:34:05'),
(6, 'Sulfur', '73a9bf52aa8ea9e256ec469dfce6e022', 'sulfur888@gmail.com', '2015-02-10 16:28:35'),
(7, 'AranT', '82fd72ff13dc548be5402fac33c20933', 'xusyka@gmail.com', '2015-02-12 12:38:57');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
