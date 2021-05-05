import Card from "./Card";

export default {
  title: "Content Components/Card",
  component: Card,
};

const dummyData = {
  name: "Lorem",
  text:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, iusto? Ipsam tempora corrupti doloribus ratione perspiciatis suscipit quaerat non? Officia.",
};

const Template = (args) => <Card {...args} />;

export const Regular = Template.bind({});
Regular.args = {
  name: dummyData.name,
  text: dummyData.text,
  displayIcon: false,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  name: dummyData.name,
  text: dummyData.text,
  displayIcon: true,
};

export const NoText = Template.bind({});
NoText.args = {
  name: dummyData.name,
  displayIcon: true,
};
