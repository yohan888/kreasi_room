<template>
    <footer class="footer_area section_padding_130_0 mt-5" style="background-color: #f5f5f5">
      <div class="container">
          <h5 style="font-weight: bold">Dapat lebih banyak event</h5>
          <h6 style="font-weight: bold" class="mb-3">dengan bergabung di sini!</h6>
          <span><router-link class="btn btn-primary" style="background-color: #0A3D62; border-color: #0A3D62" to="/masuk">Masuk</router-link>&emsp;</span>
          <span><router-link class="btn btn-primary" style="background-color: transparent; color: #0A3D62; border-color: #0A3D62" to="/daftar">Daftar Sekarang</router-link></span>
            <br><br>
        <div class="row">
          <!-- Single Widget-->
          <div class="col-12 col-sm-6 col-lg-4">
            <div class="single-footer-widget section_padding_0_130">
              <!-- Footer Logo-->
              <div class="footer-logo mb-3"></div>
              <div class="d-flex align-items-center mb-3">
                  <img src="../assets/images/logo-footer.png">
                  <span style="font-size: 18pt; font-weight: bold">Kreasi Room</span>
              </div>
              <p style="text-align: justify; font-size: 10pt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, officiis? Voluptas ad veniam at, debitis natus hic quo. Non ut aspernatur optio praesentium dignissimos nobis soluta maxime facere illo fuga.</p>
              <!-- Copywrite Text-->
 
                <!-- Footer Social Area-->
                <div class="footer_social_area mt-4">
                    <a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Facebook">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Pinterest">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                    <a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Skype">
                        <i class="fab fa-tiktok"></i>
                    </a>
                    <a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Twitter">
                        <i class="fab fa-instagram"></i>
                    </a>
                </div>
            </div>
          </div>
          <div class="col-md-auto">
          </div>
          <!-- Single Widget-->
          <div class="col-12 col-sm-6 col-lg">
            <div class="single-footer-widget section_padding_0_130 ">
              <!-- Widget Title-->
              <h5 class="widget-title">Perusahaan</h5>
              <!-- Footer Menu-->
              <div class="footer_menu">
                <ul>
                  <li><a href="#">Tentang</a></li>
                  <li><a href="#">Bantuan</a></li>
                  <li><a href="#">Ketentuan Layanan</a></li>
                  <li><a href="#">Kebijakan Pribadi</a></li>
                </ul>
              </div>
            </div>
          </div>
          <!-- Single Widget-->
          <div class="col-12 col-sm-6 col-lg">
            <div class="single-footer-widget section_padding_0_130">
              <!-- Widget Title-->
              <h5 class="widget-title">Bantuan</h5>
              <!-- Footer Menu-->
              <div class="footer_menu">
                <ul>
                  <li><a href="#">FAQ</a></li>
                  <li><a href="#">Fitur Layanan</a></li>
                  <li><a href="#">Laporan</a></li>
                </ul>
              </div>
            </div>
          </div>
          <!-- Single Widget-->
          <div class="col-12 col-sm-6 col-lg">
            <div class="single-footer-widget section_padding_0_130">
              <!-- Widget Title-->
              <h5 class="widget-title">Kontak</h5>
              <!-- Footer Menu-->
              <div class="footer_menu">
                <ul>
                  <li><a href="#">kreasix@gmail.com</a></li>
                  <li><a href="#">+62 812 - 3456 - 7891</a></li>
                  <li><a href="#">(003) 00123</a></li>
                  <li><a href="#">Help Center</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr>
        <span style="font-size: 10pt; color: #0A3D62">Copyright & Design @KreasiX</span>
      </div>
    </footer>
</template>

<style scoped>
.footer_area {
    position: relative;
    z-index: 1;
    overflow: hidden;
webkit-box-shadow: 0 8px 48px 8px rgba(47, 91, 234, 0.175);
    box-shadow: 0 8px 48px 8px rgba(47, 91, 234, 0.175);
    padding:60px;
    text-align: left
}
.footer_area .row {
    margin-left: -25px;
    margin-right: -25px;
}
.footer_area .row .col,
.footer_area .row .col-1,
.footer_area .row .col-10,
.footer_area .row .col-11,
.footer_area .row .col-12,
.footer_area .row .col-2,
.footer_area .row .col-3,
.footer_area .row .col-4,
.footer_area .row .col-5,
.footer_area .row .col-6,
.footer_area .row .col-7,
.footer_area .row .col-8,
.footer_area .row .col-9,
.footer_area .row .col-auto,
.footer_area .row .col-lg,
.footer_area .row .col-lg-1,
.footer_area .row .col-lg-10,
.footer_area .row .col-lg-11,
.footer_area .row .col-lg-12,
.footer_area .row .col-lg-2,
.footer_area .row .col-lg-3,
.footer_area .row .col-lg-4,
.footer_area .row .col-lg-5,
.footer_area .row .col-lg-6,
.footer_area .row .col-lg-7,
.footer_area .row .col-lg-8,
.footer_area .row .col-lg-9,
.footer_area .row .col-lg-auto,
.footer_area .row .col-md,
.footer_area .row .col-md-1,
.footer_area .row .col-md-10,
.footer_area .row .col-md-11,
.footer_area .row .col-md-12,
.footer_area .row .col-md-2,
.footer_area .row .col-md-3,
.footer_area .row .col-md-4,
.footer_area .row .col-md-5,
.footer_area .row .col-md-6,
.footer_area .row .col-md-7,
.footer_area .row .col-md-8,
.footer_area .row .col-md-9,
.footer_area .row .col-md-auto,
.footer_area .row .col-sm,
.footer_area .row .col-sm-1,
.footer_area .row .col-sm-10,
.footer_area .row .col-sm-11,
.footer_area .row .col-sm-12,
.footer_area .row .col-sm-2,
.footer_area .row .col-sm-3,
.footer_area .row .col-sm-4,
.footer_area .row .col-sm-5,
.footer_area .row .col-sm-6,
.footer_area .row .col-sm-7,
.footer_area .row .col-sm-8,
.footer_area .row .col-sm-9,
.footer_area .row .col-sm-auto,
.footer_area .row .col-xl,
.footer_area .row .col-xl-1,
.footer_area .row .col-xl-10,
.footer_area .row .col-xl-11,
.footer_area .row .col-xl-12,
.footer_area .row .col-xl-2,
.footer_area .row .col-xl-3,
.footer_area .row .col-xl-4,
.footer_area .row .col-xl-5,
.footer_area .row .col-xl-6,
.footer_area .row .col-xl-7,
.footer_area .row .col-xl-8,
.footer_area .row .col-xl-9,
.footer_area .row .col-xl-auto {
    padding-right: 25px;
    padding-left: 25px;
}

.single-footer-widget {
    position: relative;
    z-index: 1;
}
.single-footer-widget .copywrite-text a {
    color: #747794;
    font-size: 1rem;
    text-decoration: none;
}
.single-footer-widget .copywrite-text a:hover,
.single-footer-widget .copywrite-text a:focus {
    color: #3f43fd;
}
.single-footer-widget .widget-title {
    margin-bottom: 1.5rem;
    color: #0A3D62;
    font-size: 13pt;
    font-weight: bold;
    text-align: left;
    margin-top: 20px;
}
.single-footer-widget .footer_menu li a {
    color: #A1A1A1;
    margin-bottom: 1rem;
    display: block;
    font-size: 10pt;
    text-align: left;
    text-decoration: none;
}
.single-footer-widget .footer_menu li a:hover,
.single-footer-widget .footer_menu li a:focus {
    color: #3f43fd;
}
.single-footer-widget .footer_menu li:last-child a {
    margin-bottom: 0;
}

.footer_social_area {
    position: relative;
    z-index: 1;
}
.footer_social_area a {
    border-radius: 50%;
    height: 40px;
    text-align: center;
    width: 40px;
    display: inline-block;
    background-color: transparent;
    line-height: 30px;
    -webkit-box-shadow: none;
    box-shadow: none;
    margin-right: 10px;
    color: #0A3D62;
    border: 2px solid #0A3D62;
}
.footer_social_area a i {
    line-height: 36px;
}
.footer_social_area a:hover,
.footer_social_area a:focus {
    color: #ffffff;
}

@-webkit-keyframes bi-cycle {
    0% {
        left: 0;
    }
    100% {
        left: 100%;
    }
}

@keyframes bi-cycle {
    0% {
        left: 0;
    }
    100% {
        left: 100%;
    }
}
ol li, ul li {
    list-style: none;
}

ol, ul {
    margin: 0;
    padding: 0;
}

  @media screen and (max-width: 768px) {
    .footer_area{
      text-align: center;
    }
    .single-footer-widget .widget-title {
      text-align: center;
    }
    .single-footer-widget .footer_menu li a{
      text-align: center;
    }
    .footer_social_area a{
      text-align: center;
    }
  }

</style>