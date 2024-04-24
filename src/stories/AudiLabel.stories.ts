import type { Meta, StoryObj } from '@storybook/react';
import {AudiLabel} from '../components/AudiLabel/AudiLabel'

const meta = {
    title: 'Audi/Input_Fields',
    component: AudiLabel,
    parameters: {
      // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
      layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    
    
} satisfies Meta<typeof AudiLabel>;

export default meta;
type Story = StoryObj<typeof meta>

export const Label: Story = {
    args:{
       label:'Label',
       placeholder:'If the customer doesn’t understand the label itself or is just unsure of its meaning, an additional description can help squash any uncertainty.',
       optional:false
    }
}

export const Search: Story = {
    args:{
       label:'Label',
       placeholder:'If the customer doesn’t understand the label itself or is just unsure of its meaning, an additional description can help squash any uncertainty.',
       optional:false,
       search:true
    }
}


