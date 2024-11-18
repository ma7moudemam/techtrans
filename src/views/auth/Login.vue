<template>
  <div class="container">
    <div
    class="loginPage d-flex flex-column justify-content-center align-items-center "
  >
    <div>
      <img src="@/assets/images/main/logo.svg" alt="" />
    </div>

    <div class="login-form-container col-6">
      <!-- Title -->
      <div class="login-title">{{ $t("login") }}</div>

      <!-- Description -->
      <div class="login-description">سيتم ارسال رمز التحقق للبريد المدخل</div>

      <!-- Account Type Selection -->
      <div class="account-type">
        <div class="account-type-title">اختر نوع الحساب</div>
        <div class="account-options">
          <label>
            <input
              type="radio"
              name="accountType"
              value="فرد"
              v-model="accountType"
            />
            فــــــــــرد
          </label>
          <label>
            <input
              type="radio"
              name="accountType"
              value="قطاع غير ربحي"
              v-model="accountType"
            />
            قطاع غير ربحي
          </label>
          <label>
            <input
              type="radio"
              name="accountType"
              value="قطاع خاص"
              v-model="accountType"
            />
            قطاع خاص
          </label>
          <label>
            <input
              type="radio"
              name="accountType"
              value="راعي"
              v-model="accountType"
            />
            راعي
          </label>
        </div>
      </div>

      <!-- Mobile Number Input -->
      <div class="form-group">
        <label for="mobile-number">رقم الجوال</label>
        <div class="input-group">
          <span class="input-prefix">+966</span>
          <input
            id="mobile-number"
            type="tel"
            v-model="mobileNumber"
            placeholder="ادخل رقم الجوال"
            required
          />
        </div>
      </div>

      <!-- Password Input -->
      <div class="form-group">
        <label for="password">كلمة المرور</label>
        <input
          id="password"
          type="password"
          v-model="password"
          placeholder="ادخل كلمة المرور"
          required
        />
      </div>

      <!-- Submit Button -->
      <div class="form-group">
        <button class="submit-button" @click="handleLogin">تسجيل الدخول</button>
      </div>
    </div>
  </div>
  </div>
 
</template>

<script>
export default {
  name: "LoginPage",
  props: {
    msg: String,
  },
  components: {},
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
  padding: 20px;
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
  font-weight: bold;
  margin-bottom: 10px;
}

.account-options label {
  display: block;
  font-size: 14px;
  margin-bottom: 5px;
  cursor: pointer;
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

.input-group {
  display: flex;
  align-items: center;
}

.input-prefix {
  padding: 5px 10px;
  background-color: #f3f3f3;
  border: 1px solid #ddd;
  border-radius: 4px 0 0 4px;
  color: #555;
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
  border-color: #007bff;
}

.submit-button {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #0056b3;
}
</style>
