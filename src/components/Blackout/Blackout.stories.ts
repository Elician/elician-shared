import type { Meta, StoryObj } from '@storybook/react'
import { Blackout } from './index'

const meta = {
  title: 'Main/Blackout',
  component: Blackout
} satisfies Meta<typeof Blackout>

export default meta
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {}
}
