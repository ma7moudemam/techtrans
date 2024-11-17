<template>
  <div class="container">
    <div
      class="mailContainer d-flex flex-column flex-md-row justify-content-between align-items-center"
    >
      <div class="d-flex flex-column gap-2 text-white">
        <div class="fs-24 f-w-medium">النشرة البريدية</div>
        <div class="fs-14 f-w-regular">
          اشترك في نشرتنا البريدية ليصلك كل جديد لدينا و تبقي علي اطلاع معنا
        </div>
      </div>
      <div class="d-flex align-items-start gap-3">
        <div class="d-flex flex-column gap-6 position-relative">
          <input
            type="text"
            class="form-control"
            placeholder="اكتب البريد الالكتروني"
          />
          <img
            src="@/assets/images/icons/inputMail.svg"
            alt=""
            class="mailIcon"
          />
          <div class="fs-14 f-w-regular text-97939F">نشرات بريدية أسبوعية.</div>
        </div>
        <button class="btn dark-button">ابقى على اطلاع</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MailNews",
  props: {
    msg: String,
  },
};
</script>

<style lang="scss" scoped>
.mailContainer {
  background-color: #480689;
  padding: 50px 60px;
  margin-top: 79px;
  margin-bottom: 79px;
  border-radius: 20px;
}

.form-control {
  padding-inline-start: 40px;
}

.mailIcon {
  position: absolute;
  top: 25%;
  transform: translateY(-25%);
  right: 12px;
  width: 16px;
}
</style>
