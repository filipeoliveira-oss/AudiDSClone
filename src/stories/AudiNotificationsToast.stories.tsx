import type { Meta, StoryObj } from '@storybook/react';
import Toast from '../components/Notifications/Toast/Toas';


const meta = {
    title: 'Audi/Notifications',
    component: Toast,
    parameters: {
      // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
      layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    
    
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>

export const Toast_Alert:Story = {
   args:{
    buttonType:'primary',
    buttonText:'Show Toast',
    toastText:'The Death Star plans are not in the main computer. Where are those transmissions you intercepted? What have you done with those plans? We intercepted no transmissions.',
    toastTheme:'light',
    duration:10000
}
}