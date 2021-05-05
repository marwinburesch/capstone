import ButtonCTA from "./ButtonCTA";

export default {
  title: "Basic/ButtonCTA",
  component: ButtonCTA,
};

const Template = (args) => <ButtonCTA {...args} />;

export const Save = Template.bind({});
Save.args = {
  text: "save",
};

export const Cancel = Template.bind({});
Cancel.args = {
  text: "cancel action",
};
