import type { Meta, StoryObj } from '@storybook/react';
import ContinuosBar from '../components/Loader/ContinuosBar/ContinuosBar';


const meta = {
    title: 'Audi/Loader',
    component: ContinuosBar,
    parameters: {
      // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
      layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    
    
} satisfies Meta<typeof ContinuosBar>;

export default meta;
type Story = StoryObj<typeof meta>

export const Continuos_Progress_Bar:Story = {
    
}