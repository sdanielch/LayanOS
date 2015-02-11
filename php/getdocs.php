<?php
#! /usr/bin/php
session_start();
$apps2 = array();
$dirk = array();
$listar2 = null;
$folder = $_GET["folder"];
$dirdocs = '../home/'.$_SESSION['usuario_nombre'].'/documents/'.$folder;
$directorio2 = opendir($dirdocs);
while($elemento2 = readdir($directorio2)) {
	if($elemento2 != '.' && $elemento2 != '..') {
		if(is_dir($dirdocs.$elemento2)) {
			$apps2 = array_merge(array($dirdocs.$elemento2 => true),$apps2);

		} else {
			$apps2[$dirdocs.$elemento2] = is_dir($dirdocs.$elemento2);
		}
	}
}
echo json_encode($apps2);