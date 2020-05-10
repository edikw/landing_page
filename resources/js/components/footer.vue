<template>
    <section class="bg__footer">
        <div class="container">
            <div class="py-3 py-lg-5 d-lg-flex text-light">
                <div class="col p-0 mb-4 mb-lg-0">
                    <p class="title__footer">HUBUNGI KAMI</p>
                    <div class="content__footer mb-4">
                        <p>0274-5305505</p>
                        <p>Senin - Minggu</p>
                        <p>24 Jam Nonstop</p>
                    </div>
                    <div class="content__footer">
                        <p>Jl. Selokan Mataram Monjali</p>
                        <p>Karangjati MT I/304</p>
                        <p>Sinduadi, Mlati, Sleman</p>
                        <p>Yogyakarta 55284</p>
                    </div>
                </div>
                <div class="col p-0 mb-4 mb-lg-0">
                    <p class="title__footer">LAYANAN</p>
                    <div class="content__footer">
                        <p>Domain</p>
                        <p>Shared Hosting</p>
                        <p>Cloud VPS Hosting</p>
                        <p>Managed VPS Hosting</p>
                        <p>Web Builder</p>
                        <p>Keamanan SSL / HTTPS</p>
                        <p>Jasa Pembuatan Website</p>
                        <p>Program Afiliasi</p>
                    </div>
                </div>
                <div class="col p-0 mb-4 mb-lg-0">
                    <p class="title__footer">SERVICE HOSTING</p>
                    <div class="content__footer">
                        <p>Hosting Murah</p>
                        <p>Hosting Indonesia</p>
                        <p>Hosting Singapura SG</p>
                        <p>Hosting PHP</p>
                        <p>Hosting Wordpress</p>
                        <p>Hosting Laravel</p>
                    </div>
                </div>
                <div class="col p-0">
                    <p class="title__footer">TUTORIAL</p>
                    <div class="content__footer">
                        <p>Knowledgebase</p>
                        <p>Blog</p>
                        <p>Cara Pembayaran</p>
                    </div>
                </div>
            </div>
            <div class="py-3 py-lg-5 d-lg-flex text-light">
                <div class="col p-0">
                    <p class="title__footer">TENTANG KAMI</p>
                    <div class="content__footer mb-4">
                        <p>Tim Niagahoster</p>
                        <p>Karir</p>
                        <p>Events</p>
                        <p>Penawaran & Promo Spesial</p>
                        <p>Kontak Kami</p>
                    </div>
                </div>
                <div class="col p-0 mb-4 mb-lg-0">
                    <p class="title__footer">KENAPA PILIH NIAGAHOSTER?</p>
                    <div class="content__footer">
                        <p>Support Terbaik</p>
                        <p>Garansi Harga Termurah</p>
                        <p>Domain Gratis Selamanya</p>
                        <p>Datacenter Hosting Terbaik</p>
                        <p>Review Pelanggan</p>
                    </div>
                </div>
                <div class="col p-0">
                    <p class="title__footer">NEWSLETTER</p>
                    <div>
                        <input type="text" class="form-control p-4 rounded-pill" placeholder="Email" aria-label="Recipient's username">
                        <div class=" btn__input">
                            <span class="input-group-text rounded-pill">Berlangganan</span>
                        </div>
                        <div class="desc__letter">
                            <p class="m-0">Dapatkan promo dan konten menarik</p>
                            <p class="m-0">dari penyedia hosting terbaik Anda.</p>
                        </div>
                    </div>
                </div>
                <div class="col p-0">
                    <div class="mt-4 ml-3 text-center text-lg-right">
                        <img src="../../../public/assets/image/23.png" />
                    </div>
                </div>
            </div>
            <div class="py-3 py-lg-5 d-flex text-light">
                <div class="col p-0">
                    <p class="title__footer">PEMBAYARAN</p>
                    <div class="content__footer mb-4">
                        <img src="../../../public/assets/image/payment.png" />
                        <img src="../../../public/assets/image/pay2.png"/>
                    </div>
                    <div class="desc__payment">
                        <p>Aktivasi instan dengan e-Payment Hosting dan domain langsung aktif!</p>

                    </div>
                </div>
            </div>
            <div class="border-bottom border-dark"></div>
            <div class="py-3 d-lg-flex justify-content-between text-light">
                <div class="desc__footer-bottom">
                    <p>Copyright &#169;2016 Niagahoster &#124; Hosting powered by PHP7, CloudLinux, CloudFlare, BitNinja and DC Biznet Technovillage Jakarta</p>
                    <p>Cloud VPS Murah powered by Webuzo Softaculous, Intel SSD and cloud computing technology</p>
                </div>
                <div class="desc__footer-bottom">
                    <p>Syarat dan Ketentuan &#124; Kebijakan Privasi</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
    .bg__footer {
        background: #303030;
    }

    .title__footer {
        font-size: 14px;
        color: #8e8e8e;
    }

    .content__footer p {
        margin: 0;
        font-size: 12px;
        line-height: 30px;
    }

    .btn__input {
        position: relative;
        left: 133px;
        width: 50%;
        height: 50;
        top: -49px;
    }

    .btn__input span {
        position: relative;
        top:5px;
        background: #00a2f3;
        color: #ffffff;
    }

    .desc__letter {
        position: relative;
        top: -35px;
    }

    .desc__letter p, .desc__payment p{
        color: #8e8e8e;
        font-size: 14px;
    }

    .desc__footer-bottom p {
        font-size: 11px;
    }
</style>