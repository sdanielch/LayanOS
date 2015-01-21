<?php
#! /usr/bin/php
session_start();
$apps2 = array();
$listar2 = null;
$dirdocs = '../home/'.$_SESSION['usuario_nombre'].'/documents';
$directorio2 = opendir($dirdocs);
while($elemento2 = readdir($directorio2)) {
	if($elemento2 != '.' && $elemento2 != '..') {
		if (!is_dir($dirdocs.$elemento2)) {
			$apps2[] = $elemento2;
		}
	}
}

echo json_encode($apps2);
