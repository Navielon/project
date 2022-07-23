<template>
  <div>
    <div
      class="panel-bg"
      style="
        text-align: justify;
        font-family: 'NeoSans';
        background: linear-gradient(
          145deg,
          rgb(255, 188, 65),
          rgba(250, 188, 105, 0.8) 55%
        );
        border-bottom: none;
        border-top: none;
      "
    >
      Дорогие игроки LoliLand'а! Наш проект нуждается в Вашей поддержке. Нам
      необходимо оплачивать расходы на разработку игрового контента, сайта,
      администрирование серверов, а также рекламу. Если Вы готовы помочь нам в
      развитии проекта, пожалуйста, сделайте добровольное пожертвование. В
      зависимости от размера пожертвования спонсоры проекта получают игровые
      предметы и привилегии. Спасибо за Вашу поддержку!<br />
      <b
        >Давайте вместе сделаем LoliLand лучшим игровым проектом по
        Minecraft!</b
      >
    </div>

    <div class="panel-bg" style="padding: 0px">
      <img
        src="/assets/img/pages/cabinet/pay_bonus.png"
        class="noselect"
        style="width: 650px; margin-bottom: -3px"
        draggable="false"
      />
    </div>

    <div class="panel-bg" style="font-family: 'Ubuntu'">
      <center>
        <h2 style="margin-top: 7px">Введите сумму пожертвования проекту:</h2>
        <input class="text_input" type="number" v-model="amount" />

        <div v-if="amount >= 500">
          <h3 style="margin-top: 7px">
            Вы получите {{ getMoney }} руб на баланс | Бонус {{ getPercent }}%
          </h3>
        </div>

        <h2>Выберите платёжную систему:</h2>
        <div id="pay_holder">
          <div v-for="(payment, index) in payments" :key="payment.id">
            <div class="pay_text" :id="'method_' + index">
              {{ payment.display_text }}
            </div>
            <div
              class="tooltip"
              v-for="(payMethod, index) in payment.methods"
              :key="payment.id"
            >
              <div
                v-on:click="pay(index, payMethod)"
                :class="{ pay_img: true, pay_selected: selected(index) }"
              >
                <img
                  draggable="false"
                  :src="'/assets/img/pay/' + index + '.svg'"
                />
              </div>
              <span
                class="tooltiptext noselect"
                style="
                  width: 131px;
                  margin-left: -60px;
                  top: -25px;
                  height: 25px;
                "
              >
                {{ payMethod.ru }}
              </span>
            </div>
            <div class="post_pay" />
          </div>
        </div>
        <div id="phone_input" v-if="phoneVisible">
          <h2>Введите Ваш номер для платежа:</h2>
          <input
            class="text_input"
            type="text"
            placeholder="Начиная с +7 или +380"
            v-model="phone"
          />
        </div>
        <br />
        <div v-if="currentPayMethod == 'paypal'" class="paypal">
          <center>
            <b>Пополнение с помощью PayPal обрабатывается вручную.</b>
          </center>
          <br />
          1.
          <a
            href="https://www.paypal.com/myaccount/transfer/homepage"
            target="_blank"
            >Проведите платеж</a
          >
          на кошелек <b>sergei.saal15@gmail.com</b><br />
          2. В комментарии укажите <b>игровой ник</b><br />
          3. После перевода отправьте чек в Telegram <b>@mryarik666</b><br />
        </div>
        <div v-else>
          <button
            id="pay_btn"
            type="submit"
            ref="pay"
            v-if="currentPayMethod == null"
          >
            Выберите платёжную систему
          </button>
          <button
            id="pay_btn_ok"
            type="submit"
            ref="pay"
            v-on:click="handlePay"
            v-else
          >
            Пожертвовать
          </button>
        </div>
      </center>
    </div>
  </div>
</template>

<script>
import { EventBus } from "@/main.js";
export default {
  name: "CabinetPay",
  data() {
    return {
      currentPayMethod: null,
      phoneVisible: false,
      amount: 100,
      phone: "",
      payments: null,
    };
  },
  computed: {
    auth() {
      return this.$store.state.auth;
    },
    getPercent() {
      if (this.amount >= 10000) return 50;
      if (this.amount >= 5000) return 30;
      if (this.amount >= 2500) return 20;
      if (this.amount >= 1000) return 10;
      if (this.amount >= 500) return 5;
      return 0;
    },
    getMoney() {
      var mon = parseInt(this.amount);
      return Math.round(mon + (mon * this.getPercent) / 100);
    },
  },
  methods: {
    pay(method, payment) {
      console.log(method);
      if (this.currentPayMethod == null) {
        var element = document.querySelector("#method_crypt");
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      this.currentPayMethod = method;
      if (payment != null && payment.phone != null && payment.phone) {
        this.phoneVisible = true;
      } else {
        this.phoneVisible = false;
      }
    },
    selected(method) {
      return this.currentPayMethod == method;
    },
    handlePay() {
      this.$root.$emit(
        "send_websocket",
        `{"packet":"cabinet.pay","data":{"amount":"${this.amount}", "type":"${this.currentPayMethod}", "phone":"${this.phone}", "location": "${window.location.host}"}}`
      );
    },
    listener(packet, data) {
      if (packet === "cabinet.loadPay") {
        if (data.type === "success") {
          this.payments = data.payments;
          console.log(this.payments);
        } else {
          switch (data.error) {
            case 0:
              this.$root.$emit("notice_error", "Текущая сессия истекла", "");
              break;
            default:
              this.$root.$emit(
                "notice_error",
                "Обновите страницу",
                "Error #" + data.error
              );
              break;
          }
        }
      }

      if (packet === "cabinet.pay") {
        if (data.type === "success") {
          this.$root.$emit(
            "notice_success",
            "Перенаправляю на платёжную систему...",
            ""
          );
          location.href = data.redirectUrl;
        } else {
          switch (data.error) {
            case 0:
              this.$root.$emit("notice_error", "Текущая сессия истекла", "");
              break;
            case 1:
              this.$root.$emit(
                "notice_error",
                "Ответ от платежной системы пустой",
                ""
              );
              break;
            case 2:
              this.$root.$emit(
                "notice_error",
                "Редирект от платежной системы не пришел",
                ""
              );
              break;
            case "unitpay":
              if (
                data.msg == "Некорректный либо пустой ответ сервера магазина"
              ) {
                this.$root.$emit(
                  "notice_success",
                  "Создаем платёжную ссылку...",
                  ""
                );
                this.handlePay();
                return;
              }
              this.$root.$emit("notice_error", data.msg, "");
              break;
            default:
              this.$root.$emit(
                "notice_error",
                "Обновите страницу",
                "Error #" + data.error
              );
              break;
          }
        }
      }
    },
  },
  mounted() {
    this.$root.$emit(
      "send_websocket",
      `{"packet":"cabinet.loadPay","data":{"location": "${window.location.host}"}}`
    );
  },
  created() {
    EventBus.$on("onProcessPacket", this.listener);
  },
  beforeDestroy() {
    EventBus.$off("onProcessPacket", this.listener);
  },
};
</script>

<style scoped>
.panel-bg {
  background: #ffe0ab;
  border-radius: 2px;
  padding: 10px;
  width: 650px;
  margin-left: 10px;
  margin-top: 10px;
  border-bottom: 2px solid #f6cb7c;
  border-top: 2px solid #f6cb7c;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.16);
}

input {
  height: 48px;
  color: #555758;
  font-size: 20px;
  background: #fdefd8;
  border: none;
  padding: 15px;
  padding-top: 17px;
  width: 256px;
  border-radius: 50px;
  font-weight: 600;
  box-shadow: 0 15px 45px rgba(0, 0, 0, 0.05);
  outline: none;
}

h2 {
  margin-bottom: 8px;
}

.pay_img {
  border: 3px solid #9c9285;
  background-color: #0000001f;
  width: 115px;
  height: 80px;
  margin-left: 10px;
  margin-top: 7px;
  cursor: pointer;
  position: relative;
}

.pay_img img {
  max-height: 100%;
  max-width: 100%;
  width: auto;
  height: auto;
  position: absolute;
  top: 8px;
  bottom: 8px;
  left: 0px;
  right: 0px;
  margin: auto;
  padding: 4px;
}

.pay_text {
  font-size: 19px;
}

.post_pay {
  height: 10px;
}

.pay_selected {
  border: 3px solid #c50845;
  background-color: #ff65651f;
}

#pay_holder {
  margin-left: -11px;
}

#pay_btn {
  border: none;
  transition: all 0.5s ease;
  width: 400px;
  height: 50px;
  background: #fba029;
  box-shadow: 0 9px 27px rgba(231, 144, 21, 0.43);
  border-bottom: 3px solid #f18d0a;
  cursor: pointer;
  font-size: 25px;
  color: rgb(253, 253, 152);
  display: inline-block;
  vertical-align: top;
  border-radius: 50px;

  background: #d45858;
  color: #ffdcdc;
  border-bottom: 3px solid #821212;
  box-shadow: 0 9px 27px rgba(27, 27, 27, 0.43);
}

#pay_btn_ok {
  border: none;
  transition: all 0.5s ease;
  width: 400px;
  height: 50px;
  background: #fba029;
  box-shadow: 0 9px 27px rgba(231, 144, 21, 0.43);
  border-bottom: 3px solid #f18d0a;
  cursor: pointer;
  font-size: 25px;
  color: rgb(253, 253, 152);
  display: inline-block;
  vertical-align: top;
  border-radius: 50px;
}

#pay_btn_ok:hover {
  background: #b86c08;
  border-bottom: 3px solid #7e4a07;
  color: rgb(255, 255, 226);
}

.paypal {
  text-align: left;
  width: 480px;
  background-color: #ffd691;
  border: 2px solid #efb450;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 20px;
}
</style>
