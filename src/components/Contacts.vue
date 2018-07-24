<template>
    <section class="contacts" data-nav="11">
        <div class="container">
            <div class="row">
                <h2 class="contacts__title">{{ $t('contacts.title') }}</h2>
                <contact-map></contact-map>
                <div class="address-container">
                    <address>
                        <div class="text-row">
                            <i class="email-icon"></i>
                            <p>ir@imigize.com</p>
                        </div>
                    </address>
                    <form class="form-container" method="post" id="send-form"
                          v-on:submit.prevent="onSubmitForm"
                          :data-lang="$i18n.locale">
                        <h4>{{ $t('contacts.form.title') }}</h4>
                        <div class="input-row">
                            <input type="text" title="Name" name="name" :placeholder="$t('contacts.form.name')" required autocomplete="name">
                        </div>
                        <div class="input-row">
                            <input type="email" title="Email" name="email" placeholder="E-mail" required autocomplete="email">
                        </div>
                        <div class="textarea-row">
                            <textarea title="Message" name="message" :placeholder="$t('contacts.form.message')" required autocomplete="off"></textarea>
                        </div>
                        <div class="btn-container">
                            <button class="btn grey-btn">{{ $t('contacts.form.send') }}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
  import ContactMap from './ContactMap.vue'
  import {HTTP} from '@/api/http-common.js'

  export default {
    name: 'Contacts',
    methods: {
      onSubmitForm(e) {
        let params = this.getParams({
          'name': document.getElementsByName('name')[0].name,
          'email': document.getElementsByName('email')[0].name,
          'message': document.getElementsByName('message')[0].name
        })

        HTTP('sendForm', params)
          .then(() => {
            alert(this.$i18n.t('contacts.form.alert'))
          })
          .catch(() => {
          })
      },
      getParams(data) {
        let params = new URLSearchParams()

        for (let prop in data) {
          if (data.hasOwnProperty(prop)) {
            params.append(prop, data[prop])
          }
        }
        return params
      }
    },
    components: {
      ContactMap
    }
  }
</script>

<style scoped lang="scss">
    @import "../scss/mixins";

    $ns: ".contacts";

    #{$ns} {
        background-color: #fff;
        padding: 3em 4% 4em 4%;

        .address-container {
            display: flex;
            justify-content: space-between;
            flex-direction: column;

            address {
                width: 40%;

                .text-row {
                    display: flex;
                    align-items: center;
                    margin-bottom: 40px;

                    i {
                        margin-right: 20px;
                    }

                    p {
                        color: #183647;
                        font-weight: 100;
                        font-size: 17px;
                        line-height: 1.4;
                    }
                }
            }

            .form-container {
                width: 60%;

                h4 {
                    color: #183647;
                    font-weight: 100;
                    font-size: 17px;
                    margin-bottom: 20px;
                }

                .input-row {
                    margin-bottom: 15px;

                    input {
                        height: 30px;
                        width: 280px;
                        border: 1px solid #ccc;
                        padding: 0 10px;
                        font-family: "SegoeUI", sans-serif;
                        font-size: 15px;
                        color: #333;
                        border-radius: 2px;

                        &:focus {
                            border-color: #0f3d4f;
                        }
                    }
                }

                .textarea-row {
                    margin-bottom: 15px;

                    textarea {
                        resize: none;
                        width: 100%;
                        height: 100px;
                        border: 1px solid #ccc;
                        border-radius: 2px;
                        padding: 10px;
                        font-family: "SegoeUI", sans-serif;
                        font-size: 15px;
                        color: #333;

                        &:focus {
                            border-color: #0f3d4f;
                        }
                    }
                }

                .btn-container {
                    text-align: right;
                }
            }
        }
    }

    #{$ns}__title {
        margin-bottom: 1.3em;

        @include titleSection;
    }
</style>