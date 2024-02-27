import type { Meta, StoryObj } from "@storybook/react";

import { Label } from "./index";

const meta: Meta<typeof Label> = {
  component: Label,
};

export default meta;
type Story = StoryObj<typeof Label>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => (
    <div>
      <Label htmlFor="test">New test</Label>
      <input id="test" />,
    </div>
  ),
};
