import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { AudiButton } from '../components/AudiButton/AudiButton'

const meta = {
    title: 'Audi/Button',
    component: AudiButton,
    parameters: {
      // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
      layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    
} satisfies Meta<typeof AudiButton>;

export default meta;
type Story = StoryObj<typeof meta>

export const Primary: Story ={
    args:{
        buttonType: 'primary'
    }
}

export const Secondary: Story ={
    args:{
        buttonType: 'secondary'
    }
}

export const Text: Story ={
    args:{
        buttonType: 'text'
    }
}

export const Stretch: Story ={
    args:{
        buttonType: 'stretched'
    }
}

export const SystemIcon: Story ={
    args:{
        buttonType: 'primary',
        showIcon: true
    }
}