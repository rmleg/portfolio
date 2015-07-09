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
					<li><a href="#themes">Themes</a></li>
					<li><a href="#plugins">Plugins</a></li>
					<li><a href="#logos">Logos</a></li>
					<li><a href="#contact">Contact</a></li>
				</ul>
			</nav>
		</header>

		<div id="main">

			<div id="content">
				<div id="intro">
					<h1>Hi, I'm Rachel.</h1>

					<p>I love <strong>WordPress</strong>, which means <strong>PHP</strong> is my friend.  <strong>HTML5</strong>, <strong>CSS3</strong>, and <strong>Javascript</strong> are some of my other buds.  I'm a firm believer in the importance of <strong>mobile-first</strong> and <strong>responsive web design</strong>.  I like running, blogging, crochet, puzzles, and video games, but I probably haven't seen the movie you're talking about!</p>
					<hr />
				</div>

				<script>
					$(document).ready(function(){
					  $('.bxslider').bxSlider({
					  	//captions: true
					  });
					});
				</script>

				<!-- <ul class="bxslider smaller">
				  <li><img src="images/screenshots/newtheme-responsive-right-small.png" /></li>
				  <li><img src="images/screenshots/burst-responsive-right-small.png" /></li>
				  <li><img src="images/screenshots/sophistique-small.png" /></li>
				  <li><img src="images/screenshots/mrun-small.png" /></li>
				</ul> -->

				<div id="examples">

					<a name="themes"></a>

					<h2>Some of My Work</h2>

					<h3>WordPress Themes</h3>

					<ul class="bxslider">
					  <li><img src="images/screenshots/newtheme-responsive-right.png" />
					  	<p>&nbsp;</p>
					  	<p>I built this fully-responsive blog theme using starter theme <a href="http://underscores.me" target="_blank">Underscores</a> as a base.  Underscores gave me the functions to make my blog work great, and I gave it the style to make my blog look great.  This theme has several different color options and other customizations available in the Theme Customizer.  <a href="http://blog.rachelleggett.com" target="_blank">View a Live Demo</a></p>
					  <p>&nbsp;</p></li>
					  <li><img src="images/screenshots/burst-responsive-right.png" />
					  	<p>&nbsp;</p>
					  	<p>I built this fully-responsive blog theme from scratch.  It is a bare-bones WordPress theme and was my first responsive design.  <a href="http://rachel.nu" target="_blank">View a Live Demo</a></p>
					  	<p>&nbsp;</p></li>
					  <li><img src="images/screenshots/sophistique.png" />
					  	<p>&nbsp;</p>
					  	<p>This non-responsive theme is highly stylized for a personal blog with focus on content and interesting flourishes.  This is not something I would release today, but I like to showcase it for the artistic design elements.  <a href="http://rachelleggett.com/sophistique.htm" target="_blank">View a Live Demo</a></p>
					  	<p>&nbsp;</p></li>
					  <li><img src="images/screenshots/mrun.png" />
					  	<p>&nbsp;</p>
					  	<p>I designed this website for the Michigan Running Club during my time as their webmaster.  They needed a simple website that would offer plenty of information for perspective runners as well as for current club runners and their families.</p>
					  	<p>&nbsp;</p></li>
					</ul>

					<a name="plugins"></a>

					<hr />

					<h3>Customized WordPress Plugins</h3>

					<div class="two-col">
						<div class="left">
							<h4>Usage Reports</h4>
							<p>Usage Reports is a plugin written for CAEN's WordPress Publishing Service, displaying information about their multisite usage on the network admin dashboard.  It displays:</p>
								<uL>
									<li>Active plugins per site.</li>
									<li>Contact info (from the custom field) for each site.</li>
									<li>Whether each site is discouraging indexing</li>
									<li>Whether each site is using a Homepage Link feature.</li>
									<li>Number of media attachments and space used for each site.</li>
									<li>A breakdown of the page templates used on each site.</li>
									<li>The number and status of posts on each site</li>
									<li>The currently active theme of each site.</li>
									<li>A list of users for each site with each admin user starred and admin email listed.</li>
									<li>Active widgets per site.</li>
								</ul>

						</div>
						<div class="right">
							<h4>Hide Custom Fields</h4>
							<p>Hide Custom Fields is a plugin that uses Javascript with JQuery to hide unused custom fields on the "edit page" screen in the dashboard, based on the currently-selected page template.</p>
						</div>
					</div>

					<a name="logos"></a>

					<hr />

					<h3>Logo Designs</h3>

					<div class="three-col logos">
						<div class="left">
							<img src="images/logos/grahamremodellogo_bw.png" alt="Graham Remodel Logo" />
							<p>This logo was requested by Graham Modernization and Construction, LLC for use as a letterhead and on the company website that I was also designing and building at the time.</p>
						</div>
						<div class="left middle">
							<img src="images/logos/parameter17.png" alt="Parameter 17 Logo" />
							<p>This logo was part of a design challenge I completed.  I used a random phrase generator to generate fictitious company names, for which I then designed branding.  For Textual Time, the private tutoring service, "any time is learning time."</p>
						</div>
						<div class="left">
							<img src="images/logos/textualtime.png" alt="Textual Time" />
							<p>This logo was part of a design challenge I completed.  I used a random phrase generator to generate fictitious company names, for which I then designed branding.  Parameter 17 is an independent production studio.</p>
						</div>
					</div>

				</div>
				<a name="contact"></a>
				<hr />
				<div id="contact">
					<h2>Get In Touch</h2>
						<p id="social-icons">
							<a href="mailto:rleggett@umich.edu" class="symbol" title="circleemail"></a>
							<a href="https://www.linkedin.com/pub/rachel-leggett/a2/a25/57a" class="symbol" title="circlelinkedin"></a>
							<a href="http://twitter.com/rachmleg" target="_blank" class="symbol" title="circletwitterbird"></a>
							<a href="http://rachrunshermouth.wordpress.com" class="symbol" title="circlewordpress"></a>
						</p>
						<p>Feel free to email me at <a href="mailto:rleggett@umich.edu">rleggett@umich.edu</a>, or find me at one of the links above!</p>
				</div>

			</div>

		</div>

	</body>

</html>