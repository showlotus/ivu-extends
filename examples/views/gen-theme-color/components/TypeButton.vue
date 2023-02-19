<template>
  <div class="wrap">
    <Button>Default</Button>
    <Button type="primary">Primary</Button>
    <Button type="dashed">Dashed</Button>
    <Button type="text">Text</Button>

    <Button type="primary">Primary</Button>
    <Button type="primary" disabled>Primary(Disabled)</Button>
    <Button type="primary" loading>Loading...</Button>

    <ButtonGroup>
      <Button>Cancel</Button>
      <Button type="primary">Confirm</Button>
    </ButtonGroup>

    <ButtonGroup>
      <Button type="primary">L</Button>
      <Button>M</Button>
      <Button>M</Button>
      <Button type="dashed">R</Button>
    </ButtonGroup>

    <ButtonGroup>
      <Button icon="ios-color-wand-outline"></Button>
      <Button icon="ios-sunny-outline"></Button>
      <Button icon="ios-crop"></Button>
      <Button icon="ios-color-filter-outline"></Button>
    </ButtonGroup>

    <ButtonGroup size="large">
      <Button>Large</Button>
      <Button>Large</Button>
    </ButtonGroup>
    <ButtonGroup>
      <Button>Default</Button>
      <Button>Default</Button>
    </ButtonGroup>
    <ButtonGroup size="small">
      <Button>Small</Button>
      <Button>Small</Button>
    </ButtonGroup>

    <ButtonGroup vertical>
      <Button icon="logo-facebook"></Button>
      <Button icon="logo-twitter"></Button>
      <Button icon="logo-googleplus"></Button>
      <Button icon="logo-tumblr"></Button>
    </ButtonGroup>

    <div>
      Text
      <Divider type="vertical" />
      <a href="#">Link</a>
      <Divider type="vertical" />
      <a href="#">Link</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TypeButton',
  data() {
    return {};
  },
};
</script>

<style scoped lang="less">
.wrap {
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 5px;
}
</style>
