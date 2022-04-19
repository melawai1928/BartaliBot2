module.exports.run = async (bot, message, args, msg) =>{
		let firstNumber = Number(args[0]);
		let secondNumber = Number(args[1]);
	
		
	
			let doMath = firstNumber * secondNumber
			let doVp = doMath*0.845
			let donoVp = doMath*0.65

			function rubah(angka){
				var reverse = angka.toString().split('').reverse().join(''),
				ribuan = reverse.match(/\d{1,3}/g);
				ribuan = ribuan.join('.').split('').reverse().join('');
				return ribuan;
			}

			if (!args[0]) return message.reply('pake rumus " !profit harga market <spasi> jumlah barang yang dijual" ');

			if (!args[1]) return message.reply('Masukan Jumlah');

			if (isNaN(firstNumber)) return message.reply('Harga pake angka goblog');

			if (isNaN(secondNumber)) return message.reply('Jumlahnya pake angka njing');
			

			message.channel.send( message.author + `\n **Price of item** = ${rubah(firstNumber)} \n **Ammount Selling** = ${rubah(secondNumber)} \n\n **Before Tax** = ${rubah(doMath)}\n **After Tax without VP** = ${rubah(donoVp)} \n **After Tax with VP** = ${rubah(doVp)} \n\n **Bare in mind the value pack does not show when you look at the price on the market**`);
	
	  }
	module.exports.help = {
		name: "profit"
	}