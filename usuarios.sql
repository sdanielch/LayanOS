-- phpMyAdmin SQL Dump
-- version 4.6.4deb1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 29-11-2016 a las 22:37:53
-- Versión del servidor: 5.7.16-0ubuntu0.16.10.1
-- Versión de PHP: 7.0.8-3ubuntu3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `layanos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(32) NOT NULL,
  `usuario` varchar(24) NOT NULL,
  `password` char(128) NOT NULL,
  `nombre` varchar(24) NOT NULL,
  `apellidos` varchar(32) NOT NULL,
  `email` varchar(64) NOT NULL,
  `idioma` varchar(16) NOT NULL,
  `registrado` varchar(24) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`, `nombre`, `apellidos`, `email`, `idioma`, `registrado`) VALUES
(1, 'sdanielch', '840b8783746a9ca7d01a93efc86f71c13676889fb60c4a247ca146d4186a36234eda40561f493fd711a85299d256e0b2de88bad482971d2d3ed5d17855f22c66', 'Sergio Daniel', 'Calvo Hidalgo', 'sdanielch@gmail.com', 'spanish', '29/11/2016 -- 12:57');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(32) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
