<?php
#! /usr/bin/php
$apps = array();

$listar = null;
$directorio = opendir("../apps");
while($elemento = readdir($directorio)) {
	if($elemento != '.' && $elemento != '..') {
		if (!is_dir('../apps/'.$elemento)) {
			$apps[] = $elemento;
		 }
	}
}

echo json_encode($apps);
