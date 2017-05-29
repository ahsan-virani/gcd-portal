import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal `
@media only screen and (min-width : 240px) and (max-width : 319px) {
.wrapper{width:85%;}

.header{position: relative;}
.logo{float: none;width: 270px;}
.logo img{width: 100%;}

.main-nav{display: none;float: none;}
.nav-toggle{display: block!important;}

.caption{top: 25%;}
.caption h1{font-size: 1.5em;}
.caption h2{font-size: 1em;}
.learnmore a{padding: 7px 15px;}
.contactmore a{padding: 7px 15px;}

.bottom-slider ul li{width: 50%;}
.bottom-slider ul li p{font-size: 1.2em;}

.welcome h2{font-size: 1.5em;}
.welcome p{padding: 0;}

.middle-wrapper{background: none;padding: 70px 0 0;}
.middle{width: 100%;}
.tab-links a{font-size: 11px;padding: 18px 0;width: 89px;}
.tab-links li.active{background: rgba(0, 0, 0, 0) url("../images/arrow.png") no-repeat scroll center 49px;}
.tab-links li:hover {background: rgba(0, 0, 0, 0) url("../images/arrow.png") no-repeat scroll center 49px;}

.support ul li{width: 270px;}

.foot-logo img{width: 100%;}
.foot1{width: 100%;margin: 0 0 30px 0;}
.foot2{width: 100%;margin: 0 0 30px 0;}
.foot3{width: 100%;}

.inner-banner h1{font-size: 1.5em;top: 40%;}
.alignleft{width: 100%;height: auto;margin-bottom: 20px;}

.choose ul li{width: 85%;margin-bottom: 25px;padding: 20px;}

.features ul li{margin: 0 0 50px;width: 100%;text-align: center;}
.fea-left{float: none;margin: 0 auto 20px;}
.fea-right{float: none;width: 100%;}

.alignright{width: 100%;height: auto;margin-bottom: 20px;}

.market{padding: 25px 20px 20px;}
.market-left{width: 100%;margin-bottom: 20px;}
.market-left h1{font-size: 1.5em;}
.market-left ul li{font-size: 1em;}
.market-right{width: 100%;}

.market-bottom ul li{margin-bottom: 20px;}

.bitcoin h1{float: none;}
.bsearch{float: none;}
.ethereum h1{float: none;}
.usdt h1{float: none;}

.log-date{font-size: 1em;}

.contact ul li{background: rgba(0, 0, 0, 0) url("../images/mail-icon.png") no-repeat scroll 10px 21px;padding: 23px 60px 23px 65px;width: 150px;margin-bottom: 20px;}
.contact ul li:last-child{background: rgba(0, 0, 0, 0) url("../images/mail-icon.png") no-repeat scroll 10px 21px;padding: 23px 60px 23px 65px;width: 150px;}
.contactf p{padding: 0;}

.contact-left{width: 100%;}
.contact-left input{width: 88%;}
.contact-right{width: 100%;}
.contact-right textarea{width: 88%;}

.signup-left{display: none;}
.login-right{margin: 20px 0;float: none;padding: 20px 0;width: 100%;}
.login-right ul li{width: 100%;}
.login-right input{width: 87%;}
.signup-right{margin: 20px 0;float: none;padding: 20px 0;width: 100%;}
.signup-right h1{font-size: 0.9em;}
.signup-right ul li{width: 100%;}
.signup-right input{width: 87%;}
.signup-right select{width: 100%;margin: 0 0 20px 0;}
}
@media only screen and (min-width : 320px) and (max-width : 480px) {
.wrapper{width:85%;}

.header{position: relative;}
.logo{float: none;width: 270px;}
.logo img{width: 100%;}

.main-nav{display: none;float: none;}
.nav-toggle{display: block!important;}

.caption{top: 25%;}
.caption h1{font-size: 1.5em;}
.caption h2{font-size: 1em;}
.learnmore a{padding: 7px 15px;}
.contactmore a{padding: 7px 15px;}

.bottom-slider ul li{width: 50%;}
.bottom-slider ul li p{font-size: 1.2em;}

.welcome h2{font-size: 1.5em;}
.welcome p{padding: 0;}

.middle-wrapper{background: none;padding: 70px 0 0;}
.middle{width: 100%;}
.tab-links a{font-size: 11px;padding: 18px 0;width: 89px;}
.tab-links li.active{background: rgba(0, 0, 0, 0) url("../images/arrow.png") no-repeat scroll center 49px;}
.tab-links li:hover {background: rgba(0, 0, 0, 0) url("../images/arrow.png") no-repeat scroll center 49px;}

.support ul li{width: 270px;}

.foot-logo img{width: 100%;}
.foot1{width: 100%;margin: 0 0 30px 0;}
.foot2{width: 100%;margin: 0 0 30px 0;}
.foot3{width: 100%;}

.inner-banner h1{font-size: 1.5em;top: 40%;}
.alignleft{width: 100%;height: auto;margin-bottom: 20px;}

.choose ul li{width: 85%;margin-bottom: 25px;padding: 20px;}

.features ul li{margin: 0 0 50px;width: 100%;text-align: center;}
.fea-left{float: none;margin: 0 auto 20px;}
.fea-right{float: none;width: 100%;}

.alignright{width: 100%;height: auto;margin-bottom: 20px;}

.market{padding: 25px 20px 20px;}
.market-left{width: 100%;margin-bottom: 20px;}
.market-left h1{font-size: 1.5em;}
.market-left ul li{font-size: 1em;}
.market-right{width: 100%;}

.market-bottom ul li{margin-bottom: 20px;}

.bitcoin h1{float: none;}
.bsearch{float: none;}
.ethereum h1{float: none;}
.usdt h1{float: none;}

.log-date{font-size: 1em;}

.contact ul li{background: rgba(0, 0, 0, 0) url("../images/mail-icon.png") no-repeat scroll 10px 21px;padding: 23px 60px 23px 65px;width: 150px;margin-bottom: 20px;}
.contact ul li:last-child{background: rgba(0, 0, 0, 0) url("../images/mail-icon.png") no-repeat scroll 10px 21px;padding: 23px 60px 23px 65px;width: 150px;}
.contactf p{padding: 0;}

.contact-left{width: 100%;}
.contact-left input{width: 88%;}
.contact-right{width: 100%;}
.contact-right textarea{width: 88%;}

.signup-left{display: none;}
.login-right{margin: 20px 0;float: none;padding: 20px 0;width: 100%;}
.login-right ul li{width: 100%;}
.login-right input{width: 87%;}
.signup-right{margin: 20px 0;float: none;padding: 20px 0;width: 100%;}
.signup-right h1{font-size: 0.9em;}
.signup-right ul li{width: 100%;}
.signup-right input{width: 87%;}
.signup-right select{width: 100%;margin: 0 0 20px 0;}

}
@media only screen and (min-width : 360px) and (max-width : 640px) {
.wrapper{width:85%;}

.header{position: relative;}
.logo{float: none;width: 270px;}
.logo img{width: 100%;}

.main-nav{display: none;float: none;}
.nav-toggle{display: block!important;}

.caption{top: 25%;}
.caption h1{font-size: 1.5em;}
.caption h2{font-size: 1em;}
.learnmore a{padding: 7px 15px;}
.contactmore a{padding: 7px 15px;}

.bottom-slider ul li{width: 50%;}
.bottom-slider ul li p{font-size: 1.2em;}

.welcome h2{font-size: 1.5em;}
.welcome p{padding: 0;}

.middle-wrapper{background: none;padding: 70px 0 0;}
.middle{width: 100%;}
.tab-links a{font-size: 11px;padding: 18px 0;width: 89px;}
.tab-links li.active{background: rgba(0, 0, 0, 0) url("../images/arrow.png") no-repeat scroll center 49px;}
.tab-links li:hover {background: rgba(0, 0, 0, 0) url("../images/arrow.png") no-repeat scroll center 49px;}

.support ul li{width: 270px;}

.foot-logo img{width: 100%;}
.foot1{width: 100%;margin: 0 0 30px 0;}
.foot2{width: 100%;margin: 0 0 30px 0;}
.foot3{width: 100%;}

.inner-banner h1{font-size: 1.5em;top: 40%;}
.alignleft{width: 100%;height: auto;margin-bottom: 20px;}

.choose ul li{width: 85%;margin-bottom: 25px;padding: 20px;}

.features ul li{margin: 0 0 50px;width: 100%;text-align: center;}
.fea-left{float: none;margin: 0 auto 20px;}
.fea-right{float: none;width: 100%;}

.alignright{width: 100%;height: auto;margin-bottom: 20px;}

.market{padding: 25px 20px 20px;}
.market-left{width: 100%;margin-bottom: 20px;}
.market-left h1{font-size: 1.5em;}
.market-left ul li{font-size: 1em;}
.market-right{width: 100%;}

.market-bottom ul li{margin-bottom: 20px;}

.bitcoin h1{float: none;}
.bsearch{float: none;}
.ethereum h1{float: none;}
.usdt h1{float: none;}

.log-date{font-size: 1em;}

.contact ul li{background: rgba(0, 0, 0, 0) url("../images/mail-icon.png") no-repeat scroll 10px 21px;padding: 23px 60px 23px 65px;width: 150px;margin-bottom: 20px;}
.contact ul li:last-child{background: rgba(0, 0, 0, 0) url("../images/mail-icon.png") no-repeat scroll 10px 21px;padding: 23px 60px 23px 65px;width: 150px;}
.contactf p{padding: 0;}

.contact-left{width: 100%;}
.contact-left input{width: 88%;}
.contact-right{width: 100%;}
.contact-right textarea{width: 88%;}

.signup-left{display: none;}
.login-right{margin: 20px 0;float: none;padding: 20px 0;width: 100%;}
.login-right ul li{width: 100%;}
.login-right input{width: 87%;}
.signup-right{margin: 20px 0;float: none;padding: 20px 0;width: 100%;}
.signup-right h1{font-size: 0.9em;}
.signup-right ul li{width: 100%;}
.signup-right input{width: 87%;}
.signup-right select{width: 100%;margin: 0 0 20px 0;}
}
@media only screen and (min-width : 768px) and (max-width : 1024px) {
.wrapper{width:95%;}

.logo{width: 210px;}
.logo img{width: 100%;}

.main-nav {margin: 23px 0 0;}
.main-nav ul li{margin-right: 10px;font-size: 12px;margin-right: 6px;}

.welcome p{padding: 0;}

.middle-wrapper{background: none;padding: 70px 0 0;}
.middle{width: 100%;}

.bottom-signup h1{font-size: 22px;}

.foot-logo img{width: 100%;}
.foot2 {margin: 0 15px 0 35px;width: 33%;}
.foot3 input{width: 150px;}

.inner-banner h1{font-size: 1.5em;top: 60%;}
.choose ul li{padding: 20px;width: 25%;}

.market-left ul li{font-size: 1.5em;}
.market-bottom ul li{margin-bottom: 20px;}

.bitcoin td{padding: 10px 12px;}
.ethereum td{padding: 10px 12px;}
.usdt td{padding: 10px 12px;}

.contact ul li{background: rgba(0, 0, 0, 0) url("../images/mail-icon.png") no-repeat scroll 8px 21px;padding: 23px 10px 23px 60px;width: 165px;margin-right: 5px;}
.contact ul li:last-child{background: rgba(0, 0, 0, 0) url("../images/mail-icon.png") no-repeat scroll 8px 21px;padding: 23px 10px 23px 60px;width: 165px;}
.contactf p{padding: 0;}

.contact-left{width: 100%;}
.contact-left input{width: 95.5%;}
.contact-right{width: 100%;}
.contact-right textarea{width: 95.5%;}

.signup-left{display: none;}
.login-right{float: none;padding-top: 140px;margin: 0;}
.signup-right{width: 62%;float: none;padding-top: 140px;margin: 0;}

}
@media only screen and (min-width : 414px) and (max-width : 767px) {
.wrapper{width:85%;}

.header{position: relative;}
.logo{float: none;width: 270px;}
.logo img{width: 100%;}

.main-nav{display: none;float: none;}
.nav-toggle{display: block!important;}

.caption{top: 25%;}
.caption h1{font-size: 1.5em;}
.caption h2{font-size: 1em;}
.learnmore a{padding: 7px 15px;}
.contactmore a{padding: 7px 15px;}

.bottom-slider ul li{width: 50%;}
.bottom-slider ul li p{font-size: 1.2em;}

.welcome h2{font-size: 1.5em;}
.welcome p{padding: 0;}

.middle-wrapper{background: none;padding: 70px 0 0;}
.middle{width: 100%;}
.tab-links a{font-size: 11px;padding: 18px 0;width: 89px;}
.tab-links li.active{background: rgba(0, 0, 0, 0) url("../images/arrow.png") no-repeat scroll center 49px;}
.tab-links li:hover {background: rgba(0, 0, 0, 0) url("../images/arrow.png") no-repeat scroll center 49px;}

.support ul li{width: 270px;}

.foot-logo img{width: 100%;}
.foot1{width: 100%;margin: 0 0 30px 0;}
.foot2{width: 100%;margin: 0 0 30px 0;}
.foot3{width: 100%;}

.inner-banner h1{font-size: 1.5em;top: 40%;}
.alignleft{width: 100%;height: auto;margin-bottom: 20px;}

.choose ul li{width: 85%;margin-bottom: 25px;padding: 20px;}

.features ul li{margin: 0 0 50px;width: 100%;text-align: center;}
.fea-left{float: none;margin: 0 auto 20px;}
.fea-right{float: none;width: 100%;}

.alignright{width: 100%;height: auto;margin-bottom: 20px;}

.market{padding: 25px 20px 20px;}
.market-left{width: 100%;margin-bottom: 20px;}
.market-left h1{font-size: 1.5em;}
.market-left ul li{font-size: 1em;}
.market-right{width: 100%;}

.market-bottom ul li{margin-bottom: 20px;}

.bitcoin h1{float: none;}
.bsearch{float: none;}
.ethereum h1{float: none;}
.usdt h1{float: none;}

.log-date{font-size: 1em;}

.contact ul li{background: rgba(0, 0, 0, 0) url("../images/mail-icon.png") no-repeat scroll 10px 21px;padding: 23px 60px 23px 65px;width: 150px;margin-bottom: 20px;}
.contact ul li:last-child{background: rgba(0, 0, 0, 0) url("../images/mail-icon.png") no-repeat scroll 10px 21px;padding: 23px 60px 23px 65px;width: 150px;}
.contactf p{padding: 0;}

.contact-left{width: 100%;}
.contact-left input{width: 88%;}
.contact-right{width: 100%;}
.contact-right textarea{width: 88%;}

.signup-left{display: none;}
.login-right{margin: 20px 0;float: none;padding: 20px 0;width: 100%;}
.login-right ul li{width: 100%;}
.login-right input{width: 87%;}
.signup-right{margin: 20px 0;float: none;padding: 20px 0;width: 100%;}
.signup-right h1{font-size: 0.9em;}
.signup-right ul li{width: 100%;}
.signup-right input{width: 87%;}
.signup-right select{width: 100%;margin: 0 0 20px 0;}
}
@media only screen and (min-width : 1024px) and (max-width : 1280px) {
.wrapper{width:95%;}

.logo{width: 280px;}
.logo img{width: 100%;}
}
@media only screen and (min-width : 1281px) and (max-width : 1432px) {


}
`;
