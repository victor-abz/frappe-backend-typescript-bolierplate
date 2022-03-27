import ToDo from './ToDoDocument';

export default {
	name: 'ToDo',
	label: 'ToDo',
	documentClass: ToDo,
	naming: 'name', // {random|autoincrement}
	isSingle: 0,
	isChild: 0,
	isSubmittable: 0,
	settings: null,
	keywordFields: [],
	fields: [
		{
			fieldname: 'name',
			label: 'Name',
			fieldtype: 'Data',
			required: 1,
		},
	],
};
