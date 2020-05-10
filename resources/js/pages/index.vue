<template>
    <section>
        <Header></Header>
        <Navbar></Navbar>
        <div class="border-bottom pt-5 pb-5">
            <div class="container-lg p-0">
                <div class="d-lg-flex">
                    <div class="col-12 col-lg-6 m-auto m-lg-0">
                        <div>
                            <h3 class="title__bold">PHP Hosting</h3>
                            <h4 class="desc_title-bold">Cepat, handal, penuh dengan modul PHP yang Anda butuhkan</h4>
                        </div>
                        <div>
                            <ul class="p-0">
                                <li class="list__item"><i class="fa fa-check-circle mr-2 text-success"></i>Solusi PHP untuk performa query yang lebih cepat.</li>
                                <li class="list__item"><i class="fa fa-check-circle mr-2 text-success"></i>Konsumsi memori yang lebih rendah.</li>
                                <li class="list__item"><i class="fa fa-check-circle mr-2 text-success"></i>Support PHP 5.3, PHP 5.4, PHP 5.5, PHP 5.6, PHP 7</li>
                                <li class="list__item"><i class="fa fa-check-circle mr-2 text-success"></i>Fitur enkripsi IonCube dan Zend Guard Loaders</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-12 col-lg-6 text-center text-lg-right">
                        <img src="../../../public/assets/image/banner.png" class="banner"/>
                    </div>
                </div>
            </div>
        </div>
        <div class="py-5 text-center">
            <div class="container-lg d-lg-flex justify-content-around">
                <div class="align-self-center">
                    <img src="../../../public/assets/image/zend.png"/>
                    <p class="title__img">PHP Zend Guard Loader</p>
                </div>
                <div class="align-self-center">
                    <img src="../../../public/assets/image/composer.png" />
                    <p class="title__img-center">PHP Composer</p>
                </div>
                <div class="align-self-center">
                    <img src="../../../public/assets/image/ion.png" />
                    <p class="title__img">PHP IonCube Loader</p>
                </div>
            </div>
        </div>
        <div class="container-lg text-center pt-5 pb-5">
            <h5 class="title__bold">Paket Hosting Singapura yang Tepat</h5>
            <h4 class="desc_title-bold">Diskon 40% + Domain dan SSL Gratis untuk Anda</h4>
        </div>
        <div class="container-lg pb-5">
            <div class="row row-cols-lg-4 justify-content-center">
                <div class="border col-lg-3 p-0 m-4 m-lg-0 wrapper__price" v-for="(price , index) in prices" :key="index">
                    <div class="border-bottom px-4 py-2 text-center">
                        <h1 class="title__service" v-if="index === 0">Bayi</h1>
                        <h1 class="title__service" v-if="index === 1">Pelajar</h1>
                        <h1 class="title__service" v-if="index === 2">Personal</h1>
                        <h1 class="title__service" v-if="index === 3">Bisnis</h1>
                    </div>
                    <div class="border-bottom px-4 py-2 text-center">
                        <h6 class="price__discount">Rp {{ price.title }}</h6>
                        <h1><span class="text__rp">Rp</span> <span class="text__rp-bottom">{{ price.content }}</span><span class="text__rp-top">.{{ data_decimals[index].decimal }}</span><span class="text__rp">/ bln</span></h1>
                    </div>
                    <div class="border-bottom px-4 py-2 text-center">
                        <h6 class="m-0" v-if="index === 0"><b>938</b> Pengguna Terdaftar</h6>
                        <h6 class="m-0" v-if="index === 1"><b>4.168</b> Pengguna Terdaftar</h6>
                        <h6 class="m-0" v-if="index === 2"><b>10.017</b> Pengguna Terdaftar</h6>
                        <h6 class="m-0" v-if="index === 3"><b>3.552</b> Pengguna Terdaftar</h6>
                    </div>
                    <div class="px-4 py-2 text-center content__price" v-if="index === 0">
                        <b>0.5 RESOURCE POWER</b>
                        <h6 class="mt-3"><b>500 MB</b> Disk Space</h6>
                        <h6><b>Unlimited</b> Bandwidth</h6>
                        <h6><b>Unlimited</b> Databases</h6>
                        <h6><b>1</b> Domain</h6>
                        <h6><b>Instant</b> Backup</h6>
                        <h6><b>Unlimited SSL</b> Gratis Selamanya</h6>
                    </div>
                    <div class="px-4 py-2 text-center content__price" v-if="index === 1">
                        <b>1X RESOURCE POWER</b>
                        <h6 class="mt-3"><b>Unlimited</b >Disk Space</h6>
                        <h6><b>Unlimited</b> Bandwidth</h6>
                        <h6><b>Unlimited</b> POP3 Email</h6>
                        <h6><b>Unlimited</b> Databases</h6>
                        <h6><b>10</b> Addon Domain</h6>
                        <h6><b>Instant</b> Backup</h6>
                         <h6><b>Domain Gratis</b> Selamanya</h6>
                        <h6><b>Unlimited SSL</b> Gratis Selamanya</h6>
                    </div>
                     <div class="px-4 py-2 text-center content__price" v-if="index === 2">
                        <b>2X RESOURCE POWER</b> 
                        <h6 class="mt-3"><b>Unlimited</b> Disk Space</h6>
                        <h6><b>Unlimited</b> Bandwidth</h6>
                        <h6><b>Unlimited</b> POP3 Email</h6>
                        <h6><b>Unlimited</b> Databases</h6>
                        <h6><b>Unlimited</b> Addon Domains</h6>
                        <h6><b>Instant</b> Backup</h6>
                         <h6><b>Domain Gratis</b> Selamanya</h6>
                        <h6><b>Unlimited SSL</b> Gratis Selamanya</h6>
                         <h6><b>Private</b> Name Server</h6>
                         <h6><b>SpamAssasin</b> Mail Protection</h6>
                    </div>
                    <div class="px-4 py-2 text-center content__price" v-if="index === 3">
                         <b>3X RESOURCE POWER</b> 
                        <h6 class="mt-3"><b>Unlimited</b> Disk Space</h6>
                        <h6><b>Unlimited</b> Bandwidth</h6>
                        <h6><b>Unlimited</b> POP3 Email</h6>
                        <h6><b>Unlimited</b> Databases</h6>
                        <h6><b>Unlimited</b> Addon Domains</h6>
                        <h6><b>Magic Auto</b> Backup & Restore</h6>
                        <h6><b>Domain Gratis</b> Selamanya</h6>
                        <h6><b>Unlimited SSL</b> Gratis Selamanya</h6>
                        <h6><b>Instant</b> Backup</h6>
                        <h6><b>Prioritas</b> Layanan Support</h6>
                        <div class="mb-3">
                            <span class="fa fa-star text-primary"></span>
                            <span class="fa fa-star text-primary"></span>
                            <span class="fa fa-star text-primary"></span>
                            <span class="fa fa-star text-primary"></span>
                            <span class="fa fa-star text-primary"></span>
                        </div>
                        <h6><b>SpamExpert</b>Mail Protection</h6>
                    </div>
                    <div class="text-center mb-4" v-if="index === 3">
                        <button type="button" class="btn btn-outline-dark rounded-pill font-weight-bold border__btn px-4 btn__pr">Diskon 40%</button>
                    </div>
                    <div class="text-center mb-4" v-else>
                        <button type="button" class="btn btn-outline-dark rounded-pill font-weight-bold font-weight-bold border__btn px-4 btn__pr">Pilih Sekarang</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div class="container-lg pb-5">
            <div class="text-center mb-3">
                <h4 class="desc__title-bold">Powerfull dengan Limit PHP  yang Lebih Besar</h4>
            </div>
            <div class="d-lg-flex justify-content-center">
                <div class="border col-lg-5 p-0 mb-3 mb-lg-0 mr-lg-2">
                    <div class="d-flex border-bottom p-2">
                        <div class="col-2">
                            <i class="fa fa-check-circle mr-2 text-success"></i>
                        </div>
                        <div class="col-9 text-center">
                            <span class="list__item">max execution time 300s</span>
                        </div>
                    </div>
                    <div class="d-flex border-bottom p-2">
                        <div class="col-2">
                            <i class="fa fa-check-circle mr-2 text-success"></i>
                        </div>
                        <div class="col-9 text-center">
                            <span class="list__item">max execution time 300s</span>
                        </div>
                    </div>
                    <div class="d-flex p-2">
                        <div class="col-2">
                            <i class="fa fa-check-circle mr-2 text-success"></i>
                        </div>
                        <div class="col-9 text-center">
                            <span class="list__item">php memory limit 1024 MB</span>
                        </div>
                    </div>
                </div>
                <div class="border col-lg-5 p-0 ml-lg-2">
                    <div class="d-flex border-bottom p-2">
                        <div class="col-2">
                            <i class="fa fa-check-circle mr-2 text-success"></i>
                        </div>
                        <div class="col-9 text-center">
                            <span class="list__item">post max size 128 MB</span>
                        </div>
                    </div>
                    <div class="d-flex border-bottom p-2">
                        <div class="col-2">
                            <i class="fa fa-check-circle mr-2 text-success"></i>
                        </div>
                        <div class="col-9 text-center">
                            <span class="list__item">max filesize 128 MB</span>
                        </div>
                    </div>
                    <div class="d-flex p-2">
                        <div class="col-2">
                            <i class="fa fa-check-circle mr-2 text-success"></i>
                        </div>
                        <div class="col-9 text-center">
                            <span class="list__item">input vars 2500</span>
                        </div>
                    </div>
                </div>
                </ul>
            </div>
        </div>
        <div class="container pb-5">
            <div class="divider"></div>
        </div>
        <div class="container pb-5">
            <div class="text-center mb-5">
                <h4 class="desc__title-bold">Semua Paket Hosting Sudah Termasuk</h4>
            </div>
            <div class="row row-cols-1 row-cols-lg-3">
                <div>
                    <div class="text-center mb-3">
                        <img src="../../../public/assets/image/script.png"/>
                    </div>
                    <div class="text-center">
                        <p class="title__paket">PHP Semua Versi</p>
                        <p class="desc__paket">Pilih mulai dari versi PHP 5.3 s/d PHP 7</p>
                        <p class="desc__paket">Ubah sesuka Anda!</p>
                    </div>
                </div>
                <div>
                    <div class="text-center mb-3">
                        <img src="../../../public/assets/image/db.png"/>
                    </div>
                    <div class="text-center">
                        <p class="title__paket">MySQL Versi 5.6</p>
                        <p class="desc__paket">Nikmati MySQL versi terbaru, tercepat dan</p>
                        <p class="desc__paket">kaya akan fitur.</p>
                    </div>
                </div>
                <div>
                    <div class="text-center mb-3">
                        <img src="../../../public/assets/image/cp.png"/>
                    </div>
                    <div class="text-center">
                        <p class="title__paket">Panel Hosting cPanel</p>
                        <p class="desc__paket">Kelola website dengan panel canggih yang</p>
                        <p class="desc__paket">familiar di hati anda.</p>
                    </div>
                </div>
                <div>
                    <div class="text-center mb-3">
                        <img src="../../../public/assets/image/protect.png"/>
                    </div>
                    <div class="text-center">
                        <p class="title__paket">Garansi Uptime 99.9%</p>
                        <p class="desc__paket">Data center yang mendukung kelangsungan</p>
                        <p class="desc__paket">website Anda 24/7.</p>
                    </div>
                </div>
                <div>
                    <div class="text-center mb-3">
                        <img src="../../../public/assets/image/msql.png"/>
                    </div>
                    <div class="text-center">
                        <p class="title__paket">Database InnoDB Unlimited</p>
                        <p class="desc__paket">Jumlah dan ukuran database yang tumbuh</p>
                        <p class="desc__paket">sesuai kebutuhan Anda.</p>
                    </div>
                </div>
                <div>
                    <div class="text-center mb-3">
                        <img src="../../../public/assets/image/db_connect.png"/>
                    </div>
                    <div class="text-center">
                        <p class="title__paket">Wildcard Remote MySQL</p>
                        <p class="desc__paket">Mendukung s/d 25 max_user_connections</p>
                        <p class="desc__paket">dan 100 max_connections</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="container pb-5">
            <div class="divider"></div>
        </div>
        <div class="border-bottom mb-5">
            <div class="container">
                <div class="text-center mb-3">
                    <h4 class="desc__title-bold">Mendukung Penuh Framework Laravel</h4>
                </div>
                <div class="d-lg-flex">
                    <div>
                        <div>
                            <p class="col-lg-9 p-0 title__support">Tak perlu menggunakan dedicated server ataupun VPS yang mahal. Layanan PHP hosting murah kami mendukung penuh framework favorit Anda</p>
                        </div>
                        <ul class="p-0">
                            <li class="list__item"><i class="fa fa-check-circle mr-2 text-success"></i>Install Laravel <b>1 klik</b> dengan Softaculous Installer.</li>
                            <li class="list__item"><i class="fa fa-check-circle mr-2 text-success"></i>Mendukung ekstensi <b>PHP MCrypt, phar, mbstring, json,</b> dan <b>fileinfo.</b></li>
                            <li class="list__item"><i class="fa fa-check-circle mr-2 text-success"></i>Tersedia <b>Composer</b> dan <b>SSH</b> untuk menginstal packages pilihan Anda.</li>
                        </ul>
                        <small>Nb. Composer dan SSH hanya tersedia pada paket Personal dan Bisnis</small>
                        <div class="mt-4 mb-4 mb-lg-0 text-center text-lg-left">
                            <button class="btn btn-lg btn-primary rounded-pill font-weight-bold border__btn px-4">Pilih Hosting Anda</button>
                        </div>
                    </div>
                    <div class="text-center text-lg-left">
                        <img src="../../../public/assets/image/banner2.png" class="banner_2"/>
                    </div>
                </div>
            </div>
        </div>
        <div class="container pb-5">
            <div class="text-center">
                <h4 class="mb-5 desc__title-bold">Modul Lengkap untuk Menjalankan Aplikasi PHP Anda.</h4>
            </div>
            <div class="row row-cols-2 row-cols-lg-4 mb-4 ml-5">
                <div class="desc__paket">
                    <p>IcePHP</p>
                    <p>apc</p>
                    <p>apcu</p>
                    <p>apm</p>
                    <p>ares</p>
                    <p>bcmath</p>
                    <p>bcompiler</p>
                    <p>big_int</p>
                    <p>bitset</p>
                    <p>bloomy</p>
                    <p>bz2_filter</p>
                    <p>clamav</p>
                    <p>coin_acceptor</p>
                    <p>crack</p>
                    <p>dba</p>
                </div>
                <div class="desc__paket">
                    <p>http</p>
                    <p>huffman</p>
                    <p>idn</p>
                    <p>igbinary</p>
                    <p>imagick</p>
                    <p>imap</p>
                    <p>inclued</p>
                    <p>inotify</p>
                    <p>interbase</p>
                    <p>intl</p>
                    <p>ioncube_loader</p>
                    <p>ioncube_loader_4</p>
                    <p>jsmin</p>
                    <p>json</p>
                    <p>Idap</p>
                </div>
                <div class="desc__paket">
                    <p>nd_pdo_mysql</p>
                    <p>oauth</p>
                    <p>oci8</p>
                    <p>odbc</p>
                    <p>opcache</p>
                    <p>pdf</p>
                    <p>pdo</p>
                    <p>pdo_dblib</p>
                    <p>pdo_firebird</p>
                    <p>pdo_mysql</p>
                    <p>pdo_odbc</p>
                    <p>pdo_pgsql</p>
                    <p>pdo_sqlite</p>
                    <p>pgsql</p>
                    <p>phalcon</p>
                </div>
                <div class="desc__paket">
                    <p>stats</p>
                    <p>stem</p>
                    <p>stomp</p>
                    <p>suhosin</p>
                    <p>sybase_ct</p>
                    <p>sysvmsg</p>
                    <p>sysvsem</p>
                    <p>sysvshm</p>
                    <p>tidy</p>
                    <p>timezonedb</p>
                    <p>trader</p>
                    <p>translit</p>
                    <p>uploadprogress</p>
                    <p>uri_template</p>
                    <p>uuid</p>
                    <p>phalcon</p>
                </div>
            </div>
            <div class="text-center">
                <button class="btn btn-lg btn-outline-dark rounded-pill font-weight-bold border__btn px-4">Selengkapnya</button>
            </div>
        </div>
        <div class="container">
            <div class="d-lg-flex">
                <div>
                    <h4 class="desc__title-bold">Linux Hosting yang Stabil dengan Teknologi LVE</h4>
                    <p class="list__item">SuperMicro <b>Intel Xeon 24-cores</b> Server dengan RAM <b>128 GB</b> dan teknologi<b>LIVE CloudLinux</b> untuk stabilitas server Anda. Dilengkapi dengan <b>SSD</b> untuk kecepatan <b>MySQL</b> dan caching, Apache load balancer berbasis LiteSpeed Technologies, <b>cageFS</b> security,  <b>Raid-10</b> protection dan auto backup untuk keamanan website PHP Anda.</p>
                    <div class="my-4 text-center text-lg-left">
                        <button class="btn btn-lg btn-primary rounded-pill font-weight-bold border__btn px-4">Pilih Hosting Anda</button>
                    </div>
                </div>
                <div class="text-center text-lg-center">
                    <img src="../../../public/assets/image/Image_support.png" class="pt-5 banner_support"/>
                </div>
            </div>
        </div>
        <div class="bg__info">
            <div class="container d-lg-flex justify-content-between p-4 text-center text-lg-left">
                <p class="list__item m-0">Bagaimana jika Anda menyukai halaman ini.</p>
                <div class="pt-3 pt-lg-0">
                    <img src="../../../public/assets/image/sosmed.png" />
                </div>
            </div>
        </div>
        <div class="bg-primary text-light">
            <div class="container-lg d-lg-flex justify-content-between py-5">
                <div class="align-self-center text__help">
                    <h4 class="desc__item-bold m-0">Perlu <b>BANTUAN?</b> Hubungi Kami : <b>0274-5305505</b></h4>
                </div>
                <div class="text-center text-lg-right">
                    <button class="btn btn-lg btn-outline-light rounded-pill font-weight-bold border__btn px-5 btn__chat"><img src="../../../public/assets/image/sms (2).png" class="mr-3" /> Live Chat</button>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </section>
</template>


<script>
    import Header from '../components/header.vue'
    import Navbar from '../components/navbar.vue'
    import Footer from '../components/footer.vue'

    export default {
        components : {
            Header,
            Navbar,
            Footer
        },
        data() {
            return {
                prices: [],
                data_decimals: []
            }
        },
        async created() {
            let url = `http://localhost:8000/api/posts`;
            await this.axios.get(url).then(response => { 
                this.setPrice(response.data.data)
            });
        },
        methods: {
            formatCurrency(num) {
                return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
            },
            setPrice(temp) {
                temp.map(price => {
                    price.content = this.formatCurrency(price.content)
                    if( price.content.indexOf('.') != -1 ){
                        let decimalOnly = price.content.toString().split('.')[1];
                        this.data_decimals.push({
                            decimal: decimalOnly
                        });
                    }
                    price.content = price.content.toString().split('.')[0]
                    this.prices.push(price)
                });
            }
        }
    }
</script>
<style scoped>
    h3 {
        font-weight: 800;
        font-size: 50px;
        line-height: normal;
    }

    h4 {
        font-weight: normal;
        font-size: 25px;
        line-height: 39px;
        letter-spacing: .05em;
        margin-bottom: 20px;
    }

    .list__item {
        list-style: none;
    }

    h5 {
        font-weight: 900;
        font-size: 30px;
        line-height: normal;
    }

    .border__btn {
        border: 2px solid
    }

    .banner {
        max-width: 100%;
    }

    .title__service {
        font-weight: 600;
        font-size: 25px;
    }

    .price__discount {
        text-decoration: line-through;
    }

    .divider {
        width: 100px;
        margin: auto;
        height: 5px;
        background: #e7e8ea;
        border-radius: 5px;
    }

    .title__paket {
        font-weight: 950;
        font-size: 20px;
        letter-spacing: 0.04em;
        margin: 0px;
    }

    .desc__paket {
        margin: 0px;
    }

    .title__support {
        letter-spacing: 0.05em;
        line-height: 35px;
    }

    .bg__info {
        background: #f7f7f7;
    }

    .text__rp, .text__rp-top {
        font-size: 20px;
        position: relative;
        top: -25px;
    }

    .text__rp-top, .text__rp-bottom {
        font-weight: 900;
    }

    .content__price h6 {
        font-size: 15px;
        margin-bottom: 15px;
    }
    
    .wrapper__price {
        cursor: pointer;
        transition: box-shadow .3s;
        height: max-content;
    }

    .wrapper__price:hover{
       box-shadow: 0 0 15px rgba(33,33,33,.2);
    }

    .btn__chat:hover {
        background: #007bff;
        border-color: #ffffff;
        color: #ffffff;
    }
</style>
