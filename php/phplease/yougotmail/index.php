<html>
	<head>
		<meta charset="utf-8" />
    	<title>App Mail Send</title>

    	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

	</head>

	<body>

		<div class="container">  

			<div class="py-3 text-center">
				<img class="d-block mx-auto mb-2" src="logo.png" alt="" width="72" height="72">
				<h2>Send Mail</h2>
				<p class="lead">Seu app de envio de e-mails hackerCD</p>
			</div>

      		<div class="row">
      			<div class="col-md-12">
  				
					<div class="card-body font-weight-bold">
						<form>
							<div class="form-group">
								<label for="para">Para</label>
								<input name="email" type="text" class="form-control" id="para" placeholder="ex: forsen@baj.com">
							</div>

							<div class="form-group">
								<label for="assunto">Assunto</label>
								<input name="title" type="text" class="form-control" id="assunto" placeholder="O tema do email">
							</div>

							<div class="form-group">
								<label for="mensagem">Mensagem</label>
								<textarea name="message" class="form-control" id="o Email"></textarea>
							</div>

							<button type="submit" class="btn btn-primary btn-lg">Enviar Mensagem</button>
						</form>
					</div>
				</div>
      		</div>
      	</div>

	</body>
</html>