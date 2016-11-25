<html>
    <head>
        <meta charset="utf-8">
        <title>Ajax Search</title>
        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Merienda" rel="stylesheet">
        <link href="/JSON-AJAX/JSON-AJAX/AjaxSearch/css/main.css" rel="stylesheet">
    </head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.js"></script>
    <script src="/JSON-AJAX/JSON-AJAX/AjaxSearch/js/app.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <body>
        <div class="container-fluid">
        <h2 class="text-center">Ajax Search</h2>
        <hr>
        </div>
        <form id="search" name="search">
        <div class="container">
            <input type="text" name="search_text" placeholder="Search For Names" class="form-control" onkeyup="findmatch();">
        </div><br>
        <div class="container">
            <div id="results">
            </div>
        </div>
    </form>
    </body>
</html>
