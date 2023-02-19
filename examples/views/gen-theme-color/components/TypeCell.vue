<template>
  <div style="padding: 10px; background: #f8f8f9">
    <Card title="Options" icon="ios-options" :padding="0" shadow style="width: 300px">
      <CellGroup>
        <Cell title="Only show titles" />
        <Cell title="Display label content" label="label content" />
        <Cell title="Display right content" extra="details" />
        <Cell title="Link" extra="details" to="/components/button" />
        <Cell title="Open link in new window" to="/components/button" target="_blank" />
        <Cell title="Disabled" disabled />
        <Cell title="Selected" selected />
        <Cell title="With Badge" to="/components/badge">
          <Badge :count="10" slot="extra" />
        </Cell>
        <Cell title="With Switch">
          <Switch v-model="switchValue" slot="extra" />
        </Cell>
      </CellGroup>
    </Card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      switchValue: true,
    };
  },
};
</script>
