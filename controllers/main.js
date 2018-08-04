exports.home = (req,res) => {
	res.send("bienvenidos a mi sitio");
	res.end();
}

exports.contacto = (req,res) => {
	res.send("puedes contactarme al correo fefa@fefamorales.com");
	res.end();
}