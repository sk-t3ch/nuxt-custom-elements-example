<template>
  <div class="container">
    <fieldset>
      <legend>Nuxt Component</legend>
      <div>
        <client-only>
          <Example />
        </client-only>
      </div>
    </fieldset>
  </div>
</template>

<script>

import Example from '@/components/Example';
export default {
  components: { Example }
};

</script>
