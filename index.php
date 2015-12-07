<!DOCTYPE html>

<html prefix="og: http://ogp.me/ns#" class="no-js">

	<head>

		<!-- Google Analytics -->
		<script>
		  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

		  ga('create', 'UA-22345610-1', 'auto');
		  ga('send', 'pageview');

		</script>
		
		<!--Stylesheet-->
		<link rel="stylesheet" type="text/css" href="style.css">

		<meta name="viewport" content="initial-scale=1.0" />

		<!--Fonts-->
		<link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>
		<link href='http://fonts.googleapis.com/css?family=Droid+Serif' rel='stylesheet' type='text/css'>
		<link href='http://fonts.googleapis.com/css?family=Sintony:400,700' rel='stylesheet' type='text/css'>

		<!-- jQuery library (served from Google) -->
		<script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
		<!-- bxSlider Javascript file -->
		<script src="jquery.bxslider/jquery.bxslider.min.js"></script>
		<!-- bxSlider CSS file -->
		<link href="jquery.bxslider/jquery.bxslider.css" rel="stylesheet" />
		<!-- Scroll script -->
		<script src="rl_scripts.js"></script>
		<!-- Modernizr for nojs class -->
		<script src="modernizr.js"></script>

		<title>
			Rachel Leggett | Web Development
		</title>

		<meta property="og:title" content="Rachel Leggett - Web Development Portfolio" />
		<meta property="og:type" content="website" />
		<meta property="og:url" content="http://rachelleggett.com" />
		<meta property="og:image" content="http://rachelleggett.com/images/screenshots/newtheme-responsive-right.png" />
		<meta property="og:description" content="Rachel is passionate about the web and creating usable designs from a responsive, mobile-first standpoint.  She thinks WordPress is really great and enjoys programming in several languages, especially PHP." />

	</head>

	<body>

		<header>
			<nav id="main_navigation">
				<ul>
					<li id="top"><a href="#">&uarr;</a></li>
					<li><a href="#plugins">Plugins</a></li>
					<li><a href="#themes">Themes</a></li>
					<li><a href="#logos">Logos</a></li>
					<li><a href="#contact">Contact</a></li>
				</ul>
			</nav>
		</header>

		<div id="main">

			<div id="content">
				<div id="intro">
					<h1>Hi, I'm Rachel.</h1>

					<p>I love <strong>WordPress</strong>, which means <strong>PHP</strong> is my friend.  <strong>HTML5</strong>, <strong>CSS3</strong>, and <strong>Javascript</strong> are some of my other buds.  I'm a firm believer in the importance of <strong>mobile-first</strong> and <strong>responsive web design</strong>.  I like running, knitting, blogging, and video games, but I probably haven't seen the movie you're talking about!</p>
					<hr />
				</div><!---#intro-->


				<div id="examples">

                                <h2>Some of My Work</h2>
				<?php include('plugins.php');?>
				<?php include('themes.php');?>
				<?php include('logos.php');?>

				</div><!---#examples-->
				<a name="contact"></a>
				<hr />
				<div id="contact">
					<h2>Get In Touch</h2>
						<p id="social-icons">
							<a href="mailto:rleggett@umich.edu" class="symbol" title="circleemail"></a>
							<a href="https://www.linkedin.com/pub/rachel-leggett/a2/a25/57a" class="symbol" title="circlelinkedin"></a>
							<a href="http://twitter.com/rachmleg" target="_blank" class="symbol" title="circletwitterbird"></a>
							<a href="http://rachel.nu" class="symbol" title="circlewordpress"></a>
						</p>
						<p>Feel free to email me at <a href="mailto:rleggett@umich.edu">rleggett@umich.edu</a>, or find me at one of the links above!</p>
				</div><!---#contact-->

			</div><!---#content-->

		</div><!---#main-->

	</body>

</html>
