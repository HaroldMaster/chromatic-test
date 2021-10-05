import { moduleMetadata, Story } from "@storybook/angular";
import { ComponentOneComponent } from "./component-one.component";

export default {
    title: 'Component 1',
    component: ComponentOneComponent,
    decorators: [
      moduleMetadata({
        imports: [],
        providers: []
      })
    ]
  };
  
  const Template: Story<ComponentOneComponent> = args => ({
    props: args
  });
  
  export const text = Template.bind({});
  