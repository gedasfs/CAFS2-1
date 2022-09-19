<?php

require_once '../vendor/autoload.php';
 
$form = new App\Classes\FormBuilder;
 
echo $form->open('index.php', 'POST');
echo "\n";

echo $form->label('first-name', 'First name');
echo "\n";
echo $form->input('text', 'name', ['id' => 'first-name', 'style' => 'border: 1px solid red']);
echo "\n";

echo $form->label('last-name', 'Last name');
echo "\n";
echo $form->input('text', 'lastname', ['id' => 'last-name']);
echo "\n";

echo $form->label('inputEmail3', 'Email');
echo "\n";
echo $form->input('email', 'input_email', ['id' => 'inputEmail3']);
echo "\n";

echo $form->label('inputPassword3', 'Password');
echo "\n";
echo $form->password('password',  ['id' => 'inputPassword3']);

echo "\n\n";

echo $form->radio('gridRadios', 'option-value-1', [
	'id' => 'gridRadios1',
	'checked'
]);
echo "\n";
echo $form->label('gridRadios1', 'First radio');

echo "\n\n";

echo $form->input('radio', 'gridRadios', [
	'id' => 'gridRadios2',
	'value' => 'option-value-2',
	// 'checked'
]);
echo "\n";
echo $form->label('gridRadios2', 'Second radio');

echo "\n\n";

echo $form->radio(
	'gridRadios',
	'option-value-3',
	[
		'id' => 'gridRadios3',
		'disabled' => true
	]
);
echo "\n";
echo $form->label('gridRadios3', 'Third disabled radio');

echo "\n\n";

echo $form->input('checkbox', 'example_checkbox', [
	'id' => 'gridCheck1'
]);
echo "\n";
echo $form->label('gridCheck1', 'Example checkbox');

echo "\n\n";

echo $form->button('Submit', 'submit');

echo "\n";

echo $form->close();