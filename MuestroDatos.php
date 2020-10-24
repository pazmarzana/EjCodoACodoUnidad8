<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EjUnidad8</title>
    <style>
        .row {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            margin-top: 8em;
        }
        h2{
            margin: 1em;
        }
    </style>
</head>
<html>
<body>
    <div class="row">
        <h2>Usuario: <?php echo ((empty($_POST['usuario']) )     ? NULL : $_POST['usuario']); ?></h2>
    </div>
    <div class="row">
        <h2>Clave: <?php echo (( empty($_POST['clave']) )     ? NULL : $_POST['clave']); ?></h2>
    </div>
</body>
</html>