select maingroup_name, subgroup_name, mainclass_name, animal_id, animal_name from maingroup
join subgroup on maingroup_ref = maingroup_id
join mainclass on subgroup_ref = subgroup_id
join animal on mainclass_ref = mainclass_id

where animal_id = $1