import type { Meta, StoryObj } from '@storybook/react';
import { AudiCard } from '../components/AudiCard/AudiCard'
import {AudiCardFooter} from '../components/AudiCard/AudiCardFooter'
const meta = {
    title: 'Audi/Card',
    component: AudiCard,
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
    
    
} satisfies Meta<typeof AudiCard>;

export default meta;
type Story = StoryObj<typeof meta>

export const Card: Story = {
    args:{
        headline:'Headline',
        text:'And, now Your Highness, we will discuss the location of your hidden Rebel base.'
    }
}

export const Interactions: Story = {
    args:{
        headline:'Headline',
        text:'I\'m a card with interactions',
        footer: AudiCardFooter
    }
}

export const Background: Story = {
    args:{
        headline:'Headline',
        text:'You can change the background color and the font color using the properties',
        footer: AudiCardFooter,
        background:'#fff000',
        fontColor:'#00f'
    }
}