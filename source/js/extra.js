const file_two_name = "extra";

function whatsMyName(file_name = file_two_name){
	let new_name = file_name + ".js";
	return new_name;
}

export {whatsMyName};