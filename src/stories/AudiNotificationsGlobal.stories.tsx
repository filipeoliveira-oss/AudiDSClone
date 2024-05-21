import type { Meta, StoryObj } from '@storybook/react';
import GlobalAlert from '../components/Notifications/GlobalAlert';


const meta = {
    title: 'Audi/Notifications',
    component: GlobalAlert,
    parameters: {
      // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
      layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    
    
} satisfies Meta<typeof GlobalAlert>;

export default meta;
type Story = StoryObj<typeof meta>

export const Global_Alert:Story = {
    args:{
        buttonText:'Global Alert',
        cancelButtonText:'Cancel',
        confirmButtonText:'Confirm and close',
        text: <h3><strong>The Death Star</strong> plans are not in the main computer. Where are those transmissions you intercepted? What have you done with those plans? We intercepted no transmissions.</h3>
    }
}