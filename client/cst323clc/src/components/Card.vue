<template>
  <div class="rounded-md">
    <div>
      <h3>{{ name }}</h3>
      <h6 class="mb-2">{{ type }}</h6>
      <p>
        <b>Company:</b> {{ company }} <br />
        <b>Year:</b> {{ year }} <br />
        <b>Price:</b> {{ price }}
      </p>
      <button-component text="Delete" buttonType="delete" />
    </div>
  </div>
</template>

<script>
import ButtonComponent from "./ButtonComponent.vue";
export default {
  name: "Card",
  components: { ButtonComponent },
  props: {
    name: String,
    type: String,
    year: Number,
    company: String,
    price: Number,
  },
};
</script>
