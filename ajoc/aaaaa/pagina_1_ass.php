<!DOCTYPE HTML>
<html lang="pt-br">
	<head>
		<meta charset="UTF-8">

		<title>Página 1</title>

		<!-- bootstrap - link cdn -->
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">

		<script src="script/index.js" charset="utf-8"></script>

	</head>

	<body>

		<!-- Static navbar -->
	    <nav class="navbar navbar-light bg-light mb-4">
	      <div class="container">
	        <div class="navbar-brand mb-0 h1">
	        	<h3>Requisições síncronas e assíncronas</h3>
	        </div>
	      </div>
	    </nav>


	    <div class="container">

	    	<div class="row mb-2">
	    		<div class="col-md-4 center"></div>
	    		<div class="col-md-4 center">
	    			<a href="#" class="btn btn-primary" onclick="RequestPage('pagina_1_conteudo.html');">Página 1</a>
	    			<a href="#" class="btn btn-primary" onclick="RequestPage('pagina_2_conteudo.html');">Página 2</a>
	    			<a href="#" class="btn btn-primary" onclick="RequestPage('pagina_3_conteudo.html');">Página 3</a>
	    		</div>
	    		<div class="col-md-4 center"></div>
	    	</div>

	    	<div class="row">
		    	<div class="col-md-1"></div>

		    	<div class="col-md-10">

		    	</div>

				<div class="col-md-1"></div>
			</div>

		</div>
	</body>
</html>
