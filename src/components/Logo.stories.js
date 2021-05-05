import Logo from "./Logo";

export default {
  title: "Basic/Logo",
  component: Logo,
};

const Template = (args) => <Logo {...args} />;

export const Small = Template.bind({});
Small.args = {
  size: "s",
};

export const Medium = Template.bind({});
Medium.args = {
  size: "m",
};

export const Large = Template.bind({});
Large.args = {
  size: "l",
};

export const XLarge = Template.bind({});
XLarge.args = {
  size: "xl",
};
