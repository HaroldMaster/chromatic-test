import { moduleMetadata, Story } from "@storybook/angular";
import { ComponentTwoComponent } from "./component-two.component";

export default {
    title: 'Component 2',
    component: ComponentTwoComponent,
    decorators: [
      moduleMetadata({
        imports: [],
        providers: []
      })
    ]
  };
  
  const Template: Story<ComponentTwoComponent> = args => ({
    props: args
  });
  
  export const  button = Template.bind({});
  