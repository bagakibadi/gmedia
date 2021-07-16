<template>
  <div class="dashboard">
		<NavbarMahasiswa :widthContent="width" />
		<div :class="`content content-dalem ${width > 992 ? '' : 'hide'}`">
      <div class="section">
				<div class="row">
				</div>
			</div>
		</div>
	</div>
</template>

<script>
/* eslint-env jquery */

export default {
	data: function() {
    return {
      width: null,
    };
  },
  mounted() {
    this.width = $(document).width();

    $(document).ready(function() {
      $(".table").DataTable();
    });
  },
}
</script>

<style>

</style>