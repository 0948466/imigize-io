<template>
    <section class="referral">
        <div class="referral__top">
            <div class="referral__top_inner">
                <h1 class="referral__top__title">Did you know you can earn Imigize tokens without investing a cent just
                    by
                    acting as an agent?</h1>
                <p class="referral__top__text">Receive 5% commission on the total amount you can raise by referring
                    friends and
                    other investors!</p>
            </div>
        </div>

        <div class="referral__content">
            <div class="referral__line"></div>
            <p class="referral__text">1. Register on our website as an investor with your e-mail and ETH wallet
                address.</p>
            <p class="referral__text">2. Go to
                <a class="referral__link" href="http://www.convertstring.com/EncodeDecode/HexEncode" target="_blank" rel="noopener">http://www.convertstring.com/EncodeDecode/HexEncode</a>
                enter your e-mail and click on “hex encode” button.</p>
            <p class="referral__text">For example, I wrote email@mydomain.co.za</p>
            <p class="referral__text">
                By pressing the button received the string 656D61696C406D79646F6D61696E2E636F2E7A61. This will be your
                identifier as a partner of Imigize.<br>
                You will receive your tokens after the successful ICO. You must however raise a minimum of 10 ETH to
                qualify for
                this referral commission. It only works for ETH payments and not for BTC payments.
            </p>
            <p class="referral__text">
                3. Your investors simply insert your hex encoded Partner ID of
                “656D61696C406D79646F6D61696E2E636F2E7A61” (as in
                example above) in the “DATA” field when doing transfer/payments as seen in two graphs below.
            </p>
            <p class="referral__text">Click on the “+add data” line as seen below in the 4th field.</p>

            <div class="referral__line"></div>

            <img class="referral__img" src="../assets/img/referral/img-form1.png" alt="Form">
            <img class="referral__img" src="../assets/img/referral/img-form2.png" alt="Form more">
        </div>
    </section>
</template>

<script>
  export default {
    name: 'Referral'
  }
</script>

<style scoped lang="scss">
    @import "../scss/mixins.scss";

    $ns: ".referral";

    #{$ns}__top {
        padding: 3em 4%;
        margin-bottom: 2em;
        background: linear-gradient(0deg, #295061, #5fa6b5);

        &_inner {
            margin: 0 auto;
            max-width: 750px;
            width: 100%;
        }
    }

    #{$ns}__top__title {
        margin-bottom: 1em;

        @include responsiveFont(24px, 18px);

        font-weight: 700;
        line-height: 1;
        color: #fff;
        text-align: center;
    }

    #{$ns}__top__text {
        @include responsiveFont(16px, 13px);

        font-weight: 600;
        line-height: 1.3;
        color: #fff;
        text-align: center;
    }

    #{$ns}__line {
        margin: 3em auto;
        width: 25%;
        height: 3px;
        background-color: #a07d5c;
    }

    #{$ns}__content {
        margin: 0 auto;
        padding: 0 4%;
        max-width: 1140px;
        width: 100%;
        box-sizing: border-box;
        overflow: hidden;
    }

    #{$ns}__text {
        margin-bottom: 2em;

        @include responsiveFont(16px, 13px);

        line-height: 1.5;
        color: rgb(35, 35, 35);

        &:last-child,
        &:first-child {
            margin-bottom: 3em;
        }
    }

    #{$ns}__link {
        color: #149dcc;
        text-decoration: none;
    }

    #{$ns}__img {
        margin-top: 6em;
        max-width: 100%;
    }

</style>
