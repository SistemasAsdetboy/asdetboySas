<!DOCTYPE html>
<html lang="en">

<?php 
include("conexion.php");
$cQuery = "SELECT * FROM DOCGES WHERE REGESTXX = \"ACTIVO\" ORDER BY DOCLAS DESC, DOCYEA DESC, DOCNUM DESC";
$oQuery = $conexion->query($cQuery);
$mData = array();
while($aData = $oQuery->fetch_array()){
  $mData[$aData["DOCLAS"]][$aData["DOCYEA"]][$aData["DOCNUM"]][$aData["DOCNOM"]] = $aData["DOPATH"];
}
?>

<head>
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">

  <title>Asdetboy S.A.S</title>
  <meta content="" name="description">
  <meta content="" name="keywords">

  <!-- Favicons -->
  <link href="assets/img/Index/logoasdetboysas.png" rel="icon">
  <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon">

  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i|Montserrat:300,400,500,700" rel="stylesheet">

  <!-- Vendor CSS Files -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
  <link href="assets/vendor/animate.css/animate.min.css" rel="stylesheet">
  <link href="assets/vendor/aos/aos.css" rel="stylesheet">
  <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
  <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet">
  <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
  <script src="scripst.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.min.js"></script>


  <!-- Template Main CSS File -->
  <link href="assets/css/style.css" rel="stylesheet">

</head>

<body>

  <!-- ======= Header  ======= -->
  <header id="header" class="fixed-top d-flex align-items-center header-transparent">
    
    <div class="container-fluid">

      <div class="row justify-content-center align-items-center">
        <div class="col-xl-11 d-flex align-items-center justify-content-between">
          <a href="index.html" class="logo"><img src="assets/img/Index/logoasdetboysas.png" alt="" class="img-fluid"></a>

          <nav id="navbar" class="navbar">
            <ul>

              <a href="Nosotros.html"><span>¿Quienes Somos?</span></a>

              <a href="Servicios.html"><span>Servicios</span></a>

              <li class="dropdown"><a href="Portafolio.html"><span>Proyectos</span> <i class="bi bi-chevron-down"></i></a>
                <ul>
                  <li><a href="Portafolio.html">Portafolio</a></li>
                  <li><a href="InformeGestion.html">Informe de gestión</a></li>
                  <li><a href="Libro/Libro.html">Asdetboy en los territorios 2019 - 2023</a></li>
                  </li>
                </ul>
              </li>

              <li class="dropdown"><a href=" "><span>Herramientas</span> <i class="bi bi-chevron-down"></i></a>
                <ul>
                  <li><a href="https://asdetboyxperience.com" target="_blank"><img src="assets/img/Index/logo_Xperience.png" style="width: 100%;" alt=""></a></li>
                  <li><a href="https://asdetboysgd.com/login.php"><img src="assets/img/Index/Logo_SGD.png" style="width: 100%;" alt=""></a></li>
                </ul>
              </li>

              <li><a class="nav-link" href="GestionContractual.html">Gestión contractual</a></li>

              <li><a class="nav-link" href="Contactanos.html">Atención al público</a></li>
              
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav><!-- .navbar -->
        </div>
      </div>

    </div>
  </header>
  <!-- End Header -->

<!-- ======= Carrousell Section ======= -->
<section id="hero">
  <div class="hero-container">
    <div id="heroCarousel" class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="5000">

        <ol id="hero-carousel-indicators" class="carousel-indicators"></ol>

        <div class="carousel-inner" role="listbox">

            <div class="carousel-item active">
                <video autoplay muted loop poster="assets/img/Video/Servicios.mp4">
                    <source src="assets/img/Video/Servicios.mp4" type="video/mp4">
                    Tu navegador no admite el elemento de video.
                </video>
                <div class="carousel-container">
                    <div class="container">
                        <h2 class="animate__animated animate__fadeInDown">Somos Sus Mejores Aliados</h2>
                        <p class="animate__animated animate__fadeInUp">"Somos sus mejores aliados por excelencia, brindando soluciones eficientes innovadoras y dinámicas."</p>
                        <a href="/NewPageAsdetboy-main/Nosotros.html" class="btn-get-started scrollto animate__animated animate__fadeInUp">Ver más</a>
                    </div>
                </div>
            </div>

            <div class="carousel-item">
                <video autoplay muted loop poster="assets/img/Video/2.mp4">
                    <source src="assets/img/Video/2.mp4" type="video/mp4">
                    Tu navegador no admite el elemento de video.
                </video>
                <div class="carousel-container">
                    <div class="container">
                        <h2 class="animate__animated animate__fadeInDown">Nuestros Servicios</h2>
                        <p class="animate__animated animate__fadeInUp">
                            "ASDETBOY ofrece servicios integrales que optimizan recursos y procesos, respaldados por constante innovación y compromiso con la responsabilidad social, con el objetivo de agregar un valor excepcional a su organización en todas las etapas de su trayectoria."</p>
                        <a href="/NewPageAsdetboy-main/Servicios.html" class="btn-get-started scrollto animate__animated animate__fadeInUp">Ver más</a>
                    </div>
                </div>
            </div>

            <!-- Repite esta estructura para los demás elementos -->

            <div class="carousel-item">
              <video autoplay muted loop poster="assets/img/Video/1.mp4">
                  <source src="assets/img/Video/1.mp4" type="video/mp4">
                  Tu navegador no admite el elemento de video.
              </video>
              <div class="carousel-container">
                  <div class="container">
                      <h2 class="animate__animated animate__fadeInDown">Nuestros Equipo</h2>
                      <p class="animate__animated animate__fadeInUp">
                        "En ASDETBOY, nuestro equipo altamente capacitado y diverso aborda desafíos complejos con creatividad y eficacia, proporcionando soluciones personalizadas respaldadas por un enfoque colaborativo y un compromiso inquebrantable con la excelencia en el servicio."</p>
                      <a href="/NewPageAsdetboy-main/OrganigramaCoorporativo.html" class="btn-get-started scrollto animate__animated animate__fadeInUp">Ver más</a>
                  </div>
              </div>
          </div>

          <div class="carousel-item">
            <video autoplay muted loop poster="assets/img/Video/3.mp4">
                <source src="assets/img/Video/3.mp4">
                Tu navegador no admite el elemento de video.
            </video>
            <div class="carousel-container">
                <div class="container">
                    <h2 class="animate__animated animate__fadeInDown">Proyectos Realizados</h2>
                    <p class="animate__animated animate__fadeInUp">
                      "En ASDETBOY, nuestros proyectos exitosos abarcan diversos sectores, destacándose por soluciones personalizadas, eficiencia y colaboración. Nuestro portafolio refleja nuestro compromiso con la excelencia e innovación en la satisfacción de las necesidades de nuestros clientes."</p>
                    <a href="/NewPageAsdetboy-main/Portafolio.html" class="btn-get-started scrollto animate__animated animate__fadeInUp">Ver más</a>
                </div>
            </div>
        </div>

        <div class="carousel-item">
          <video autoplay muted loop poster="assets/img/Video/4.mp4">
              <source src="assets/img/Video/4.mp4" type="video/mp4">
              Tu navegador no admite el elemento de video.
          </video>
          <div class="carousel-container">
              <div class="container">
                  <h2 class="animate__animated animate__fadeInDown">Informe de Gestión</h2>
                  <p class="animate__animated animate__fadeInUp">
                    "ASDETBOY se destaca por su compromiso constante con la excelencia, innovación y responsabilidad social en la administración de productos y servicios, adaptándose a las cambiantes dinámicas del mercado y promoviendo prácticas sostenibles."</p>
                  <a href="/NewPageAsdetboy-main/InformeGestion.html" class="btn-get-started scrollto animate__animated animate__fadeInUp">Ver más</a>
              </div>
          </div>
      </div>

        </div>

        <a class="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
            <span class="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
        </a>

        <a class="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
            <span class="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
        </a>

    </div>
</div>

</section>
<!-- End Carrousell -->

<main id="main">
  <section id="about">
    <div class="container" data-aos="fade-up">
        <header class="section-header">
          <h3>Gestión Contractual</h3>
          <p>En la sección de gestión contractual encontrará toda la documentación que se registra desde el año 2019 en adelante. Podrá encontrarla seleccionando los elementos deseados.</p>
      </header>
     <!-- ----------------------- acordeon -------------------------- -->

      <div class="container">
        <ul>
          <li class="dropdown-gestion">
            <a href="#" data-toggle="dropdown" style="text-align: center;">Invitación pública <i
                class="icon-arrow"></i></a>
                <ul class="dropdown-gestion-menu">
                  <li class="dropdown-gestion">
                    <a href="#" data-toggle="dropdown"><i class='bx bxs-archive'></i></i> 2022<i class="icon-arrow"
                        style="color: black;"></i></a>
                          
                  </li>
                  <li class="dropdown-gestion">
                    <a href="#" data-toggle="dropdown"><i class='bx bxs-archive'></i></i> 2021<i class="icon-arrow"
                        style="color: black;"></i></a>
                  </li>
                  <li class="dropdown-gestion">
                    <a href="#" data-toggle="dropdown"><i class='bx bxs-archive'></i></i> 2020<i class="icon-arrow"
                        style="color: black;"></i></a>
                        
                  </li>
                  <li class="dropdown-gestion">
                    <a href="#" data-toggle="dropdown"><i class='bx bxs-archive'></i></i> 2019<i class="icon-arrow"
                        style="color: black;"></i></a>
                  </li>
                </ul>
          </li>
          <?php 
            foreach ($mData as $sClasificacion => $mContratos) {
              ?>
                <li class="dropdown-gestion">
                  <a href="#" data-toggle="dropdown" class="dropdown-toggle">
                    <?php echo $sClasificacion;?><i class="icon-arrow"></i>
                  </a>
                  <ul class="dropdown-gestion-menu">
                    <?php 
                      foreach ($mContratos as $cYear => $aContratos) {
                        ?>
                          <li class="dropdown-gestion">
                            <a href="#" data-toggle="dropdown">
                                <i class='bx bxs-archive'></i> <?php echo $cYear;?>
                                <i class="icon-arrow" style="color: black;"></i>
                            </a>
                            <ul class="dropdown-gestion-menu">
                              <?php
                                foreach ($aContratos as $cContrato => $mArchivos) {
                                  ?>
                                  <li class="dropdown-gestion">
                                    <a href="#">
                                      <?php echo $cContrato;?>
                                      <i class="icon-arrow" style="color: black;"></i>
                                    </a>
                                    <ul class="dropdown-gestion-menu">
                                      <?php
                                        foreach ($mArchivos as $sDocumento => $sPath) {
                                          ?>
                                            <li><a href="<?php echo $sPath;?>" target="_blank"><?php echo $sDocumento;?></a></li>
                                          <?php
                                        }
                                      ?>
                                      <br>
                                    </ul>
                                  </li>
                                  <?php
                                }
                              ?>
                            </ul> 
                          </li>
                        <?php
                      }
                    ?>
                  </ul>
                </li>
                <?php
            }
          ?>
        </ul>
    </div>
    
    
          <br><br><br>
        </section>
    
    </div>

  </section>
</main>


<!-- End #main -->

  <!-- ======= Footer ======= -->
  <footer id="footer">
    <div class="footer-top">
      <div class="container" >
        <div class="row" style="text-align: center;">
          <h3>ASDETBOY</h3>
          <section id="Footter" class="section-bg">
            <div class="container" data-aos="fade-up">
              <div class="row Footter-info">
                <div class="col-md-4">
                  <div class="Footter-address">
                    <i class="bi bi-geo-alt"></i>
                    <h3>Dirección</h3>
                    <address>Calle 19 # 9 - 35 Piso 10<br> Tunja-Boyacá Colombia</address>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="Footter-phone">
                    <i class="bi bi-phone"></i>
                    <h3>Numero de telefono</h3>
                    <p><a href="https://api.whatsapp.com/send/?phone=573102772887&text=Hola&type=phone_number&app_absent=0">+57 310 2772887</a></p>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="Footter-email">
                    <i class="bi bi-envelope"></i>
                    <h3>Email</h3>
                    <p><a href="mailto:info@example.com">Asdetboysas@gmail.com</a></p>
                  </div>
                </div>
              </div>      
            </div>
          </section>
        </div>
      </div>
        <div class="social-links" style="text-align: center;">
          <a href="https://api.whatsapp.com/send/?phone=573102772887&text=Hola&type=phone_number&app_absent=0" class="whatsapp"><i class="bi bi-whatsapp"></i></a>
          <a href="https://www.facebook.com/asdetboysas" class="facebook"><i class="bi bi-facebook"></i></a>
          <a href="https://www.instagram.com/asdetboysas/" class="instagram"><i class="bi bi-instagram"></i></a>
        </div>
    </div>
    <div class="container">
      <div class="copyright">
        &copy; Copyright <strong>Asdetboy S.A.S </strong>Derechos Reservados
      </div>
      <div class="credits">
       Creado por <a href=" ">Asdetboy S.A.S</a>
      </div>
    </div>
  </footer>
  <!-- End Footer -->

  <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
  <!-- Uncomment below i you want to use a preloader -->
  <!-- <div id="preloader"></div> -->

  <script>

      document.querySelectorAll('.dropdown-gestion > a').forEach(dropdownToggle => {
      dropdownToggle.addEventListener('click', function (e) {
        e.preventDefault();
        const parentDropdown = this.parentElement;
        parentDropdown.classList.toggle('open');

        // Cerrar otros dropdowns
        document.querySelectorAll('.dropdown-gestion').forEach(dropdown => {
          // if (dropdown !== parentDropdown) {
          //   dropdown.classList.remove('open');
          // }
        });
      });
    });

  </script>

</script>

  <script>
    // JavaScript para hacer un desplazamiento suave hacia la sección "featured-services"
    document.addEventListener("DOMContentLoaded", function() {
      document.querySelector("#about").scrollIntoView({ behavior: "smooth" });
    });
  </script>
  
  
  <!-- Vendor JS Files -->
  <script src="assets/vendor/purecounter/purecounter_vanilla.js"></script>
  <script src="assets/vendor/aos/aos.js"></script>
  <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
  <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
  <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
  <script src="assets/vendor/waypoints/noframework.waypoints.js"></script>
  <script src="assets/vendor/php-email-form/validate.js"></script>

  <!-- Template Main JS File -->
  <script src="assets/js/main.js"></script>

  <!---Firebase -->
  <!--<script type="module" src="Firebase/firebase.js"> </script>
  <script type="module" src="TablaContratos.js"> </script> -->

</body>
</html>