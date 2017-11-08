select maingroup_name, subgroup_name, mainclass_id, order_list, mainclass_definition, mainclass_name, mainclass_image from maingroup
join subgroup on maingroup_ref = maingroup_id
join mainclass on subgroup_ref = subgroup_id

where subgroup_id = $1