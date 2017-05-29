import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal `
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }




  .wrapper {
      margin: 0 auto;
      width: 1180px;
  }

  a {
      text-decoration: none;
      color: #09765B;
  }
  .clear {
      clear: both;
  }
  .alignright {
      float: right;
      margin-left: 15px;
  }
  .alignleft {
      float: left;
      margin-right: 15px;
  }
  strong{
      font-weight: 600;
  }

  body {
      font-family: 'Roboto', sans-serif;
      height: 100%;
      width: 100%;
  }
  .header {
      background: rgba(46,50,53,0.9);
      position: absolute;
      width: 100%;
      z-index: 10;
  }

  .slider {
      position: relative;
      width: 100%;
      z-index: 1;
  }
  .slide img{
      width: 100%;
  }
  .cycle-slide{
      width: 100%;
  }
  .logo {
      float: left;
      width: 305px;
      padding: 23px 0;
  }

  .main-nav {
      float: right;
      margin: 31px 0 0;
      width: 70%;
  }
  .main-nav ul{
      text-align: right;
  }
  .main-nav ul li{
      display: inline-block;
      font-size: 14px;
      font-weight: 300;
      text-transform: uppercase;
      margin-right: 20px;
  }
  .main-nav ul li:last-child{
      margin-right: 0;
  }
  .main-nav ul li a{
      color: #878787;
      padding-bottom: 25px;
      display: block;
  }
  .main-nav ul li a:hover{
      color: #fff;
      border-bottom: 2px solid #158dd3;
  }
  .main-nav ul li a.active{
      color: #fff;
      border-bottom: 2px solid #158dd3;
  }
  .caption {
      position: absolute;
      top: 40%;
      left: 87px;
  }
  .caption h1{
      font-size: 49px;
      font-weight: 700;
      text-transform: uppercase;
      color: #1b1f23;
      margin-bottom: 5px;
  }
  .caption h1 span{
      font-weight: 200;
  }
  .caption h2{
      color: #1b1f23;
      font-size: 34px;
      font-weight: 600;
      letter-spacing: 2px;
      text-transform: uppercase;
      margin-bottom: 20px;
  }
  .caption h2 span{
      font-weight: 200;
  }

  .learnmore a{
      background: #fff;
      padding: 17px 25px;
      font-size: 14px;
      text-transform: uppercase;
      float: left;
      color: #1b1f23;
      text-align: center;
  }
  .learnmore a:hover{
      background: #158dd3;
      color: #fff;
  }
  .contactmore a{
      background: transparent;
      border:1px solid #1b1f23;
      padding: 16px 24px;
      font-size: 14px;
      text-transform: uppercase;
      float: left;
      color: #1b1f23;
      text-align: center;
      margin-left: 15px;
  }
  .contactmore a:hover{
      border: 1px solid #158dd3;
      background: #158dd3;
      color: #fff;
  }
  .bottom-slider-wrapper {
      width: 100%;
      margin: -3px 0 0 0;
  }

  .bottom-slider ul li{
      background: #158dd3 none repeat scroll 0 0;
      display: inline-block;
      margin: 0 -4px 0 0;
      padding: 30px 0;
      text-align: center;
      width: 25%;
  }
  .bottom-slider ul li:nth-child(2n){
      background: #1486c8;
  }
  .bottom-slider ul li span{
      display: inline-block;
      font-size: 14px;
      text-transform: uppercase;
      color: #1b1f23;
      margin-bottom: 5px;
      font-weight: 500;
  }
  .bottom-slider ul li p{
      font-size: 28px;
      font-weight: 200;
      color: #fff;
      text-transform: uppercase;
  }

  .welcome-wrapper {
      background: url("../images/welcome-bg.jpg")no-repeat;
      background-size: cover;
      padding: 75px 0;
  }

  .welcome {
      text-align: center;
  }
  .welcome h1{
      color: #fff;
      font-size: 17px;
      font-weight: 500;
      letter-spacing: 8px;
      margin-bottom: 10px;
      text-transform: uppercase;
  }
  .welcome h2{
      font-size: 40px;
      font-weight: 200;
      color: #fff;
      text-transform: uppercase;
  }
  .welcome p{
      font-size: 16px;
      color: #a3a4a4;
      line-height: 25px;
      margin-bottom: 25px;
      font-weight: 300;
      padding: 0 100px;
  }
  .welcome a{
      font-size: 14px;
      color: #a3a4a4;
      padding: 15px;
      display: inline-block;
      border:1px solid #a3a4a4;
      text-transform: uppercase;
  }
  .welcome a:hover{
      border:1px solid #fff;
      background: #fff;
      color: #158dd3;
  }
  .line {
      border-bottom: 2px solid #176492;
      width: 115px;
      margin: 25px auto;
  }

  .middle-wrapper {
      background: rgb(241, 241, 241) url("../images/laptop.png") no-repeat scroll right center;
      padding: 70px 0;
  }
  .middle {
      width: 50%;
  }
  /*----- Tabs -----*/
  .tabs {
      width:100%;
      display:inline-block;
  }

  /*----- Tab Links -----*/
  /* Clearfix */
  .tab-links{
      margin-bottom: 20px;
      text-align: left;
  }
  .tab-links:after {
      display:block;
      clear:both;
      content:'';
  }

  .tab-links li {
      display: inline-block;
      list-style: outside none none;
      margin: 0 -4px 0 0;
  }

  .tab-links a {
      font-family: 'Roboto', sans-serif;
      background: #fff;
      border: 1px solid #dfdfdf;
      color: #1b1f23;
      display: inline-block;
      font-size: 16px;
      padding: 18px 35px;
      text-transform: uppercase;
      transition: all 0.15s linear 0s;
      width: 115px;
      text-align: center;
  }

  .tab-links a:hover {
      background: #158dd3;
      border: 1px solid #158dd3;
      color: #fff;
  }

  li.active a, .hproducts li.active a:hover {
      background: #158dd3;
      border: 1px solid #158dd3;
      color: #fff;
  }
  .tab-links li.active{
      background: rgba(0, 0, 0, 0) url("../images/arrow.png") no-repeat scroll center 54px;
      padding: 0 0 10px;
  }
  .tab-links li:hover{
      background: rgba(0, 0, 0, 0) url("../images/arrow.png") no-repeat scroll center 54px;
      padding: 0 0 10px;
  }
  /*----- Content of Tabs -----*/
  .tab-content {
      min-height: 300px;
  }
  .tab-content p{
      font-size: 16px;
      color: #484848;
      line-height: 24px;
      margin-bottom: 25px;
  }
  .tab {
      display:none;
  }

  .tab.active {
      display:block;
  }
  .support {
      padding: 75px 0;
      text-align: center;
  }
  .support h1 {
      color: #1b1f23;
      font-size: 17px;
      font-weight: 500;
      letter-spacing: 8px;
      margin-bottom: 10px;
      text-transform: uppercase;
  }
  .support h2 {
      color: #1b1f23;
      font-size: 40px;
      font-weight: 200;
      text-transform: uppercase;
      margin-bottom: 20px;
  }
  .support p {
      color: #1b1f23;
      font-size: 16px;
      line-height: 24px;
      margin-bottom: 25px;
  }
  .support ul li{
      border: 1px solid #e4e4e4;
      box-shadow: 0 0 10px #fff;
      display: inline-block;
      margin: 0 -5px -1px 0;
      width: 289px;
  }
  .support ul li:hover{
      box-shadow: 0px 0px 10px #c3c3c3;
      position: relative;
      border:none;
  }

  .bottom-signup-wrapper {
      padding: 40px 0 30px 0;
      background: #158dd3;
  }

  .bottom-signup{
      text-align: center;
  }
  .bottom-signup h1{
      font-size: 25px;
      font-weight: 300;
      text-transform: uppercase;
      color: #fff;
      margin-bottom: 15px;
      letter-spacing: 2px;
  }
  .bottom-signup h1 span{
      font-weight: 500;
  }
  .bottom-signup a {
      border: 1px solid #fff;
      color: #fff;
      display: inline-block;
      font-size: 14px;
      padding: 15px 20px;
      text-transform: uppercase;
  }
  .bottom-signup a:hover{
      background: #fff;
      color: #158dd3;
  }
  footer {
      background: url("../images/footer-bg.jpg")no-repeat;
      background-size: cover;
  }
  .footer {
      padding: 75px 0 65px 0;
      border-bottom: 1px solid #2b2f33;
  }
  .footer h1{
      font-size: 20px;
      color: #c0c0c0;
      font-weight: 300;
      margin-bottom: 35px;
      text-transform: uppercase;
  }
  .foot1 {
      float: left;
      width: 30%;
  }
  .foot-social {
      text-align: center;
      margin-top: 20px;
  }
  .foot-social ul li{
      display: inline-block;
      color: #fff;
      margin-right: 5px;
  }
  .foot-social ul li:first-child a{
      padding: 10px 14px;
  }
  .foot-social ul li a{
      border: 1px solid #158dd3;
      border-radius: 50px;
      color: #158dd3;
      display: block;
      font-size: 14px;
      padding: 10px 11px;
  }
  .foot-social ul li a:hover{
      background: #158dd3;
      color: #000;
  }
  .foot2 {
      float: left;
      margin: 0 80px 0 120px;
      width: 20%;
  }
  .foot2 ul {
      float: left;
      width: 45%;
      padding:0;
      list-style: none;
  }
  .foot2 ul li{
      font-size: 14px;
      font-weight: 300;
      margin-bottom: 13px;
  }
  .foot2 ul li a{
      color: #c0c0c0;
  }

  .foot3 {
      float: right;
      width: 30%;
  }
  .foot3 p{
      font-size: 14px;
      color: #c0c0c0;
      margin-bottom: 15px;
      font-weight: 300;
  }
  .foot3 input {
      background: transparent none repeat scroll 0 0;
      border: 1px solid #43464a;
      border-radius: 5px;
      color: #888888;
      float: left;
      font-family: "Roboto",sans-serif;
      font-size: 12px;
      padding: 12px 14px 11px;
      width: 190px;
      height: 40px;
  }


  .copyright {
      font-size: 12px;
      font-weight: 300;
      text-align: center;
      color: #4e5052;
      padding: 20px 0;
  }

  .inner-banner {
      position: relative;
      width: 100%;
  }
  .inner-banner img{
      width: 100%;
  }
  .inner-banner h1{
      position: absolute;
      font-size: 50px;
      font-weight: 300;
      color: #1b1f23;
      text-transform: uppercase;
      top: 50%;
  }

  .inner-page {
      padding: 70px 0;
  }
  .inner-page p {
      color: #484848;
      font-size: 16px;
      line-height: 24px;
      margin-bottom: 25px;
  }

  .quote-wrapper {
      background: url("../images/quote-bg.jpg")no-repeat;
      background-size: cover;
      padding: 80px 0;
  }

  .quote {
      text-align: center;
  }
  .quote h1{
      font-size: 30px;
      text-transform: uppercase;
      font-weight: 300;
      margin-bottom: 15px;
      color: #fff;
  }
  .quote p{
      font-size: 18px;
      text-transform: uppercase;
      font-weight: 300;
      margin-bottom: 15px;
      color: #fff;
  }

  .choose-wrapper {
      background: rgb(241, 241, 241);
      padding: 70px 0;
  }

  .choose h1{
      font-size: 40px;
      margin-bottom: 40px;
      text-transform: uppercase;
      color: #231f20;
      font-weight: 200;
      text-align: center;
  }
  .choose ul li{
      width: 300px;
      padding: 35px;
      background: #fff;
      text-align: center;
      margin-right: 25px;
      float: left;
      min-height: 260px;
  }
  .choose ul li:last-child{
      margin-right: 0;
  }
  .choose ul li h2{
      color: #1682c3;
      font-size: 20px;
      font-weight: 500;
      line-height: 24px;
      margin-bottom: 20px;
      padding: 0 30px;
      text-transform: uppercase;
  }
  .choose ul li p{
      color: #484848;
      font-size: 14px;
      line-height: 24px;
  }

  .feature {
      text-align: center;
      padding-bottom: 30px;
  }

  .features{
      border-top:1px solid #e9e9e9;
      padding: 60px 0;
  }
  .features ul li{
      width: 570px;
      float: left;
      margin:0 40px 50px 0;
  }
  .features ul li:nth-child(2n){
      margin-right: 0;
  }

  .fea-left {
      float: left;
      width: 71px;
  }

  .fea-right {
      float: right;
      width: 470px;
  }
  .fea-right h2{
      font-size: 20px;
      color: #158dd3;
      text-transform: uppercase;
      margin-bottom: 20px;
      font-weight: 700;
  }
  .fea-right p{
      color: #484848;
      font-size: 16px;
      line-height: 24px;
  }

  .log-page {
      padding: 70px 0;
  }

  .log-date {
      font-size: 20px;
      color: #1b1f23;
      padding-bottom: 30px;
      margin-bottom: 30px;
      border-bottom: 1px solid #e3e4e4;
  }
  .log-date span{
      color: #158dd3;
  }
  .log-page h2{
      color: #158dd3;
      font-size: 25px;
      font-weight: 500;
      margin-bottom: 20px;
  }
  .log-page p {
      color: #484848;
      font-size: 16px;
      line-height: 24px;
      margin-bottom: 40px;
  }
  .contact-map {
      width: 100%;
  }
  .contact-map img{
      width: 100%;
  }

  .contact {
      padding: 60px 0;
  }
  .contact ul li{
      background: rgba(0, 0, 0, 0) url("../images/mail-icon.png") no-repeat scroll 60px 21px;
      border: 1px solid #bfbfbf;
      color: #158dd3;
      display: inline-block;
      font-size: 15px;
      line-height: 20px;
      margin-right: 30px;
      padding: 23px 60px 23px 125px;
      width: 190px;
  }
  .contact ul li:last-child{
      background: rgba(0, 0, 0, 0) url("../images/mail-icon.png") no-repeat scroll 60px 21px;
      margin-right: 0;
      padding-left: 125px;
      width: 165px;
  }
  .contact ul li p{
      color: #3a383a;
      font-size: 15px;
  }
  .contact ul li a{
      color: #3a383a;
  }

  .contactf {
      margin-bottom: 50px;
  }
  .contactf h1 {
      color: #158dd3;
      font-size: 35px;
      margin-bottom: 30px;
      font-weight: 300;
      text-align: center;
      text-transform: uppercase;
  }
  .contactf p {
      color: #444444;
      font-size: 15px;
      line-height: 23px;
      margin-bottom: 35px;
      text-align: center;
      padding: 0 115px;
  }

  .contact-left {
      float: left;
      width: 45%;
  }
  .contact-left input{
      background: #fbfbfb;
      width: 490px;
      padding: 15px;
      border:1px solid #e9e9e9;
      border-radius: 5px;
      font-family: 'Roboto', sans-serif;
      margin-bottom: 25px;
      font-family: 13px;
      font-size: 13px;
  }
  .contact-right {
      float: right;
      width: 53%;
  }
  .contact-right textarea{
      background: #fbfbfb none repeat scroll 0 0;
      border: 1px solid #e9e9e9;
      border-radius: 5px;
      font-family: 'Roboto', sans-serif;
      height: 165px;
      margin-bottom: 25px;
      padding: 15px;
      width: 593px;
      font-size: 14px;
  }
  .contact-right input[type="submit"] {
      background: #158dd3 none repeat scroll 0 0;
      border: medium none;
      border-radius: 5px;
      color: #fff;
      cursor: pointer;
      float: right;
      font-family: 'Roboto', sans-serif;
      font-size: 16px;
      font-weight: 500;
      padding: 12px;
      text-transform: uppercase;
      width: 110px;
  }

  .market {
      margin: 70px 0 30px 0;
      padding: 25px 0 20px 30px;
      border: 1px solid #d5d5d5;
  }

  .market-left {
      float: left;
      width: 50%;
      padding-top: 20px;
  }
  .market-left h1{
      font-size: 35px;
      color: #158dd3;
      font-weight: 700;
      margin-bottom: 25px;
  }
  .market-left ul li{
      font-size: 32px;
      color: #404040;
      font-weight: 700;
      margin-bottom: 15px;
  }
  .market-left ul li:last-child{
      margin-bottom: 0px;
  }
  .market-left ul li span{
      float: right;
  }

  .market-right {
      float: right;
      width: 268px;
  }

  .market-bottom {
      margin-bottom: 45px;
  }
  .market-bottom ul li{
      width: 248px;
      margin-right: 25px;
      border: 1px solid #d5d5d5;
      padding: 13px 13px 5px 13px;
      float: left;
  }
  .market-bottom ul li:last-child{
      margin-right: 0;
  }

  .mbottom-left {
      float: left;
      width: 112px;
  }

  .mbottom-right {
      float: right;
      width: 135px;
      text-align: right;
  }
  .mbottom-right p{
      color: #404040;
      font-size: 14px;
      margin-bottom: 7px;
  }
  .mbottom-right span{
      display: block;
      color: #404040;
      font-size: 14px;
      margin-bottom: 7px;
  }

  .bitcoin-wrapper {
      padding: 45px 0 100px 0;
      background: #f8f8f8;
  }

  .bitcoin h1{
      font-size: 22px;
      color: #1b1f23;
      margin-bottom: 15px;
      font-weight: 500;
      text-transform: uppercase;
      float: left;
  }
  .bitcoin table{
      width: 100%;
  }
  .bitcoin td{
      padding: 10px 15px;
      font-size: 12px;
      color: #3e3e3e;
      font-weight: 300;
  }
  .bitcoin tr{
      border: 1px solid #dedede;
  }
  .bitcoin tr:first-child td{
      font-size: 13px;
      color: #1b1f23;
      text-transform: uppercase;
      font-weight: 500;
  }
  .bitcoin tr:nth-child(odd) {
      background: #FFF;
  }
  .bitcoin tr:nth-child(even) {
      background: #f9f9f9;
  }

  .down {
      background: rgba(0, 0, 0, 0) url("../images/down.png") no-repeat scroll 65px 10px;
  }

  .minus {
      background: rgba(0, 0, 0, 0) url("../images/minus.png") no-repeat scroll 65px 15px;
  }

  .up {
      background: rgba(0, 0, 0, 0) url("../images/up.png") no-repeat scroll 65px 10px;
  }

  .bsearch {
      float: right;
      margin-bottom: 15px;
  }
  .bsearch label{
      font-size: 12px;
      font-weight: 300;
      color: #3e3f3f;
      margin-right: 10px;
  }
  .bsearch input{
      background: #f8f8f8;
      border: 1px solid #dedede;
      width: 135px;
      padding:5px 10px;
      border-radius: 5px;
      font-size: 13px;
  }

  .ethereum {
      padding: 45px 0 100px 0;
  }
  .ethereum h1 {
      color: #1b1f23;
      float: left;
      font-size: 22px;
      font-weight: 500;
      margin-bottom: 15px;
      text-transform: uppercase;
  }
  .ethereum .bsearch input{
      background: #fff;
  }
  .ethereum table {
      width: 100%;
  }
  .ethereum td {
      color: #3e3e3e;
      font-size: 12px;
      font-weight: 300;
      padding: 10px 15px;
  }
  .ethereum tr {
      border: 1px solid #dedede;
  }
  .ethereum tr:first-child td {
      color: #1b1f23;
      font-size: 13px;
      font-weight: 500;
      text-transform: uppercase;
  }
  .ethereum tr:nth-child(2n+1) {
      background: #fff none repeat scroll 0 0;
  }
  .ethereum tr:nth-child(2n) {
      background: #f9f9f9 none repeat scroll 0 0;
  }

  .usdt-wrapper {
      background: #f8f8f8 none repeat scroll 0 0;
      padding: 45px 0 100px 0;
  }
  .usdt h1 {
      color: #1b1f23;
      float: left;
      font-size: 22px;
      font-weight: 500;
      margin-bottom: 15px;
      text-transform: uppercase;
  }
  .usdt table {
      width: 100%;
  }
  .usdt td {
      color: #3e3e3e;
      font-size: 12px;
      font-weight: 300;
      padding: 10px 15px;
  }
  .usdt tr {
      border: 1px solid #dedede;
  }
  .usdt tr:first-child td {
      color: #1b1f23;
      font-size: 13px;
      font-weight: 500;
      text-transform: uppercase;
  }
  .usdt tr:nth-child(2n+1) {
      background: #fff none repeat scroll 0 0;
  }
  .usdt tr:nth-child(2n) {
      background: #f9f9f9 none repeat scroll 0 0;
  }

  .nav-bar-items{
    padding: 10px 0
  }

.custom-navbar {
  border-radius: 0 !important;
  border: none !important;
  margin-bottom: 0 !important;
  position: absolute !important;
  width: 100% !important;
  z-index: 10 !important;

}
.custom-navbar ul{
    text-align: right;
}

.custom-navbar ul li{
    display: inline-block;
    font-size: 14px;
    font-weight: 300;
    text-transform: uppercase;
}
.custom-navbar ul li:last-child{
    margin-right: 0;
}
.custom-navbar ul li a{
    color: #878787 !important;
    display: block;
}
.custom-navbar ul li a:hover{
    color: #fff;
    border-bottom: 2px solid #158dd3;
}
.custom-navbar ul .active a{
    color: #fff !important;
    border-bottom: 2px solid #158dd3 !important;
}

.custom-navbar ul .active > a{
    border: none;
    background-color: transparent !important;
}

`;
