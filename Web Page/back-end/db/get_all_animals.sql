select mainclass_id, mainclass_name, animal_name, animal_id from mainclass
join animal on mainclass_ref = mainclass_id

where mainclass_id = $1