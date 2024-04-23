import type { Meta, StoryObj } from '@storybook/react';
import {AudiDraggableList} from '../components/DrangAndDrop/AudiDraggableList/AudiDraggableList'


const meta = {
    title: 'Audi/Drag\'N\'Drop',
    component: AudiDraggableList,
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
    
    
} satisfies Meta<typeof AudiDraggableList>;

export default meta;
type Story = StoryObj<typeof meta>

export const Draggable_List:Story = {
    args:{
        list:['item 1','Item2','Item3','Item4','Item5']
    }
}