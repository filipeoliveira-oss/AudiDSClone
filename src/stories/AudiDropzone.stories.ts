import type { Meta, StoryObj } from '@storybook/react';
import {AudiDropZone} from '../components/DrangAndDrop/AudiDropZone/AudiDropZone'


const meta = {
    title: 'Audi/Drag\'N\'Drop',
    component: AudiDropZone,
    parameters: {
      // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
      layout: 'centered',
      backgrounds: {
        default: 'gray',
        values: [
          { name: 'gray', value: '#c2c2c2' },
        ],
      },
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    
    
} satisfies Meta<typeof AudiDropZone>;

export default meta;
type Story = StoryObj<typeof meta>

export const Dropzone:Story = {
    
}