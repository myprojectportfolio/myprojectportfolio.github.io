<?php
/**
 * Common upgrade script for 2.5 modUser
 *
 * @var modX $modx
 * @package setup
 */

/* add modUser.createdon field */
$class = 'modUser';
$table = $modx->getTableName($class);

$descript n = $this->install->lexicon('add_column',array('column' => 'createdon','table' => $table));
$this->processResults($class, $description, array($modx->manager, 'addField'), array($class, 'createdon'));
