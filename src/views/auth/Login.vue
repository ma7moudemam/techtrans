<template>
  <div class="container">
    <div
      class="loginPage d-flex flex-column justify-content-center align-items-center"
    >
      <div>
        <img src="@/assets/images/main/logo.svg" alt="" />
      </div>

      <div class="login-form-container col-12 col-md-6">
        <!-- Title -->
        <div class="login-title">{{ $t("login") }}</div>

        <!-- Description -->
        <div class="login-description">{{ $t("login_description") }}</div>

        <!-- Account Type Selection -->
        <div class="account-type">
          <div class="account-type-title">اختر نوع الحساب</div>
          <div
            class="account-options f-w-regular d-flex align-items-center justify-content-center gap-7"
          >
            <label
              v-for="type in accountTypes"
              :key="type.value"
              :class="[
                'account-option',
                { selected: accountType === type.value },
              ]"
              @click="selectAccountType(type.value)"
            >
              {{ type.label }}
            </label>
          </div>
        </div>

        <!-- Mobile Number Input -->
        <div class="form-group">
          <label for="mobile-number" class="account-type-title">{{
            $t("phoneNumber")
          }}</label>
          <div class="numberInput">
            <input
              id="mobile-number"
              type="tel"
              v-model="mobileNumber"
              placeholder="05XXXXXXX"
              required
              class="form-control"
            />
            <span class="input-prefix">+966</span>
          </div>
        </div>

        <!-- Password Input -->
        <div class="form-group">
          <label for="password" class="account-type-title">{{
            $t("password")
          }}</label>
          <input
            id="password"
            type="password"
            v-model="password"
            :placeholder="$t('password')"
            required
            class="form-control"
          />
        </div>

        <!-- Submit Button -->
        <div class="form-group">
          <button class="submit-button" @click="handleLogin">
            {{ $t("next") }}
          </button>
        </div>
      </div>
      <div class="d-flex align-items-center justify-content-center gap-1  mb-5">
        <div class="text-777E90 fs-18 f-w-regular">
          {{ $t("donotHaveAccount") }}
        </div>
        <div class="text-CC1586 fs-18 f-w-regular cursor-p">
          {{ $t("createNewAccount") }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      accountType: null, // Selected account type
      mobileNumber: "",
      password: "",
      accountTypes: [
        {
          value: "individual",
          label: this.$t("individual"),
        },
        {
          value: "non_profit",
          label: this.$t("non_profit"),
        },
        {
          value: "private_sector",
          label: this.$t("private_sector"),
        },
        { value: "sponsor", label: this.$t("sponsor") },
      ],
    };
  },
  methods: {
    selectAccountType(type) {
      this.accountType = type;
    },
    handleLogin() {
      if (!this.accountType) {
        alert("Please select an account type.");
        return;
      }
      // Handle login logic
      console.log("Logging in with:", {
        accountType: this.accountType,
        mobileNumber: this.mobileNumber,
        password: this.password,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.loginPage {
  margin-top: 53px;
}

.loginPage {
  margin-top: 45px;
  border-radius: 20px;
}

.login-form-container {
  margin: 50px auto;
  margin-bottom: 26px !important;
  padding: 30px;
  border-radius: 20px;
  background-color: #fff;
}

.login-title {
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 15px;
  text-align: center;
  color: #2b3759;
}

.login-description {
  font-size: 18px;
  margin-top: 6px;
  color: #555;
  text-align: center;
}

.account-type {
  margin-bottom: 20px;
}

.account-type-title {
  font-size: 16px;
  font-weight: 300;
  margin-bottom: 10px;
  color: #2b3759;
}

.account-options label {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px !important;
  font-weight: 300;
  cursor: pointer;
  border: 1px solid #c7c0da;
  border-radius: 20px;
  height: 49px;
  width: 150px;
  color: #2b3759;
}

.account-options input {
  display: none;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-size: 14px;
  font-weight: bold;
}

input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
}

input:focus {
  outline: none;
  border-color: #492d7e;
}

.submit-button {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background-color: #492d7e;
  border: none;
  border-radius: 40px;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #492d7e;
}

.gap-7 {
  gap: 7px;
}

.account-options {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  .account-option {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px !important;
    font-weight: 300;
    cursor: pointer;
    border: 1px solid #c7c0da;
    border-radius: 20px;
    height: 49px;
    width: 150px;
    color: #2b3759;
    transition: all 0.3s ease;

    &:hover {
      background-color: #f0f0f0;
    }

    &.selected {
      background-color: #492d7e;
      color: white;
      border-color: #492d7e;
      font-weight: bold;
    }
  }
}

.numberInput {
  position: relative;

  .form-control {
    padding-inline-start: 80px !important;
  }

  .input-prefix {
    position: absolute;
    left: 30px;
    color: #2b3759;
    font-size: 18px;
    font-weight: 400;
    top: 50%;
    transform: translateY(-50%);
    direction: ltr;
  }
}
</style>
