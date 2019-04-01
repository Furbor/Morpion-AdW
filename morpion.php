<?php

	function morpion($n) {
		$table = "	<tr>\n";
		for($k=1; $k<$n*$n+1; $k++) {
			$table.="				<td class='carre' id='case".$k."' onclick=play(case".$k.")></td>\n";
			if ($k%$n == 0 && $k != $n*$n) {
				$table.= "			</tr>\n";
				$table.="			<tr>\n";
			}
		}
		$table.="		   </tr>\n";
		return $table;
	}

?>
<!DOCTYPE html>
<html lang='fr'>
<head>
    <meta charset="utf-8">
    <title>Morpion - Jeu</title>
    <link rel="shortcut icon" type="image/png" href="resources/favicon.png"/>
    <?php 

    if (isset($_GET['taille']) && ($_GET['taille'] == 3 || $_GET['taille'] == 5)) {
        if (isset($_GET['darkmode'])) {
    	   echo "<link rel='stylesheet' type='text/css' href='css/taille".$_GET['taille']."_darkmode.css'>\n";
        }
        else {
           echo "<link rel='stylesheet' type='text/css' href='css/taille".$_GET['taille'].".css'>\n";           
        }
    }
    else {
		header('Location: index.html');
  		exit();    
  	}

    ?>
    <script type="text/javascript" src="js/morpion.js"></script>
</head>
<body>
    <div id="audio">
    <?php
    if (isset($_GET['hardmode'])){
        echo '    <audio controls autoplay loop="auto">
            <source src="resources/hard_mode_theme.mp3"> 
        </audio>'."\n";
    }

    else {
        echo '    <audio controls autoplay loop="auto">
            <source src="resources/play_theme.mp3"> 
        </audio>'."\n";
    }

    ?>
    </div>
    <div id="titre">
        Morpion <?php echo $_GET['taille']."x".$_GET['taille']; ?>
    </div>
	<div class="jeu">
    <table id="center">
        <tbody>
        <?php
        
        echo morpion($_GET['taille']);

        ?>
        </tbody>
    </table>
</div>
</body>
</html>
